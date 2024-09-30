import { Category, Format } from "@/types/global.types";
import { ServiceFormValues } from "@/types/service-form.schema";
import { Service } from "@/types/service.type";
import { notFound } from "next/navigation";
import { instance } from "./instance";
import { toBase64 } from "./toBase64";

export const fetchServices = async (
  category: Category,
  page: number,
  format?: Format | null
) => {
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

export const deleteService = async (id: string) => {
  await instance.delete(`/services/${id}`);
};

export async function fetchService(id: string) {
  try {
    const res = await instance.get<Service>(`/services/${id}`);
    return res.data;
  } catch (error) {
    notFound();
  }
}

export async function addService<T>(serviceData: T) {
  try {
    const res = await instance.post<Service>("/services", serviceData);
    return res.data;
  } catch (error) {
    throw new Error("Error by adding Service");
  }
}

export async function updateService<T>(id: string, serviceData: T) {
  try {
    const res = await instance.patch<Service>(`/services/${id}`, serviceData);

    return res.data;
  } catch (error) {
    throw new Error("Error by adding Service");
  }
}

export async function prepareAddServiceData(
  data: ServiceFormValues,
  activeFormat: Format,
  category: Category
) {
  return {
    title: data.title,
    duration_work: data.duration_work || "",
    duration_consultation: data.duration_consultation,
    price: Number(data.price),
    attention: data.attention || "",
    result: data.result,
    format: activeFormat as Format,
    category: category,
    image: (await toBase64(data.image[0])) as string,
    stages: {
      "1": data["1"] || "",
      "2": data["2"] || "",
      "3": data["3"] || "",
      "4": data["4"] || "",
      "5": data["5"] || "",
      "6": data["6"] || "",
    },
  };
}

export async function prepareUpdateServiceData(
  id: string,
  data: ServiceFormValues,
  activeFormat: Format,
  category: Category
) {
  const preparedData = await prepareAddServiceData(
    data,
    activeFormat,
    category
  );
  return {
    id,
    ...preparedData,
  };
}
