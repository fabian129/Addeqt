import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EditorialIntro from "./components/EditorialIntro";
import AuthorityGrid from "./components/AuthorityGrid";
import InteractiveServices from "./components/InteractiveServices";
import DigitalPlatform from "./components/DigitalPlatform";
import ProcessTimeline from "./components/ProcessTimeline";
import TeamEditorial from "./components/TeamEditorial";
import InstitutionalFooterCTA from "./components/InstitutionalFooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="relative z-10">
        <EditorialIntro />
        <AuthorityGrid />
        <InteractiveServices />
        <DigitalPlatform />
        <ProcessTimeline />
        <TeamEditorial />
      </main>

      <InstitutionalFooterCTA />

      {/* Kund-preview av hero-varianter */}
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
            background: "rgba(15,15,16,0.85)",
            color: "#fff",
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: "999px",
            textDecoration: "none",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "all 0.2s ease",
          }}
        >
          Hero 2 →
        </a>
        <a
          href="/hero-3"
          style={{
            background: "rgba(15,15,16,0.85)",
            color: "#fff",
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: "999px",
            textDecoration: "none",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "all 0.2s ease",
          }}
        >
          Hero 3 →
        </a>
        <a
          href="/hero-4"
          style={{
            background: "rgba(15,15,16,0.85)",
            color: "#fff",
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: "999px",
            textDecoration: "none",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            transition: "all 0.2s ease",
          }}
        >
          Hero 4 →
        </a>
      </div>
    </>
  );
}
