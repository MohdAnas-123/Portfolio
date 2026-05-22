"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gray-50/50 dark:bg-[#0d0d14]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Skills"
          title="Tech Stack & Tools"
          subtitle="Technologies I use to build intelligent systems"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-white/8 rounded-2xl p-6 hover:border-violet-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/8 text-gray-600 dark:text-gray-400 hover:border-violet-500/40 hover:text-violet-400 hover:bg-violet-500/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
