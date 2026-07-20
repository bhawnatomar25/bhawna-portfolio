import aboutImage from "../../assets/images/about.png";

function AboutImage() {
  return (
    <div
      className="
        relative
        w-[280px]
        h-[390px]
        sm:w-[320px]
        sm:h-[450px]
        lg:w-[360px]
        lg:h-[500px]
        flex
        items-center
        justify-center
      "
    >
      {/* =========================
            Rotating Border
      ========================== */}

      <div
        className="
          absolute
          w-full
          h-full
          rounded-[35px]
          animate-spin-slow
          bg-gradient-to-br
          from-cyan-400
          via-purple-500
          to-cyan-400
          p-[3px]
        "
      >
        <div className="w-full h-full rounded-[35px] bg-[#0B1120]"></div>
      </div>

      {/* =========================
              Glow
      ========================== */}

      <div
        className="
          absolute
          w-full
          h-full
          rounded-[35px]
          bg-cyan-400/20
          blur-3xl
          animate-pulse
        "
      ></div>

      {/* =========================
          Moving Gradient Border
      ========================== */}

      <div
        className="
          relative
          w-[272px]
          h-[382px]
          sm:w-[312px]
          sm:h-[442px]
          lg:w-[352px]
          lg:h-[492px]
          rounded-[32px]
          p-[3px]
          overflow-hidden
          z-10
          animate-gradient-border
          bg-[linear-gradient(90deg,#38bdf8,#8b5cf6,#38bdf8,#8b5cf6,#38bdf8)]
        "
      >
        {/* Image */}

        <div
          className="
            w-full
            h-full
            rounded-[30px]
            overflow-hidden
            bg-[#0B1120]
          "
        >
          <img
            src={aboutImage}
            alt="About"
            className="
              w-full
              h-full
              object-cover
            "
          />
        </div>
      </div>
    </div>
  );
}

export default AboutImage;