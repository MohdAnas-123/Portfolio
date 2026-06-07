import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AskMe from "@/components/AskMe";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Mohd Anas — AI Engineer",
  description:
    "I build AI agents that actually work. Multi-agent systems, RAG pipelines, and production ML — not demos, not wrappers.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LangGraph",
    "RAG",
    "Portfolio",
    "Mohd Anas",
  ],
  openGraph: {
    title: "Mohd Anas — AI Engineer",
    description:
      "I build AI agents that actually work. Multi-agent systems, RAG pipelines, and production ML.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-gray-100 font-[var(--font-inter)] transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AskMe />
        </ThemeProvider>
      </body>
    </html>
  );
}
