import { allProjects } from "@/data/portfolio";
import { ProjectRow } from "@/components/Projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "All Projects — Mohd Anas",
  description: "Complete project portfolio of Mohd Anas — AI agents, ML pipelines, and full-stack applications.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
          <p className="text-xs font-bold uppercase tracking-[3px] text-violet-400 mb-3">
            Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            All Projects
          </h1>
          <p className="text-base text-gray-500 max-w-lg">
            Everything I&apos;ve built — from autonomous AI agents to full-stack applications
          </p>
        </div>
      </section>

      {/* Editorial List */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto border-t border-gray-100 dark:border-white/6">
          {allProjects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
