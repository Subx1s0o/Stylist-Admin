import { useQuery } from "@tanstack/react-query";

const fetchData = async (category: string, format?: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/services/${category}?limit=7&format=${format}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const useFetchData = (category: string, format?: string) => {
  return useQuery({
    queryKey: ["fetchData", category, format],
    queryFn: () => fetchData(category, format),
    refetchInterval: 10 * 60 * 1000,
  });
};
