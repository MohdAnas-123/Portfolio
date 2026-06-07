"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { GithubIcon } from "./icons";
import Link from "next/link";

export function ProjectRow({ project, index = 0, animate = true }) {
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
      className="border-b border-gray-100 dark:border-white/6 last:border-b-0"
    >
      {/* Row Header — click to expand */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 sm:gap-6 py-5 sm:py-6 text-left group cursor-pointer"
      >
        {/* Number */}
        <span className="font-mono text-xs text-gray-300 dark:text-gray-600 flex-shrink-0 w-6 tabular-nums">
          {project.number}
        </span>

        {/* Title */}
        <span className="text-base sm:text-lg font-semibold group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors flex-1 min-w-0">
          {project.title}
        </span>

        {/* Tech stack — hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-gray-500 border border-gray-200 dark:border-white/8"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] text-gray-400 dark:text-gray-600">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Expand indicator */}
        <ChevronDown
          size={16}
          className={`text-gray-300 dark:text-gray-600 flex-shrink-0 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded Detail */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-10 sm:pl-12 pr-4">
              {/* Problem statement — the hook */}
              {project.problem && (
                <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-4 border-l-2 border-violet-500/30 pl-4">
                  {project.problem}
                </p>
              )}

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="mb-5 space-y-1.5">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-xs text-gray-500 dark:text-gray-500 pl-4 relative"
                    >
                      <span className="absolute left-0 text-violet-400">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {/* All tech tags (mobile shows them here) */}
              <div className="flex flex-wrap gap-2 mb-5 sm:hidden">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-gray-500 border border-gray-200 dark:border-white/8"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-violet-500 hover:text-violet-400 transition-all"
                  >
                    <GithubIcon size={13} />
                    Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-violet-500 hover:text-violet-400 transition-all"
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

export default function FeaturedProjects({ projects }) {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[3px] text-violet-400 mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Selected Work
          </h2>
        </div>

        {/* Editorial list */}
        <div className="border-t border-gray-100 dark:border-white/6">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-violet-400 transition-colors"
          >
            View all projects
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
