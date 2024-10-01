import PortfolioAddButton from "@/components/ui/PortfolioAddButton";
import GreyLayout from "@/components/views/GreyLayout";

export default function PortfolioPage() {
  return (
    <GreyLayout>
      <div className=" flex flex-col items-center">
        <h1 className=" text-xxl mb-[27px]">Галерея</h1>
        <PortfolioAddButton />
      </div>
    </GreyLayout>
  );
}
