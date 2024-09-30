import SideBar from "@/components/views/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-[357px_1fr] gap-5 h-full">
      <SideBar />
      {children}
    </main>
  );
}
