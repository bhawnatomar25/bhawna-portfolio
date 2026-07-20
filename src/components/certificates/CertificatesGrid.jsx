import CertificateCard from "./CertificateCard";
import { certificates } from "./certificatesData";

function CertificatesGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {certificates.map((certificate) => (
        <CertificateCard
          key={certificate.title}
          title={certificate.title}
          color={certificate.color}
        />
      ))}
    </div>
  );
}

export default CertificatesGrid;