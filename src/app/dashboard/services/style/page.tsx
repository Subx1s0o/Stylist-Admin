import ServiceLayout from "@/views/ServiceLayout";
import ServicePage from "@/views/ServicePage";
export default function StylePage() {
  return (
    <ServiceLayout>
      <h1 className="text-center text-xxl mb-[47px]">Стиль</h1>
      <ServicePage defaultFormat="online" category="style" />
    </ServiceLayout>
  );
}
