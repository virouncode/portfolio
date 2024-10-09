import { useState } from "react";
import CalvinEMRProject from "./CalvinEMRProject";
import TooolProject from "./TooolProject";
import nextProject from "./assets/img/nextProject.png";
import previousProject from "./assets/img/previousProject.png";
const projectsNames = ["calvinemr", "toool"];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const handleClickNextProject = () => {
    setSelectedProject((index) => (index + 1) % projectsNames.length);
  };
  const handleClickPreviousProject = () => {
    setSelectedProject((index) =>
      index - 1 >= 0 ? index - 1 : projectsNames.length + (index - 1)
    );
  };
  return (
    <section
      className="h-[calc(100vh-45px)] lg:h-[calc(100vh-50px)] bg-cream flex flex-col items-center gap-4 p-5 scroll-mt-11 lg:scroll-mt-14 relative"
      id="projects"
    >
      <div className="md:absolute md:top-0 md:right-0 md:p-2 flex gap-2">
        <img
          src={previousProject}
          alt="previous-project"
          className="w-8 cursor-pointer hover:opacity-80"
          onClick={handleClickPreviousProject}
        />
        <img
          src={nextProject}
          alt="next-project"
          className="w-8 cursor-pointer hover:opacity-80"
          onClick={handleClickNextProject}
        />
      </div>
      {projectsNames[selectedProject] === "calvinemr" && <CalvinEMRProject />}
      {projectsNames[selectedProject] === "toool" && <TooolProject />}
    </section>
  );
};

export default Projects;
