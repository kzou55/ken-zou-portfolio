import { Link } from "react-router-dom";
import SkillBadge from "./common/SkillBadge";

type PreviewCardProps = {
  title: string;
  subtitle?: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
  linkText: string;
  linkTo: string;
  image?: string;
};

const PreviewCard = ({
  title,
  subtitle,
  startDate,
  endDate,
  description,
  techStack,
  linkText,
  linkTo,
  image,
}: PreviewCardProps) => {
  return (
    <article className="flex h-full flex-col border rounded-xl border-[var(--border)] p-4">
      <div className="flex items-center gap-3 mb-2">
        {image && (
          <img
            src={image}
            alt={`${title} logo`}
            className="hidden h-10 w-10 object-contain md:block"
          /> 
        )}

        <div className="font-bold text-[var(--foreground)] text-xs md:text-sm">{title}</div>
      </div>
      {subtitle && (
        <div className="text-xs text-[var(--muted-foreground)] ">
          {subtitle}
        </div>
      )}
      <div className="text-xs text-[var(--muted-foreground)] mb-4">
        {startDate} - {endDate}
      </div>
      <p className="text-sm text-[var(--muted-foreground)] mb-5">
        {description}
      </p>
      <div className="flex flex-wrap gap-1 items-end mt-auto mb-5">
        {techStack.map((tech) => (
          <SkillBadge
            key={tech}
            skill={tech}
            className="px-2 py-[2px] text-xs"
          />
        ))}
      </div>
      <Link
        to={linkTo}
        className="self-start border rounded-sm px-2 py-1 text-sm"
      >
        {linkText}
      </Link>
    </article>
  );
};

export default PreviewCard;
