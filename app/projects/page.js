import { allProjects, projectIndex } from "@/data/portfolio";
import { ProjectRow } from "@/components/Projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export const metadata = {
  title: "Index — Mohd Anas",
  description: "Complete project portfolio of Mohd Anas — AI agents, ML pipelines, and full-stack applications.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-8 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] hover:text-[#1a1a1a] dark:hover:text-[#F0EDE8] transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to cover
          </Link>
          <div className="mb-14">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B8F71] mb-3">
              Appendix
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-4">
              Project Index
            </h1>
            <p className="text-base text-[#7A7A72] dark:text-[#8A8A82] max-w-lg">
              Case studies and the complete technical registry.
            </p>
            <div className="mt-4 w-12 h-px bg-[#6B8F71]/40" />
          </div>
        </div>
      </section>

      {/* Editorial List (Case Studies) */}
      <section className="pb-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] mb-6">
            Detailed Case Studies
          </h2>
          <div className="border-t border-[#E5E3DE] dark:border-[#2A2A28]">
            {allProjects.map((project, i) => (
              <ProjectRow key={project.id} project={project} index={i} animate={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Full Registry (Table) */}
      <section className="pb-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] mb-6 mt-8">
            Complete Technical Registry
          </h2>
          <div className="overflow-x-auto border-t border-[#E5E3DE] dark:border-[#2A2A28] pt-4">
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
                {projectIndex.map((p) => (
                  <tr
                    key={p.name}
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
