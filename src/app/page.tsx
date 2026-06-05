import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustMarquee from "./components/TrustMarquee";
import Manifesto from "./components/Manifesto";
import VarforAddeqt from "./components/VarforAddeqt";
import HomepageServices from "./components/HomepageServices";
import StorySection from "./components/StorySection";
import LightsOutWrapper from "./components/LightsOutWrapper";
import AppBento from "./components/AppBento";
import ProcessSteps from "./components/ProcessSteps";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="relative z-10">
        <TrustMarquee />
        <Manifesto />
        <VarforAddeqt />
        <HomepageServices />
        <LightsOutWrapper>
          <StorySection />
          <AppBento />
        </LightsOutWrapper>
        <div id="process">
          <ProcessSteps />
        </div>
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
