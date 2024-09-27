import ServicePage from "@/views/ServicePage";

export default function MakeupPage() {
  return (
    <section className="bg-lightGrey rounded-[20px] p-[60px]">
      <h1 className="text-center text-xxl mb-[47px]">Візаж</h1>
      <ServicePage defaultFormat="offline" category="makeup" />
    </section>
  );
}
