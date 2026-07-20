import TypingText from "./TypingText";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import Particles from "../common/Particles";


function Hero() {
  return (
   <section
  id="home"
  className="
    min-h-screen
    bg-[#050816]
    flex
    items-center
    relative
    py-28
    lg:py-0
"
>
  <Particles />

  <div className="max-w-7xl mx-auto w-full px-5 md:px-8 lg:px-6">

    <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">

      {/* Left Side */}
      <div>

        <span className="inline-block rounded-full border border-cyan-400 px-4 py-2 text-sm text-cyan-400">
          Available for Opportunities
        </span>

        <h2 className="mt-8 text-xl md:text-2xl text-white">
          Hello, I'm
        </h2>

        <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
            Bhawna Tomar
          </span>
        </h1>

        <TypingText />

        <p className="mt-6 max-w-xl text-slate-400 leading-8">
          Passionate Frontend Developer and IT Trainer with experience in
          React, WordPress, JavaScript, PHP and modern web technologies.
          I love creating beautiful, responsive and user-friendly websites.
        </p>

        <HeroButtons />

      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center">
        <HeroImage />
      </div>

    </div>

  </div>
</section>
  );
}

export default Hero;