import ExperienceHeader from "./ExperienceHeader";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "./experienceData";

function Experience() {
  return (
    <section
      id="experience"
      className="
        py-28
        px-6
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
        "
      >
        {/* Heading */}
        <ExperienceHeader />

        {/* Experience Cards */}
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.role}
            role={experience.role}
            company={experience.company}
            type={experience.type}
            duration={experience.duration}
            responsibilities={experience.responsibilities}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;