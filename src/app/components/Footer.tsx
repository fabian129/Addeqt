"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSectionReveal } from "../hooks/useSectionReveal";

/* ── Editorial Footer — Premium navy footer ──
   Full-width CTA + 4-column grid + bottom bar.
   Matches navy (#242748) palette from CofactrCapabilities.
   ────────────────────────────────── */

const services = [
  { label: "Kapitalförvaltning", href: "/tjanster?open=0" },
  { label: "Förmögenhetsrådgivning", href: "/tjanster?open=1" },
  { label: "Private Banking", href: "/tjanster?open=2" },
  { label: "Skatteoptimering", href: "/tjanster?open=3" },
];

const company = [
  { label: "Om Addeqt", href: "/#om-oss" },
  { label: "Process", href: "/#process" },
  { label: "Karriär", href: "#karriar" },
  { label: "Kontakt", href: "/#kontakt" },
];

const contactInfo = [
  "Artillerigatan 45, Stockholm",
  "info@addeqt.se",
  "08-XXX XX XX",
];

const trustBadges = ["FI-tillstånd", "100% Oberoende", "Nordnet som depåförvarare"];

export default function Footer({ hideCTA = false }: { hideCTA?: boolean }) {
  const sectionRef = useScrollReveal();
  const gsapRef = useSectionReveal();

  return (
    <footer
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: "#242748",
        paddingTop: "clamp(6rem, 10vw, 10rem)",
        paddingBottom: "clamp(3rem, 5vw, 4rem)",
        overflow: "hidden",
      }}
    >
      <div
        ref={gsapRef}
        style={{
          maxWidth: "none",
          margin: "0 auto",
          padding: "0 clamp(2rem, 6vw, 8rem)",
          width: "100%",
        }}
      >
        {/* ── Top CTA Section ── */}
        {!hideCTA && (
        <div
          id="kontakt"
          className="reveal gsap-reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            paddingBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          <h2
            className="font-display gsap-reveal-heading"
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              margin: 0,
            }}
          >
            Redo att ta
            <br />
            nästa steg?
          </h2>

          <Link
            href="#kontakt"
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
              whiteSpace: "nowrap",
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
            Boka möte
            <ArrowRight size={16} />
          </Link>
        </div>
        )}

        {/* ── Hairline divider ── */}
        {!hideCTA && (
        <div
          className="reveal reveal-d1"
          style={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 15%, rgba(255,255,255,0.1) 85%, transparent 100%)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        />
        )}

        {/* ── Middle 4-column grid ── */}
        <div
          className="reveal reveal-d2 gsap-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "clamp(3rem, 5vw, 6rem)",
            paddingBottom: "clamp(4rem, 8vw, 8rem)",
          }}
        >
          {/* Column 1 — Brand */}
          <div style={{ paddingRight: "2rem" }}>
            <div
              className="font-display"
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              ADDEQT
            </div>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.5)",
                margin: 0,
                maxWidth: "280px",
              }}
            >
              Oberoende
              <br />
              förmögenhetsrådgivning
            </p>
          </div>

          {/* Column 2 — Tjänster */}
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: "11px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.5rem",
              }}
            >
              Tjänster
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {services.map((s) => (
                <li key={s.label} style={{ marginBottom: "0.85rem" }}>
                  <Link
                    href={s.href}
                    style={{
                      fontSize: "16px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Företaget */}
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: "11px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.5rem",
              }}
            >
              Företaget
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {company.map((c) => (
                <li key={c.label} style={{ marginBottom: "0.85rem" }}>
                  <Link
                    href={c.href}
                    style={{
                      fontSize: "16px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Kontakt */}
          <div>
            <div
              className="font-mono"
              style={{
                fontSize: "11px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.5rem",
              }}
            >
              Kontakt
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {contactInfo.map((info) => (
                <li
                  key={info}
                  style={{
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom hairline ── */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 15%, rgba(255,255,255,0.1) 85%, transparent 100%)",
            marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        />

        {/* ── Bottom bar ── */}
        <div
          className="reveal reveal-d3 gsap-reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.35)",
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            © 2025 Addeqt AB. Alla rättigheter förbehållna.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "11px",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            {trustBadges.map((badge, i) => (
              <span key={badge} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {badge}
                {i < trustBadges.length - 1 && (
                  <span style={{ opacity: 0.5 }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style jsx>{`
        @media (max-width: 768px) {
          footer > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
