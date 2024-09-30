import { ModalProps } from "@/types/modal-props.type";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import logout from "../utils/logout";
import Modal from "./Modal";

export default function LogoutModal({ close, isOpen }: ModalProps) {
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.replace("login");
  };

  return (
    <Modal.Overlay isOpen={isOpen}>
      <Modal>
        <Modal.Title className="mb-5">Вихід</Modal.Title>
        <Modal.Description className="mb-10">
          Ви впевнені, що хочете вийти з адмін-панелі?
        </Modal.Description>
        <div className="flex gap-5 justify-center">
          <Button variant="outline" onClick={close}>
            Скасувати
          </Button>
          <Button variant="black" onClick={handleLogout}>
            Вийти
          </Button>
        </div>
      </Modal>
    </Modal.Overlay>
  );
}
