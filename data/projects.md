# Projects

---

# Real-Time Fire and Smoke Detection Using YOLO11n

A high-performance computer vision pipeline optimized for edge deployment. Built on the YOLO11n architecture, the system is designed to provide real-time hazard detection in safety-critical environments where inference latency is as important as detection accuracy.

## Architecture & Engineering

Deploying deep learning networks in safety-critical settings requires strict balancing of accuracy against operational latency. The Ultralytics Nano variant (yolo11n) was specifically selected over heavier model variants to ensure sub-20ms inference latency and >45 FPS edge inference, avoiding edge hardware thermal throttling or dropped frames during live camera feeds.

To offset the minor precision loss of the nano model, custom data augmentation anchors were engineered during training, preserving real-time frame rates while ensuring reliable detection sensitivity and balancing mean Average Precision (mAP 50-95).

## Tech Stack

Ultralytics YOLO11n • PyTorch • OpenCV • TensorRT

## Links

GitHub: https://github.com/MohdAnas-123/fire-smoke-detection-yolo11n

---

# Agentic Insurance Claims Intelligence Platform

A production-style multi-agent insurance claims system built with LangGraph (orchestration) and CrewAI (fraud detection). A claimant submits through a React UI, and the backend runs it through 7 specialist agents — intake validation, fraud detection, damage assessment, policy compliance, settlement calculation, LLM-as-judge evaluation, and claimant notification.

## Architecture & Engineering

Insurance claims processing is drowning in manual review queues, but trusting an LLM to adjudicate claims without guardrails is reckless. This system enforces strict Agentic Audits using a 7-agent pipeline with a CrewAI sub-crew dedicated specifically to fraud detection (pattern analyst, anomaly detector, social validator).

It implements robust Human-in-the-Loop workflows. Risky claims pause mid-pipeline via `LangGraph interrupt()` and resume from the exact checkpoint after a human reviewer's decision. Using `interrupt()` with SqliteSaver checkpointing ensures the pipeline state is durably persisted at the exact decision point, eliminating state reconstruction and race conditions compared to a simple polling queue. Furthermore, per-agent confidence gates ensure that if any agent is uncertain, the pipeline pauses and asks a human before proceeding.

The system features a 3-tier ChromaDB memory system (short-term state, long-term similar claims, and episodic human overrides) and pluggable LLMs allowing runtime switching between Gemini 2.5 Flash and Groq Llama 3.3 70B.

## Tech Stack

LangGraph • CrewAI • Gemini • Groq • FastAPI • React • ChromaDB

## Links

GitHub: https://github.com/MohdAnas-123/Agentic-Insurance-Claims-Intelligence-Platform

---

# Autonomous AI Financial Analyst

An enterprise-grade, agentic AI system that autonomously analyzes company earnings reports, retrieves live market data, and generates structured financial insights.

Unlike standard LLM chatbots, this system utilizes a deterministic LangGraph state machine to break down complex financial queries, route tasks to specialized AI agents, and enforce self-correction via an automated Critic Agent before outputting a final markdown report.

## Architecture

Built using LangGraph as a multi-agent collaborative network with 5 specialized AI agents:

- Planner Agent — breaks down natural language queries into a step-by-step execution strategy
- Doc Agent — executes Hybrid Vector Search for static 10-K filings and dynamic web search for live corporate risk extraction
- Market Agent — interfaces with live REST APIs to fetch stock tick prices and corporate financial statements (Revenue, Gross Profit)
- Critic Agent (Auditor) — evaluates gathered data against strict validation rules; if hallucination or missing data is detected, it rejects and forces re-execution
- Reporter Agent — compiles validated data into structured financial summaries with market analysis

## Key Features

- Dynamic Tool Routing — Market Agent autonomously chooses between live stock prices, historical financials, or quantitative formula execution
- Deterministic Math Engine — bypasses LLM arithmetic hallucinations by routing variables into dedicated Python tools for DCF Intrinsic Value and CAGR calculations
- Hybrid RAG Pipeline — Qdrant Cloud for semantic search over SEC 10-K filings combined with dynamic web search for live corporate risk extraction
- Bloomberg-style Streamlit dashboard with interactive Plotly candlestick charts
- Automated CI/CD evaluation pipeline via LangSmith for regression testing agent accuracy

## Tech Stack

LangGraph • LangChain • Gemini • Qdrant • Streamlit • Plotly

## Links

GitHub: https://github.com/MohdAnas-123/finance-agent-rag
Live Demo: https://finance-agent-rag-8kicnxjsteh28k5gnnfvgo.streamlit.app/

---

# CritiqueConnect — AI Feedback Platform

An AI-powered semantic feedback platform designed to improve the quality and usefulness of peer critiques using NLP and LLM workflows. Published at IEEE ICECA 2025.

## How It Works

The system processes feedback through a multi-stage AI pipeline:

1. Feedback Collection — RESTful API with full CRUD operations
2. BERT Sentiment & Actionability Analysis — tone scoring (constructive vs. harsh) and actionability scoring (specific vs. generic)
3. GPT-based Feedback Enhancement — refines raw feedback into actionable insights while preserving original intent
4. Feedback Synthesis & Summarization — aggregates multiple critiques into concise structured summaries

## Key Features

- Hybrid BERT + GPT pipeline
- Semantic critique analysis
- Constructive feedback enhancement
- RESTful FastAPI backend
- Dockerized deployment
- GitHub Actions CI/CD workflows

## Tech Stack

FastAPI • BERT • GPT-4 • Docker • SQLite • GitHub Actions

## Links

GitHub: https://github.com/MohdAnas-123/feedback-backend

---

# AI Medical Assistant Chatbot

An intelligent, context-aware medical chatbot built with LangChain, Flask, and Google Gemini. Uses Retrieval-Augmented Generation (RAG) to provide accurate medical information based on a curated vector database, with conversational memory for follow-up questions.

## Key Features

- RAG pipeline grounding answers in actual medical data to reduce AI hallucinations
- Conversational Memory using LangChain's history-aware retriever to remember previous chat context and understand pronouns and follow-up questions
- Responsive dark-mode web UI built with HTML/CSS and jQuery
- Optimized vector database for fast semantic search

## Tech Stack

LangChain • Flask • Google Gemini • Pinecone • Python

## Links

GitHub: https://github.com/MohdAnas-123/Medical_Chatbot
Live Demo: https://medical-chatbot-gm63.onrender.com

---

# Telco Customer Churn Prediction

A modular machine learning project to predict customer churn for a telecommunications company using the Kaggle Telco Customer Churn dataset with 7,000+ customer records.

## Key Features

- Built and compared multiple classification models: Logistic Regression, Decision Tree, Random Forest, Gradient Boosting
- Applied GridSearchCV for systematic hyperparameter optimization
- End-to-end exploratory data analysis on 7,000+ customer records
- Identified high-risk customer segments: Month-to-Month contract users and Fiber Optic service users
- Evaluated models using Accuracy, Precision, Recall, F1-score, and AUC-ROC
- Achieved 85% Accuracy and 0.82 AUC-ROC

## Technical Highlights

- Production-oriented ML workflow with modular source code
- Feature engineering and preprocessing pipelines
- Model comparison and validation framework
- Statistical performance evaluation
- Risk segmentation analysis
- Feature importance extraction

## Tech Stack

Python • scikit-learn • Pandas • NumPy • Gradient Boosting • GridSearchCV • Matplotlib

## Links

GitHub: https://github.com/MohdAnas-123/Telco_Customer_Churn