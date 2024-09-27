"use client";
import Icon from "@/components/features/Icon";
import { Service } from "@/types/service.type";
import Link from "next/link";

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
    <li className="bg-white rounded-xl py-3 px-5 flex gap-10 justify-between items-center">
      <h3 className="text-black">
        #{index + 1} {service.title.uk}
      </h3>
      <p className="text-black max-w-[500px] line-clamp-2">
        {service.result.uk}
      </p>
      <div className="flex gap-2">
        <Link
          className="p-2 rounded-xl transition-colors hover:text-white hover:bg-black"
          href={`/dashboard/services/update/${service._id}`}
        >
          <Icon
            id="icon-update"
            width={24}
            height={24}
            className="fill-current"
          />
        </Link>
        <button
          onClick={() => openModal(service._id)}
          className="p-2 rounded-xl transition-colors hover:text-white hover:bg-black"
        >
          <Icon
            id="icon-delete"
            width={24}
            height={24}
            className="fill-current"
          />
        </button>
      </div>
    </li>
  );
}
