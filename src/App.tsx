import { useEffect, useRef, useState } from "react";

import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <MobileNav
        activeSection={activeSection}
        mobileNavRef={mobileNavRef}
        setIsMobileNavVisible={setIsMobileNavVisible}
      />
      <Nav activeSection={activeSection} />
      <Header
        mobileNavRef={mobileNavRef}
        isMobileNavVisible={isMobileNavVisible}
        setIsMobileNavVisible={setIsMobileNavVisible}
      />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
      </main>
    </div>
  );
}
