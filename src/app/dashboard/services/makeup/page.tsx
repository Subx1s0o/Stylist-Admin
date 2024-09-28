import ServiceLayout from "@/views/ServiceLayout";
import ServicePage from "@/views/ServicePage";

export default function MakeupPage() {
  return (
    <ServiceLayout>
      <h1 className="text-center text-xxl mb-[47px]">Візаж</h1>
      <ServicePage defaultFormat="offline" category="makeup" />
    </ServiceLayout>
  );
}
