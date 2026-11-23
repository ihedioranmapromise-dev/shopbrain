import type { Metadata } from "next";
import { BottomNav } from "@/components/BottomNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopBrain — wholesale money partner",
  description:
    "Multi-store orders, deposits, owner approvals, and voice notes for fabric & wholesale shops.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell pb-24">{children}</div>
        <BottomNav />
      </body>
    </html>
  );
}
