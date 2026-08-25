type PreviewCardProps = {
  title: string;
  subtitle?: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
  linkText: string;
  linkTo: string;
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
}: PreviewCardProps) => {
  return (
    <article className="flex h-full flex-col border rounded-xl border-[var(--border)] p-4">
      <div className="font-bold text-[var(--foreground)]">{title}</div>
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
      <div className="flex flex-wrap gap-2 mt-auto mb-5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="border rounded-sm text-xs px-2 py-1 text-[var(--muted-foreground)] "
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={linkTo}
        className="self-start border rounded-sm px-2 py-1 text-sm"
      >
        {linkText}
      </a>
    </article>
  );
};

export default PreviewCard;
