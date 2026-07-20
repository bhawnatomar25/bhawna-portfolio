import { useState } from "react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
 <header className="fixed inset-x-0 top-0 z-40 bg-black">

      <nav
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-4
          md:px-8
          py-4
          md:py-5
        "
      >

        {/* Logo */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          BT
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="
                  text-slate-300
                  hover:text-cyan-400
                  transition
                  duration-300
                "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <a
          href="/resume/bhawna_tomar_resume.pdf"
          download
          className="
            hidden
            lg:block
            rounded-full
            border
            border-cyan-400
            px-6
            py-2
            text-cyan-400
            transition-all
            duration-300
            hover:bg-cyan-400
            hover:text-black
          "
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
       <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="
    lg:hidden
    w-10
    h-10
    flex
    items-center
    justify-center
    text-3xl
    leading-none
    text-cyan-400
  "
>
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            lg:hidden
            border-t
            border-cyan-500/20
            bg-[#050816]
            px-6
            py-6
          "
        >
          <ul className="flex flex-col gap-5">

            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    text-slate-300
                    transition
                    duration-300
                    hover:text-cyan-400
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Mobile CV Button */}
            <li>
              <a
                href="/resume/bhawna_tomar_resume.pdf"
                download
                className="
                  inline-block
                  rounded-full
                  border
                  border-cyan-400
                  px-6
                  py-2
                  text-cyan-400
                  transition-all
                  duration-300
                  hover:bg-cyan-400
                  hover:text-black
                "
              >
                Download CV
              </a>
            </li>

          </ul>
        </div>
      )}

    </header>
  );
}

export default Navbar;