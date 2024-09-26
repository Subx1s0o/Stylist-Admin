import Icon from "@/components/features/Icon";

import dynamic from "next/dynamic";

const LoginForm = dynamic(
  () => import("@/components/forms/LoginForm/LoginForm")
);

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-15 bg-lightGrey rounded-md items-center justify-center h-full">
      <Icon id="icon-logo" width={227} height={216} />
      <div>
        <h1 className="mb-5 text-center text-xxl">Вхід</h1>
        <LoginForm />
      </div>
    </main>
  );
}
