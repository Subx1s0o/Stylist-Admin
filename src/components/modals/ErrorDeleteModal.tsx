import Button from "../ui/Button";
import Modal from "./Modal";

interface Props {
  close: () => void;
}

export default function ErrorDeleteModal({ close }: Props) {
  return (
    <Modal.Overlay>
      <Modal>
        <Modal.Title className="mb-5">Помилка при видаленні!</Modal.Title>
        <Modal.Description className="mb-10">
          Ой! Сталася помилка, спробуйте будь ласка ще раз.
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
