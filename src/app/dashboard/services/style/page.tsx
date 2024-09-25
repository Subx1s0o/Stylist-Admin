import ServicePage from "@/views/ServicePage";

export default function StylePage() {
  return (
    <div className="">
      <h1 className="text-center text-xxl mb-[47px]">Стиль</h1>
      <ServicePage defaultFormat="online" category="style" />
    </div>
  );
}
