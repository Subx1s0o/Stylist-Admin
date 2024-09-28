"use client";
import { Service } from "@/types/service.type";
import ServiceSettings from "./ServiceSettings";

interface ServiceCardProps {
  service: Service;
  index: number;
  openModal: (id: string) => void;
}

export default function ServiceCard({
  service,
  index,
  openModal,
}: ServiceCardProps) {
  return (
    <li className="bg-white relative rounded-xl py-3 px-5 flex gap-10 justify-between items-center">
      <h3 className="text-black  max-w-[230px] line-clamp-2">
        #{index + 1} {service.title.uk}
      </h3>
      <p className="absolute left-[52%] -translate-x-1/2  text-black max-w-[500px] line-clamp-2">
        {service.result.uk}
      </p>
      <ServiceSettings openModal={openModal} id={service._id} />
    </li>
  );
}
