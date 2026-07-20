import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        flex-col
        items-center
        justify-center
        bg-[#050816]
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <motion.div
        className="
          absolute
          w-64
          h-64
          sm:w-80
          sm:h-80
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple Glow */}
      <motion.div
        className="
          absolute
          w-[420px]
          h-[420px]
          sm:w-[550px]
          sm:h-[550px]
          lg:w-[700px]
          lg:h-[700px]
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-10
          text-6xl
          sm:text-7xl
          lg:text-8xl
          font-black
          text-cyan-400
          drop-shadow-[0_0_30px_#38bdf8]
          text-center
        "
      >
        BT
      </motion.h1>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          relative
          z-10
          mt-4
          text-center
          text-sm
          sm:text-base
          uppercase
          tracking-[3px]
          sm:tracking-[6px]
          text-gray-400
        "
      >
        Building Portfolio...
      </motion.p>

      {/* Progress Bar */}
      <div
        className="
          relative
          z-10
          mt-8
          h-1
          w-48
          sm:w-56
          overflow-hidden
          rounded-full
          bg-slate-700
        "
      >
        <motion.div
          className="
            h-full
            bg-cyan-400
            shadow-[0_0_20px_#38bdf8]
          "
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}

export default Loader;