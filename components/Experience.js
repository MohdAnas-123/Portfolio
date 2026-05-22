"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gray-50/50 dark:bg-[#0d0d14]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Where I've Worked"
          subtitle="Building AI systems and production backends"
        />

        <div ref={ref} className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/8" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative pl-14 mb-10 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute left-[13px] top-1.5 w-[14px] h-[14px] rounded-full bg-white dark:bg-[#0d0d14] border-[3px] border-violet-500 z-10" />

              <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-white/8 rounded-xl p-6 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300">
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1.5">
                  {exp.date}
                </p>
                <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {exp.company}
                </p>
                <ul className="space-y-2">
                  {exp.details.map((detail, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-500 dark:text-gray-500 pl-4 relative leading-relaxed"
                    >
                      <span className="absolute left-0 text-violet-400">▹</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
