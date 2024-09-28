import Button from "@/components/ui/Button";
import { ModalProps } from "@/types/modal-props.type";
import Modal from "./Modal";

interface NotificationModalProps extends ModalProps {
  type: "add" | "update" | "delete" | "error";
}

export default function NotificationModal({
  close,
  isOpen,
  type,
}: NotificationModalProps) {
  let title: string;
  let description: string | null = null;

  switch (type) {
    case "add":
      title = "Послуга успішно додана!";
      break;
    case "update":
      title = "Послуга успішно змінена!";
      break;
    case "delete":
      title = "Послуга успішно видалена!";
      break;
    case "error":
      title = "Помилка при видаленні!";
      description = "Ой! Сталася помилка, спробуйте будь ласка ще раз.";
      break;
    default:
      title = "";
  }

  return (
    <Modal.Overlay isOpen={isOpen}>
      <Modal>
        <Modal.Title className="mb-10">{title}</Modal.Title>
        {description && (
          <Modal.Description className="mb-10">{description}</Modal.Description>
        )}
        <div className="flex gap-5 justify-center">
          <Button variant="black" onClick={close} className="px-10">
            Oк
          </Button>
        </div>
      </Modal>
    </Modal.Overlay>
  );
}
