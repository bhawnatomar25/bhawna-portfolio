import EducationCard from "./EducationCard";
import { education } from "./educationData";

function Education() {
  return (
    <section
      id="education"
      className="
        px-6
        py-28
      "
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="mb-20 text-center">

          <p
            className="
              mb-6
              text-xs
              font-semibold
              tracking-[5px]
              text-cyan-400
            "
          >
            ACADEMIC JOURNEY
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            Education Timeline
          </h2>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-px
              bg-gradient-to-b
              from-blue-500
              via-cyan-400
              to-transparent
            "
          ></div>

          {/* Education Items */}
          {education.map((item) => (
            <div
              key={item.degree}
              className="relative"
            >

              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  left-0
                  top-5
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-500
                  bg-[#050816]
                  shadow-[0_0_20px_rgba(37,99,235,0.6)]
                "
              >
                <div
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-blue-500
                  "
                ></div>
              </div>

              <EducationCard {...item} />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;