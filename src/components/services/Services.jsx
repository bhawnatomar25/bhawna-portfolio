import ServicesGrid from "./ServicesGrid";

function Services() {
  return (
    <section
      id="services"
      className="
        px-6
        py-28
      "
    >
      <div className="mx-auto max-w-7xl">

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
            WHAT I OFFER
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            Services I Provide
          </h2>

        </div>

        {/* Service Cards */}
        <ServicesGrid />

      </div>
    </section>
  );
}

export default Services;