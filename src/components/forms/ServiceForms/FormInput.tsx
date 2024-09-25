/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/components/utils/cn";
import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";

type FormInputProps = ComponentProps<"input"> & {
  control: Control<any>;
  label?: string;
  name: string;
};
export default function FormInput({
  control,
  name,
  label,
  className,
  ...inputProps
}: FormInputProps) {
  const {
    formState: { errors },
  } = useController({ control, name });
  return (
    <div className="flex flex-col">
      {label && <label className="text-md mb-1">{label}</label>}
      <input
        {...control.register(name)}
        {...inputProps}
        className={cn(
          `bg-white outline-none rounded-xl border  border-grey transition-colors focus:border-black text-sm-thin w-[347px] py-2 px-3 h-[36px] ${className}`,
          {
            "border-red-500": errors?.[name],
          }
        )}
      />
      {errors[name] && (
        <p className="text-error text-xs">{errors[name].message?.toString()}</p>
      )}
    </div>
  );
}
