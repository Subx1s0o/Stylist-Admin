import { PortfolioFormValues } from "@/types/portfolio.schema";
import { instance } from "./instance";

export async function addImageToPortfolio(data: PortfolioFormValues) {
  try {
    const response = await instance.post("/portfolio", data);

    return response.data;
  } catch (error) {
    throw new Error("Error Add Image");
  }
}
