import { instance } from "@/instance";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (category: string, format?: string) => {
  try {
    const response = await instance.get(
      `/services/${category}?limit=7&format=${format}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error Fetch Services");
  }
};

export const useFetchData = (category: string, format?: string) => {
  return useQuery({
    queryKey: ["services", category, format],
    queryFn: () => fetchData(category, format),
    refetchInterval: 10 * 60 * 1000,
  });
};
