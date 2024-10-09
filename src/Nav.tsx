type NavProps = {
  activeSection: string;
};

const Nav = ({ activeSection }: NavProps) => {
  return (
    <nav className="fixed bg-transparent bottom-0 text-xl p-5 right-0 font-light z-10 hidden lg:block backdrop-blur-sm">
      <ul className="flex flex-col gap-2">
        <li className="cursor-pointer hover:opacity-80">
          <a href="#hero">
            |{" "}
            <span className={activeSection === "hero" ? "underline" : ""}>
              Home
            </span>
          </a>
        </li>
        <li className="cursor-pointer hover:opacity-80">
          <a href="#projects">
            |{" "}
            <span className={activeSection === "projects" ? "underline" : ""}>
              Projects
            </span>
          </a>
        </li>
        <li className="cursor-pointer hover:opacity-80">
          <a href="#skills">
            |{" "}
            <span className={activeSection === "skills" ? "underline" : ""}>
              Skills
            </span>
          </a>
        </li>
        <li className="cursor-pointer hover:opacity-80">
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

export default Nav;
