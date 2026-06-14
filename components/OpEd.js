"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { systemPrinciples, opEdArticle } from "@/data/portfolio";

export default function OpEd() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="perspective" className="py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B8F71] mb-3">
            Section 04
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-2">
            Perspective
          </h2>
          <p className="text-base text-[#7A7A72] dark:text-[#8A8A82] max-w-lg">
            System principles and an opinionated teardown.
          </p>
          <div className="mt-4 w-12 h-px bg-[#6B8F71]/40" />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 lg:gap-20">
          {/* Left Column — System Principles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B8F71] mb-6 font-medium">
              Engineering Principles
            </p>

            <div className="space-y-8">
              {systemPrinciples.map((p) => (
                <div key={p.number}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-xs text-[#6B8F71]">
                      {p.number}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#1a1a1a] dark:text-[#F0EDE8]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#4A4A45] dark:text-[#B0AEA6] leading-[1.75] pl-8">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Op-Ed Article (IEEE Teardown) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Narrow reading column — newspaper style */}
            <article className="max-w-xl">
              <div className="mb-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B8F71] mb-3 font-medium">
                  Opinionated Teardown
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-3 leading-snug">
                  {opEdArticle.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-[#7A7A72] dark:text-[#8A8A82]">
                    {opEdArticle.date}
                  </span>
                  <span className="text-[#E5E3DE] dark:text-[#2A2A28]">·</span>
                  <span className="font-mono text-[10px] text-[#7A7A72] dark:text-[#8A8A82]">
                    {opEdArticle.venue}
                  </span>
                </div>
                <div className="w-full h-px bg-[#E5E3DE] dark:bg-[#2A2A28] mb-6" />
              </div>

              <div className="space-y-5">
                {opEdArticle.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[14px] text-[#4A4A45] dark:text-[#B0AEA6] leading-[1.85]"
                    dangerouslySetInnerHTML={{
                      __html: paragraph.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-[#2A2A28] dark:text-[#E8E6E1] font-semibold">$1</strong>'
                      ),
                    }}
                  />
                ))}
              </div>

              {/* DOI and link */}
              <div className="mt-8 pt-6 border-t border-[#E5E3DE] dark:border-[#2A2A28]">
                <p className="font-mono text-[10px] text-[#7A7A72] dark:text-[#8A8A82] mb-2">
                  DOI: {opEdArticle.doi}
                </p>
                <a
                  href={opEdArticle.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#6B8F71] border-b border-[#6B8F71]/40 pb-0.5 hover:border-[#6B8F71] transition-colors"
                >
                  Read on IEEE Xplore →
                </a>
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
