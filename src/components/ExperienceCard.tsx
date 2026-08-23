import type { Experience } from "../data/types";

type ExperienceCardProps = {
  experience: Experience;
};
const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <article className="border border-[var(--border)] p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-[var(--foreground)]">
            {experience.jobTitle}
          </h3>

          <p className="mt-1 text-lg text-[var(--muted-foreground)]">
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

export default ExperienceCard;
