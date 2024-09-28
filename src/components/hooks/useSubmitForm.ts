import { ServiceFormValues } from "@/types/service-form.schema";
import { useState } from "react";
import updateService, { addService } from "../utils/services";
import { toBase64 } from "../utils/toBase64";

interface SubmitFormProps {
  category: "style" | "makeup";
  activeFormat: string;
  mode: "ADD" | "UPDATE";
  id?: string;
}

const useSubmitForm = ({
  id = "",
  category,
  activeFormat,
  mode,
}: SubmitFormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = async (data: ServiceFormValues) => {
    setLoading(true);

    const serviceData = {
      title: data.title,
      duration_work: data.duration_work || "",
      duration_consultation: data.duration_consultation,
      price: Number(data.price),
      attention: data.attention || "",
      result: data.result,
      format: activeFormat as "online" | "offline",
      category: category,
      image: (await toBase64(data.image[0])) as string,
      stages: {
        "1": data["1"] || "",
        "2": data["2"] || "",
        "3": data["3"] || "",
        "4": data["4"] || "",
        "5": data["5"] || "",
        "6": data["6"] || "",
      },
    };
    try {
      if (mode === "ADD") {
        await addService(serviceData);
      } else {
        await updateService(id, serviceData);
      }

      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, submitForm, setError, setSuccess };
};

export default useSubmitForm;
