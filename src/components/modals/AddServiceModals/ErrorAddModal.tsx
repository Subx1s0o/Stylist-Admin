import Button from "@/components/ui/Button";
import { ModalProps } from "@/types/modal-props.type";
import Modal from "../Modal";

export default function ErrorAddModal({ close, isOpen }: ModalProps) {
  return (
    <Modal.Overlay isOpen={isOpen}>
      <Modal>
        <Modal.Title className="mb-5">
          Помилка при додаванні послуги!
        </Modal.Title>
        <Modal.Description className="mb-10">
          Ой! Сталася помилка при додаванні послуги, спробуйте будь ласка
          пізніше
        </Modal.Description>
        <div className="flex gap-5 justify-center">
          <Button variant="black" onClick={close} className="px-10">
            Oк
          </Button>
        </div>
      </Modal>
    </Modal.Overlay>
  );
}
