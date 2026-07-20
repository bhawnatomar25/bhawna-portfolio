function AboutStats() {
  const stats = [
    { number: "25+", label: "PROJECTS" },
    { number: "2+", label: "YRS EXP." },
    { number: "14+", label: "TECH" },
    { number: "5+", label: "CERTS" },
    { number: "200+", label: "STUDENTS" },
  ];

  return (
    <div
      className="
        mt-12
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-5
        gap-4
        lg:gap-5
      "
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            w-full
            h-[90px]
            rounded-2xl
            border
            border-cyan-500/20
            bg-[#0B1120]
            flex
            flex-col
            justify-center
            items-center
          "
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-cyan-400">
            {item.number}
          </h3>

          <p className="mt-2 text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutStats;