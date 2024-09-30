"use client";

import { cn } from "../utils/cn";
import Icon from "./Icon";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  setPage,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  function changePage(newPage: number) {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  }

  return (
    <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 flex gap-2 ">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icon
          id="icon-pagination-arrow"
          className={cn("", { "fill-none": currentPage === 1 })}
          width={30}
          height={30}
        />
      </button>
      <ul className="flex">
        {pages.map((page) => (
          <li key={page} className="py-1 px-2">
            <button
              onClick={() => changePage(page)}
              className={cn("text-lg", {
                "font-bold": currentPage === page,
              })}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Icon
          id="icon-pagination-arrow"
          className={cn("rotate-180", {
            "fill-none": currentPage === totalPages,
          })}
          width={30}
          height={30}
        />
      </button>
    </div>
  );
}
