function SkillsHeader() {
  return (
    <div className="text-center">

      {/* Small Heading */}

      <p
        className="
          uppercase
          tracking-[6px]
          text-cyan-400
          text-xs
          font-semibold
        "
      >
        TECHNICAL SKILLS
      </p>

      {/* Main Heading */}

      <h2
        className="
          mt-5
          text-5xl
          font-bold
          leading-tight
        "
      >
        Technologies I Work With
      </h2>

      {/* Description */}

      <p
        className="
          mt-6
          text-slate-400
          max-w-xl
          mx-auto
          leading-8
        "
      >
        A curated toolkit of languages, frameworks and tools I use
        to build exceptional products.
      </p>

    </div>
  );
}

export default SkillsHeader;