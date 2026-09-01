import { experiences } from "../data/experiences";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-[var(--foreground)]">
        Experience
      </h1>
      <div className="mt-10 flex flex-col gap-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.jobTitle}`}
            experience={experience}
          />
        ))}
      </div>
    </>
  );
};

export default Experience;
