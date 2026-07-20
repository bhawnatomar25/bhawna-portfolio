import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";

function Projects() {
  return (
    <section
      id="projects"
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
        <ProjectsHeader />

        {/* Project Cards */}
        <ProjectsGrid />
      </div>
    </section>
  );
}

export default Projects;