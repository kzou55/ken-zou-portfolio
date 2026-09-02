import type { Project } from "../data/types";
import SkillBadge from "./common/SkillBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        
    <article
      id={project.id}
      className="scroll-mt-20 rounded-3xl border border-[var(--border)] p-6 sm:p-8"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

            <p className="text-lg text-[var(--foreground)]">
              {project.name}
            </p>

        <p className="shrink-0 text-[var(--muted-foreground)]">
          {project.startDate} – {project.endDate}
        </p>
      </div>

      <ul className="mt-6 list-disc space-y-2 pl-5 text-[var(--muted-foreground)]">
        {project.accomplishments.map((accomplishment) => (
          <li key={accomplishment}>{accomplishment}</li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <SkillBadge key={tech} skill={tech} className="px-3 py-1 text-sm" />
          ))}
        </div>

        <a
          className="flex items-end mt-auto"
          href={project.link}
          target="_blank"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border">
            <FontAwesomeIcon icon={faArrowUp} className="rotate-45 text-xs" />
          </span>
        </a>
      </div>
    </article>
    )
}

export default ProjectCard;