"use client";
import Pagination from "@/components/features/Pagination";
import Link from "next/link";
import { useEffect, useState } from "react";
import DescriptionBar from "../components/common/DescriptionBar";
import ServiceList from "../components/common/Services/ServiceList";
import ServicesSkeleton from "../components/common/Services/ServicesSkeleton";
import FormatSwitcher from "../components/features/FormatSwitcher";
import Icon from "../components/features/Icon";
import useChangeFormat from "../components/hooks/useChangeFormat";
import { useFetchData } from "../components/hooks/useFetchData";

export default function ServicePage({
  defaultFormat,
  category,
}: {
  category: string;
  defaultFormat: "online" | "offline";
}) {
  const { activeFormat, changeFormat } = useChangeFormat(defaultFormat);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { data, error, isLoading } = useFetchData(
    category,
    currentPage,
    activeFormat
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFormat]);

  useEffect(() => {
    if (data) {
      setTotalPages(data.totalPages);
    }
  }, [data]);

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
          className="px-8 py-4 bg-black transition-colors hover:bg-gray-950 text-white flex gap-3 ml-auto items-center rounded-xl"
        >
          <span>
            <Icon width={24} height={24} id="icon-plus" />
          </span>
          Додати
        </Link>
      </div>
      <DescriptionBar />
      {isLoading ? <ServicesSkeleton /> : <ServiceList services={data.data} />}
      {error && "error"}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={setCurrentPage}
        />
      )}
    </>
  );
}
