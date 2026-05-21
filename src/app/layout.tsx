import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GlobalWrapper from "@/components/layout/GlobalWrapper"; // New client-side wrapper
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siddhivinayak Chaitanya | Exclusive 3BHK in NIBM, Pune",
  description: "Experience the luxury of One Floor, One Flat living at Siddhivinayak Chaitanya, NIBM. Premium 3BHK residences starting from ₹2.10 Cr.",
  keywords: ["Siddhivinayak Chaitanya", "3BHK NIBM", "Luxury Flats in Pune"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-black text-white antialiased">
        <GlobalWrapper>{children}</GlobalWrapper>
      </body>
    </html>
  );
}