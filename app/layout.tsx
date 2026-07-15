import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ClientLayout } from "./ClientLayout";

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
    <LanguageProvider>
      <ClientLayout>{children}</ClientLayout>
    </LanguageProvider>
  );
}
