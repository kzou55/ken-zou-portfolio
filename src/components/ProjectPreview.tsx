import { projects } from "../data/projects";
import ProjectPreviewCard from "./ProjectPreviewCard";

const ProjectPreview = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="mb-8 text-5xl font-bold">Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectPreviewCard
            key={`${project.name}`}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectPreview;
