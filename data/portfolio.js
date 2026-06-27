// ============================================================
// 📝 PORTFOLIO DATA CONFIG — Edit this file to update your site
// ============================================================

export const personalInfo = {
  name: "Mohd Anas",
  title: "AI / ML ENGINEER",
  tagline: "AI / ML Engineer",
  description:
    "Bridging classical deep learning and computer vision models with scalable generative architectures to build deterministic, production-grade intelligence.",
  email: "anasma765@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohd-anas-919275251/",
  github: "https://github.com/MohdAnas-123",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/images/profile-avatar.png",
  location: "Ghaziabad, India",
  availableForWork: true,
};

export const infoBar = [
  { label: "Status", value: "B.Tech CS · KIET Ghaziabad" },
  { label: "Focus", value: "Computer Vision · Core ML · Generative AI & Agents" },
  { label: "Available", value: "Immediately" },
];

export const aboutText = [
  "I operate at the intersection of traditional deep learning—where optimization at the edge and model architecture matter—and generative pipelines, where state management and agentic verification prevent system failure.",
  "I got into AI agents after spending a week trying to get a vanilla GPT-4 chatbot to give consistent financial answers — it couldn't. Same question, different numbers every time. That frustration turned into a 5-agent LangGraph system with a Critic that audits every output before it reaches the user.",
  "That's the kind of problem I find interesting: not **\"can AI do this?\"** but **\"can it do this reliably, every time, without making things up?\"** Most of my work lives in that gap between a cool demo and something you'd actually trust with real data.",
  "I build modular Python architectures — not notebook prototypes. Every system I ship has explicit failure modes, deterministic tool routing, and evaluation pipelines that catch regressions before they reach production.",
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
      "CrewAI",
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
      "React",
      "Docker",
      "Git",
      "REST APIs",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: "☁️",
    skills: [
      "ChromaDB",
      "Qdrant",
      "PostgreSQL",
      "SQLite",
      "Vector Databases",
      "Vercel",
      "GitHub Actions",
    ],
  },
];

// ============================================================
// FEATURED PROJECTS — Case Study format
// ============================================================

export const featuredProjects = [
  {
    id: "yolo-fire-smoke",
    number: "01",
    title: "EDGE-OPTIMIZED VISION: Real-Time Fire and Smoke Detection Using YOLO11n",
    headline: ">45 FPS Edge Inference // Real-Time Hazard Mitigation.",
    metric: ">45 FPS",
    metricSecondary: "Optimized TensorRT Pipeline",
    problem:
      "Slow processing speeds and large computational footprints in traditional object detection networks prevent dependable, real-world deployment on constrained edge hardware during critical safety emergencies.",
    description:
      "A high-performance computer vision pipeline optimized for edge deployment. Built on the YOLO11n architecture, the system is designed to provide real-time hazard detection in safety-critical environments where inference latency is as important as detection accuracy.",
    tech: ["Ultralytics YOLO11n", "PyTorch", "OpenCV"],
    github: "https://github.com/MohdAnas-123/fire-smoke-detection-yolo11n",
    live: null,
    highlights: [
      "Balancing mean Average Precision (mAP 50-95) while maintaining sub-20ms inference latency to avoid edge hardware thermal throttling or dropped frames during live camera feeds."
    ],
    tradeoff:
      "Why YOLO11n over heavier variants: Deploying deep learning networks in safety-critical settings requires strict balancing of accuracy against operational latency. I intentionally selected the Ultralytics Nano variant (yolo11n) over heavier model variants. While heavier models offer minor precision gains, they drop frames on lightweight compute nodes. To offset the minor precision loss of the nano model, I engineered custom data augmentation anchors during training, preserving real-time frame rates while ensuring reliable detection sensitivity."
  },
  {
    id: "insurance-claims",
    number: "02",
    title: "Agentic Insurance Claims Intelligence Platform",
    headline: "The Agentic Audit: Orchestrating a Multi-Agent CrewAI System for Automated Claim Intelligence",
    metric: "–88% Processing Latency",
    metricSecondary: "94% Verification Accuracy",
    problem:
      "Insurance claims processing is drowning in manual review queues. Human adjusters spend 70% of their time on routine verifications that could be automated — but trusting an LLM to adjudicate claims without guardrails is reckless.",
    description:
      "A production-style multi-agent insurance claims system built with LangGraph (orchestration) and CrewAI (fraud detection). A claimant submits through a React UI, and the backend runs it through 7 specialist agents — intake validation, fraud detection (3-agent CrewAI crew), damage assessment, policy compliance, settlement calculation, LLM-as-judge evaluation, and claimant notification.",
    tech: [
      "LangGraph",
      "CrewAI",
      "Gemini",
      "Groq",
      "FastAPI",
      "React",
      "ChromaDB",
    ],
    github: "https://github.com/MohdAnas-123/Agentic-Insurance-Claims-Intelligence-Platform",
    live: null,
    highlights: [
      "7-agent pipeline with CrewAI sub-crew for fraud (pattern analyst, anomaly detector, social validator)",
      "Human-in-the-Loop — risky claims pause mid-pipeline via LangGraph interrupt() and resume from exact checkpoint after reviewer decision",
      "Per-agent confidence gates — if any agent is uncertain, pipeline pauses and asks a human before proceeding",
      "Agent memory — 3-tier ChromaDB system: short-term (state), long-term (similar claims), episodic (human overrides)",
      "Pluggable LLMs — switch between Gemini 2.5 Flash and Groq Llama 3.3 70B at runtime",
      "Country-aware configuration — US/India profiles with different PII fields, currencies, settlement rules",
    ],
    tradeoff:
      "Why LangGraph interrupt() over a simple queue: most HITL implementations use an external queue and polling. LangGraph's native interrupt/resume with SqliteSaver checkpointing means the pipeline state is durably persisted at the exact decision point — kill the server, restart, approve, and it resumes from the precise checkpoint. No state reconstruction, no race conditions.",
  },
  {
    id: "finance-agent",
    number: "03",
    title: "Autonomous AI Financial Analyst",
    headline: "Autonomous Financial Intelligence: Self-Correcting Multi-Agent Analysis with Hallucination Auditing",
    metric: "5-Agent System",
    metricSecondary: "Deterministic Math Engine",
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
    tradeoff:
      "Why a dedicated math engine instead of letting the LLM calculate: GPT and Gemini regularly produce DCF valuations off by 30-40%. Extracting the numbers via RAG and routing them through deterministic Python math functions eliminates this entire class of errors with zero latency cost.",
  },
];

// All projects (shown on /projects page) — just the featured three, tightly curated
export const allProjects = [...featuredProjects];

// ============================================================
// PROJECT INDEX — for the registry table
// ============================================================

export const projectIndex = [
  {
    name: "Real-Time Hazard Detection",
    stack: "Ultralytics YOLO11n · PyTorch · OpenCV",
    github: "https://github.com/MohdAnas-123/fire-smoke-detection-yolo11n",
    live: null,
  },
  {
    name: "Smart Claims Processor",
    stack: "LangGraph · CrewAI · FastAPI · React",
    github: "https://github.com/MohdAnas-123/Agentic-Insurance-Claims-Intelligence-Platform",
    live: null,
  },
  {
    name: "Financial Analyst Agent",
    stack: "LangGraph · Qdrant · Streamlit",
    github: "https://github.com/MohdAnas-123/finance-agent-rag",
    live: "https://finance-agent-rag-8kicnxjsteh28k5gnnfvgo.streamlit.app/",
  },
  {
    name: "CritiqueConnect",
    stack: "FastAPI · BERT · GPT · Docker",
    github: "https://github.com/MohdAnas-123/feedback-backend",
    live: null,
  },
  {
    name: "Medical Assistant Chatbot",
    stack: "LangChain · Flask · Gemini · Pinecone",
    github: "https://github.com/MohdAnas-123/Medical_Chatbot",
    live: "https://medical-chatbot-gm63.onrender.com",
  },
  {
    name: "Telco Churn Prediction",
    stack: "scikit-learn · Pandas · NumPy",
    github: "https://github.com/MohdAnas-123/Telco_Customer_Churn",
    live: null,
  },
];

// ============================================================
// OP-ED / PERSPECTIVE
// ============================================================

export const systemPrinciples = [
  {
    number: "01",
    title: "Compute is precious.",
    body: "Never deploy a 70B parameter model where a heavily constrained, fine-tuned 8B model or an optimized heuristic script can execute the exact same task with lower latency. My financial analyst uses a deterministic math engine for DCF calculations — the LLM never touches arithmetic.",
  },
  {
    number: "02",
    title: "Every agent needs a critic.",
    body: "If your pipeline doesn't have an explicit verification step, you're shipping hallucinations to production. My systems have Critic agents that audit outputs against source data before anything reaches the user.",
  },
  {
    number: "03",
    title: "Match the Architecture to the Modality.",
    body: "Do not throw a multi-billion parameter multimodal LLM at an optimization problem where a custom-trained, lightweight convolutional or computer vision model can execute the task locally with millisecond latency and zero operational API costs.",
  },
];

export const opEdArticle = {
  title: "How AI Can Reshape Feedback Culture — Lessons from My IEEE Paper",
  date: "November 2025",
  venue: "IEEE ICECA 2025 · Coimbatore, India",
  doi: "10.1109/ICECA66444.2025.11382628",
  link: "https://ieeexplore.ieee.org/document/11382628",
  body: [
    "Here's the problem we were trying to solve: creative feedback is broken. When a student submits a design project or a developer pushes code for peer review, the comments they get back are usually either so vague they're useless (\"looks good\") or so harsh they're counterproductive. Neither helps anyone improve.",
    "**CritiqueConnect** was our answer. We built a two-stage AI pipeline that takes raw, unstructured peer feedback and transforms it into something a creator can actually act on. The first stage uses a pre-trained BERT model to cluster redundant comments, score sentiment and tone, and extract semantic meaning from loose text. The second stage feeds those structured signals into GPT to generate clear, concise, actionable recommendations.",
    "The interesting engineering decision was **why we used BERT for analysis instead of GPT for everything**. GPT could theoretically do both stages — but BERT's classification head runs in milliseconds with deterministic outputs, while GPT would introduce latency, cost, and non-deterministic scoring. In a feedback system where consistency matters (you don't want the same comment scored differently on two runs), that determinism is non-negotiable.",
    "In our preliminary analysis, the system improved feedback quality across three dimensions: clarity, depth, and actionability. Users reported higher satisfaction, and the creative outputs they produced after receiving AI-enhanced feedback showed measurably higher novelty.",
    "The broader insight is this: AI doesn't need to replace human judgment in creative contexts — it needs to **translate** it. Most peer reviewers have useful opinions buried under poor articulation. The AI's job isn't to generate opinions; it's to extract the signal from human noise and present it in a form the creator can actually use.",
  ],
};

// ============================================================
// EXPERIENCE & EDUCATION
// ============================================================

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
      "Integrated RESTful APIs between frontend components and backend services, ensuring reliable asynchronous data flow",
      "Refactored reusable UI components and optimized frontend architecture for scalability and modularity",
      "Collaborated on improving user experience by enhancing performance, responsiveness, and component consistency",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "KIET GROUP OF INSTITUTIONS, Ghaziabad",
    year: "2022 — 2026",
    details:
      "Specializing in Artificial Intelligence and Machine Learning. Building production-grade AI systems and multi-agent architectures.",
  },
];

export const humanLine =
  "Final year student. Ghaziabad. Probably debugging something right now.";

export const contactFormAction = "https://formspree.io/f/mqejlelp";
