"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import { personalInfo, contactFormAction } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 lg:px-16 bg-[#F2F0EB] dark:bg-[#151514]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Section 06"
          title="Contact Form"
          subtitle="Direct inquiries and consulting requests."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-24">
          {/* Left Column — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10">
              <p className="font-display text-lg font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-2">
                Available for Work
              </p>
              <p className="text-sm text-[#4A4A45] dark:text-[#B0AEA6] leading-[1.75]">
                Currently open for roles in AI Engineering, Applied ML, and backend architecture. If you're building systems that require deterministic guarantees rather than generic wrappers, let's talk.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-medium text-[#2A2A28] dark:text-[#E8E6E1] hover:text-[#6B8F71] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82] mb-1">
                  Location
                </p>
                <p className="text-sm font-medium text-[#2A2A28] dark:text-[#E8E6E1]">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Editorial Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {formStatus === "success" ? (
              <div className="h-full flex flex-col justify-center items-center text-center p-8 border border-[#E5E3DE] dark:border-[#2A2A28] bg-[#FAF8F5] dark:bg-[#111110]">
                <span className="text-4xl mb-4">✉️</span>
                <h3 className="font-display text-xl font-bold text-[#1a1a1a] dark:text-[#F0EDE8] mb-2">
                  Message Sent
                </h3>
                <p className="text-sm text-[#7A7A72] dark:text-[#8A8A82]">
                  Thank you for reaching out. I'll reply shortly.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 text-xs font-medium text-[#6B8F71] border-b border-[#6B8F71]/40 pb-0.5 hover:border-[#6B8F71] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action={contactFormAction}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-[#E5E3DE] dark:border-[#2A2A28] py-2 text-sm text-[#1a1a1a] dark:text-[#F0EDE8] focus:border-[#6B8F71] dark:focus:border-[#6B8F71] outline-none transition-colors rounded-none px-0"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b border-[#E5E3DE] dark:border-[#2A2A28] py-2 text-sm text-[#1a1a1a] dark:text-[#F0EDE8] focus:border-[#6B8F71] dark:focus:border-[#6B8F71] outline-none transition-colors rounded-none px-0"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7A7A72] dark:text-[#8A8A82]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-[#E5E3DE] dark:border-[#2A2A28] py-2 text-sm text-[#1a1a1a] dark:text-[#F0EDE8] focus:border-[#6B8F71] dark:focus:border-[#6B8F71] outline-none transition-colors resize-none rounded-none px-0"
                    placeholder="How can we work together?"
                  />
                </div>

                {/* Error Message */}
                {formStatus === "error" && (
                  <p className="text-xs text-red-500 font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="font-mono text-xs uppercase tracking-[0.15em] font-medium text-[#1a1a1a] dark:text-[#F0EDE8] hover:text-[#6B8F71] dark:hover:text-[#6B8F71] border-b border-[#1a1a1a] dark:border-[#F0EDE8] hover:border-[#6B8F71] dark:hover:border-[#6B8F71] pb-0.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-block mt-4"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
