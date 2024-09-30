/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/utils/cn";
import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";

type FormTextAreaProps = ComponentProps<"textarea"> & {
  control: Control<any>;
  label?: string;
  name: string;
  attention?: string;
};
export default function FormTextArea({
  control,
  name,
  label,
  attention,
  className,
  ...textAreaProps
}: FormTextAreaProps) {
  const {
    formState: { errors },
  } = useController({ control, name });
  return (
    <div className="flex flex-col">
      {label && <label className="text-md mb-1">{label}</label>}
      <textarea
        {...control.register(name)}
        {...textAreaProps}
        className={cn(
          `bg-white outline-none rounded-xl border border-grey text-sm-thin w-[347px] py-2 px-3 h-[96px] resize-none transition-colors focus:border-black ${className}`,
          {
            "border-error": errors[name],
          }
        )}
      />
      {!errors && attention && <p className="text-xs mt-1">{attention}</p>}
      {errors[name] && (
        <p className="text-error text-sm mt-1">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
