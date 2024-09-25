import { Service } from "@/types/service.type";
import ServiceCard from "./ServiceCard";

interface ServiceListProps {
  services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {services?.map((service, index) => (
        <ServiceCard key={service._id} service={service} index={index} />
      ))}
    </ul>
  );
}
