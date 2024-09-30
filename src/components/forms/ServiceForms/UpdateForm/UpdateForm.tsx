"use client";

import FormatSwitcher from "@/components/features/FormatSwitcher";
import Icon from "@/components/features/Icon";
import useChangeFormat from "@/components/hooks/useChangeFormat";
import useSubmitForm from "@/components/hooks/useSubmitForm";
import UpdateServiceModals from "@/components/modals/Services/UpdateServiceModals";
import Button from "@/components/ui/Button";
import {
  ServiceFormSchema,
  ServiceFormValues,
} from "@/types/service-form.schema";
import { Service, UpdateService } from "@/types/service.type";
import { prepareUpdateServiceData } from "@/utils/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function UpdateForm({
  hasFormat,
  category,
  defaultFormat,
  service,
}: {
  hasFormat?: boolean;
  defaultFormat: "online" | "offline";
  category: "style" | "makeup";
  service: Service;
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
    useSubmitForm<UpdateService, ServiceFormValues>({
      id: service._id,
      prepareData: (data) =>
        prepareUpdateServiceData(service._id, data, activeFormat, category),
      mode: "UPDATE",
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
            {isSubmitting ? "Очікуємо..." : "Змінити"}
          </Button>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-8 max-w-[347px]">
            <LeftSide control={control} service={service} />
          </div>
          <div className="flex flex-col max-w-[347px]">
            <RightSide control={control} service={service} />
          </div>
        </div>
      </form>

      <UpdateServiceModals
        loading={loading}
        error={error}
        success={success}
        setError={setError}
        setSuccess={setSuccess}
      />
    </>
  );
}
