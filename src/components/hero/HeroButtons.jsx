function HeroButtons() {
  return (
    <div
      className="
        mt-8
        flex
        flex-col
        sm:flex-row
        gap-4
      "
    >
      <a
        href="#projects"
        className="
          rounded-lg
          bg-cyan-400
          px-6
          py-3
          font-semibold
          text-black
          text-center
          transition
          hover:scale-105
        "
      >
        View Projects
      </a>

      <a
        href="/resume/bhawna_tomar_resume.pdf"
        download
        className="
          rounded-lg
          border
          border-cyan-400
          px-6
          py-3
          font-semibold
          text-cyan-400
          text-center
          transition
          hover:bg-cyan-400
          hover:text-black
        "
      >
        Download Resume
      </a>
    </div>
  );
}

export default HeroButtons;