import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Comptech Enterprises for AI Services, AI Trainings, Software Development, or enterprise IT support.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Comptech Enterprises",
    title: "Contact Us | Comptech Enterprises",
    description:
      "Get in touch with Comptech Enterprises for AI Services, AI Trainings, Software Development, or enterprise IT support.",
    images: [{ url: "/images/logo.webp" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
