import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectPreviewCard from "./ProjectPreviewCard";

const ProjectPreview = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="flex justify-between pb-4">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <Link to="/projects" className="rounded-sm border px-3 py-2 text-sm">
          All Projects
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {projects.slice(0, 3).map((project) => (
          <ProjectPreviewCard key={`${project.name}`} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPreview;
