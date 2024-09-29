import { ReactNode } from "react";

export default function GreyLayout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-lightGrey rounded-[20px] p-[60px] h-full">
      {children}
    </section>
  );
}
