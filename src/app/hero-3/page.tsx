import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero3 from "../components/Hero3";

export const metadata: Metadata = {
  title: "Addeqt — Hero (variant 3)",
  robots: { index: false, follow: false },
};

export default function Hero3Page() {
  return (
    <>
      <Navbar />
      <Hero3 />
    </>
  );
}
