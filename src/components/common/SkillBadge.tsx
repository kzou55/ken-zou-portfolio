import { technology } from "../../data/types";

const originalExtensionList: string[] = [technology.express];

type SkillBadgeProps = {
  skill: string;
};

const SkillBadge = (props: SkillBadgeProps) => {
  const { skill } = props;

  const normalizedSkill = skill.toLowerCase().replace(/[^0-9a-z]/gi, "");

  const extension = originalExtensionList.includes(skill)
    ? "original"
    : "plain";

  const devIcon = `devicon-${normalizedSkill}-${extension}`;

  return (
    
    <div className="flex items-center gap-1 border rounded-sm px-2 py-[2px] text-xs text-[var(--muted-foreground)]">
      <i className={`${devIcon}`}></i>
      <div>{skill}</div>
    </div>
  );
};


export default SkillBadge;