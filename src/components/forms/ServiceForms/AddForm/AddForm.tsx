"use client";

import FormatSwitcher from "@/components/features/FormatSwitcher";
import Icon from "@/components/features/Icon";
import FormInput from "@/components/forms/ServiceForms/FormInput";
import FormTextArea from "@/components/forms/ServiceForms/FormTextArea";
import useSubmitForm from "@/components/hooks/useAddFormModal";
import useChangeFormat from "@/components/hooks/useChangeFormat";
import ErrorAddModal from "@/components/modals/AddServiceModals/ErrorAddModal";
import LoadingAddModal from "@/components/modals/AddServiceModals/LoadingAddModal";
import SuccessAddModal from "@/components/modals/AddServiceModals/SuccessAddModal";
import Button from "@/components/ui/Button";
import {
  ServiceFormSchema,
  ServiceFormValues,
} from "@/types/service-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FileInput from "../FileInput";
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
    useSubmitForm(category, activeFormat);

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
            <FormInput control={control} name="title" label="Назва послуги*" />
            <div className="flex flex-col gap-3">
              <FormInput
                control={control}
                name="duration_work"
                label="Тривалість роботи"
              />
              <FormInput
                control={control}
                name="duration_consultation"
                label="Тривалість консультації*"
              />
              <FormInput
                control={control}
                type="number"
                name="price"
                label="Вартість*"
              />
            </div>
            <FormTextArea
              control={control}
              className="h-[60px]"
              name="attention"
              label="Застереження"
              maxLength={80}
              attention="Максимальна кількість символів 80"
            />
            <FormTextArea
              control={control}
              name="result"
              label="Результат*"
              maxLength={325}
              attention="Максимальна кількість символів 325"
            />
          </div>
          <div className="flex flex-col max-w-[347px]">
            <FileInput
              control={control}
              name="file"
              label="Фото*"
              className="mb-8"
              attention="Доступні формати avif, webp, png, jpg, jpeg"
            />
            <div className="flex flex-col gap-3">
              <FormTextArea
                control={control}
                className="h-[56px] resize-none overflow-hidden"
                rows={2}
                maxLength={72}
                name="1"
                label="1 етап"
              />
              <FormTextArea
                control={control}
                className="h-[56px] resize-none overflow-hidden"
                rows={2}
                maxLength={72}
                name="2"
                label="2 етап"
              />
              <FormTextArea
                control={control}
                className="h-[56px] resize-none overflow-hidden"
                rows={2}
                maxLength={72}
                name="3"
                label="3 етап"
              />
              <FormTextArea
                control={control}
                className="h-[56px] resize-none overflow-hidden"
                rows={2}
                maxLength={72}
                name="4"
                label="4 етап"
              />
              <FormTextArea
                control={control}
                className="h-[56px] resize-none overflow-hidden"
                rows={2}
                maxLength={72}
                name="5"
                label="5 етап"
              />
              <FormTextArea
                control={control}
                className="h-[56px] resize-none overflow-hidden"
                rows={2}
                maxLength={72}
                name="6"
                label="6 етап"
              />
            </div>
          </div>
        </div>
      </form>

      {loading && <LoadingAddModal isOpen={loading} />}

      {error && <ErrorAddModal close={() => setError(false)} isOpen={error} />}

      {success && (
        <SuccessAddModal close={() => setSuccess(false)} isOpen={success} />
      )}
    </>
  );
}
