import { Sora, Instrument_Sans } from "next/font/google";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

/** Loads the About page's own fonts (Sora headings, Instrument Sans body). */
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${sora.variable} ${instrument.variable} font-[family-name:var(--font-instrument)]`}>{children}</div>;
}
