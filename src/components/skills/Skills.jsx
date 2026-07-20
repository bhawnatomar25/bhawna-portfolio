import SkillsHeader from "./SkillsHeader";
import SkillsGrid from "./SkillsGrid";

function Skills() {
  return (
    <section
      id="skills"
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
        <SkillsHeader />

        {/* Cards */}
        <SkillsGrid />
      </div>
    </section>
  );
}

export default Skills;