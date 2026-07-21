import { useState } from "react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmitted(true);
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
            required
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-[#0B1120]
              px-4
              py-3
              text-white
              outline-none
              placeholder:text-slate-600
              transition-all
              duration-300
              focus:border-cyan-400
              focus:ring-1
              focus:ring-cyan-400
            "
          />
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
            required
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-[#0B1120]
              px-4
              py-3
              text-white
              outline-none
              placeholder:text-slate-600
              transition-all
              duration-300
              focus:border-cyan-400
              focus:ring-1
              focus:ring-cyan-400
            "
          />
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
          required
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-[#0B1120]
            px-4
            py-3
            text-white
            outline-none
            placeholder:text-slate-600
            transition-all
            duration-300
            focus:border-cyan-400
            focus:ring-1
            focus:ring-cyan-400
          "
        />
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
          required
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-slate-700
            bg-[#0B1120]
            px-4
            py-3
            text-white
            outline-none
            placeholder:text-slate-600
            transition-all
            duration-300
            focus:border-cyan-400
            focus:ring-1
            focus:ring-cyan-400
          "
        ></textarea>
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