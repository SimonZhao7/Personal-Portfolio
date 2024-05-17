import Project from "../Project";
import { projects } from "../../constants/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative mx-auto flex min-h-full flex-col justify-center px-[175px] pt-[72px] sm:max-w-xl xl:max-w-none"
    >
      <h1>Projects</h1>
      <div className="grid grid-flow-row grid-cols-3 gap-10">
        {projects.map((p) => (
          <Project key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
