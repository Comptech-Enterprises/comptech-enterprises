import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { WaveStrip } from "@/components/ui/WaveStrip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Comptech Enterprises | Enterprise IT Solutions",
    template: "%s | Comptech Enterprises",
  },
  description:
    "India's trusted enterprise IT partner. Dell, HP, Lenovo certified. Servers, networking, cloud, AI, CCTV, and AMC solutions for enterprise organizations.",
  keywords: ["enterprise IT", "servers", "Dell partner", "HP partner", "Lenovo", "cloud solutions", "networking", "CCTV", "Mumbai"],
  authors: [{ name: "Comptech Enterprises" }],
  creator: "Comptech Enterprises",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "Comptech Enterprises | Enterprise IT Solutions",
    description: "India's trusted enterprise IT partner since 2008.",
    images: [{ url: "/images/logo.webp" }],
  },
  icons: {
    icon: [
      { url: "/images/logo.ico", type: "image/x-icon" },
      { url: "/images/logo.webp", type: "image/webp" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <WaveStrip />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
