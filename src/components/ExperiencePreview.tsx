import { Link } from "react-router-dom";
import { experiences } from "../data/experiences";
import ExperiencePreviewCard from "./ExperiencePreviewCard";

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
