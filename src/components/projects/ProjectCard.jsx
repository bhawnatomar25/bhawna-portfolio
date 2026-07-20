function ProjectCard({
    title,
    description,
    tags,
    features,
    liveLink,
    codeLink,
    image,
}) {
    return (
        <div
            className="
        group
        relative
        grid
        grid-cols-1
        lg:grid-cols-[360px_1fr]
        min-h-[350px]
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-[#0B1120]
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_0_45px_rgba(56,189,248,0.12)]
      "
        >
            {/* ================= LEFT IMAGE ================= */}

            <div
                className="
          relative
          min-h-[300px]
          lg:min-h-full
          overflow-hidden
          bg-gradient-to-br
          from-[#0B1835]
          to-[#07101F]
          flex
          items-center
          justify-center
        "
            >
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
                    />
                ) : (
                    <div className="flex flex-col items-center gap-5">
                        <div
                            className="
                w-18
                h-18
                rounded-2xl
                border
                border-blue-500/40
                bg-blue-500/10
                flex
                items-center
                justify-center
                text-4xl
                text-blue-400
                shadow-[0_0_25px_rgba(37,99,235,0.25)]
              "
                        >
                            🌐
                        </div>

                        <p
                            className="
                text-sm
                tracking-[2px]
                text-slate-500
              "
                        >
                            Add Screenshot
                        </p>
                    </div>
                )}
            </div>

            {/* ================= RIGHT CONTENT ================= */}

            <div
                className="
          p-8
          lg:p-10
          flex
          flex-col
          justify-center
        "
            >
                {/* Tags */}

                <div className="flex flex-wrap gap-2 mb-5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="
                px-3
                py-1
                rounded-full
                border
                border-blue-500/40
                bg-blue-500/10
                text-xs
                text-blue-300
              "
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}

                <h3
                    className="
            text-3xl
            font-bold
            text-white
            mb-4
          "
                >
                    {title}
                </h3>

                {/* Description */}

                <p
                    className="
            max-w-3xl
            text-base
            leading-7
            text-slate-400
          "
                >
                    {description}
                </p>

                {/* Features */}

                <div
                    className="
            mt-6
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-x-8
            gap-y-3
          "
                >
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="
                flex
                items-center
                gap-3
                text-slate-400
              "
                        >
                            <span className="text-blue-400">
                                •
                            </span>

                            <span>
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Buttons */}

                <div className="mt-8 flex gap-4">

                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="
              px-5
              py-3
              rounded-full
              border
              border-blue-500/40
              text-blue-400
              transition-all
              duration-300
              hover:bg-blue-500/10
              hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
            "
                    >
                        ↗ Live Demo
                    </a>

                    {codeLink && (
                        <a
                            href={codeLink}
                            target="_blank"
                            rel="noreferrer"
                            className="
      px-5
      py-3
      rounded-full
      border
      border-blue-500/40
      text-blue-400
      transition-all
      duration-300
      hover:bg-blue-500/10
      hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
    "
                        >
                            ♧ View Code
                        </a>
                    )}

                </div>
            </div>
        </div>
    );
}

export default ProjectCard;