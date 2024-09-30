import ChangePasswordForm from "@/components/forms/ChangePasswordForm/ChangePasswordForm";
import GreyLayout from "@/components/views/GreyLayout";

export default function ChangePasswordPage() {
  return (
    <GreyLayout>
      <div className=" flex flex-col items-center">
        <h1 className=" text-xxl mb-[27px]">Зміна Паролю</h1>
        <ChangePasswordForm />
      </div>
    </GreyLayout>
  );
}
