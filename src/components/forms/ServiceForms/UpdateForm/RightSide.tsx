/* eslint-disable @typescript-eslint/no-explicit-any */
import { Service } from "@/types/service.type";
import { Control } from "react-hook-form";
import FileInput from "../../FileInput";
import FormTextArea from "../../FormTextArea";

export default function RightSide({
  control,
  service,
}: {
  control: Control<any>;
  service: Service;
}) {
  return (
    <>
      <FileInput
        control={control}
        name="image"
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
          defaultValue={service?.stages[1]?.uk || ""}
        />
        <FormTextArea
          control={control}
          className="h-[56px] resize-none overflow-hidden"
          rows={2}
          maxLength={72}
          name="2"
          label="2 етап"
          defaultValue={service?.stages[2]?.uk || ""}
        />
        <FormTextArea
          control={control}
          className="h-[56px] resize-none overflow-hidden"
          rows={2}
          maxLength={72}
          name="3"
          label="3 етап"
          defaultValue={service?.stages[3]?.uk || ""}
        />
        <FormTextArea
          control={control}
          className="h-[56px] resize-none overflow-hidden"
          rows={2}
          maxLength={72}
          name="4"
          label="4 етап"
          defaultValue={service?.stages[4]?.uk || ""}
        />
        <FormTextArea
          control={control}
          className="h-[56px] resize-none overflow-hidden"
          rows={2}
          maxLength={72}
          name="5"
          label="5 етап"
          defaultValue={service?.stages[5]?.uk || ""}
        />
        <FormTextArea
          control={control}
          className="h-[56px] resize-none overflow-hidden"
          rows={2}
          maxLength={72}
          name="6"
          label="6 етап"
          defaultValue={service?.stages[6]?.uk || ""}
        />
      </div>
    </>
  );
}
