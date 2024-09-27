import Button from "@/components/ui/Button";
import Modal from "../Modal";
interface Props {
  close: () => void;
}

export default function ErrorAddModal({ close }: Props) {
  return (
    <Modal.Overlay>
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
