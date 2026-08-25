import { Link } from "react-router-dom";
import { experiences } from "../data/experiences";
import PreviewCard from "./PreviewCard";

const ExperiencePreview = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="flex justify-between pb-4">
        <h2 className="text-4xl font-semibold">Experience</h2>
        <Link to="/experience" className="rounded-sm border px-3 py-2 text-sm">
          Full Experience
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {experiences.slice(0, 3).map((experience) => (
          <PreviewCard
            key={experience.company}
            title={experience.company}
            subtitle={experience.jobTitle}
            startDate={experience.dateStart}
            endDate={experience.dateEnd}
            description={experience.description}
            techStack={experience.techStack}
            linkText="View Role"
            linkTo="/experience"
          />
        ))}
      </div>
    </section>
  );
};

export default ExperiencePreview;
