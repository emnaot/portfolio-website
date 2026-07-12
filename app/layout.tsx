import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emna Othmen — Full-Stack & AI Engineer",
  description: "Full-Stack & AI Engineer designing production-grade software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
