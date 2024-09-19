/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Icon from "@/components/features/Icon";
import { ComponentProps, useState } from "react";
import { Control, useController } from "react-hook-form";

type LoginTextInputProps = ComponentProps<"input"> & {
  control: Control<any>;
  label?: string;
  name: string;
  hiding?: boolean;
};

export default function LoginTextInput({
  control,
  label,
  name,
  hiding,
  ...inputProps
}: LoginTextInputProps) {
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
          className="w-[347px] h-[36px] rounded-xl py-2 px-3 text-sm-thin"
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
      {errors[name] && <p>{errors[name].message?.toString()}</p>}
    </div>
  );
}
