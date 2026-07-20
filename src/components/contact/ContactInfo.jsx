import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="space-y-5">

      {/* Email */}
      <div className="flex items-center gap-4">
        <div className="contact-icon">
          <FaEnvelope />
        </div>

        <div>
          <p className="contact-label">EMAIL</p>
          <a
            href="mailto:thakurbhawna900@gmail.com"
            className="contact-value"
          >
            thakurbhawna900@gmail.com
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4">
        <div className="contact-icon">
          <FaPhone />
        </div>

        <div>
          <p className="contact-label">PHONE</p>
          <a
            href="tel:+917056819453"
            className="contact-value"
          >
            +91 7056819453
          </a>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-4">
        <div className="contact-icon">
          <FaMapMarkerAlt />
        </div>

        <div>
          <p className="contact-label">LOCATION</p>
          <p className="contact-value">
            India
          </p>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex items-center gap-4">
        <div className="contact-icon">
          <FaLinkedinIn />
        </div>

        <div>
          <p className="contact-label">LINKEDIN</p>
          <a
            href="https://www.linkedin.com/in/bhawna-tomar-027a9123a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="contact-value"
          >
            Bhawna Tomar 
          </a>
        </div>
      </div>

      {/* GitHub */}
      <div className="flex items-center gap-4">
        <div className="contact-icon">
          <FaGithub />
        </div>

        <div>
          <p className="contact-label">GITHUB</p>
          <a
            href="https://github.com/bhawnatomar25"
            target="_blank"
            rel="noreferrer"
            className="contact-value"
          >
            bhawnatomar25
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 pt-2">

        <a href="https://github.com/bhawnatomar25" className="social-icon">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/bhawna-tomar-027a9123a?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="social-icon">
          <FaLinkedinIn />
        </a>

        <a href="https://www.instagram.com/bhawna_code_mastery_888?igsh=M3dncmZoMnpmb2F0" className="social-icon">
          <FaInstagram />
        </a>

        <a href="mailto:thakurbhawna900@gmail.com" className="social-icon">
          <FaEnvelope />
        </a>

      </div>

    </div>
  );
}

export default ContactInfo;