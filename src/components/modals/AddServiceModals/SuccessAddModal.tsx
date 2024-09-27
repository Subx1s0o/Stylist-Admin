import Button from "@/components/ui/Button";
import Modal from "../Modal";
interface Props {
  close: () => void;
}

export default function SuccessAddModal({ close }: Props) {
  return (
    <Modal.Overlay>
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
