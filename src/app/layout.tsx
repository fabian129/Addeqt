import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Addeqt -- Oberoende formogenhetsradgivning",
  description:
    "Modern, trygg och hallbar formogenhetsforvaltning -- byggd pa transparens, excellens och genuint oberoende. Kapitalforvaltning och private banking i Stockholm.",
  keywords: [
    "formogenhetsradgivning",
    "kapitalforvaltning",
    "private banking",
    "Stockholm",
    "oberoende radgivning",
    "Addeqt",
  ],
  openGraph: {
    title: "Addeqt -- Oberoende formogenhetsradgivning",
    description:
      "Modern, trygg och hallbar formogenhetsforvaltning i Stockholm.",
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
    <html lang="sv" data-scroll-behavior="smooth" className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
