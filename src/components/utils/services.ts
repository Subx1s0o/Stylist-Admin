import { instance } from "@/instance";
import { SendService, Service } from "@/types/service.type";
import { notFound } from "next/navigation";

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

export async function addService(serviceData: SendService) {
  try {
    const res = await instance.post<Service>("/services", serviceData);
    return res.data;
  } catch (error) {
    console.error("Error while adding service:", error);
    throw new Error("Error by adding Service");
  }
}

export default async function updateService(
  id: string,
  serviceData: SendService
) {
  try {
    const res = await instance.patch<Service>(`/services/${id}`, serviceData);

    return res.data;
  } catch (error) {
    throw new Error("Error by adding Service");
  }
}
