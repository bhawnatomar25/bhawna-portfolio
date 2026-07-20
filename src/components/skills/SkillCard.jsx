function SkillCard({ icon, name, glow }) {
  const Icon = icon;

  return (
    <div
      className="
        group
        relative
        h-[160px]
        rounded-3xl
        border
        border-cyan-500/15
        bg-[#0B1120]
        flex
        flex-col
        justify-center
        items-center
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_0_35px_rgba(56,189,248,0.18)]
      "
    >
      {/* Border Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          border
          border-cyan-400/30
        "
      ></div>

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
        "
        style={{
          background: `radial-gradient(circle, ${glow}33 0%, transparent 70%)`,
        }}
      ></div>

      {/* Icon Box */}
      <div
        className="
          relative
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          text-3xl
          mb-4
          transition-all
          duration-500
          group-hover:scale-125
          group-hover:rotate-6
        "
        style={{
          background: `${glow}22`,
          border: `1px solid ${glow}55`,
          color: glow,
          boxShadow: `0 0 25px ${glow}55`,
        }}
      >
        <Icon />
      </div>

      {/* Skill Name */}
      <h3 className="text-white font-semibold text-lg">
        {name}
      </h3>
    </div>
  );
}

export default SkillCard;