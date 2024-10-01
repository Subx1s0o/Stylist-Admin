import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export default function GreyLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("relative bg-lightGrey rounded-[20px] p-[60px] h-full ", {
        className,
      })}
    >
      {children}
    </section>
  );
}
