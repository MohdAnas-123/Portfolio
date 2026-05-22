"use client";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const socials = [
    { icon: <GithubIcon size={16} />, href: personalInfo.github, label: "GitHub" },
    { icon: <LinkedinIcon size={16} />, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="py-10 px-6 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:border-violet-500 hover:text-violet-400 hover:-translate-y-1 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
          Built with <Heart size={12} className="text-violet-400" /> by {personalInfo.name} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
