import { ServiceModalsProps } from "@/types/service-modals-props.type";
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
}: ServiceModalsProps) {
  return (
    <>
      {loading && <LoadingModal isOpen={loading} />}

      {error && (
        <NotificationModal
          close={() => setError(false)}
          isOpen={error}
          type="update"
        />
      )}

      {success && (
        <NotificationModal
          close={() => setSuccess(false)}
          isOpen={success}
          type="update"
        />
      )}
    </>
  );
}
