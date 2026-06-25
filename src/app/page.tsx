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

      {/* TEMP: kund-preview av hero-varianter. Ta bort efter avstämning. */}
      <div
        style={{
          position: "fixed",
          right: "16px",
          bottom: "16px",
          zIndex: 60,
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          alignItems: "flex-end",
        }}
      >
        <a
          href="/hero-2"
          style={{
            background: "rgba(15,15,16,0.82)",
            color: "#fff",
            fontSize: "10px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "5px 11px",
            borderRadius: "999px",
            textDecoration: "none",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          }}
        >
          Hero 2 →
        </a>
        <a
          href="/hero-3"
          style={{
            background: "rgba(15,15,16,0.82)",
            color: "#fff",
            fontSize: "10px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "5px 11px",
            borderRadius: "999px",
            textDecoration: "none",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          }}
        >
          Hero 3 →
        </a>
        <a
          href="/hero-4"
          style={{
            background: "rgba(15,15,16,0.82)",
            color: "#fff",
            fontSize: "10px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "5px 11px",
            borderRadius: "999px",
            textDecoration: "none",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          }}
        >
          Hero 4 →
        </a>
      </div>
    </>
  );
}
