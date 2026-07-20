import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

function About() {
  return (
    <section
      id="about"
      className="
        max-w-7xl
        mx-auto
        px-5
        md:px-8
        lg:px-6
        py-16
        md:py-20
        lg:py-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[0.9fr_1.4fr]
          gap-12
          lg:gap-15
          items-center
        "
      >
        {/* About Image */}
        <AboutImage />

        {/* About Content + Stats */}
        <div>
          <AboutContent />
          <AboutStats />
        </div>
      </div>
    </section>
  );
}

export default About;