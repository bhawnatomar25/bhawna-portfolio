import SkillCard from "./SkillCard";
import { skills } from "../../data/skillsData";

function SkillsGrid() {
  return (
   <div
  className="
    mt-16
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-6
  "
>
      {skills.map((skill) => (
        <SkillCard
          key={skill.name}
          icon={skill.icon}
          name={skill.name}
          glow={skill.glow}
        />
      ))}
    </div>
  );
}

export default SkillsGrid;