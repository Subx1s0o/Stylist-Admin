/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useSubmitForm from "@/components/hooks/useSubmitForm";
import AddPortfolioModals from "@/components/modals/Portfolio/AddPortfolioModals";
import Button from "@/components/ui/Button";
import {
  PortfolioFormSchema,
  PortfolioFormValues,
} from "@/types/portfolio.schema";
import { AddImageToPortfolio } from "@/types/portfolio.types";
import { prepareImageToPortfolio } from "@/utils/portfolio";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FileInput from "../FileInput";

interface PortfolioFormProps {
  close?: () => void;
}

export default function PortfolioForm({ close }: PortfolioFormProps) {
  const { control, handleSubmit } = useForm<PortfolioFormValues>({
    resolver: zodResolver(PortfolioFormSchema),
  });

  const { error, loading, setError, setSuccess, submitForm, success } =
    useSubmitForm<AddImageToPortfolio, PortfolioFormValues>({
      mode: "PORTFOLIO",
      prepareData: (data) => prepareImageToPortfolio(data),
    });

  const closeError = () => {
    setError(false);
    close && close();
  };

  const closeSuccess = () => {
    setSuccess(false);
    close && close();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <FileInput
        control={control}
        name="image"
        attention="Доступні формати avif, webp, png, jpg, jpeg"
      />
      <div className="flex gap-5 justify-center">
        <Button variant="outline" type="button" onClick={close}>
          Скасувати
        </Button>
        <Button variant="black" type="submit">
          Додати
        </Button>
      </div>

      <AddPortfolioModals
        error={error}
        loading={loading}
        closeError={closeError}
        closeSuccess={closeSuccess}
        success={success}
      />
    </form>
  );
}
