"use client";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { personalInfo, infoBar } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-6 pt-24 pb-20"
    >
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          {personalInfo.availableForWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-emerald-500 border border-emerald-500/20 mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available Now
            </motion.div>
          )}

          {/* Name — raw, massive, no gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6">
            {personalInfo.name}
          </h1>

          {/* Description — human, specific */}
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-10">
            {personalInfo.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold border border-gray-200 dark:border-white/15 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-white/30 transition-colors"
            >
              Contact Me
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Info Bar — clean data table, no gradients */}
          <div className="border-t border-gray-200 dark:border-white/10 pt-8">
            <div className="grid grid-cols-3 gap-6 sm:gap-10">
              {infoBar.map((item) => (
                <div key={item.label}>
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-600 mb-1.5">
                    {item.label}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
