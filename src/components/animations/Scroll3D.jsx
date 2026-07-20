import { motion } from "framer-motion";

function Scroll3D({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
        rotateX: 18,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Scroll3D;