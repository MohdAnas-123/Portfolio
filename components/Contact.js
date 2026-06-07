"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, MapPin, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionHeader from "./SectionHeader";
import { personalInfo, contactFormAction } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");

    try {
      const res = await fetch(contactFormAction, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      form.reset();

      // Reset to idle after 5 seconds so user can send again
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      // Reset to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactLinks = [
    { icon: <Mail size={18} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <LinkedinIcon size={18} />, label: "LinkedIn", href: personalInfo.linkedin },
    { icon: <GithubIcon size={18} />, label: "GitHub", href: personalInfo.github },
    { icon: <MapPin size={18} />, label: personalInfo.location, href: null },
  ];

  const isSending = status === "sending";

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-50/50 dark:bg-[#0d0d14]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
        />

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-[15px] leading-relaxed">
              I&apos;m graduating in June 2026 and actively looking for{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">
                AI/ML roles
              </strong>
              . If you&apos;re building something in the agentic AI space — or
              if you just want to talk about why most RAG pipelines fail in
              production — I&apos;d genuinely enjoy that conversation.
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 px-4 py-3 bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-white/8 rounded-xl text-sm text-gray-600 dark:text-gray-400 hover:border-violet-500/30 hover:text-violet-400 hover:translate-x-1 transition-all"
                    >
                      <span className="text-gray-400">{link.icon}</span>
                      {link.label}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3.5 px-4 py-3 bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-white/8 rounded-xl text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-gray-400">{link.icon}</span>
                      {link.label}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={isSending}
                  placeholder="Your name"
                  className="px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a2e] text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={isSending}
                  placeholder="your@email.com"
                  className="px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a2e] text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  disabled={isSending}
                  placeholder="Tell me about the opportunity..."
                  className="px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a2e] text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-y placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-violet-600 text-white hover:bg-violet-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {isSending ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              {/* Feedback Toast */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium"
                  >
                    <CheckCircle2 size={16} />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium"
                  >
                    <XCircle size={16} />
                    Failed to send. Try{" "}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="underline hover:text-red-500"
                    >
                      emailing directly
                    </a>
                    .
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
