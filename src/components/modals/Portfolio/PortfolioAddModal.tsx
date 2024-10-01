import PortfolioForm from "@/components/forms/PortfolioForm/PortfolioForm";
import { ModalProps } from "@/types/modal-props.type";

import Modal from "../Modal";

export default function PortfolioAddModal({ close, isOpen }: ModalProps) {
  return (
    <Modal.Overlay isOpen={isOpen}>
      <Modal>
        <Modal.Title className="mb-5">Додати фото</Modal.Title>
        <PortfolioForm close={close} />
      </Modal>
    </Modal.Overlay>
  );
}
