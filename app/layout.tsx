import type { Metadata } from "next";
import "./globals.css";
import { ephesis } from "@/components/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ephesis.className}>{children}</body>
    </html>
  );
}
