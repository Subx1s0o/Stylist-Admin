import { ServiceFormValues } from "@/types/service-form.schema";
import { useState } from "react";
import updateService, { addService } from "../utils/services";

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
    const formData = new FormData();

    formData.append("file", data.file[0]);
    formData.append("title", data.title);
    formData.append("duration_work", data.duration_work || "");
    formData.append("duration_consultation", data.duration_consultation);
    formData.append("price", data.price);
    formData.append("attention", data.attention || "");
    formData.append("result", data.result);
    formData.append("category", category);
    formData.append("format", activeFormat);

    const stages: Record<number, string> = {
      1: data["1"] || "",
      2: data["2"] || "",
      3: data["3"] || "",
      4: data["4"] || "",
      5: data["5"] || "",
      6: data["6"] || "",
    };

    for (const key in stages) {
      if (!stages[key]) {
        delete stages[key];
      }
    }
    formData.append("stages", JSON.stringify(stages));

    try {
      if (mode === "ADD") {
        await addService(formData);
      } else {
        await updateService(id, formData);
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
