"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { education } from "@/data/portfolio";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Education"
          title="Academic Background"
          subtitle="Foundation in Computer Science with AI/ML specialization"
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-1 gap-6 max-w-2xl mx-auto"
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-white/8 rounded-2xl p-7 relative overflow-hidden hover:border-violet-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-purple-400 to-blue-400" />
              <span className="text-3xl mb-4 block">{edu.icon}</span>
              <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
              <p className="text-sm text-violet-400 font-medium mb-1">
                {edu.school}
              </p>
              <p className="text-xs text-gray-400 mb-3">{edu.year}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
