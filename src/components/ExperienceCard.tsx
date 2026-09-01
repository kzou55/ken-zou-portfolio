import type { Experience } from "../data/types";
import SkillBadge from "./common/SkillBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <article
      id={experience.id}
      className="scroll-mt-20 rounded-3xl border border-[var(--border)] p-6 sm:p-8"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center">
          <img
            className="h-20 w-20 object-contain mr-3"
            src={experience.logo}
            alt={`${experience.company} logo`}
          />

          <div>
            <p className="text-lg text-[var(--foreground)]">
              {experience.company}
            </p>
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              {experience.jobTitle}
            </h3>
          </div>
        </div>

        <p className="shrink-0 text-[var(--muted-foreground)]">
          {experience.dateStart} – {experience.dateEnd}
        </p>
      </div>

      <ul className="mt-6 list-disc space-y-2 pl-5 text-[var(--muted-foreground)]">
        {experience.accomplishments.map((accomplishment) => (
          <li key={accomplishment}>{accomplishment}</li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {experience.techStack.map((tech) => (
            <SkillBadge key={tech} skill={tech} className="px-3 py-1 text-sm" />
          ))}
        </div>

        <a
          className="flex items-end"
          href={experience.companyLink}
          target="_blank"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border">
            <FontAwesomeIcon icon={faArrowUp} className="rotate-45 text-xs" />
          </span>
        </a>
      </div>
    </article>
  );
};

export default ExperienceCard;
