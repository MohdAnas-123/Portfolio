"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import "./AskMe.css";

const SUGGESTIONS = [
  "What projects has Anas built?",
  "What's his tech stack?",
  "Tell me about his AI agents",
  "Is he available for work?",
];

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

      // Add user message
      setMessages((prev) => [...prev, { role: "user", text: question }]);
      setInput("");
      setIsStreaming(true);

      // Add empty bot message that we'll stream into
      const botMsgIndex = messages.length + 1;
      setMessages((prev) => [...prev, { role: "bot", text: "" }]);

      try {
        const res = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question, history: messages }),
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
          const currentText = accumulated;

          setMessages((prev) => {
            const updated = [...prev];
            updated[botMsgIndex] = { role: "bot", text: currentText };
            return updated;
          });
        }
      } catch (err) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[botMsgIndex] = {
            role: "bot",
            text:
              err.message ||
              "Sorry, something went wrong. Please try again later.",
          };
          return updated;
        });
      } finally {
        setIsStreaming(false);
      }
    },
    [isStreaming, messages.length]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleChipClick = (suggestion) => {
    sendMessage(suggestion);
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
            <Sparkles />
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
                  <p>AI-powered • Instant answers</p>
                </div>
              </div>
              <button
                className="askme-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                id="askme-close-btn"
              >
                <X />
              </button>
            </div>

            {/* Messages */}
            <div className="askme-messages" id="askme-messages">
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

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`askme-msg ${
                    msg.role === "user" ? "askme-msg-user" : "askme-msg-bot"
                  }`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg.text}
                </motion.div>
              ))}

              {/* Typing indicator — show only when streaming and last bot message is empty */}
              {isStreaming &&
                messages.length > 0 &&
                messages[messages.length - 1].text === "" && (
                  <div className="askme-typing">
                    <div className="askme-typing-dot" />
                    <div className="askme-typing-dot" />
                    <div className="askme-typing-dot" />
                  </div>
                )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Chips — only show when no messages yet */}
            {messages.length === 0 && (
              <div className="askme-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className="askme-chip"
                    onClick={() => handleChipClick(s)}
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
                <Send />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
