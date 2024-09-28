"use client";

import Button from "@/components/ui/Button";
import ServiceLayout from "@/views/ServiceLayout";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <ServiceLayout>
      <div className="flex flex-col h-full justify-center items-center">
        <h1 className=" text-xxl text-center mb-5">404</h1>
        <p className=" text-md text-center mb-5 max-w-[400px]">
          Ой! сторінку незнайдено, спробуйте будь ласка пізніше або перейдіть на
          іншу сторінку.
        </p>
        <div className="">
          <Button
            variant="black"
            className="mx-auto"
            onClick={() => router.replace("/dashboard/services/style")}
          >
            Повернутися назад
          </Button>
        </div>
      </div>
    </ServiceLayout>
  );
}
