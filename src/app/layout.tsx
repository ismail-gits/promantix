import type { Metadata } from "next";
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"; 

import "./globals.css";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Promantix",
  description: "Modern Project Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className) + "antialiased min-h-screen"}>
        {children}
      </body>
    </html>
  );
}
