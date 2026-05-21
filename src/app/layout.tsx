import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Updated Metadata for Real Estate SEO
export const metadata: Metadata = {
  title: "Siddhivinayak Chaitanya | Exclusive 3BHK in NIBM, Pune",
  description: "Experience the luxury of One Floor, One Flat living at Siddhivinayak Chaitanya, NIBM. Premium 3BHK residences starting from ₹2.10 Cr. Nature-facing ultra-private homes.",
  keywords: ["Siddhivinayak Chaitanya", "3BHK NIBM", "Luxury Flats in Pune", "One Floor One Flat Pune"],
  authors: [{ name: "Lupa Entertainment" }],
};

// 2. Viewport to handle mobile scaling for conversion forms
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevents auto-zoom on inputs in iOS for a cleaner UI
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}