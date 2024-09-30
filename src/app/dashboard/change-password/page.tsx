import ChangePasswordForm from "@/components/forms/ChangePasswordForm/ChangePasswordForm";

export default function ChangePasswordPage() {
  return (
    <section className="pt-[70px] ">
      <div className="flex flex-col items-center">
        <h1 className=" text-xxl mb-[27px]">Зміна Паролю</h1>
        <ChangePasswordForm />
      </div>
    </section>
  );
}
