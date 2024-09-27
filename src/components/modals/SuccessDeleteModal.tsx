import { ModalProps } from "@/types/modal-props.type";
import Button from "../ui/Button";
import Modal from "./Modal";

export default function SuccessDeleteModal({ close, isOpen }: ModalProps) {
  return (
    <Modal.Overlay isOpen={isOpen}>
      <Modal>
        <Modal.Title className="mb-10">Послуга успішно видалена!</Modal.Title>
        <div className="flex gap-5 justify-center">
          <Button variant="black" onClick={close} className="px-10">
            Oк
          </Button>
        </div>
      </Modal>
    </Modal.Overlay>
  );
}
