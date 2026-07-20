import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-20 text-center">

          <p
            className="
              mb-6
              text-xs
              font-semibold
              tracking-[5px]
              text-cyan-400
            "
          >
            GET IN TOUCH
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            Let's Work Together
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-slate-400
            "
          >
            Have a project in mind or just want to say hello?
            I'd love to hear from you.
          </p>

        </div>

        {/* Contact Content */}
        <div
          className="
            grid
            items-start
            gap-16
            md:grid-cols-[280px_1fr]
          "
        >
          <ContactInfo />

          <ContactForm />
        </div>

      </div>
    </section>
  );
}

export default Contact;