import AddForm from "@/components/forms/ServiceForms/AddForm/AddForm";
import ServiceLayout from "@/views/ServiceLayout";

export default function page() {
  return (
    <ServiceLayout>
      <div className=" mx-auto max-w-7xl">
        <h1 className="text-xxl text-center mb-10">Додати послугу</h1>
        <div>
          <AddForm defaultFormat="offline" category="makeup" />
        </div>
      </div>
    </ServiceLayout>
  );
}
