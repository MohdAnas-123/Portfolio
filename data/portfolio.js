// ============================================================
// 📝 PORTFOLIO DATA CONFIG — Edit this file to update your site
// ============================================================

export const personalInfo = {
  name: "Mohd Anas",
  title: "AI Engineer",
  tagline: "AI Engineer",
  description:
    "I'm Anas. I build AI agents that actually work — not demos, not wrappers. My Financial Analyst agent has a Critic that catches its own hallucinations before they reach you.",
  email: "anasma765@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohd-anas-919275251/",
  github: "https://github.com/MohdAnas-123",
  resumeUrl: "/resume.pdf", // Place your resume PDF in /public
  avatarUrl: "/images/profile-avatar.png",
  location: "India",
  availableForWork: true,
};

export const infoBar = [
  { label: "Status", value: "B.Tech CS · KIET Ghaziabad" },
  { label: "Focus", value: "Agentic AI · LangGraph · RAG" },
  { label: "Available", value: "Immediately" },
];

export const aboutText = [
  "I got into AI agents after spending a week trying to get a vanilla GPT-4 chatbot to give consistent financial answers — it couldn't. Same question, different numbers every time. That frustration turned into a 5-agent LangGraph system with a Critic that audits every output before it reaches the user.",
  "That's the kind of problem I find interesting: not **\"can AI do this?\"** but **\"can it do this reliably, every time, without making things up?\"** Most of my work lives in that gap between a cool demo and something you'd actually trust with real data.",
  "I'm graduating from KIET Group of Institutions (B.Tech CS) and actively looking for **AI/ML Engineer roles** where I can build the kind of agents that don't need a human babysitter.",
];

export const skillCategories = [
  {
    title: "Languages & Core",
    icon: "💻",
    skills: ["Python", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    skills: [
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "BERT",
      "GPT",
      "RAG",
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: "🔧",
    skills: [
      "FastAPI",
      "Flask",
      "Streamlit",
      "Next.js",
      "Docker",
      "Git",
      "REST APIs",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: "☁️",
    skills: [
      "Qdrant",
      "PostgreSQL",
      "SQLite",
      "Vector Databases",
      "Vercel",
      "GitHub Actions",
    ],
  },
];

// Featured projects shown on home page (max 2 recommended)
export const featuredProjects = [
  {
    id: "finance-agent",
    number: "01",
    title: "Autonomous AI Financial Analyst",
    problem:
      "Getting a large language model to analyze SEC filings reliably — without hallucinating numbers — is genuinely unsolved for most teams.",
    description:
      "An enterprise-grade, agentic AI system that autonomously analyzes company earnings reports, retrieves live market data, and generates structured financial insights. Utilizes a deterministic LangGraph state machine with dynamic tool routing, a Critic Agent for hallucination auditing, and a dedicated math engine for DCF Intrinsic Value and CAGR calculations.",
    tech: [
      "LangGraph",
      "LangChain",
      "Gemini",
      "Qdrant",
      "Streamlit",
      "Plotly",
    ],
    github: "https://github.com/MohdAnas-123/finance-agent-rag",
    live: "https://finance-agent-rag-8kicnxjsteh28k5gnnfvgo.streamlit.app/",
    highlights: [
      "Multi-agent network: Planner, Doc, Market, Critic & Reporter agents with dynamic tool routing",
      "Hybrid RAG pipeline — Qdrant vector search over SEC 10-K filings + live web search for risk extraction",
      "Deterministic math engine for DCF Intrinsic Value & CAGR — bypasses LLM arithmetic hallucinations",
      "Automated CI/CD evaluation pipeline via LangSmith for regression testing agent accuracy",
    ],
  },
  {
    id: "feedback-backend",
    number: "02",
    title: "CritiqueConnect — AI Feedback Platform",
    problem:
      "Peer feedback on creative work is either too vague to act on or too harsh to hear. Most platforms just dump raw comments — nobody synthesizes them.",
    description:
      "A production backend for enhancing creative feedback using AI. Pre-trained BERT scores tone and actionability of peer critiques, GPT refines raw feedback into actionable insights, and a synthesizer aggregates multiple critiques into concise, structured summaries. Published at IEEE ICECA 2025.",
    tech: ["FastAPI", "BERT", "GPT", "SQLite", "Docker", "GitHub Actions"],
    github: "https://github.com/MohdAnas-123/feedback-backend",
    live: null,
    highlights: [
      "4-stage pipeline: Collection → BERT Analysis → GPT Enhancement → Synthesis",
      "Tone scoring (constructive vs. harsh) and actionability scoring (specific vs. generic)",
      "RESTful API with full CRUD operations for works and critiques",
      "Dockerized with CI/CD via GitHub Actions",
      "Published: IEEE ICECA 2025 — \"Augmenting Human Creativity through AI-Driven Semantic Analysis\"",
    ],
  },
];

// All projects (shown on /projects page)
export const allProjects = [
  ...featuredProjects,
  {
    id: "medical-chatbot",
    number: "03",
    title: "AI Medical Assistant Chatbot",
    problem:
      "Medical chatbots that hallucinate drug interactions or dosage information aren't just unhelpful — they're dangerous. Grounding answers in verified data is non-negotiable.",
    description:
      "An intelligent, context-aware medical chatbot built with LangChain, Flask, and Google Gemini. Uses Retrieval-Augmented Generation (RAG) to provide accurate medical information from a curated vector database, with conversational memory for follow-up questions.",
    tech: ["LangChain", "Flask", "Gemini", "Pinecone", "Python"],
    github: "https://github.com/MohdAnas-123/Medical_Chatbot",
    live: "https://medical-chatbot-gm63.onrender.com",
    highlights: [
      "RAG pipeline grounding answers in actual medical data to reduce hallucinations",
      "Conversational memory via LangChain's history-aware retriever for follow-up context",
      "Responsive dark-mode web UI with real-time chat interface",
    ],
  },
  {
    id: "telco-churn",
    number: "04",
    title: "Telco Customer Churn Prediction",
    problem:
      "Telecom companies lose billions to churn they could have predicted. The signals are in the data — month-to-month contracts, fiber optic complaints — but nobody's looking.",
    description:
      "A modular machine learning system to predict customer churn for a telecom company. Compares multiple classification models with GridSearchCV hyperparameter tuning, achieving 85% accuracy and 0.82 AUC-ROC on the Kaggle Telco dataset.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/MohdAnas-123/Telco_Customer_Churn",
    live: null,
    highlights: [
      "Multi-model comparison: Logistic Regression, Decision Tree, Random Forest, Gradient Boosting",
      "GridSearchCV hyperparameter optimization — 85% accuracy, 0.82 AUC-ROC",
      "EDA on 7,000+ records identifying high-risk segments (Month-to-Month, Fiber Optic users)",
      "Feature importance extraction and risk segmentation analysis",
    ],
  },
];

export const experience = [
  {
    date: "2024 — Present",
    role: "AI/ML Developer",
    company: "Independent AI Research & Engineering",
    details: [
      "Engineered an autonomous multi-agent financial analysis system using LangGraph with 5 specialized AI agents",
      "Built a custom Critic Agent that audits retrieved data to eliminate LLM hallucinations before report generation",
      "Designed hybrid RAG pipelines combining Qdrant vector search with live web retrieval for real-time data analysis",
      "Implemented automated CI/CD evaluation pipelines using LangSmith for regression testing of AI agent accuracy",
    ],
  },
  {
    date: "May 2025 — Aug 2025",
    role: "Frontend Web Development Intern",
    company: "Gymbrawns Enterprises",
    details: [
      "Integrated RESTful APIs between frontend components and backend services, ensuring reliable asynchronous data flow and improved application responsiveness",
      "Refactored reusable UI components and optimized frontend architecture for better scalability, maintainability, and modular development",
      "Collaborated on improving overall user experience by enhancing frontend performance, responsiveness, and component-level consistency",
      "Applied software engineering best practices including modularity, separation of concerns, and clean code principles while working in a remote development environment",
    ],
  },
];

export const education = [
  {
    icon: "🎓",
    degree: "B.Tech in Computer Science",
    school: "KIET GROUP OF INSTITUTIONS, Ghaziabad (Final Year)",
    year: "2022 — 2026",
    details:
      "Specializing in Artificial Intelligence and Machine Learning. Building production-grade AI systems and multi-agent architectures as personal projects alongside academic curriculum.",
  },
];

export const humanLine =
  "Final year student. Lucknow. Probably debugging something right now.";

export const contactFormAction = "https://formspree.io/f/mqejlelp";
