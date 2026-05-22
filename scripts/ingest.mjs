/**
 * Ingestion Script — Run once to embed knowledge base into Pinecone
 *
 * Usage:
 *   1. Create a Pinecone index (768 dimensions, cosine metric)
 *   2. Set GOOGLE_API_KEY, PINECONE_API_KEY, PINECONE_INDEX_NAME in .env.local
 *   3. Run: node scripts/ingest.mjs
 */

import { readFileSync, readdirSync } from "fs";
import { join, resolve } from "path";
import { GoogleGenAI } from "@google/genai";
import { Pinecone } from "@pinecone-database/pinecone";

// ── Load .env.local manually (no extra dependency) ──────────────────────────
const envPath = resolve(process.cwd(), ".env.local");
try {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let val = trimmed.slice(eqIdx + 1).trim();
    // Strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  }
} catch {
  console.error("⚠️  No .env.local found — make sure env vars are set.");
}

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME || "portfolio-rag";

if (!GOOGLE_API_KEY || !PINECONE_API_KEY) {
  console.error("❌ Missing GOOGLE_API_KEY or PINECONE_API_KEY in .env.local");
  process.exit(1);
}

// ── Chunking helper ─────────────────────────────────────────────────────────
function chunkText(text, maxChars = 500, overlap = 100) {
  const chunks = [];
  let start = 0;
  while (start < text.length) {
    let end = start + maxChars;
    // Try to break at a paragraph or sentence boundary
    if (end < text.length) {
      const slice = text.slice(start, end);
      const lastParagraph = slice.lastIndexOf("\n\n");
      const lastSentence = slice.lastIndexOf(". ");
      if (lastParagraph > maxChars * 0.3) {
        end = start + lastParagraph + 2;
      } else if (lastSentence > maxChars * 0.3) {
        end = start + lastSentence + 2;
      }
    }
    chunks.push(text.slice(start, end).trim());
    start = end - overlap;
  }
  return chunks.filter((c) => c.length > 30); // Skip tiny fragments
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 Starting knowledge base ingestion...\n");

  // 1. Read all .md files from /data
  const dataDir = resolve(process.cwd(), "data");
  const mdFiles = readdirSync(dataDir).filter((f) => f.endsWith(".md"));
  console.log(`📂 Found ${mdFiles.length} markdown files: ${mdFiles.join(", ")}`);

  // 2. Chunk each file
  const allChunks = [];
  for (const file of mdFiles) {
    const content = readFileSync(join(dataDir, file), "utf-8");
    const chunks = chunkText(content);
    console.log(`   📄 ${file} → ${chunks.length} chunks`);
    for (let i = 0; i < chunks.length; i++) {
      allChunks.push({
        id: `${file.replace(".md", "")}-chunk-${i}`,
        text: chunks[i],
        source: file,
      });
    }
  }
  console.log(`\n📦 Total chunks: ${allChunks.length}`);

  // 3. Embed each chunk using Google text-embedding-004
  console.log("\n🔮 Embedding chunks with gemini-embedding-001...");
  const ai = new GoogleGenAI({ apiKey: GOOGLE_API_KEY });
  const vectors = [];

  for (let i = 0; i < allChunks.length; i++) {
    const chunk = allChunks[i];
    const result = await ai.models.embedContent({
      model: "gemini-embedding-001",
      contents: chunk.text,
      config: { outputDimensionality: 768 },
    });
    vectors.push({
      id: chunk.id,
      values: result.embeddings[0].values,
      metadata: {
        text: chunk.text,
        source: chunk.source,
      },
    });

    // Log progress every 5 chunks
    if ((i + 1) % 5 === 0 || i === allChunks.length - 1) {
      console.log(`   ✅ Embedded ${i + 1}/${allChunks.length} chunks`);
    }
  }

  // 4. Upsert into Pinecone
  console.log("\n📌 Upserting vectors into Pinecone...");
  console.log(`   📊 Vectors to upsert: ${vectors.length}`);
  console.log(`   📊 First vector: id="${vectors[0].id}", values_length=${vectors[0].values?.length}`);

  const pc = new Pinecone({ apiKey: PINECONE_API_KEY });
  const index = pc.index(PINECONE_INDEX_NAME);

  // Upsert all vectors at once (24 is well under the 1000 limit)
  try {
    await index.upsert({ records: vectors });
    console.log(`   ✅ Upserted all ${vectors.length} vectors`);
  } catch (err) {
    console.error("   ❌ Upsert failed:", err.message);
    throw err;
  }

  console.log(`\n🎉 Done! ${vectors.length} vectors indexed in Pinecone "${PINECONE_INDEX_NAME}".`);
}

main().catch((err) => {
  console.error("❌ Ingestion failed:", err);
  process.exit(1);
});
