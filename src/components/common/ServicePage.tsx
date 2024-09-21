"use client";
import Link from "next/link";
import FormatSwitcher from "../features/FormatSwitcher";
import Icon from "../features/Icon";
import useChangeFormat from "../hooks/useChangeFormat";
import { useFetchData } from "../hooks/useFetchData";
import DescriptionBar from "./Services/DescriptionBar";
import ServiceList from "./Services/ServiceList";
import ServicesSkeleton from "./Services/ServicesSkeleton";

export default function ServicePage({
  defaultFormat,
  category,
}: {
  category: string;
  defaultFormat: "online" | "offline";
}) {
  const { activeFormat, changeFormat } = useChangeFormat(defaultFormat);

  const { data, error, isLoading } = useFetchData(category, activeFormat);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex mb-[25px]">
        {category === "style" && (
          <FormatSwitcher
            activeFormat={activeFormat}
            changeFormat={changeFormat}
          />
        )}
        <Link
          href={`/dashboard/services/${category}/add`}
          className="px-8 py-4 bg-black text-white flex gap-3 ml-auto items-center rounded-xl"
        >
          <span>
            <Icon width={24} height={24} id="icon-plus" />
          </span>
          Додати
        </Link>
      </div>
      <DescriptionBar />
      {isLoading ? (
        <ServicesSkeleton />
      ) : (
        <ServiceList services={data.services} />
      )}
      {error && "error"}
    </>
  );
}
