"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { personalInfo, aboutText } from "@/data/portfolio";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Section 02" title="The Masthead" />

        {/* Asymmetric 2-column: 40% sticky identity + 60% narrative */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 lg:gap-20">
          {/* Left — Identity Block (sticky on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            {/* Square headshot — magazine editorial crop */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-sm overflow-hidden mb-6">
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                width={400}
                height={400}
                priority
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <h3 className="font-display text-lg font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-1">
              {personalInfo.name}
            </h3>
            <p className="font-mono text-xs text-[#7A7A72] dark:text-[#8A8A82] uppercase tracking-wide mb-1">
              {personalInfo.tagline}
            </p>
            <p className="font-mono text-xs text-[#7A7A72] dark:text-[#8A8A82]">
              {personalInfo.location}
            </p>

            {/* Horizontal rule */}
            <div className="mt-6 w-full h-px bg-[#E5E3DE] dark:bg-[#2A2A28]" />
          </motion.div>

          {/* Right — Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-xl"
          >
            {aboutText.map((text, i) => (
              <p
                key={i}
                className="text-[#4A4A45] dark:text-[#B0AEA6] mb-6 text-[15px] leading-[1.85] last:mb-0"
                dangerouslySetInnerHTML={{
                  __html: text.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="text-[#2A2A28] dark:text-[#E8E6E1] font-semibold">$1</strong>'
                  ),
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
