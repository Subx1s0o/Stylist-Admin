import UploadForm from "@/components/forms/ServiceForms/UpdateForm/UpdateForm";
import { fetchService } from "@/components/utils/services";
import GreyLayout from "@/views/GreyLayout";

export default async function UpdatePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const service = await fetchService(id);

  return (
    <GreyLayout>
      <div className=" mx-auto max-w-7xl">
        <h1 className="text-xxl text-center mb-10">Змінити послугу</h1>
        <div>
          <UploadForm
            defaultFormat={service.format}
            category={service.category}
            service={service}
          />
        </div>
      </div>
    </GreyLayout>
  );
}
