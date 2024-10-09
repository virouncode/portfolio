type MobileNavProps = {
  activeSection: string;
  mobileNavRef: React.MutableRefObject<HTMLDivElement | null>;
  setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({
  activeSection,
  mobileNavRef,
  setIsMobileNavVisible,
}: MobileNavProps) => {
  const handleClick = () => {
    if (mobileNavRef.current) {
      mobileNavRef.current.style.transform = "translateX(-100%)";
    }
    setIsMobileNavVisible(false);
  };
  return (
    <nav
      className="fixed bg-transparent top-0 text-xl p-5 font-light z-10  backdrop-blur-3xl w-full h-full flex justify-center items-center translate-x-full transition-transform duration-300 ease-in-out lg:hidden"
      ref={mobileNavRef}
    >
      <ul className="flex flex-col gap-2">
        <li className="cursor-pointer hover:opacity-80" onClick={handleClick}>
          <a href="#hero">
            |{" "}
            <span className={activeSection === "hero" ? "underline" : ""}>
              Home
            </span>
          </a>
        </li>
        <li className="cursor-pointer hover:opacity-80" onClick={handleClick}>
          <a href="#projects">
            |{" "}
            <span className={activeSection === "projects" ? "underline" : ""}>
              Projects
            </span>
          </a>
        </li>
        <li className="cursor-pointer hover:opacity-80" onClick={handleClick}>
          <a href="#skills">
            |{" "}
            <span className={activeSection === "skills" ? "underline" : ""}>
              Skills
            </span>
          </a>
        </li>
        <li className="cursor-pointer hover:opacity-80" onClick={handleClick}>
          <a href="#about">
            |{" "}
            <span className={activeSection === "about" ? "underline" : ""}>
              About
            </span>
          </a>
        </li>
        {/* <li className="cursor-pointer hover:opacity-80">
          <a href="#contact">
            |{" "}
            <span className={activeSection === "contact" ? "underline" : ""}>
              Contact
            </span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default MobileNav;
