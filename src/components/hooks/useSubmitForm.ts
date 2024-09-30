import { addService, updateService } from "@/utils/services";
import { useState } from "react";

interface SubmitFormProps<T, FV> {
  mode: "ADD" | "UPDATE" | "PORTFOLIO";
  id?: string;
  prepareData: (data: FV) => Promise<T>;
}

export function useSubmitForm<T, FV>({
  id = "",
  mode,
  prepareData,
}: SubmitFormProps<T, FV>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = async (data: FV) => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      const preparedData = await prepareData(data);

      switch (mode) {
        case "ADD": {
          await addService<T>(preparedData);
          break;
        }
        case "UPDATE": {
          await updateService<T>(id, preparedData);
          break;
        }
        case "PORTFOLIO": {
          break;
        }
        default: {
          throw new Error("The chosen mode is not supported");
        }
      }

      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, submitForm, setError, setSuccess };
}

export default useSubmitForm;
