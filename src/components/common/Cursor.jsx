import { useEffect, useRef, useState } from "react";

function Cursor() {
  // Small Dot Position
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // Big Ring Reference
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    // Ring ki current position
    let ringX = 0;
    let ringY = 0;

    // Mouse Move
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot instantly move karega
      setPosition({
        x: mouseX,
        y: mouseY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Ring Animation
    const animate = () => {
      // 0.08 = Follow Speed
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="
          fixed
          w-8
          h-8
          border-2
          border-cyan-400
          rounded-full
          pointer-events-none
          z-[9999]
          -translate-x-1/2
          -translate-y-1/2
          shadow-[0_0_12px_#22d3ee]
        "
      />

      {/* Inner Dot */}
      <div
        className="
          fixed
          w-2.5
          h-2.5
          bg-cyan-400
          rounded-full
          pointer-events-none
          z-[9999]
          -translate-x-1/2
          -translate-y-1/2
          shadow-[0_0_8px_#22d3ee]
        "
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}

export default Cursor;