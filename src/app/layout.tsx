import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Адмін Панель - Маруся Козлова",
};

const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk-UA">
      <body className={`${exo_2.className} antialiased  bg-white p-5 h-screen`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
