"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { personalInfo, aboutText, aboutHighlights } from "@/data/portfolio";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About"
          title="Who I Am"
          subtitle="A passionate builder at the intersection of AI research and production engineering"
        />

        <div
          ref={ref}
          className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-center"
        >
          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white dark:bg-[#1a1a2e] rounded-full border border-gray-100 dark:border-white/8 p-3 sm:p-4 relative mx-auto w-64 h-64 sm:w-80 sm:h-80 shadow-2xl shadow-violet-500/5">
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-tr from-violet-500/30 to-blue-400/30 [mask-image:linear-gradient(white,white)] [-webkit-mask-image:-webkit-linear-gradient(white,white)] [-webkit-mask-composite:destination-out] [mask-composite:exclude]" />
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                width={400}
                height={400}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {aboutText.map((text, i) => (
              <p
                key={i}
                className="text-gray-600 dark:text-gray-400 mb-4 text-[15px] leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: text
                    .replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-gray-900 dark:text-white font-semibold">$1</strong>'
                    ),
                }}
              />
            ))}

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {aboutHighlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 text-sm text-gray-600 dark:text-gray-400 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all cursor-default"
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
