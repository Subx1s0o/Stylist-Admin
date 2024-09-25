/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from "@/components/features/Icon";
import { cn } from "@/components/utils/cn";
import { Control, useController } from "react-hook-form";

type FileInputProps = {
  control: Control<any>;
  name: string;
  label?: string;
  className?: string;
  attention?: string;
};

export default function FileInput({
  control,
  name,
  label,
  className,
  attention,
}: FileInputProps) {
  const {
    field: { onChange, value, ref },
    formState: { errors },
  } = useController({ control, name });

  return (
    <div className="flex flex-col">
      {label && <label className="text-md mb-1">{label}</label>}
      <div className="mb-8">
        <input
          id={name}
          type="file"
          accept=".avif, .webp"
          onChange={(e) => {
            if (e.target.files) {
              onChange(e.target.files);
            }
          }}
          className={cn(`hidden ${className}`)}
          ref={ref}
        />
        <label
          htmlFor={name}
          className={cn(
            "flex rounded-xl justify-between border-grey items-center bg-white border px-3 py-2 cursor-pointer",
            {
              "border-red-500": errors?.[name],
            }
          )}
        >
          <p className="text-grey">
            {value ? "Завантажено" : "Завантажити файл"}
          </p>
          <Icon width={24} height={24} id="icon-upload" />
        </label>
        {!errors[name] && attention && (
          <p className="text-xs mt-1 ">{attention}</p>
        )}
        {errors[name] && (
          <p className="text-error text-xs mt-1">
            {errors[name]?.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
}
