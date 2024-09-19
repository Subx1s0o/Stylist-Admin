"use client";
import Button from "@/components/ui/Button";
import { FormValues } from "@/types/login-form.type";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginTextInput from "./LoginTextInput";

export default function LoginForm({}) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-10"
    >
      <div className="flex flex-col gap-3 ">
        <LoginTextInput
          control={control}
          name="login"
          placeholder="*******"
          label="Логін"
          type="text"
        />

        <LoginTextInput
          control={control}
          name="password"
          placeholder="*******"
          label="Пароль"
          type="password"
          hiding
        />
      </div>
      <Button variant="black" disabled={isSubmitting} className="text-lg">
        Увійти
      </Button>
    </form>
  );
}
