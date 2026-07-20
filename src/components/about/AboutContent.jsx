import { FaCheckCircle } from "react-icons/fa";

function AboutContent() {
  return (
    <div>

      {/* Small Heading */}
      <p
        className="
          uppercase
          tracking-[4px]
          md:tracking-[6px]
          text-cyan-400
          text-sm
          font-semibold
        "
      >
        ABOUT ME
      </p>

      {/* Main Heading */}
      <h2
        className="
          mt-5
          text-3xl
          md:text-4xl
          font-bold
          leading-tight
        "
      >
        Crafting Digital

        <br />

        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Experiences
        </span>{" "}

        That Matter
      </h2>

      {/* Paragraph */}
      <p
        className="
          mt-4
          text-base
          leading-8
          md:leading-10
          text-slate-300
        "
      >
        I'm Bhawna Tomar — a passionate IT Trainer and Full Stack Web
        Developer dedicated to building beautiful, functional web
        experiences. With 2+ years of hands-on experience I specialize in
        frontend development, WordPress solutions and mentoring the next
        generation of developers.
      </p>

      {/* Bullet Points */}
      <div className="mt-7 space-y-5">

        {[
          "2+ Years of Professional Experience in Web Development",
          "IT Trainer at CADD Centre — mentoring students every day",
          "Proficient in Frontend, WordPress, PHP Development",
          "Quick Learner · Creative Problem Solver · Team Player",
        ].map((item) => (

          <div
            key={item}
            className="flex items-start gap-3 md:gap-4"
          >
            <FaCheckCircle
              className="
                mt-1
                shrink-0
                text-cyan-400
                text-lg
              "
            />

            <p className="text-slate-300">
              {item}
            </p>
          </div>

        ))}

      </div>

    </div>
  );
}

export default AboutContent;