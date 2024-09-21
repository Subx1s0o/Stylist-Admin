import ServicePage from "@/components/common/ServicePage";

export default function MakeupPage() {
  return (
    <div className="">
      <h1 className="text-center text-xxl mb-[47px]">Візаж</h1>
      <ServicePage defaultFormat="offline" category="makeup" />
    </div>
  );
}
