"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Masthead", href: "/#about" },
    { name: "Articles", href: "/#projects" },
    { name: "Perspective", href: "/#perspective" },
    { name: "Index", href: "/#skills" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 dark:bg-[#111110]/90 backdrop-blur-md border-b border-[#E5E3DE] dark:border-[#2A2A28] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo — Serif, print style */}
        <Link
          href="/"
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#F0EDE8]"
        >
          MA<span className="text-[#6B8F71]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] hover:text-[#1a1a1a] dark:hover:text-[#F0EDE8] transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle — minimal */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] hover:text-[#1a1a1a] dark:hover:text-[#F0EDE8] transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>

        {/* Mobile Theme Toggle (only visible on mobile, no hamburger menu needed for minimal design) */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="md:hidden font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] hover:text-[#1a1a1a] dark:hover:text-[#F0EDE8] transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
