import { ModalProps } from "@/types/modal-props.type";
import Button from "../../ui/Button";
import Modal from "../Modal";
interface Props extends ModalProps {
  id: string;
  onDelete: (id: string) => void;
}

export default function QuestionDeleteModal({
  id,
  close,
  onDelete,
  isOpen,
}: Props) {
  return (
    <Modal.Overlay isOpen={isOpen}>
      <Modal>
        <Modal.Title className="mb-5">Видалити послугу</Modal.Title>
        <Modal.Description className="mb-10">
          Ви впевнені, що хочете видалити цю послугу?
        </Modal.Description>
        <div className="flex gap-5 justify-center">
          <Button variant="outline" onClick={close}>
            Скасувати
          </Button>
          <Button variant="black" onClick={() => onDelete(id)}>
            Видалити
          </Button>
        </div>
      </Modal>
    </Modal.Overlay>
  );
}
