import type { Metadata } from "next";
import Gnb from "./components/GNB";
import "./globals.css";

export const metadata: Metadata = {
  title: "gygy.log",
  description: "blog for gygy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-gray-primary">
      <body className="flex flex-col items-center bg-slate-primary">
        {/* TODO: 사용여부 결정 후 삭제 */}
        {/* <Header /> */}
        <div className="mb-40">{children}</div>
        <Gnb />
      </body>
    </html>
  );
}
