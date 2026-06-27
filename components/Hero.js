"use client";
import { motion } from "framer-motion";
import { personalInfo, infoBar } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative px-6 sm:px-10 lg:px-16 pt-24 pb-20"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 30/70 Split — Identity + Manifesto */}
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 lg:gap-20 items-end">
            {/* Left Column — Identity Block */}
            <div className="lg:pb-2">
              {/* Available badge */}
              {personalInfo.availableForWork && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase text-[#6B8F71] border border-[#6B8F71]/20 mb-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B8F71] animate-pulse" />
                  Available Now
                </motion.div>
              )}

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2A2A28] dark:text-[#E8E6E1] mb-2">
                {personalInfo.name}
              </h2>
              <p className="font-mono text-xs text-[#7A7A72] dark:text-[#8A8A82] tracking-wide uppercase mb-1">
                {personalInfo.tagline}
              </p>
              <p className="font-mono text-xs text-[#7A7A72] dark:text-[#8A8A82]">
                {personalInfo.location}
              </p>
            </div>

            {/* Right Column — Differentiation Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] dark:text-[#F0EDE8]">
                {personalInfo.description}
              </h1>
            </motion.div>
          </div>

          {/* Info Bar — Data Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-8 border-t border-[#E5E3DE] dark:border-[#2A2A28]"
          >
            <div className="grid grid-cols-3 gap-6 sm:gap-10">
              {infoBar.map((item) => (
                <div key={item.label}>
                  <div className="font-mono text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] mb-1.5">
                    {item.label}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-[#2A2A28] dark:text-[#E8E6E1]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs — text links & button, editorial style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-8"
          >
            <a
              href="#projects"
              className="text-sm font-medium text-[#6B8F71] border-b border-[#6B8F71]/40 pb-0.5 hover:border-[#6B8F71] transition-colors"
            >
              View Selected Work ↓
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-[#7A7A72] dark:text-[#8A8A82] border-b border-[#7A7A72]/30 pb-0.5 hover:text-[#6B8F71] hover:border-[#6B8F71] transition-colors"
            >
              Get In Touch
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] font-medium px-6 py-3 border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#FAF8F5] dark:border-[#F0EDE8] dark:text-[#F0EDE8] dark:hover:bg-[#F0EDE8] dark:hover:text-[#111110] transition-colors"
            >
              Download Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
