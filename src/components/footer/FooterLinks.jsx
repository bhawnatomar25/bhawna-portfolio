const footerLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

function FooterLinks() {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-[0.3em] text-cyan-400">
        QUICK LINKS
      </h3>

      <ul className="mt-5 space-y-3">
        {footerLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="
                text-sm
                text-slate-500
                transition-colors
                duration-300
                hover:text-cyan-400
              "
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;