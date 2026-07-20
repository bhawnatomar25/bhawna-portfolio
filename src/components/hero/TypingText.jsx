import { TypeAnimation } from "react-type-animation";

function TypingText() {
  return (
    <div className="mt-4 min-h-[36px]">
      <TypeAnimation
        sequence={[
          "Frontend Developer",
          2000,
          "React Developer",
          2000,
          "WordPress Developer",
          2000,
          "Web Designer",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="
          block
          text-2xl
          font-semibold
          text-cyan-400
        "
      />
    </div>
  );
}

export default TypingText;