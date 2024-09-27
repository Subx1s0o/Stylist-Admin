import ServicePage from "@/views/ServicePage";

export default function StylePage() {
  return (
    <section className="bg-lightGrey rounded-[20px] p-[60px]">
      <h1 className="text-center text-xxl mb-[47px]">Стиль</h1>
      <ServicePage defaultFormat="online" category="style" />
    </section>
  );
}
