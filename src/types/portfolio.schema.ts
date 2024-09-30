import { z } from "zod";

export const PortfolioFormSchema = z.object({
  image: z
    .any()
    .refine((files) => {
      return (
        files &&
        ((files instanceof FileList && files.length > 0) ||
          (Array.isArray(files) && files.length > 0))
      );
    }, "Виберіть фотографію, доступні формати - avif, jpg, webp, png, jpeg")
    .refine((files) => {
      const file =
        files instanceof FileList
          ? files[0]
          : Array.isArray(files)
          ? files[0]
          : null;
      return file
        ? [
            "image/avif",
            "image/webp",
            "image/jpg",
            "image/jpeg",
            "image/png",
          ].includes(file.type)
        : false;
    }, "Недоступимий формат зображення, доступні формати - avif, jpg, webp, png, jpeg")
    .refine((files) => {
      const file =
        files instanceof FileList
          ? files[0]
          : Array.isArray(files)
          ? files[0]
          : null;
      return file ? file.size <= 512 * 1024 : false;
    }, "Максимальний розмір файлу 500 KB, виберіть інше зображення або стисніть його"),
});

export type PortfolioFormValues = z.infer<typeof PortfolioFormSchema>;
