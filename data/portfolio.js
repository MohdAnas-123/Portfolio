// ============================================================
// 📝 PORTFOLIO DATA CONFIG — Edit this file to update your site
// ============================================================

export const personalInfo = {
  name: "Mohd Anas",
  title: "AI Engineer",
  tagline: "Building Intelligent Systems That Solve Real Problems",
  description:
    "Final-year B.Tech student specializing in scalable ML models, autonomous AI agents, and robust data pipelines. I go beyond standard chat wrappers — engineering deterministic, self-correcting systems for real-world impact.",
  email: "anasma765@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohd-anas-919275251/",
  github: "https://github.com/MohdAnas-123",
  resumeUrl: "/resume.pdf", // Place your resume PDF in /public
  avatarUrl: "/images/profile-avatar.png",
  location: "India",
  availableForWork: true,
};

export const stats = [
  { number: "5+", label: "Projects Built" },
  { number: "3+", label: "AI Agents" },
  { number: "2026", label: "Graduating" },
];

export const aboutText = [
  "I am an aspiring AI Engineer with a deep passion for building systems that go far beyond basic LLM wrappers. My work focuses on engineering **deterministic, self-correcting AI agents** that can autonomously reason, validate data, and produce reliable outputs.",
  "From designing **multi-agent financial analysis systems** with LangGraph to building **AI-powered feedback platforms** using BERT and GPT, I thrive at the intersection of machine learning research and production engineering.",
  "I'm currently in my final year of B.Tech, actively seeking **AI/ML Engineer roles** where I can contribute to building the next generation of intelligent, production-grade AI systems.",
];

export const aboutHighlights = [
  { icon: "🤖", text: "Autonomous AI Agents" },
  { icon: "📊", text: "RAG Pipelines" },
  { icon: "🧠", text: "Multi-Agent Systems" },
  { icon: "⚡", text: "Production ML" },
  { icon: "🔍", text: "NLP & Transformers" },
  { icon: "🛠️", text: "Full-Stack AI Apps" },
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
    description:
      "An enterprise-grade, agentic AI system that autonomously analyzes company earnings reports, retrieves live market data, and generates structured financial insights. Features a deterministic LangGraph state machine with a custom Critic Agent that audits retrieved data to eliminate LLM hallucinations before report generation.",
    tech: [
      "LangGraph",
      "LangChain",
      "Gemini",
      "Qdrant",
      "Streamlit",
      "yfinance",
    ],
    github: "https://github.com/MohdAnas-123/finance-agent-rag",
    live: "https://finance-agent-rag-8kicnxjsteh28k5gnnfvgo.streamlit.app/",
    highlights: [
      "Multi-agent collaborative network with Planner, Doc, Market, Critic & Reporter agents",
      "Hybrid RAG pipeline with Qdrant Cloud for semantic search over SEC 10-K filings",
      "Deterministic math engine that bypasses LLM arithmetic hallucinations",
      "Bloomberg-style Streamlit UI with interactive Plotly candlestick charts",
    ],
  },
  {
    id: "feedback-backend",
    number: "02",
    title: "CritiqueConnect — AI Feedback Platform",
    description:
      "A production backend for enhancing creative feedback using AI. Pre-trained BERT scores tone and actionability of peer critiques, GPT refines raw feedback into actionable insights, and a synthesizer aggregates multiple critiques into concise, structured summaries.",
    tech: ["FastAPI", "BERT", "GPT", "SQLite", "Docker", "GitHub Actions"],
    github: "https://github.com/MohdAnas-123/feedback-backend",
    live: null,
    highlights: [
      "4-stage pipeline: Collection → BERT Analysis → GPT Enhancement → Synthesis",
      "Tone scoring (constructive vs. harsh) and actionability scoring (specific vs. generic)",
      "RESTful API with full CRUD operations for works and critiques",
      "Dockerized with CI/CD via GitHub Actions",
    ],
  },
];

// All projects (shown on /projects page)
export const allProjects = [
  ...featuredProjects,
  {
    id: "medical-chatbot",
    number: "03",
    title: "Medical Chatbot",
    description:
      "An AI-powered medical chatbot that uses NLP techniques to understand user symptoms and provide relevant health information. Built with a focus on accurate natural language understanding for healthcare contexts.",
    tech: ["Python", "NLP", "Jupyter", "Machine Learning"],
    github: "https://github.com/MohdAnas-123/Medical_Chatbot",
    live: null,
    highlights: [
      "Symptom analysis using NLP pipelines",
      "Context-aware medical response generation",
    ],
  },
  {
    id: "ml-project",
    number: "04",
    title: "End-to-End ML Pipeline",
    description:
      "A comprehensive machine learning project demonstrating the full ML lifecycle — from data ingestion and preprocessing to model training, evaluation, and deployment-ready artifacts.",
    tech: ["Python", "scikit-learn", "Pandas", "Jupyter"],
    github: "https://github.com/MohdAnas-123/mlProject",
    live: null,
    highlights: [
      "Complete ML pipeline from data to deployment",
      "Feature engineering and model selection",
    ],
  },
  {
    id: "weather-app",
    number: "05",
    title: "Weather Forecasting & Crop Suggestion",
    description:
      "A weather forecasting application that also suggests suitable crops based on current and predicted weather conditions. Combines weather API data with agricultural decision logic.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    github:
      "https://github.com/MohdAnas-123/A-well-designed-weather-forecasting-and-crops-suggesting-app",
    live: null,
    highlights: [
      "Real-time weather data integration",
      "Intelligent crop recommendation engine",
    ],
  },
];

export const experience = [
  {
    date: "2024 — Present",
    role: "AI/ML Developer",
    company: "Self-Directed Projects",
    details: [
      "Engineered an autonomous multi-agent financial analysis system using LangGraph with 5 specialized AI agents",
      "Built a custom Critic Agent that audits retrieved data to eliminate LLM hallucinations before report generation",
      "Designed hybrid RAG pipelines combining Qdrant vector search with live web retrieval for real-time data analysis",
      "Implemented automated CI/CD evaluation pipelines using LangSmith for regression testing of AI agent accuracy",
    ],
  },
  {
    date: "2023 — 2024",
    role: "Backend Developer",
    company: "CritiqueConnect Platform",
    details: [
      "Developed a production-grade feedback enhancement backend using FastAPI with BERT and GPT integration",
      "Built a 4-stage AI pipeline: feedback collection, BERT sentiment analysis, GPT enhancement, and synthesis",
      "Containerized the application with Docker and set up CI/CD workflows with GitHub Actions",
      "Designed RESTful APIs handling CRUD operations for creative works and peer critiques",
    ],
  },
];

export const education = [
  {
    icon: "🎓",
    degree: "B.Tech in Computer Science",
    school: "University (Final Year)",
    year: "2022 — 2026",
    details:
      "Specializing in Artificial Intelligence and Machine Learning. Building production-grade AI systems and multi-agent architectures as personal projects alongside academic curriculum.",
  },
];

export const contactFormAction = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with your Formspree endpoint
