import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
    return (
    <>
      <h1 className="text-4xl font-bold text-[var(--foreground)]">
        My Projects
      </h1>
      <div className="mt-10 flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </>
    );
}

export default Projects;