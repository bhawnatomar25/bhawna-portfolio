// ==============================
// Profile Image
// ==============================
import profile from "../../assets/images/profile.png";

// ==============================
// Framer Motion (Animation Library)
// ==============================
import { motion } from "framer-motion";

// ==============================
// Scanner Motion
// ==============================
import Scanner from "./Scanner";

// ==============================
// React Icons
// ==============================
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";

function HeroImage() {
  // ==========================================
  // Tech Icons Data
  // ==========================================
  const icons = [
    <IoLogoJavascript />,
    <FaGithub />,
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaNodeJs />,
    <FaPhp />,
    <FaReact />,
  ];

  const radius = 185;

  return (
    // ==========================================
    // Main Container
    // ==========================================
    <div
      className="
        relative
        w-[320px]
        h-[320px]
        sm:w-[380px]
        sm:h-[380px]
        lg:w-[430px]
        lg:h-[430px]
        flex
        items-center
        justify-center
      "
    >
      {/* ==========================================
          Second Dashed Ring
      ========================================== */}
      <div
        className="
          absolute
          w-[290px]
          h-[290px]
          sm:w-[350px]
          sm:h-[350px]
          lg:w-[390px]
          lg:h-[390px]
          rounded-full
          border
          border-dashed
          border-cyan-500/20
        "
      ></div>

      {/* ==========================================
          Blue Glow
      ========================================== */}
      <div
        className="
          absolute
          w-[270px]
          h-[270px]
          sm:w-[320px]
          sm:h-[320px]
          lg:w-[360px]
          lg:h-[360px]
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
      ></div>

      {/* ==========================================
          Profile Image
      ========================================== */}
      <div
        className="
          relative
          w-[230px]
          h-[230px]
          sm:w-[280px]
          sm:h-[280px]
          lg:w-[320px]
          lg:h-[320px]
          rounded-full
          overflow-hidden
        "
      >
        {/* Scanner Effect */}
        <Scanner />

        <img
          src={profile}
          alt="Profile"
          className="
            w-full
            h-full
            object-cover
            rounded-full
          "
        />
      </div>

      {/* ==========================================
          Rotating Technology Icons
      ========================================== */}
      <motion.div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          scale-[0.75]
          sm:scale-[0.9]
          lg:scale-100
        "
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {icons.map((icon, index) => {
          const angle = (index / icons.length) * 2 * Math.PI;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={index}
              className="
                absolute
                w-10
                h-10
                sm:w-11
                sm:h-11
                lg:w-12
                lg:h-12
                rounded-xl
                border
                border-cyan-500/30
                bg-slate-900/70
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-cyan-400
                text-xl
                sm:text-2xl
              "
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {icon}
            </div>
          );
        })}
      </motion.div>

      {/* ==========================================
          First Solid Ring
      ========================================== */}
      <div
        className="
          absolute
          w-[270px]
          h-[270px]
          sm:w-[320px]
          sm:h-[320px]
          lg:w-[360px]
          lg:h-[360px]
          rounded-full
          border
          border-cyan-500/40
        "
      ></div>
    </div>
  );
}

export default HeroImage;