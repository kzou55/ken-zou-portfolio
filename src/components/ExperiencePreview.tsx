import { experiences } from "../data/experiences";
import ExperiencePreviewCard from "./ExperiencePreviewCard";

const ExperiencePreview = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="mb-8 text-5xl font-bold">Work Experience</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((experience) => (
          <ExperiencePreviewCard
            key={`${experience.company}-${experience.jobTitle}`}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperiencePreview;
