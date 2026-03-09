import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flowwork — AI Trade Automation",
  description: "Move goods faster. Let AI handle the paperwork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.className} antialiased bg-[#f0ede8] text-[#1a1a1a] selection:bg-[#c8f74a] selection:text-black min-h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
