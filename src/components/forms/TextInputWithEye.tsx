/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Icon from "@/components/features/Icon";
import { ComponentProps, useState } from "react";
import { Control, useController } from "react-hook-form";
import { cn } from "../utils/cn";

type TextInputWithEyeProps = ComponentProps<"input"> & {
  control: Control<any>;
  label?: string;
  name: string;
  hiding?: boolean;
};

export default function TextInputWithEye({
  control,
  label,
  name,
  hiding,
  ...inputProps
}: TextInputWithEyeProps) {
  const [isHiding, setIsHiding] = useState<boolean>(hiding || false);

  const {
    formState: { errors },
  } = useController({ control, name });

  const toggleInputType = () => {
    if (hiding) {
      setIsHiding((prevState) => !prevState);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-md">{label}</label>}
      <div className="relative">
        <input
          {...control.register(name)}
          {...inputProps}
          type={isHiding ? "password" : "text"}
          className={cn(
            "w-[347px] h-[36px]  border  border-grey rounded-xl py-2 px-3 text-sm-thin",
            { "border-error": errors[name] }
          )}
        />
        {hiding && (
          <button
            type="button"
            onClick={toggleInputType}
            className="absolute right-3 top-[6px]"
          >
            <Icon
              id={isHiding ? "icon-eye-opened" : "icon-eye-closed"}
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      {errors[name] && (
        <p className="text-error text-xs">{errors[name].message?.toString()}</p>
      )}
    </div>
  );
}
