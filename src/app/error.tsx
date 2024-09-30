"use client";

import Button from "@/components/ui/Button";
import GreyLayout from "@/components/views/GreyLayout";
export default function ErrorPage() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <GreyLayout>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-xxl text-center mb-10">Ой!, Щось пішло не так!</h1>
        <p className="text-lg max-w-md mb-5 text-center">
          Виникла невідома помилка, перевірьте своє підключення до мережі,
          можливо відсутнє з`єднання.
        </p>
        <Button variant="black" onClick={handleReload}>
          Перезавантажити сторінку
        </Button>
      </div>
    </GreyLayout>
  );
}
