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
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About"
          title="Who I Am"
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

          {/* Text — story, no emoji pills */}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
