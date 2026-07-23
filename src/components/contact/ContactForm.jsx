import { useState } from "react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  function validateField(name, value) {
    const trimmedValue = value.trim();

    // Name validation
    if (name === "name") {
      if (!trimmedValue) {
        return "Name is required";
      }

      if (/[0-9]/.test(value)) {
        return "Numbers are not allowed in name";
      }

      if (!/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(value)) {
        return "Only letters, spaces, hyphens and apostrophes are allowed";
      }

      return "";
    }

    // Email validation
    if (name === "email") {
      if (!trimmedValue) {
        return "Email is required";
      }

      const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(trimmedValue)) {
        return "Please enter a valid email address";
      }

      return "";
    }

    // Subject validation
    if (name === "subject") {
      if (!trimmedValue) {
        return "Subject is required";
      }

      return "";
    }

    // Message validation
    if (name === "message") {
      if (!trimmedValue) {
        return "Message is required";
      }

      return "";
    }

    return "";
  }

  function handleChange(event) {
    const { name, value } = event.target;

    const errorMessage = validateField(name, value);

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: errorMessage,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const newErrors = {
      name: validateField("name", name),
      email: validateField("email", email),
      subject: validateField("subject", subject),
      message: validateField("message", message),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(
      (error) => error !== ""
    );

    if (hasErrors) {
      return;
    }

    // Honeypot bot protection
    const botField = formData.get("bot-field");

    if (botField) {
      return;
    }

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setErrors({});
        form.reset();
      })
      .catch((error) => {
        alert("Something went wrong. Please try again.");
        console.error(error);
      });
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="
        rounded-3xl
        border
        border-cyan-500/20
        bg-[#080D1C]
        p-8
        md:p-10
        shadow-[0_0_40px_rgba(15,23,42,0.35)]
      "
    >
      {/* Netlify Form Detection */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot Bot Protection */}
      <input
        type="text"
        name="bot-field"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
      />

      {/* Success Message */}
      {submitted && (
        <div className="mb-6 rounded-xl border border-green-400/30 bg-green-400/10 p-4 text-green-400">
          Message sent successfully! 🎉
        </div>
      )}

      {/* Name + Email */}
      <div className="grid gap-6 md:grid-cols-2">

        {/* Name */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-slate-300">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className={`
              w-full
              rounded-xl
              border
              bg-[#0B1120]
              px-4
              py-3
              text-white
              outline-none
              placeholder:text-slate-600
              transition-all
              duration-300
              ${
                errors.name
                  ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                  : "border-slate-700 focus:border-cyan-400 focus:ring-cyan-400"
              }
              focus:ring-1
            `}
          />

          {errors.name && (
            <p className="text-sm text-red-400">
              ⚠️ {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-slate-300">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            onChange={handleChange}
            className={`
              w-full
              rounded-xl
              border
              bg-[#0B1120]
              px-4
              py-3
              text-white
              outline-none
              placeholder:text-slate-600
              transition-all
              duration-300
              ${
                errors.email
                  ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                  : "border-slate-700 focus:border-cyan-400 focus:ring-cyan-400"
              }
              focus:ring-1
            `}
          />

          {errors.email && (
            <p className="text-sm text-red-400">
              ⚠️ {errors.email}
            </p>
          )}
        </div>

      </div>

      {/* Subject */}
      <div className="mt-6 flex flex-col gap-3">
        <label className="text-sm font-medium text-slate-300">
          Subject
        </label>

        <input
          type="text"
          name="subject"
          placeholder="Project Discussion"
          onChange={handleChange}
          className={`
            w-full
            rounded-xl
            border
            bg-[#0B1120]
            px-4
            py-3
            text-white
            outline-none
            placeholder:text-slate-600
            transition-all
            duration-300
            ${
              errors.subject
                ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                : "border-slate-700 focus:border-cyan-400 focus:ring-cyan-400"
            }
            focus:ring-1
          `}
        />

        {errors.subject && (
          <p className="text-sm text-red-400">
            ⚠️ {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="mt-6 flex flex-col gap-3">
        <label className="text-sm font-medium text-slate-300">
          Message
        </label>

        <textarea
          rows="6"
          name="message"
          placeholder="Tell me about your project..."
          onChange={handleChange}
          className={`
            w-full
            resize-none
            rounded-xl
            border
            bg-[#0B1120]
            px-4
            py-3
            text-white
            outline-none
            placeholder:text-slate-600
            transition-all
            duration-300
            ${
              errors.message
                ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                : "border-slate-700 focus:border-cyan-400 focus:ring-cyan-400"
            }
            focus:ring-1
          `}
        ></textarea>

        {errors.message && (
          <p className="text-sm text-red-400">
            ⚠️ {errors.message}
          </p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        className="
          mt-7
          rounded-full
          bg-cyan-400
          px-7
          py-3
          font-semibold
          text-black
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-cyan-300
          hover:shadow-[0_0_25px_rgba(56,189,248,0.45)]
        "
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;