/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";
import FileInput from "../FileInput";
import FormTextArea from "../FormTextArea";

export default function RightSide({ control }: { control: Control<any> }) {
  return (
    <>
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
    </>
  );
}
