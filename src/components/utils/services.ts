import { instance } from "@/instance";

export const deleteService = async (id: string) => {
  await instance.delete(`/services/${id}`);
};
