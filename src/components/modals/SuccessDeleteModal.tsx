import Button from "../ui/Button";
import Modal from "./Modal";

interface Props {
  close: () => void;
}

export default function SuccessDeleteModal({ close }: Props) {
  return (
    <Modal>
      <Modal.Title className="mb-10">Послуга успішно видалена!</Modal.Title>
      <div className="flex gap-5 justify-center">
        <Button variant="black" onClick={close} className="px-10">
          Oк
        </Button>
      </div>
    </Modal>
  );
}
