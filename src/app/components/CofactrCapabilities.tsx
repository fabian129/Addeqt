"use client";

import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSectionReveal } from "../hooks/useSectionReveal";

/* ── Editorial CTA — Navy dark break ──
   Quiet luxury statement + key metrics + CTA.
   Sits between bento sections as an editorial pause.
   ────────────────────────────────── */

const metrics = [
  { value: "2.1", suffix: "mdr", label: "Förvaltat kapital" },
  { value: "15", suffix: "+", label: "År i branschen" },
  { value: "99.8", suffix: "%", label: "Kundnöjdhet" },
  { value: "100", suffix: "%", label: "Oberoende" },
];

export default function CofactrCapabilities() {
  const sectionRef = useScrollReveal();
  const gsapRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: "#242748",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        ref={gsapRef}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "clamp(6rem, 12vw, 10rem) 2.5rem",
          width: "100%",
        }}
      >
        {/* ── Statement ── */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: "clamp(4rem, 8vw, 6rem)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            Varför Addeqt
          </p>
          <h2
            className="font-display gsap-reveal-heading"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Vi förvaltar inte bara kapital.
            <br />
            <span style={{ color: "rgba(255,255,255,0.5)" }}>
              Vi förvaltar förtroende.
            </span>
          </h2>
        </div>

        {/* ── Divider ── */}
        <div
          className="reveal reveal-d1"
          style={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        />

        {/* ── Metrics ── */}
        <div
          className="reveal reveal-d2 gsap-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
            marginBottom: "clamp(4rem, 8vw, 6rem)",
            textAlign: "center",
          }}
        >
          {metrics.map((m, i) => (
            <div key={i}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  gap: "0.15em",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.03em",
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  {m.value}
                </span>
                <span
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1,
                  }}
                >
                  {m.suffix}
                </span>
              </div>
              <p
                style={{
                  fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.3)",
                  lineHeight: 1.3,
                }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          className="reveal reveal-d3 gsap-reveal"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="/kontakt"
            className="cta-button-dark"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 2.25rem",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "transparent",
              color: "#ffffff",
              fontSize: "0.95rem",
              fontWeight: 500,
              letterSpacing: "0.01em",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#242748";
              e.currentTarget.style.borderColor = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            Boka ett möte
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
