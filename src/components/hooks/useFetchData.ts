import { instance } from "@/instance";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (category: string, page: number, format?: string) => {
  try {
    const response = await instance.get(
      `/services/${category}?${
        format && `format=${format}&limit=7&page=${page}`
      }`
    );

    return response.data;
  } catch (error) {
    throw new Error("Error Fetch Services");
  }
};

export const useFetchData = (
  category: string,
  page: number,
  format?: string
) => {
  return useQuery({
    queryKey: ["services", category, page, format],
    queryFn: () => fetchData(category, page, format || ""),
    refetchInterval: 10 * 60 * 1000,
  });
};
