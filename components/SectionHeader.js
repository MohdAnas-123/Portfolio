"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionHeader({ label, title, subtitle }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B8F71] mb-3">
        {label}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-[#7A7A72] dark:text-[#8A8A82] max-w-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-12 h-px bg-[#6B8F71]/40" />
    </motion.div>
  );
}
