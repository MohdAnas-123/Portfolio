// ============================================================
// /now page data — Update this monthly
// ============================================================

export const nowData = {
  lastUpdated: "June 2026",
  intro:
    "This is a /now page — a snapshot of what I'm focused on right now. Inspired by nownownow.com.",
  sections: [
    {
      title: "What I'm Building",
      content: `**AI Contracts & Legal Ops for SMBs** — an AI-powered legal assistant built for Indian small and medium businesses.

Most SMBs sign vendor agreements, NDAs, employment contracts, and rent agreements without any legal review — either because hiring an advocate costs ₹5,000–15,000 per document, or because they simply don't have time.

This product lets a business owner upload any contract and receive a plain-language risk analysis in under 2 minutes — flagging missing clauses, unfair terms, unlimited liability exposure, and jurisdiction risks, all explained in simple English or Hindi. It also generates compliant first drafts of 12 common Indian business contracts from scratch.

Delivered via web app and WhatsApp. Built on Claude API for legal reasoning, Next.js, and Supabase. Targeting CA firms, D2C brand founders, IT services companies, and HR consultancies as early customers. Priced at ₹999–7,999/month — a fraction of the cost of a single legal consultation.`,
    },
    {
      title: "What I'm Reading",
      content: `**Hands-On Large Language Models** by Jay Alammar & Maarten Grootendorst — working through the practical chapters on embeddings, RAG architectures, and fine-tuning. The kind of book that makes you want to rebuild everything you've already built, but better.`,
    },
    {
      title: "What I'm Thinking About",
      content: `Why most RAG pipelines fail in production. The retrieval part is easy — the hard part is knowing when the retrieved context is wrong, incomplete, or contradictory. That's what the Critic agent in my financial analyst system tries to solve, and I keep finding new failure modes.

Also: whether building for Indian SMBs is the right first market for AI legal tools, or if I should go upmarket to mid-size companies who already have a legal budget.`,
    },
  ],
};
