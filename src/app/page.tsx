import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CapabilitiesBento from "./components/CapabilitiesBento";
import TrustMarquee from "./components/TrustMarquee";
import PhilosophyBlock from "./components/PhilosophyBlock";
import ServicesGrid from "./components/ServicesGrid";
import ProcessSteps from "./components/ProcessSteps";
import CTAFooter from "./components/CTAFooter";

export default function Home() {
  return (
    <>
      {/* Decorative grid lines */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center grid-lines">
        <div className="w-full max-w-7xl h-full mx-auto px-6 md:px-8">
          <div className="w-full h-full border-x border-gray-200/40 grid grid-cols-4">
            <div className="border-r border-gray-200/40 h-full" />
            <div className="border-r border-gray-200/40 h-full" />
            <div className="border-r border-gray-200/40 h-full" />
            <div className="h-full" />
          </div>
        </div>
      </div>

      <Navbar />
      <Hero />

      <main className="relative z-10">
        <CapabilitiesBento />
        <TrustMarquee />
        <PhilosophyBlock />
        <ServicesGrid />
        <ProcessSteps />
        <CTAFooter />
      </main>
    </>
  );
}
