function ServiceCard({ icon, title, description, color }) {
  const Icon = icon;

  return (
    <div
      className="
        group
        relative
        min-h-[230px]
        rounded-3xl
        border
        border-cyan-500/15
        bg-[#0B1120]
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_0_35px_rgba(56,189,248,0.15)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(circle at top left, ${color}22, transparent 65%)`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Icon */}
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            text-2xl
            transition-all
            duration-500
            group-hover:scale-110
          "
          style={{
            background: `${color}18`,
            border: `1px solid ${color}55`,
            color: color,
            boxShadow: `0 0 20px ${color}35`,
          }}
        >
          <Icon />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-400">
          {description}
        </p>

      </div>
    </div>
  );
}

export default ServiceCard;