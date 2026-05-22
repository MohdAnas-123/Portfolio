import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";
import { GoogleGenAI } from "@google/genai";
import { Pinecone } from "@pinecone-database/pinecone";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME || "portfolio-rag";

const SYSTEM_PROMPT = `You are Anas's AI assistant, embedded on his portfolio website. Your job is to answer visitors' questions about Mohd Anas — his projects, skills, experience, education, and background.

Rules:
- ONLY answer based on the provided context. If the context doesn't contain the answer, say "I don't have specific information about that, but feel free to reach out to Anas directly at anasma765@gmail.com."
- Be highly conversational, professional, and engaging.
- Use markdown formatting (bullet points, bolding) to make your answers scannable and easy to read.
- When talking about projects or skills, highlight specific technical depth, algorithms, and architectures used (e.g., LangGraph, RAG, BERT) to emphasize his expertise.
- Always refer to Anas in the third person (e.g., "Anas built...", "He specializes in...").
- Keep answers concise but insightful. Do not sound robotic or repetitive.
- ONLY mention that he is graduating in 2026 and open to work if the user specifically asks about his availability, hiring, education, or graduation. Do NOT append this to random questions about his tech stack or projects.
- Do NOT hallucinate information that isn't in the context.
- For follow-up questions like "explain more", provide deeper technical insights or additional details from the context that you haven't mentioned yet.`;

export async function POST(request) {
  try {
    const { question, history = [] } = await request.json();

    if (!question || typeof question !== "string" || question.trim().length === 0) {
      return Response.json({ error: "Question is required" }, { status: 400 });
    }

    if (!GOOGLE_API_KEY || !PINECONE_API_KEY) {
      return Response.json(
        { error: "Server configuration error — API keys not set" },
        { status: 500 }
      );
    }

    // ── Step 1: Contextualize the question using chat history ────────
    // If there's history, rephrase the question to be standalone
    // so Pinecone retrieval works for follow-ups like "explain more"
    let searchQuery = question.trim();

    if (history.length > 0) {
      const rephraseModel = new ChatGoogleGenerativeAI({
        model: "gemini-3.5-flash",
        apiKey: GOOGLE_API_KEY,
        temperature: 0,
        maxOutputTokens: 150,
      });

      const rephraseMessages = [
        new SystemMessage(
          "Given the chat history below, rephrase the user's latest message into a standalone question that can be understood without the chat history. Do NOT answer the question — just rephrase it. If the question is already standalone, return it as-is."
        ),
        ...history.map((m) =>
          m.role === "user" ? new HumanMessage(m.text) : new AIMessage(m.text)
        ),
        new HumanMessage(question.trim()),
      ];

      const rephrased = await rephraseModel.invoke(rephraseMessages);
      searchQuery = rephrased.content || question.trim();
    }

    // ── Step 2: Embed the search query & retrieve from Pinecone ─────
    const ai = new GoogleGenAI({ apiKey: GOOGLE_API_KEY });

    const embedResult = await ai.models.embedContent({
      model: "gemini-embedding-001",
      contents: searchQuery,
      config: { outputDimensionality: 768 },
    });

    const queryEmbedding = embedResult.embeddings[0].values;

    const pc = new Pinecone({ apiKey: PINECONE_API_KEY });
    const index = pc.index(PINECONE_INDEX_NAME);

    const queryResult = await index.query({
      vector: queryEmbedding,
      topK: 8,
      includeMetadata: true,
    });

    const context = queryResult.matches
      .map((match) => match.metadata.text)
      .join("\n\n---\n\n");

    // ── Step 3: Generate streaming response with LangChain ──────────
    const chatModel = new ChatGoogleGenerativeAI({
      model: "gemini-3.5-flash",
      apiKey: GOOGLE_API_KEY,
      temperature: 0.7,
      maxOutputTokens: 2048,
      streaming: true,
    });

    const messages = [
      new SystemMessage(SYSTEM_PROMPT + "\n\nContext about Mohd Anas:\n\n" + context),
      ...history.map((m) =>
        m.role === "user" ? new HumanMessage(m.text) : new AIMessage(m.text)
      ),
      new HumanMessage(question.trim()),
    ];

    const langchainStream = await chatModel.stream(messages);

    // Convert LangChain's async iterable to a ReadableStream
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of langchainStream) {
            const text = chunk.content;
            if (text) {
              controller.enqueue(new TextEncoder().encode(text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("RAG API Error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
