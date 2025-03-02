import { useState } from "react";
import CalvinEMRProject from "./CalvinEMRProject";
import TooolProject from "./TooolProject";
import nextProject from "/assets/img/nextProject.png";
import previousProject from "/assets/img/previousProject.png";
import Fm4AllProject from "./Fm4AllProject";
const projectsNames = ["fm4all", "calvinemr", "toool"];

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
      className="h-[calc(100vh-45px)] lg:h-[calc(100vh-50px)] bg-cream scroll-mt-11 lg:scroll-mt-14 flex justify-center items-center relative"
      id="projects"
    >
      <div className="flex flex-col items-center justify-center gap-4 p-10 md:p-8 max-w-[1700px] h-full overflow-hidden">
        <h2 className="absolute -left-full">My Projects</h2>
        <div className="absolute top-0 right-1/2 md:right-0  p-2 md:p-8 flex gap-2 translate-x-1/2 md:translate-x-0">
          <img
            src={previousProject}
            alt="previous-project-arrow"
            className="w-8 cursor-pointer hover:opacity-80 active:scale-95"
            onClick={handleClickPreviousProject}
          />
          <img
            src={nextProject}
            alt="next-project-arrow"
            className="w-8 cursor-pointer hover:opacity-80 active:scale-95"
            onClick={handleClickNextProject}
          />
        </div>
        {projectsNames[selectedProject] === "fm4all" && <Fm4AllProject />}
        {projectsNames[selectedProject] === "calvinemr" && <CalvinEMRProject />}
        {projectsNames[selectedProject] === "toool" && <TooolProject />}
      </div>
    </section>
  );
};

export default Projects;
