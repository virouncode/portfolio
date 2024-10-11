type NavProps = {
  activeSection: string;
};

const Nav = ({ activeSection }: NavProps) => {
  return (
    <nav
      className="fixed bg-transparent  text-xl p-5 font-light z-10 hidden lg:block backdrop-blur-sm fixed-menu"
      aria-label="desktop-navigation"
    >
      <ul className="flex flex-col gap-2">
        <li className="cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-200 ease-in-out">
          <a href="#hero">
            |{" "}
            <span className={activeSection === "hero" ? "underline" : ""}>
              Home
            </span>
          </a>
        </li>
        <li className="cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-200 ease-in-out">
          <a href="#projects">
            |{" "}
            <span className={activeSection === "projects" ? "underline" : ""}>
              Projects
            </span>
          </a>
        </li>
        <li className="cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-200 ease-in-out">
          <a href="#skills">
            |{" "}
            <span className={activeSection === "skills" ? "underline" : ""}>
              Skills
            </span>
          </a>
        </li>
        <li className="cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-200 ease-in-out">
          <a href="#about">
            |{" "}
            <span className={activeSection === "about" ? "underline" : ""}>
              About
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
