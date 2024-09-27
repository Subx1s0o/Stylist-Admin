import AddForm from "@/components/forms/ServiceForms/AddForm/AddForm";

export default function page() {
  return (
    <section className="bg-lightGrey rounded-[20px] p-[60px]">
      <div className=" mx-auto max-w-7xl">
        <h1 className="text-xxl text-center mb-10">Додати послугу</h1>
        <div>
          <AddForm defaultFormat="offline" category="makeup" />
        </div>
      </div>
    </section>
  );
}
