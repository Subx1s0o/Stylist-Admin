import AddForm from "@/components/forms/ServiceForms/AddForm/AddForm";

export default function page() {
  return (
    <section>
      <div className=" mx-auto max-w-7xl">
        <h1 className="text-xxl text-center mb-10">Додати послугу</h1>
        <div>
          <AddForm category="makeup" />
        </div>
      </div>
    </section>
  );
}
