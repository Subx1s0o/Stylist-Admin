import { z } from "zod";

export const ServiceFormSchema = z.object({
  title: z.string().min(1, "Назва послуги обов'язкова"),
  duration_work: z.string().optional(),
  duration_consultation: z
    .string()
    .min(1, "Тривалість консультації обов'язкова"),
  price: z.string().min(1, "Вартість обов'язкова"),
  attention: z.string().max(80, "Максимальна кількість символів 80"),
  result: z
    .string()
    .min(50, "Мінімальна кількість символів 50, максимально допустима - 325")
    .max(325, "Максимальна кількість символів 325"),
  file: z
    .any()
    .refine((files) => {
      return (
        files &&
        ((files instanceof FileList && files.length > 0) ||
          (Array.isArray(files) && files.length > 0))
      );
    }, "Фотографія є обов'язковою, доступні формати - avif, jpg, webp, png, jpeg")
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
  "1": z.string().optional(),
  "2": z.string().optional(),
  "3": z.string().optional(),
  "4": z.string().optional(),
  "5": z.string().optional(),
  "6": z.string().optional(),
});

export type ServiceFormValues = z.infer<typeof ServiceFormSchema>;
