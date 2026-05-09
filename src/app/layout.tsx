import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Addeqt — Oberoende förmögenhetsrådgivning",
  description:
    "Modern, trygg och hållbar förmögenhetsförvaltning — byggd på transparens, excellens och genuint oberoende. Kapitalförvaltning och private banking i Stockholm.",
  keywords: [
    "förmögenhetsrådgivning",
    "kapitalförvaltning",
    "private banking",
    "Stockholm",
    "oberoende rådgivning",
    "Addeqt",
  ],
  openGraph: {
    title: "Addeqt — Oberoende förmögenhetsrådgivning",
    description:
      "Modern, trygg och hållbar förmögenhetsförvaltning i Stockholm.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${manrope.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
