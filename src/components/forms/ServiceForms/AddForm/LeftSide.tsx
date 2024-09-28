/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";
import FormInput from "../FormInput";
import FormTextArea from "../FormTextArea";

export default function LeftSide({ control }: { control: Control<any> }) {
  return (
    <>
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
    </>
  );
}
