import { ReactNode } from "react";

export default function ServiceAddPage({ children }: { children: ReactNode }) {
  return (
    <section className="bg-lightGrey rounded-[20px] p-[60px]">
      {children}
    </section>
  );
}
