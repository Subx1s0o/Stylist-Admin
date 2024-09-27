import Icon from "@/components/features/Icon";
import Modal from "../Modal";

import { ModalProps } from "@/types/modal-props.type";

export default function LoadingAddModal({ isOpen }: ModalProps) {
  return (
    <Modal.Overlay isOpen={isOpen}>
      <Modal.Title className="m-10">
        <Icon
          className="animate-spin"
          id="icon-loader"
          width={50}
          height={50}
        />
      </Modal.Title>
    </Modal.Overlay>
  );
}
