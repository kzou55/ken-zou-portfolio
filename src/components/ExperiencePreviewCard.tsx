import type { Experience } from "../data/types";

type ExperiencePreviewCardProps = {
  experience: Experience;
};

const ExperiencePreviewCard = ({ experience }: ExperiencePreviewCardProps) => {
  return (
      <article className="border-b border-[var(--border)] py-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              {experience.jobTitle}
            </h3>

            <p className="mt-1 text-[var(--muted-foreground)]">
              {experience.company}
            </p>
          </div>

          <p className="shrink-0 text-[var(--muted-foreground)]">
            {experience.dateStart} – {experience.dateEnd}
          </p>
        </div>

        <p className="mt-4 text-[var(--muted-foreground)]">
          {experience.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {experience.techStack.map((technology) => (
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

export default ExperiencePreviewCard;
