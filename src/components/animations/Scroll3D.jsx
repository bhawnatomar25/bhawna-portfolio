import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Scroll3D({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // 📱 Mobile screen par normal content
  if (isMobile) {
    return <>{children}</>;
  }

  // 💻 Tablet + Desktop par 3D animation
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