import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import StatTicker from "./components/StatTicker";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Hero />
      <StatTicker />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
