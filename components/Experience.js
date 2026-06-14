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
      className="py-24 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Where I've Worked"
        />

        <div ref={ref} className="max-w-2xl space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <p className="font-mono text-xs text-[#6B8F71] uppercase tracking-wide mb-1">
                {exp.date}
              </p>
              <h3 className="font-display text-lg font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-0.5">
                {exp.role}
              </h3>
              <p className="text-sm text-[#7A7A72] dark:text-[#8A8A82] mb-4">
                {exp.company}
              </p>
              <ul className="space-y-2">
                {exp.details.map((detail, j) => (
                  <li
                    key={j}
                    className="text-sm text-[#4A4A45] dark:text-[#B0AEA6] pl-5 relative leading-relaxed"
                  >
                    <span className="absolute left-0 text-[#6B8F71] font-mono">—</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
