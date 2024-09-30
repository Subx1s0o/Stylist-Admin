/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Button from "@/components/ui/Button";
import {
  PortfolioFormSchema,
  PortfolioFormValues,
} from "@/types/portfolio.schema";
import { addImageToPortfolio } from "@/utils/portfolio";
import { toBase64 } from "@/utils/toBase64";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FileInput from "../FileInput";

interface PortfolioFormProps {
  close?: () => void;
}

export default function PortfolioForm({ close }: PortfolioFormProps) {
  const { control, handleSubmit } = useForm<PortfolioFormValues>({
    resolver: zodResolver(PortfolioFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = async (data: PortfolioFormValues) => {
    setLoading(true);
    setError(false);
    setSuccess(false);
    const imageData = { image: (await toBase64(data.image[0])) as string };
    try {
      await addImageToPortfolio(imageData);
      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <FileInput
        control={control}
        name="image"
        attention="Доступні формати avif, webp, png, jpg, jpeg"
      />
      <div className="flex gap-5 justify-center">
        <Button variant="outline" onClick={close}>
          Скасувати
        </Button>
        <Button variant="black" type="submit">
          Додати
        </Button>
      </div>

      {loading}
      {success && "успіх"}
      {error && "помилка"}
    </form>
  );
}
