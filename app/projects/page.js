import { allProjects } from "@/data/portfolio";
import { ProjectCard } from "@/components/Projects";
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
      <section className="pt-32 pb-16 px-6 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-violet-400 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <p className="text-xs font-bold uppercase tracking-[3px] text-violet-400 mb-3">
            Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            All Projects
          </h1>
          <p className="text-base text-gray-500 max-w-lg mx-auto">
            Every project I&apos;ve built — from autonomous AI agents to full-stack applications
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
