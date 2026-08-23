import type { Project } from "../data/types";

type ProjectPreviewCardProps = {
  project: Project;
};

const ProjectPreviewCard = ({ project }: ProjectPreviewCardProps) => {
  return (
      <article className="border-b border-[var(--border)] py-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              {project.name}
            </h3>

            <p className="mt-1 text-[var(--muted-foreground)]">
              {project.description}
            </p>
          </div>

          <p className="shrink-0 text-[var(--muted-foreground)]">
            {project.startDate} – {project.endDate}
          </p>
        </div>

        <p className="mt-4 text-[var(--muted-foreground)]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((technology) => (
            <span
              key={technology}
              className="text-sm text-[var(--muted-foreground)]"
            >
              {technology}
            </span>
          ))}
        </div>
      </article>
  );
};

export default ProjectPreviewCard;
