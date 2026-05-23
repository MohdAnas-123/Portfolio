"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import "./AskMe.css";

const SUGGESTIONS = [
  "What projects has Anas built?",
  "What's his tech stack?",
  "Tell me about his AI agents",
  "Is he available for work?",
];

// Renders markdown with clean styling that fits inside the bot bubble
function BotMessage({ text, isStreaming }) {
  return (
    <div className="askme-markdown">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <p className="askme-md-heading">{children}</p>
          ),
          h2: ({ children }) => (
            <p className="askme-md-heading">{children}</p>
          ),
          h3: ({ children }) => (
            <p className="askme-md-subheading">{children}</p>
          ),
          p: ({ children }) => (
            <p className="askme-md-p">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="askme-md-strong">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="askme-md-em">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="askme-md-ul">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="askme-md-ol">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="askme-md-li">
              <span className="askme-md-bullet" />
              <span>{children}</span>
            </li>
          ),
          code: ({ children, className }) => {
            const isBlock = className?.includes("language-");
            return isBlock ? (
              <code className="askme-md-code-block">{children}</code>
            ) : (
              <code className="askme-md-code-inline">{children}</code>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="askme-md-blockquote">{children}</blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="askme-md-link"
            >
              {children}
            </a>
          ),
          hr: () => <hr className="askme-md-hr" />,
        }}
      >
        {text}
      </ReactMarkdown>
      {isStreaming && <span className="askme-cursor" />}
    </div>
  );
}

// Typing indicator dots
function TypingIndicator() {
  return (
    <div className="askme-typing">
      <div className="askme-typing-dot" />
      <div className="askme-typing-dot" />
      <div className="askme-typing-dot" />
    </div>
  );
}

export default function AskMe() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text) => {
      const question = text.trim();
      if (!question || isStreaming) return;

      // Snapshot current history before adding new messages
      const history = messages.map((m) => ({ role: m.role, text: m.text }));

      setMessages((prev) => [
        ...prev,
        { role: "user", text: question },
        { role: "bot", text: "", done: false },
      ]);
      setInput("");
      setIsStreaming(true);

      try {
        const res = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question, history }),
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to get response");
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          accumulated += decoder.decode(value, { stream: true });
          const current = accumulated;
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "bot",
              text: current,
              done: false,
            };
            return updated;
          });
        }

        // Mark done so cursor disappears
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            done: true,
          };
          return updated;
        });
      } catch (err) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "bot",
            text: err.message || "Sorry, something went wrong. Please try again.",
            done: true,
          };
          return updated;
        });
      } finally {
        setIsStreaming(false);
        inputRef.current?.focus();
      }
    },
    [isStreaming, messages]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* ── Floating Action Button ──────────────────────────────── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="askme-fab"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-label="Ask me anything"
            id="askme-fab"
          >
            <Sparkles size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat Panel ──────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="askme-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            {/* Header */}
            <div className="askme-header">
              <div className="askme-header-left">
                <div className="askme-header-avatar">🤖</div>
                <div className="askme-header-info">
                  <h3>Ask About Anas</h3>
                  <p>AI-powered · Instant answers</p>
                </div>
              </div>
              <button
                className="askme-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                id="askme-close-btn"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="askme-messages" id="askme-messages">
              {/* Welcome state */}
              {messages.length === 0 && (
                <div className="askme-welcome">
                  <div className="askme-welcome-emoji">✨</div>
                  <h4>Hey there!</h4>
                  <p>
                    Ask me anything about Anas&apos;s projects, skills, or
                    experience. I&apos;m powered by his portfolio data.
                  </p>
                </div>
              )}

              {messages.map((msg, i) => {
                const isLastBot =
                  msg.role === "bot" && i === messages.length - 1;
                const showTyping =
                  isLastBot && isStreaming && msg.text === "";
                const showCursor =
                  isLastBot && isStreaming && msg.text !== "";

                return (
                  <motion.div
                    key={i}
                    className={`askme-msg ${msg.role === "user" ? "askme-msg-user" : "askme-msg-bot"
                      }`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {showTyping ? (
                      <TypingIndicator />
                    ) : msg.role === "user" ? (
                      <span className="askme-user-text">{msg.text}</span>
                    ) : (
                      <BotMessage text={msg.text} isStreaming={showCursor} />
                    )}
                  </motion.div>
                );
              })}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Chips — only when no messages */}
            {messages.length === 0 && (
              <div className="askme-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className="askme-chip"
                    onClick={() => sendMessage(s)}
                    disabled={isStreaming}
                    id={`askme-chip-${s.slice(0, 10).replace(/\s/g, "-").toLowerCase()}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form className="askme-input-area" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                className="askme-input"
                type="text"
                placeholder="Ask about projects, skills…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isStreaming}
                id="askme-input"
                autoComplete="off"
              />
              <button
                className="askme-send-btn"
                type="submit"
                disabled={!input.trim() || isStreaming}
                aria-label="Send message"
                id="askme-send-btn"
              >
                {isStreaming ? (
                  <svg
                    className="askme-spinner"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12" cy="12" r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="askme-spinner-track"
                    />
                    <path
                      d="M12 2a10 10 0 0 1 10 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <Send size={15} />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
