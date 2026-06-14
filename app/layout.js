import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AskMe from "@/components/AskMe";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Mohd Anas — AI Engineer",
  description:
    "Engineering modular multi-agent architectures and optimization pipelines to transform unstructured operational chaos into production-grade AI systems.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LangGraph",
    "RAG",
    "Multi-Agent Systems",
    "Mohd Anas",
  ],
  openGraph: {
    title: "Mohd Anas — AI Engineer",
    description:
      "Engineering modular multi-agent systems — not demos, not wrappers. Production-grade AI.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body className="bg-[#FAF8F5] dark:bg-[#111110] text-[#2A2A28] dark:text-[#E8E6E1] font-[var(--font-inter)] transition-colors duration-300">
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
