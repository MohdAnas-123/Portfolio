import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-10 px-6 sm:px-10 lg:px-16 border-t border-[#E5E3DE] dark:border-[#2A2A28]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Colophon */}
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82]">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>

        {/* Minimal Nav / Meta */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82]">
            Typeset in Playfair & JetBrains
          </span>
        </div>
      </div>
    </footer>
  );
}
