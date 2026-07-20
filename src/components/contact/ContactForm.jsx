function ContactForm() {
  return (
    <form
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
      {/* Name + Email */}
      <div className="grid gap-6 md:grid-cols-2">

        {/* Name */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-slate-300">
            Name
          </label>

          <input
            type="text"
            placeholder="Your Name"
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
            placeholder="your@email.com"
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
          placeholder="Project Discussion"
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
          placeholder="Tell me about your project..."
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