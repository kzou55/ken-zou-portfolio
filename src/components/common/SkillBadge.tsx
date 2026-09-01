import { technology } from "../../data/types";

const originalExtensionList: string[] = [technology.express];

type SkillBadgeProps = {
  skill: string;
  className?: string;
};

const SkillBadge = ({ skill, className }: SkillBadgeProps) => {
  const normalizedSkill = skill.toLowerCase().replace(/[^0-9a-z]/gi, "");

  const extension = originalExtensionList.includes(skill)
    ? "original"
    : "plain";

  const devIcon = `devicon-${normalizedSkill}-${extension}`;

  return (
    <div
      className={`flex items-center gap-1 border rounded-sm text-[var(--muted-foreground)] ${className}`}
    >
      <i className={`${devIcon}`}></i>
      <div>{skill}</div>
    </div>
  );
};

export default SkillBadge;
