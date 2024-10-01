import { SubmitModalsProps } from "@/types/submit-modals-props.type";
import dynamic from "next/dynamic";

const LoadingModal = dynamic(() => import("@/components/modals/LoadingModal"), {
  ssr: false,
});
const NotificationModal = dynamic(
  () => import("@/components/modals/NotificationModal"),
  {
    ssr: false,
  }
);

export default function AddServiceModals({
  loading,
  error,
  setError,
  success,
  setSuccess,
}: SubmitModalsProps) {
  return (
    <>
      {loading && <LoadingModal isOpen={loading} />}

      {error && (
        <NotificationModal
          close={() => setError(false)}
          isOpen={error}
          type="add-error"
        />
      )}

      {success && (
        <NotificationModal
          close={() => setSuccess(false)}
          isOpen={success}
          type="add-success"
        />
      )}
    </>
  );
}
