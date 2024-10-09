import { useEffect, useRef, useState } from "react";

import About from "./About";
import Header from "./Header";
import Hero from "./Hero";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";

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
      { threshold: 0.5 } // Adjust threshold based on when you want the section to be considered "in view"
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
      <Hero />
      <Projects />
      <Skills />
      <About />
      {/* <section
        className="h-[calc(100vh-50px)] bg-blue-400 flex items-center gap-20 justify-center bg-[url('./assets/img/horizon-animated.svg')] bg-no-repeat bg-center bg-cover scroll-mt-11 lg:scroll-mt-14"
        id="contact"
      >
        Contact
      </section> */}
    </div>
  );
}
