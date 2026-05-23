"use client";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { personalInfo, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-500/5 dark:bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Floating code fragments */}
      <motion.div
        className="absolute top-[18%] left-[8%] text-[11px] font-mono text-violet-400/20 dark:text-violet-400/15 select-none pointer-events-none hidden md:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {"{ agents: 3, rag: true }"}
      </motion.div>
      <motion.div
        className="absolute top-[30%] right-[6%] text-[11px] font-mono text-blue-400/20 dark:text-blue-400/15 select-none pointer-events-none hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        {"model.stream(messages)"}
      </motion.div>
      <motion.div
        className="absolute bottom-[22%] left-[12%] text-[11px] font-mono text-purple-400/20 dark:text-purple-400/15 select-none pointer-events-none hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        {"vectorStore.query(embedding)"}
      </motion.div>

      <div className="max-w-4xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          {personalInfo.availableForWork && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to Work
            </motion.div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.08] mb-4 tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-500 dark:text-gray-400 mb-5">
            {personalInfo.title}
          </p>

          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            {personalInfo.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-violet-600 text-white hover:bg-violet-500 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-violet-500 hover:text-violet-500 transition-all hover:-translate-y-0.5"
            >
              Contact Me
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-10 sm:gap-16 pt-8 border-t border-gray-100 dark:border-white/5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-violet-500 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
