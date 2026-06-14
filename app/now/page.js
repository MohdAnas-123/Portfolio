"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { nowData } from "@/data/now";

export default function NowPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] hover:text-[#1a1a1a] dark:hover:text-[#F0EDE8] transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to cover
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B8F71] mb-3">
                Live Status
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-4">
                /now
              </h1>
              <p className="font-mono text-xs text-[#7A7A72] dark:text-[#8A8A82] mb-6">
                Last updated: {nowData.lastUpdated}
              </p>
              <div className="w-12 h-px bg-[#6B8F71]/40" />
            </div>
            
            <p className="text-base text-[#4A4A45] dark:text-[#B0AEA6] leading-[1.85] italic mb-12">
              {nowData.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto border-t border-[#E5E3DE] dark:border-[#2A2A28] pt-12">
          {nowData.sections.map((section, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className="mb-14 last:mb-0"
            >
              <h2 className="font-display text-2xl font-bold mb-4 text-[#1a1a1a] dark:text-[#F0EDE8]">
                {section.title}
              </h2>
              <div className="text-[15px] text-[#4A4A45] dark:text-[#B0AEA6] leading-[1.85] space-y-4">
                {section.content.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-[#2A2A28] dark:text-[#E8E6E1] font-semibold">$1</strong>'
                        ),
                    }}
                  />
                ))}
              </div>
            </motion.article>
          ))}

          {/* Divider */}
          <div className="border-t border-[#E5E3DE] dark:border-[#2A2A28] pt-8 mt-16">
            <p className="font-mono text-[10px] text-[#7A7A72] dark:text-[#8A8A82] uppercase tracking-wide">
              This page is inspired by{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B8F71] hover:underline"
              >
                nownownow.com
              </a>
              . It&apos;s a snapshot, not a résumé.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
