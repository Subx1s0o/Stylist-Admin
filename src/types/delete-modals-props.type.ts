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
