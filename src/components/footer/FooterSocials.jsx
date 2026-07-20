import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/bhawnatomar25",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/bhawna-tomar-027a9123a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/bhawna_code_mastery_888?igsh=M3dncmZoMnpmb2F0",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:thakurbhawna900@gmail.com",
  },
];

function FooterSocials() {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-[0.3em] text-cyan-400">
        CONNECT
      </h3>

      <div className="mt-5 space-y-3">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.link}
              target={social.name === "Email" ? "_self" : "_blank"}
              rel="noreferrer"
              className="
                flex
                items-center
                gap-3
                text-sm
                text-slate-500
                transition-colors
                duration-300
                hover:text-cyan-400
              "
            >
              <Icon className="text-sm" />
              <span>{social.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default FooterSocials;