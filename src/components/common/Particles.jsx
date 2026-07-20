import { motion } from "framer-motion";

function Particles() {

  const particles = Array.from({ length: 40 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((_, index) => (

        <motion.span
          key={index}
          className="absolute w-[4px] h-[4px] rounded-full bg-cyan-400"

          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}

          animate={{
            y: [-10, -900],
            opacity: [0, 1, 0],
            scale: [0.5, 1.3, 0.5],
          }}

          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}

        />

      ))}

    </div>
  );
}

export default Particles;   