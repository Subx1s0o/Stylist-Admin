"use client";
import Button from "@/components/ui/Button";
import { BACKEND_URL } from "@/components/utils/backend.url";
import { LoginFormValues } from "@/types/login-form.type";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInputWithEye from "../TextInputWithEye";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export default function LoginForm({}) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>();
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const res = await axios.post<LoginResponse>(`${BACKEND_URL}/auth/login`, {
        login: data.login,
        password: data.password,
      });
      Cookies.set("accessToken", res.data.accessToken);
      Cookies.set("refreshToken", res.data.refreshToken);
      router.replace("/dashboard");
    } catch (error) {
      throw new Error(`Error by login: ${error}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-10"
    >
      <div className="flex flex-col gap-3 ">
        <TextInputWithEye
          control={control}
          name="login"
          placeholder="*******"
          label="Логін"
          type="text"
        />

        <TextInputWithEye
          control={control}
          name="password"
          placeholder="dfghfdjy!123"
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
