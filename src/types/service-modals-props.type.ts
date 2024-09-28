export interface ServiceModalsProps {
  loading: boolean;
  error: boolean;
  setError: (bool: boolean) => void;
  success: boolean;
  setSuccess: (bool: boolean) => void;
}

export interface DeleteServiceModalsProps {
  isOpen: boolean;
  selectedServiceId: string;
  closeModal: () => void;
  handleDeleteService: (id: string) => void;
  closeErrorModal: () => void;
  showErrorModal: boolean;
  closeSuccessModal: () => void;
  showSuccessModal: boolean;
}
