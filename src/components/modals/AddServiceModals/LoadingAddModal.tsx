import Icon from "@/components/features/Icon";
import Modal from "../Modal";

export default function LoadingAddModal() {
  return (
    <Modal>
      <Modal.Title className="m-10">
        <Icon
          className="animate-spin"
          id="icon-loader"
          width={50}
          height={50}
        />
      </Modal.Title>
    </Modal>
  );
}
