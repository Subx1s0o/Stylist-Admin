import SideBar from "@/views/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-[357px_1fr] gap-5 h-screen">
      <SideBar />
      {children}
    </main>
  );
}
