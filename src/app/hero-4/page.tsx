import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero4 from "../components/Hero4";

export const metadata: Metadata = {
  title: "Addeqt — Hero (variant 4)",
  robots: { index: false, follow: false },
};

export default function Hero4Page() {
  return (
    <>
      <Navbar />
      <Hero4 />
    </>
  );
}
