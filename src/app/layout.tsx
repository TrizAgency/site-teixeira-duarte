import type { Metadata } from "next";
import { Geist, Geist_Mono, Alexandria } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teixeira Duarte Advogados",
  description: "Não nos conformamos com o básico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${alexandria.variable} antialiased overflow-x-hidden bg-beige`}
      >
        {children}
      </body>
    </html>
  );
}
