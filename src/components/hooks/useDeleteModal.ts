import useDeleteService from "@/components/hooks/useDeleteServices";
import { useEffect, useState } from "react";

export const useDeleteModal = () => {
  const deleteServiceMutation = useDeleteService();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    if (deleteServiceMutation.isSuccess) {
      setShowSuccessModal(true);
    }
  }, [deleteServiceMutation.isSuccess]);

  useEffect(() => {
    if (deleteServiceMutation.isError) {
      setShowErrorModal(true);
    }
  }, [deleteServiceMutation.isError]);

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return {
    showSuccessModal,
    showErrorModal,
    closeSuccessModal,
    closeErrorModal,
    deleteServiceMutation,
  };
};
