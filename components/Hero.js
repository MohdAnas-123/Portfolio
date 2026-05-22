"use client";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import { personalInfo, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-500/5 dark:bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          {/* Badge */}
          {personalInfo.availableForWork && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to Work
            </motion.div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-3 tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-5">
            {personalInfo.title}
          </p>

          <p className="text-base text-gray-500 dark:text-gray-500 max-w-md leading-relaxed mb-8">
            {personalInfo.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-violet-600 text-white hover:bg-violet-500 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-violet-500 hover:text-violet-500 transition-all hover:-translate-y-0.5"
            >
              Contact Me
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10 pt-8 border-t border-gray-100 dark:border-white/5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold bg-gradient-to-r from-violet-500 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Avatar Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-violet-500/20 to-blue-400/20 rounded-full blur-2xl" />
            {/* Spinning ring */}
            <div className="absolute -inset-2 rounded-full p-[3px] bg-gradient-to-r from-violet-500 via-purple-400 to-blue-400 animate-[spin_10s_linear_infinite]">
              <div className="w-full h-full rounded-full bg-white dark:bg-[#0a0a0f]" />
            </div>
            {/* Image */}
            <Image
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              width={320}
              height={320}
              className="absolute inset-0 w-full h-full rounded-full object-cover border-4 border-white dark:border-[#0a0a0f]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
