"use client";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personalInfo, humanLine } from "@/data/portfolio";

const poweredBy = [
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    url: "https://nextjs.org",
  },
  {
    name: "Gemini",
    icon: null,
    emoji: "✨",
    url: "https://ai.google.dev",
  },
  {
    name: "Pinecone",
    icon: null,
    emoji: "🌲",
    url: "https://pinecone.io",
  },
  {
    name: "LangChain",
    icon: null,
    emoji: "🔗",
    url: "https://langchain.com",
  },
  {
    name: "Framer Motion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    url: "https://motion.dev",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    url: "https://vercel.com",
  },
];

export default function Footer() {
  const socials = [
    { icon: <GithubIcon size={16} />, href: personalInfo.github, label: "GitHub" },
    { icon: <LinkedinIcon size={16} />, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="py-10 px-6 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Powered By */}
        <div className="text-center mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 mb-4">
            Built &amp; Powered By
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {poweredBy.map((tech) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-violet-400 transition-colors"
                title={tech.name}
              >
                {tech.icon ? (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    width={14}
                    height={14}
                    className="opacity-50 group-hover:opacity-100 transition-opacity dark:invert"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-[11px] opacity-60 group-hover:opacity-100 transition-opacity">
                    {tech.emoji}
                  </span>
                )}
                {tech.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 dark:border-white/5 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:border-violet-500 hover:text-violet-400 hover:-translate-y-0.5 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Human line + Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-xs text-gray-400 dark:text-gray-600 italic mb-1">
                {humanLine}
              </p>
              <p className="text-xs text-gray-400 flex items-center gap-1 justify-center sm:justify-end">
                Built with <Heart size={12} className="text-violet-400" /> by {personalInfo.name} © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
