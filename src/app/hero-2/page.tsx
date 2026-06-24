import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";

export const metadata: Metadata = {
  title: "Addeqt — Hero (variant 2)",
  robots: { index: false, follow: false },
};

export default function Hero2Page() {
  return (
    <>
      <Navbar />
      <Hero2 />
    </>
  );
}
