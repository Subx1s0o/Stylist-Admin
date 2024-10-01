import NotificationModal from "@/components/modals/NotificationModal";

import { DeleteServiceModalsProps } from "@/types/delete-modals-props.type";

import dynamic from "next/dynamic";
const QuestionDeleteModal = dynamic(
  () => import("@/components/modals/Services/QuestionDeleteModal"),
  {
    ssr: false,
  }
);
export default function DeleteServiceModals({
  isOpen,
  closeModal,
  handleDeleteService,
  selectedServiceId,
  showSuccessModal,
  closeSuccessModal,
  showErrorModal,
  closeErrorModal,
}: DeleteServiceModalsProps) {
  return (
    <>
      <QuestionDeleteModal
        id={selectedServiceId}
        close={closeModal}
        onDelete={handleDeleteService}
        isOpen={isOpen}
      />

      {showSuccessModal && (
        <NotificationModal
          close={closeSuccessModal}
          isOpen={showSuccessModal}
          type="delete-success"
        />
      )}
      {showErrorModal && (
        <NotificationModal
          close={closeErrorModal}
          isOpen={showErrorModal}
          type="delete-error"
        />
      )}
    </>
  );
}
