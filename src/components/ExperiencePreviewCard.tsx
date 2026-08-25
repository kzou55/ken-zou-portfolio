import type { Experience } from "../data/types";

type ExperiencePreviewCardProps = {
  experience: Experience;
};

const ExperiencePreviewCard = ({ experience }: ExperiencePreviewCardProps) => {
  return (
    <article className="flex h-full flex-col border rounded-xl border-[var(--border)] p-4">
      <div className="font-bold text-[var(--foreground)]">{experience.company}</div>
      <div className="text-xs text-[var(--muted-foreground)] ">{experience.jobTitle}</div>
      <div className="text-xs text-[var(--muted-foreground)] mb-4">
        {experience.dateStart} - {experience.dateEnd}
      </div>
      <p className="text-sm mb-5 text-[var(--muted-foreground)] ">{experience.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto mb-5">
        {experience.techStack.map((tech) => (
          <div key={tech} className="border rounded-sm text-xs px-2 py-1 text-[var(--muted-foreground)] ">{tech}</div>
        ))}
      </div>
      <a href={""} className="self-start border rounded-sm px-2 py-1 text-sm">
        View Role
      </a>
    </article>
  );
};

export default ExperiencePreviewCard;
