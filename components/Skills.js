"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projectIndex, personalInfo } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B8F71] mb-3">
            Section 05
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-2">
            The Index
          </h2>
          <p className="text-base text-[#7A7A72] dark:text-[#8A8A82] max-w-lg">
            A clean directory to production code. Zero dead links.
          </p>
          <div className="mt-4 w-12 h-px bg-[#6B8F71]/40" />
        </motion.div>

        {/* Project Registry Table */}
        <div ref={ref} className="overflow-x-auto">
          <table className="w-full font-mono text-xs">
            <thead>
              <tr className="border-b border-[#E5E3DE] dark:border-[#2A2A28]">
                <th className="text-left py-3 pr-4 text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] font-medium">
                  Project
                </th>
                <th className="text-left py-3 pr-4 text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] font-medium hidden sm:table-cell">
                  Stack
                </th>
                <th className="text-left py-3 pr-4 text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] font-medium">
                  Source
                </th>
                <th className="text-left py-3 text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] font-medium">
                  Live
                </th>
              </tr>
            </thead>
            <tbody>
              {projectIndex.map((p, i) => (
                <motion.tr
                  key={p.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="border-b border-[#E5E3DE]/50 dark:border-[#2A2A28]/50 last:border-b-0"
                >
                  <td className="py-4 pr-4 text-[#2A2A28] dark:text-[#E8E6E1] font-medium">
                    {p.name}
                  </td>
                  <td className="py-4 pr-4 text-[#7A7A72] dark:text-[#8A8A82] hidden sm:table-cell">
                    {p.stack}
                  </td>
                  <td className="py-4 pr-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#7A7A72] dark:text-[#8A8A82] hover:text-[#6B8F71] transition-colors"
                    >
                      <GithubIcon size={12} />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  </td>
                  <td className="py-4">
                    {p.live ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#6B8F71] hover:text-[#5A7D60] transition-colors"
                      >
                        <ExternalLink size={12} />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                    ) : (
                      <span className="text-[#7A7A72]/40 dark:text-[#8A8A82]/40">—</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contact Grid */}
        <div className="mt-16 pt-8 border-t border-[#E5E3DE] dark:border-[#2A2A28]">
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-sm sm:text-base text-[#1a1a1a] dark:text-[#F0EDE8] hover:text-[#6B8F71] transition-colors font-semibold"
            >
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm sm:text-base text-[#1a1a1a] dark:text-[#F0EDE8] hover:text-[#6B8F71] transition-colors font-semibold"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm sm:text-base text-[#1a1a1a] dark:text-[#F0EDE8] hover:text-[#6B8F71] transition-colors font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
