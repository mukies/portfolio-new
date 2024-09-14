import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-2 md:px-24 text-white relative ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>

      <div className="py-8 px-8 grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-5">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            id={i}
            demo={project.demo}
            source={project.source}
            title={project.title}
            main={project.main}
            img={project.img}
          />
        ))}
      </div>
      <div className=" sticky bottom-0  left-0 right-0 flex justify-center items-center rounded-t-lg sm:rounded-t-2xl z-10 bg-red-800 p-2">
        <span className="text-sm text-center md:text-lg text-orange-200 ">
          Please note that some of the projects will take time to load{" "}
          <code>(max 1 minute)</code> while visiting first time
        </span>
      </div>
    </div>
  );
};

export default Projects;
