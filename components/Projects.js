"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import Link from "next/link";

export function ProjectCard({ project, index = 0, animate = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldAnimate = animate && inView;

  return (
    <motion.div
      ref={ref}
      initial={animate ? { opacity: 0, y: 40 } : false}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-white/8 rounded-2xl overflow-hidden hover:border-violet-500/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet-500/5 transition-all duration-300 group relative"
    >
      {/* Top accent line */}
      <div className="h-[3px] bg-gradient-to-r from-violet-500 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Header */}
      <div className="px-7 pt-6 flex justify-between items-start">
        <span className="font-mono text-xs text-violet-400 font-medium">
          {project.number}
        </span>
        <div className="flex gap-2.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:border-violet-500 hover:text-violet-400 hover:bg-violet-500/5 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={15} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:border-violet-500 hover:text-violet-400 hover:bg-violet-500/5 transition-all"
              aria-label="Live Demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="px-7 py-5">
        <h3 className="text-lg font-bold mb-2.5 group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
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

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-[11px] font-semibold bg-violet-500/8 text-violet-400 border border-violet-500/15 tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects({ projects }) {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[3px] text-violet-400 mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Featured Work
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-500 max-w-lg mx-auto">
            Production-grade AI systems I&apos;ve designed and built
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-violet-500 hover:text-violet-400 transition-all hover:-translate-y-0.5"
          >
            View All Projects
            <ExternalLink size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
