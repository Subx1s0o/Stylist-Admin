import { Category, Format } from "@/types/global.types";
import { fetchServices } from "@/utils/services";
import { useQuery } from "@tanstack/react-query";

export const useFetchServices = (
  category: Category,
  page: number,
  format?: Format | null
) => {
  return useQuery({
    queryKey: ["services", category, page, format],
    queryFn: () => fetchServices(category, page, format || null),
    refetchInterval: 10 * 60 * 1000,
  });
};
