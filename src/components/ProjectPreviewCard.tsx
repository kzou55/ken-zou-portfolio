import type { Project } from "../data/types";

type ProjectPreviewCardProps = {
  project: Project;
};

const ProjectPreviewCard = ({ project }: ProjectPreviewCardProps) => {
  return (
    <article className="flex h-full flex-col border rounded-xl border-[var(--border)] p-4">
      <div className="font-bold text-[var(--foreground)]">{project.name}</div>
      <div className="text-xs text-[var(--muted-foreground)] mb-4">
        {project.startDate} - {project.endDate}
      </div>
      <p className="text-sm text-[var(--muted-foreground)] mb-5">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="border rounded-sm text-xs px-2 py-1 text-[var(--muted-foreground)] "
          >
            {tech}
          </span>
        ))}
      </div>
      <a href={""} className="self-start border rounded-sm px-2 py-1 text-sm">
        View Project
      </a>
    </article>
  );
};

export default ProjectPreviewCard;
