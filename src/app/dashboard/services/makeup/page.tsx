import GreyLayout from "@/views/GreyLayout";
import ServicePage from "@/views/ServicePage";

export default function MakeupPage() {
  return (
    <GreyLayout>
      <h1 className="text-center text-xxl mb-[47px]">Візаж</h1>
      <ServicePage defaultFormat="offline" category="makeup" />
    </GreyLayout>
  );
}
