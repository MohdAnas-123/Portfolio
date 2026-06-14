"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { education } from "@/data/portfolio";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#F2F0EB] dark:bg-[#151514]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Education"
          title="Academic Record"
        />

        <div ref={ref} className="max-w-2xl space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <p className="font-mono text-xs text-[#6B8F71] uppercase tracking-wide mb-1">
                {edu.year}
              </p>
              <h3 className="font-display text-lg font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-0.5">
                {edu.degree}
              </h3>
              <p className="text-sm text-[#7A7A72] dark:text-[#8A8A82] mb-3">
                {edu.school}
              </p>
              <p className="text-sm text-[#4A4A45] dark:text-[#B0AEA6] leading-[1.75]">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
