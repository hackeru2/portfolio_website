import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Intro from "@/app/components/Intro";
import SectionDivider from "./components/SectionDivider";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
