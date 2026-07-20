import CertificatesGrid from "./CertificatesGrid";

function Certificates() {
  return (
    <section
      id="certificates"
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
            ACHIEVEMENTS
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            Certifications
          </h2>

        </div>

        {/* Cards */}
        <CertificatesGrid />

      </div>
    </section>
  );
}

export default Certificates;