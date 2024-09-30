import { useDeleteModal } from "@/components/hooks/useDeleteModal";
import useQuestionModal from "@/components/hooks/useQuestionModal";
import DeleteServiceModals from "@/components/modals/Services/DeleteServiceModals";
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
      <DeleteServiceModals
        isOpen={isOpen}
        closeModal={closeModal}
        closeErrorModal={closeErrorModal}
        selectedServiceId={selectedServiceId || ""}
        closeSuccessModal={closeSuccessModal}
        showSuccessModal={showSuccessModal}
        showErrorModal={showErrorModal}
        handleDeleteService={handleDeleteService}
      />
    </>
  );
}
