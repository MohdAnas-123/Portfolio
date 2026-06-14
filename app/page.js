import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/Projects";
import OpEd from "@/components/OpEd";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { featuredProjects } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects projects={featuredProjects} />
      <OpEd />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
