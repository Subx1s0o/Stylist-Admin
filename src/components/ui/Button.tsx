import { cn } from "@/components/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

export default function Button({
  variant = "black",
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "black" | "outline";
  children: ReactNode;
}) {
  const buttonClasses = cn(
    "py-4 px-7 rounded-xl transition-colors disabled:bg-grey disabled:cursor-not-allowed",
    {
      "bg-black text-white border-none hover:bg-gray-950": variant === "black",
      "bg-transparent border border-black": variant === "outline",
    }
  );

  return (
    <button className={cn(buttonClasses, className)} {...rest}>
      {children}
    </button>
  );
}
