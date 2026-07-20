function ProjectsHeader() {
  return (
    <div className="text-center">

      {/* Small Label */}
      <p
        className="
          text-xs
          tracking-[5px]
          text-cyan-400
          mb-6
        "
      >
        FEATURED WORK
      </p>

      {/* Heading */}
      <h2
        className="
          text-5xl
          md:text-6xl
          font-bold
          text-white
        "
      >
        Projects That{" "}
        <span className="text-cyan-400">
          Define Me
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          max-w-2xl
          mx-auto
          mt-6
          text-lg
          leading-8
          text-slate-400
        "
      >
        A selection of projects built with attention to detail,
        modern aesthetics and clean code.
      </p>

    </div>
  );
}

export default ProjectsHeader;