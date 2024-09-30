import GalleryAddButton from "@/components/ui/GalleryAddButton";
import GreyLayout from "@/components/views/GreyLayout";

export default function GalleryPage() {
  return (
    <GreyLayout>
      <div className=" flex flex-col items-center">
        <h1 className=" text-xxl mb-[27px]">Галерея</h1>
        <GalleryAddButton />
      </div>
    </GreyLayout>
  );
}
