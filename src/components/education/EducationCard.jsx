function EducationCard({ degree, shortName, institution, board, duration }) {
  return (
    <div
      className="
        relative
        ml-16
        mb-7
        rounded-2xl
        border
        border-blue-500/20
        bg-[#0B1120]
        px-6
        py-5
        transition-all
        duration-300
        hover:border-blue-500/50
        hover:shadow-[0_0_25px_rgba(37,99,235,0.15)]
      "
    >
      {/* Top Row */}
      <div className="flex items-start justify-between gap-4">
        {/* Left Content */}
        <div>
          {/* Degree Badge */}
          <span
            className="
              inline-block
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-3
              py-1
              text-xs
              font-semibold
              text-blue-400
            "
          >
            {shortName}
          </span>

          {/* Degree */}
          <h3 className="mt-3 text-xl font-bold text-white">
            {degree}
          </h3>

          {/* Institute */}
          <p className="mt-1 text-sm text-slate-400">
            {institution}
            {board && ` — ${board}`}
          </p>
        </div>

        {/* Duration */}
        <span
          className="
            whitespace-nowrap
            pt-1
            text-xs
            font-semibold
            tracking-[3px]
            text-cyan-400
          "
        >
          {duration}
        </span>
      </div>
    </div>
  );
}

export default EducationCard;