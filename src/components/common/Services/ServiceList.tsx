import QuestionDeleteModal from "@/components/modals/QuestionDeleteModal";
import SuccessDeleteModal from "@/components/modals/SuccessDeleteModal";

import { useDeleteModal } from "@/components/hooks/useDeleteModal";
import useQuestionModal from "@/components/hooks/useQuestionModal";
import ErrorDeleteModal from "@/components/modals/ErrorDeleteModal";
import { Service } from "@/types/service.type";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

interface ServiceListProps {
  services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {
  const { isOpen, openModal, closeModal } = useQuestionModal();
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null
  );
  const {
    showSuccessModal,
    showErrorModal,
    closeSuccessModal,
    closeErrorModal,
    deleteServiceMutation,
  } = useDeleteModal();

  const handleOpenModal = (id: string) => {
    setSelectedServiceId(id);
    openModal();
  };

  const handleDeleteService = () => {
    if (selectedServiceId) {
      deleteServiceMutation.mutate(selectedServiceId);
      closeModal();
    }
  };

  return (
    <>
      <ul className="flex flex-col gap-3">
        {services.map((service, index) => (
          <ServiceCard
            index={index}
            key={service._id}
            service={service}
            openModal={handleOpenModal}
          />
        ))}
      </ul>

      {isOpen && selectedServiceId && (
        <QuestionDeleteModal
          id={selectedServiceId}
          close={closeModal}
          onDelete={handleDeleteService}
        />
      )}

      {showErrorModal && <ErrorDeleteModal close={closeErrorModal} />}

      {showSuccessModal && <SuccessDeleteModal close={closeSuccessModal} />}
    </>
  );
}
