import Button from "@/components/ui/Button";
import { ModalProps } from "@/types/modal-props.type";
import Modal from "../Modal";
export default function SuccessAddModal({ close, isOpen }: ModalProps) {
  return (
    <Modal.Overlay isOpen={isOpen}>
      <Modal>
        <Modal.Title className="mb-10">Послуга успішно додана!</Modal.Title>
        <div className="flex gap-5 justify-center">
          <Button variant="black" onClick={close} className="px-10">
            Oк
          </Button>
        </div>
      </Modal>
    </Modal.Overlay>
  );
}
