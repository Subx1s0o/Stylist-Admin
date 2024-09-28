/* eslint-disable @typescript-eslint/no-explicit-any */
import { Service } from "@/types/service.type";
import { Control } from "react-hook-form";
import FormInput from "../FormInput";
import FormTextArea from "../FormTextArea";

export default function LeftSide({
  control,
  service,
}: {
  control: Control<any>;
  service: Service;
}) {
  return (
    <>
      <FormInput
        control={control}
        name="title"
        label="Назва послуги*"
        defaultValue={service.title.uk}
      />
      <div className="flex flex-col gap-3">
        <FormInput
          control={control}
          name="duration_work"
          label="Тривалість роботи"
          defaultValue={service?.duration_work?.uk || ""}
        />
        <FormInput
          control={control}
          name="duration_consultation"
          label="Тривалість консультації*"
          defaultValue={service.duration_consultation.uk}
        />
        <FormInput
          control={control}
          type="number"
          name="price"
          label="Вартість*"
          defaultValue={service.price}
        />
      </div>
      <FormTextArea
        control={control}
        className="h-[60px]"
        name="attention"
        label="Застереження"
        maxLength={80}
        attention="Максимальна кількість символів 80"
        defaultValue={service?.attention?.uk || ""}
      />
      <FormTextArea
        control={control}
        name="result"
        label="Результат*"
        maxLength={325}
        attention="Максимальна кількість символів 325"
        defaultValue={service.result.uk || ""}
      />
    </>
  );
}
