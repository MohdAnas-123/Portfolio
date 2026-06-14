"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { GithubIcon } from "./icons";
import Link from "next/link";

function CaseStudy({ project, index = 0, animate = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shouldAnimate = animate && inView;
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-b border-[#E5E3DE] dark:border-[#2A2A28] last:border-b-0"
    >
      {/* Row Header — click to expand */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 sm:gap-6 py-6 sm:py-8 text-left group cursor-pointer"
      >
        {/* Number */}
        <span className="font-mono text-sm font-medium text-[#6B8F71] flex-shrink-0 w-8 tabular-nums">
          {project.number}
        </span>

        {/* Title */}
        <span className="font-display text-lg sm:text-xl font-semibold text-[#1a1a1a] dark:text-[#F0EDE8] group-hover:text-[#6B8F71] transition-colors flex-1 min-w-0">
          {project.title}
        </span>

        {/* Tech stack — hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="font-mono px-2.5 py-0.5 rounded text-[10px] font-medium bg-[#F2F0EB] dark:bg-[#1A1A18] text-[#7A7A72] dark:text-[#8A8A82] border border-[#E5E3DE] dark:border-[#2A2A28]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="font-mono text-[10px] text-[#7A7A72] dark:text-[#8A8A82]">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Expand indicator */}
        <ChevronDown
          size={16}
          className={`text-[#7A7A72] dark:text-[#8A8A82] flex-shrink-0 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded — Full Case Study */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12 sm:pl-14 pr-4">
              {/* Headline + Metric — the editorial hook */}
              {project.headline && (
                <p className="font-display text-sm italic text-[#4A4A45] dark:text-[#B0AEA6] mb-6 max-w-2xl">
                  {project.headline}
                </p>
              )}

              {/* Metrics — massive, 3x body text */}
              {project.metric && (
                <div className="mb-8 flex flex-wrap items-baseline gap-x-8 gap-y-2">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#6B8F71]">
                    {project.metric}
                  </span>
                  {project.metricSecondary && (
                    <>
                      <span className="text-[#E5E3DE] dark:text-[#2A2A28] text-2xl font-light">//</span>
                      <span className="font-display text-3xl sm:text-4xl font-bold text-[#6B8F71]">
                        {project.metricSecondary}
                      </span>
                    </>
                  )}
                </div>
              )}

              {/* Problem statement — the operational mess */}
              {project.problem && (
                <div className="mb-6 border-l-2 border-[#6B8F71]/30 pl-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] mb-1">
                    The Problem
                  </p>
                  <p className="text-sm italic text-[#4A4A45] dark:text-[#B0AEA6] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-[#4A4A45] dark:text-[#B0AEA6] leading-[1.8] mb-6 max-w-2xl">
                {project.description}
              </p>

              {/* Technical Decisions (highlights) */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="mb-6 space-y-2">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-xs text-[#4A4A45] dark:text-[#B0AEA6] pl-5 relative leading-relaxed"
                    >
                      <span className="absolute left-0 text-[#6B8F71] font-mono">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {/* Trade-off Box — the architecture decision callout */}
              {project.tradeoff && (
                <div className="mb-6 bg-[#F2F0EB] dark:bg-[#1A1A18] border border-[#E5E3DE] dark:border-[#2A2A28] rounded-sm p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B8F71] mb-2 font-medium">
                    Architecture Decision
                  </p>
                  <p className="text-xs text-[#4A4A45] dark:text-[#B0AEA6] leading-[1.75]">
                    {project.tradeoff}
                  </p>
                </div>
              )}

              {/* All tech tags (mobile shows them here) */}
              <div className="flex flex-wrap gap-2 mb-6 sm:hidden">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono px-2.5 py-0.5 rounded text-[10px] font-medium bg-[#F2F0EB] dark:bg-[#1A1A18] text-[#7A7A72] dark:text-[#8A8A82] border border-[#E5E3DE] dark:border-[#2A2A28]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links — text links, minimal */}
              <div className="flex gap-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#7A7A72] dark:text-[#8A8A82] hover:text-[#6B8F71] transition-colors border-b border-transparent hover:border-[#6B8F71]/40 pb-0.5"
                  >
                    <GithubIcon size={13} />
                    Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#7A7A72] dark:text-[#8A8A82] hover:text-[#6B8F71] transition-colors border-b border-transparent hover:border-[#6B8F71]/40 pb-0.5"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export { CaseStudy as ProjectRow };

export default function FeaturedProjects({ projects }) {
  return (
    <section id="projects" className="py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B8F71] mb-3">
            Section 03
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-2">
            Feature Articles
          </h2>
          <p className="text-base text-[#7A7A72] dark:text-[#8A8A82] max-w-lg">
            Three deep projects. No filler.
          </p>
          <div className="mt-4 w-12 h-px bg-[#6B8F71]/40" />
        </div>

        {/* Case studies list */}
        <div className="border-t border-[#E5E3DE] dark:border-[#2A2A28]">
          {projects.map((project, i) => (
            <CaseStudy key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/projects"
            className="text-sm font-medium text-[#7A7A72] dark:text-[#8A8A82] hover:text-[#6B8F71] transition-colors border-b border-[#7A7A72]/30 pb-0.5 hover:border-[#6B8F71]/40"
          >
            View full project index →
          </Link>
        </div>
      </div>
    </section>
  );
}
