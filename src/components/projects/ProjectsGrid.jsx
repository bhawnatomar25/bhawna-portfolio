import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

function ProjectsGrid() {
  return (
    <div className="mt-16 flex flex-col gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          tags={project.tags}
          features={project.features}
          liveLink={project.liveLink}
          codeLink={project.codeLink}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default ProjectsGrid;