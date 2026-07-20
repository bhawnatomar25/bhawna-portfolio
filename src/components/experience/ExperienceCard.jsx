function ExperienceCard({
  role,
  company,
  type,
  duration,
  responsibilities,
  technologies,
}) {
  return (
    <div
      className="
        relative
        mt-16
        mx-auto
        max-w-4xl
        rounded-3xl
        border
        border-cyan-500/20
        bg-[#0B1120]
        p-10
        overflow-hidden
        transition-all
        duration-500
        hover:border-cyan-400/50
        hover:shadow-[0_0_35px_rgba(56,189,248,0.15)]
      "
    >
      {/* Left Gradient Border */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-[3px]
          bg-gradient-to-b
          from-cyan-400
          via-blue-500
          to-purple-500
        "
      ></div>

      {/* Top Section */}
      <div className="flex justify-between items-start">

        {/* Job Information */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            {role}
          </h3>

          <div className="mt-3 flex items-center gap-3">

            <span className="text-lg font-semibold text-cyan-400">
              {company}
            </span>

            <span
              className="
                rounded-full
                border
                border-cyan-500/30
                px-3
                py-1
                text-xs
                text-cyan-300
              "
            >
              {type}
            </span>

          </div>
        </div>

        {/* Duration */}
        <span
          className="
            text-xs
            tracking-[4px]
            text-cyan-400
            uppercase
          "
        >
          {duration}
        </span>

      </div>

      {/* Responsibilities */}
      <div
        className="
          mt-10
          grid
          grid-cols-1
          md:grid-cols-2
          gap-x-10
          gap-y-5
        "
      >
        {responsibilities.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 text-slate-400"
          >
            {/* Bullet */}
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 shrink-0"></span>

            <p className="leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="mt-10 flex flex-wrap gap-3">

        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/5
              px-3
              py-1
              text-xs
              font-medium
              text-blue-300
            "
          >
            {tech}
          </span>
        ))}

      </div>

    </div>
  );
}

export default ExperienceCard;