function CertificateCard({ title, color }) {
  return (
    <div
      className="
        group
        relative
        h-[200px]
        rounded-3xl
        border
        border-cyan-500/15
        bg-[#0B1120]
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
      "
    >
      {/* Hover Glow */}
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

        {/* Certificate Icon */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
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
          ♧
        </div>

        {/* Title */}
        <h3 className="mt-6 text-lg font-bold text-white">
          {title}
        </h3>

      </div>
    </div>
  );
}

export default CertificateCard;