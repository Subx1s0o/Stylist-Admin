import { NotificationType } from "@/types/notification.type";
import { useMemo } from "react";

interface NotificationMessage {
  title: string;
  description: string | null;
}

const useNotificationMessage = (
  type: NotificationType
): NotificationMessage => {
  return useMemo(() => {
    switch (type) {
      case "add-success":
        return { title: "Послуга успішно додана!", description: null };
      case "update-success":
        return { title: "Послуга успішно змінена!", description: null };
      case "delete-success":
        return { title: "Послуга успішно видалена!", description: null };
      case "add-error":
        return {
          title: "Додати послугу",
          description:
            "При додаванні послуги виникла помилка, спробуйте, будь ласка, ще раз",
        };
      case "update-error":
        return {
          title: "Змінити послугу",
          description:
            "При зміненні послуги виникла помилка, спробуйте, будь ласка, ще раз",
        };
      case "delete-error":
        return {
          title: "Видалити послугу",
          description:
            "При видаленні послуги виникла помилка, спробуйте, будь ласка, ще раз",
        };
      default:
        return {
          title: "Невідома помилка",
          description:
            "Виникла невідома помилка, спробуйте, будь ласка, пізніше",
        };
    }
  }, [type]);
};

export default useNotificationMessage;
