"use client";

import FormatSwitcher from "@/components/features/FormatSwitcher";
import Icon from "@/components/features/Icon";
import useChangeFormat from "@/components/hooks/useChangeFormat";
import useSubmitForm from "@/components/hooks/useSubmitForm";
import AddServiceModals from "@/components/modals/Services/AddServiceModals";
import Button from "@/components/ui/Button";
import {
  ServiceFormSchema,
  ServiceFormValues,
} from "@/types/service-form.schema";
import { AddService } from "@/types/service.type";
import { prepareAddServiceData } from "@/utils/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function AddForm({
  hasFormat,
  category,
  defaultFormat,
}: {
  hasFormat?: boolean;
  defaultFormat: "online" | "offline";
  category: "style" | "makeup";
}) {
  const { activeFormat, changeFormat } = useChangeFormat(defaultFormat);
  const ref = useRef<HTMLFormElement>(null);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ServiceFormValues>({
    resolver: zodResolver(ServiceFormSchema),
  });

  const { loading, error, success, submitForm, setError, setSuccess } =
    useSubmitForm<AddService, ServiceFormValues>({
      prepareData: (data) =>
        prepareAddServiceData(data, activeFormat, category),
      mode: "ADD",
    });

  const onSubmit: SubmitHandler<ServiceFormValues> = async (data) => {
    await submitForm(data);
  };

  return (
    <>
      <form
        ref={ref}
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex mb-[15px]">
          {hasFormat && (
            <FormatSwitcher
              activeFormat={activeFormat}
              changeFormat={changeFormat}
            />
          )}
          <Button
            variant="black"
            type="submit"
            className="ml-auto flex gap-3"
            disabled={isSubmitting}
          >
            <span>
              <Icon width={24} height={24} id="icon-plus" />
            </span>
            {isSubmitting ? "Очікуємо..." : "Додати"}
          </Button>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-8 max-w-[347px]">
            <LeftSide control={control} />
          </div>
          <div className="flex flex-col max-w-[347px]">
            <RightSide control={control} />
          </div>
        </div>
      </form>

      <AddServiceModals
        loading={loading}
        error={error}
        setError={setError}
        success={success}
        setSuccess={setSuccess}
      />
    </>
  );
}
