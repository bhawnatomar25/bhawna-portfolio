import { motion } from "framer-motion";

function Scanner() {
  return (
    <div
      className="
        absolute
        inset-0
        rounded-full
        overflow-hidden
        pointer-events-none
      "
    >
      {/* Scanning Line */}
      <motion.div
        className="
          absolute
          left-0
          w-full
          h-[3px]
          bg-cyan-400
          shadow-[0_0_20px_#22d3ee]
        "
        initial={{ top: "-5%" }}
        animate={{ top: "105%" }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glow Below Scanner */}
      <motion.div
        className="
          absolute
          left-0
          w-full
          h-20
          bg-gradient-to-b
          from-cyan-400/30
          to-transparent
          blur-xl
        "
        initial={{ top: "-10%" }}
        animate={{ top: "100%" }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default Scanner;