"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { nowData } from "@/data/now";

export default function NowPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              /now
            </h1>
            <p className="text-sm text-gray-400 dark:text-gray-600 mb-2">
              Last updated: {nowData.lastUpdated}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
              {nowData.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {nowData.sections.map((section, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
                {section.title}
              </h2>
              <div className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                {section.content.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-gray-900 dark:text-white font-semibold">$1</strong>'
                        ),
                    }}
                  />
                ))}
              </div>
            </motion.article>
          ))}

          {/* Divider */}
          <div className="border-t border-gray-100 dark:border-white/5 pt-8 mt-16">
            <p className="text-xs text-gray-400 dark:text-gray-600 italic">
              This page is inspired by{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-violet-400 transition-colors"
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
