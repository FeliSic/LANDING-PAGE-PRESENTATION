import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Felipe · dev",
  description: "Software Developer desde Argentina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
