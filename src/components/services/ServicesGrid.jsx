import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

function ServicesGrid() {
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
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          color={service.color}
        />
      ))}
    </div>
  );
}

export default ServicesGrid;