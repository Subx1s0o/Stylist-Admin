/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Button from "@/components/ui/Button";
import { changePassword, logout } from "@/components/utils/admin";
import { cn } from "@/components/utils/cn";
import { ChangePasswordFormValues } from "@/types/change-password.type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInputWithEye from "../TextInputWithEye";

export default function ChangePasswordForm() {
  const { control, handleSubmit, setError } =
    useForm<ChangePasswordFormValues>();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (passwords: ChangePasswordFormValues) => {
    try {
      setErrorMessage(null);
      await changePassword(passwords);
      logout();
      router.replace("login");
    } catch (error: any) {
      if (error.response?.status === 400) {
        setError("old_password", {
          type: "manual",
          message: "Старий пароль не співпадає",
        });
      } else {
        setErrorMessage("Невдалося оновити пароль. Перевірте з'єднання.");
      }
    }
  };

  return (
    <form className="contents" onSubmit={handleSubmit(onSubmit)}>
      <div
        className={cn("mb-10 flex flex-col gap-3", { "mb-2": errorMessage })}
      >
        <TextInputWithEye
          control={control}
          name="old_password"
          label="Старий пароль"
          placeholder="*******"
          hiding
        />
        <TextInputWithEye
          control={control}
          name="new_password"
          label="Новий пароль"
          placeholder="dfghfdjy!123"
          hiding
        />
      </div>
      {errorMessage && (
        <p className="text-error text-xs mb-5">{errorMessage}</p>
      )}
      <Button type="submit">Змінити</Button>
    </form>
  );
}
