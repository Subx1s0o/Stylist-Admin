import Icon from "@/components/features/Icon";
import Link from "next/link";
import React from "react";

interface ServiceListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  services: any[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <ul className="flex flex-col gap-3">
      {services?.map((service, index) => (
        <li
          className="bg-white rounded-xl py-3 px-5 flex gap-10 justify-between items-center"
          key={service._id}
        >
          <h3 className="text-black">
            #{index + 1} {service.title.uk}
          </h3>
          <p className="text-black max-w-[500px] line-clamp-2">
            {service.result.uk}
          </p>
          <div className="flex gap-2">
            <Link
              className="p-2"
              href={`/dashboard/services/update/${service._id}`}
            >
              <Icon
                id="icon-update"
                width={24}
                height={24}
                className="fill-black"
              />
            </Link>
            <button className="p-2">
              <Icon
                id="icon-delete"
                width={24}
                height={24}
                className="fill-black"
              />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
