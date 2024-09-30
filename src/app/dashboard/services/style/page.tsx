import GreyLayout from "@/components/views/GreyLayout";
import ServicePage from "@/components/views/ServicePage";
export default function StylePage() {
  return (
    <GreyLayout>
      <h1 className="text-center text-xxl mb-[47px]">Стиль</h1>
      <ServicePage defaultFormat="online" category="style" />
    </GreyLayout>
  );
}
