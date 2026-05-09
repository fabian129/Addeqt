import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CapabilitiesBento from "./components/CapabilitiesBento";
import TrustMarquee from "./components/TrustMarquee";
import FullbleedStockholm from "./components/FullbleedStockholm";
import PhilosophyBlock from "./components/PhilosophyBlock";
import ServicesGrid from "./components/ServicesGrid";
import ProcessSteps from "./components/ProcessSteps";
import CTAFooter from "./components/CTAFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="relative z-10 bg-white">
        <CapabilitiesBento />
        <TrustMarquee />
        <FullbleedStockholm />
        <PhilosophyBlock />
        <ServicesGrid />
        <ProcessSteps />
        <CTAFooter />
      </main>
    </>
  );
}
