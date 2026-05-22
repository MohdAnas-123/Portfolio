"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionHeader from "./SectionHeader";
import { personalInfo, contactFormAction } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      await fetch(contactFormAction, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      // fallback: mailto
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  const contactLinks = [
    { icon: <Mail size={18} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <LinkedinIcon size={18} />, label: "LinkedIn", href: personalInfo.linkedin },
    { icon: <GithubIcon size={18} />, label: "GitHub", href: personalInfo.github },
    { icon: <MapPin size={18} />, label: personalInfo.location, href: null },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-50/50 dark:bg-[#0d0d14]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          subtitle="Have a role or project in mind? Let's talk."
        />

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-[15px] leading-relaxed">
              I&apos;m currently looking for <strong className="text-gray-900 dark:text-white font-semibold">AI/ML Engineer roles</strong> and
              am open to exciting opportunities. Feel free to reach out through
              the form or any of the channels below.
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 px-4 py-3 bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-white/8 rounded-xl text-sm text-gray-600 dark:text-gray-400 hover:border-violet-500/30 hover:text-violet-400 hover:translate-x-1 transition-all"
                    >
                      <span className="text-gray-400">{link.icon}</span>
                      {link.label}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3.5 px-4 py-3 bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-white/8 rounded-xl text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-gray-400">{link.icon}</span>
                      {link.label}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="text-lg font-bold mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-500">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a2e] text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a2e] text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    className="px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a2e] text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-y placeholder:text-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-violet-600 text-white hover:bg-violet-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25 cursor-pointer"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
