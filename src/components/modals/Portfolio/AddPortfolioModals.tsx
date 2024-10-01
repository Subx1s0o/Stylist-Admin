// AddPortfolioModals.tsx
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

interface Props {
  closeError: () => void;
  closeSuccess: () => void;
  loading: boolean;
  error: boolean;
  success: boolean;
}

export default function AddPortfolioModals({
  loading,
  error,
  closeError,
  success,
  closeSuccess,
}: Props) {
  return (
    <>
      {loading && <LoadingModal isOpen={loading} />}

      {error && (
        <NotificationModal
          close={closeError}
          isOpen={error}
          type="portfolio-error"
        />
      )}

      {success && (
        <NotificationModal
          close={closeSuccess}
          isOpen={success}
          type="portfolio-success"
        />
      )}
    </>
  );
}
