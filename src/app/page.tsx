import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustMarquee from "./components/TrustMarquee";
import LogoGrid from "./components/LogoGrid";
import Manifesto from "./components/Manifesto";
import ServicesScroll from "./components/ServicesScroll";
import EnterpriseBento from "./components/EnterpriseBento";
import AppBento from "./components/AppBento";
import CofactrCapabilities from "./components/CofactrCapabilities";
import EditorialBreak from "./components/EditorialBreak";
import TeamSection from "./components/TeamSection";
import ValueCards from "./components/ValueCards";
import ProcessSteps from "./components/ProcessSteps";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="relative z-10">
        <TrustMarquee />
        <LogoGrid />
        <Manifesto />
        <ServicesScroll />
        <EnterpriseBento />
        <CofactrCapabilities />
        <AppBento />
        <EditorialBreak />
        <TeamSection />
        <ValueCards />
        <ProcessSteps />
      </main>
      <Footer />
    </>
  );
}
