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
      // Assing Services Messages
      case "add-success":
        return { title: "Послуга успішно додана!", description: null };
      case "add-error":
        return {
          title: "Додати послугу",
          description:
            "При додаванні послуги виникла помилка, спробуйте, будь ласка, ще раз",
        };

      //Updating Services Messages
      case "update-success":
        return { title: "Послуга успішно змінена!", description: null };
      case "update-error":
        return {
          title: "Змінити послугу",
          description:
            "При зміненні послуги виникла помилка, спробуйте, будь ласка, ще раз",
        };

      // Deleting Services Messages
      case "delete-success":
        return { title: "Послуга успішно видалена!", description: null };
      case "delete-error":
        return {
          title: "Видалити послугу",
          description:
            "При видаленні послуги виникла помилка, спробуйте, будь ласка, ще раз",
        };

      // Portfolio Adding Messages
      case "portfolio-success":
        return {
          title: "Фото успішно додане!",
          description: null,
        };
      case "portfolio-error":
        return {
          title: "Додати зображення до портфоліо",
          description:
            "При додаванні зображення до портфоліо виникла помилка, спробуйте, будь ласка, ще раз",
        };

      // Portfolio Deleting Messages
      case "portfolio-delete-success":
        return {
          title: "Фото видалене!",
          description: null,
        };
      case "portfolio-delete-error":
        return {
          title: "Видалити зображення з портфоліо",
          description:
            "При видаленні зображення з портфоліо виникла помилка, спробуйте, будь ласка, ще раз",
        };

      // Default Error
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
