"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionHeader({ label, title, subtitle }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <p className="text-xs font-bold uppercase tracking-[3px] text-violet-400 mb-3">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-base text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
