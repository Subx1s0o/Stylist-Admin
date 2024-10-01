import { instance } from "./instance";
import { toBase64 } from "./toBase64";

export async function addImageToPortfolio<T>(data: T) {
  try {
    const response = await instance.post("/portfolio", data);

    return response.data;
  } catch (error) {
    throw new Error("Error Add Image");
  }
}

export async function prepareImageToPortfolio<T extends { image?: FileList }>(
  data: T
) {
  if (!data.image || data.image.length === 0) {
    throw new Error("Image is required");
  }

  const imageData = { image: (await toBase64(data.image[0])) as string };
  return imageData;
}
