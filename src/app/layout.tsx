import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Health Monitoring",
  description: "Generated by The Boys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
            <Navbar />
          </div>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
