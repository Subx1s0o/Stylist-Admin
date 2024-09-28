import { instance } from "@/instance";
import { Service } from "@/types/service.type";
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

export async function addService(formData: FormData) {
  try {
    const res = await instance.post<Service>("/services", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return res.data;
  } catch (error) {
    throw new Error("Error by adding Service");
  }
}

export default async function updateService(id: string, formData: FormData) {
  try {
    const res = await instance.patch<Service>(`/services/${id}`, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return res.data;
  } catch (error) {
    throw new Error("Error by adding Service");
  }
}
