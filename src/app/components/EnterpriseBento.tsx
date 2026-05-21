"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSectionReveal } from "../hooks/useSectionReveal";
import { Brain, Shield, Link2, ArrowRight, TrendingUp, Users } from "lucide-react";

/* ─────────────────────────────────────────────
   EnterpriseBento — 3-column tall card section
   "Byggt för tillförlitlighet och säkerhet"
   ───────────────────────────────────────────── */

export default function EnterpriseBento() {
  const ref = useScrollReveal();
  const gsapRef = useSectionReveal();

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(8rem, 14vw, 12rem) 1.5rem",
        background: "var(--bg-warm)",
      }}
    >
      <div
        ref={gsapRef}
        style={{
          maxWidth: "var(--content-width)",
          margin: "0 auto",
        }}
      >
        {/* ── Section Header — Editorial split ── */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "4rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "520px" }}>
            <span
              className="font-mono"
              style={{
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              Byggt för trygghet
              <span
                style={{
                  width: "40px",
                  height: "1px",
                  background: "var(--gold-border)",
                }}
              />
            </span>
            <h2
              className="font-display gsap-reveal-heading"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--fg)",
              }}
            >
              Tillförlitlighet
              <br />
              och säkerhet
            </h2>
          </div>
          <p
            className="gsap-reveal"
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--fg-muted)",
              fontWeight: 300,
              maxWidth: "340px",
              paddingBottom: "0.3rem",
            }}
          >
            Vår plattform kombinerar avancerad teknologi med decenniers
            finansiell expertis — allt för att ge dig trygghet i varje beslut.
          </p>
        </div>

        {/* ── Divider ── */}
        <div
          className="reveal"
          style={{
            width: "100%",
            height: "1px",
            background: "var(--hairline)",
            marginBottom: "2.5rem",
          }}
        />

        {/* ── 3-Column Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="enterprise-bento-grid"
        >
          {/* ═══════════ CARD 1 — Rådgivning med AI-stöd ═══════════ */}
          <div
            className="reveal reveal-d1 gsap-reveal"
            style={{
              height: "620px",
              borderRadius: "1rem",
              border: "1px solid var(--hairline)",
              background: "linear-gradient(180deg, #ffffff 0%, var(--surface-1) 100%)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.5s var(--ease-out)",
              cursor: "default",
              overflow: "hidden",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-12px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {/* Top: Icon + Title */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "var(--navy-dim)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Brain size={18} color="var(--navy)" strokeWidth={1.5} />
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  color: "var(--fg)",
                  letterSpacing: "-0.01em",
                }}
              >
                Rådgivning med AI-stöd
              </h3>
            </div>

            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--fg-muted)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              Vår AI analyserar marknadsdata i realtid och ger din rådgivare förslag
              — du får alltid det bästa beslutsunderlaget.
            </p>

            {/* Chat UI Simulation */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                justifyContent: "center",
              }}
            >
              {/* Advisor message */}
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  className="bento-notif"
                  style={{
                    maxWidth: "85%",
                    padding: "0.85rem 1rem",
                    borderRadius: "0.75rem 0.75rem 0.75rem 0.25rem",
                    background: "var(--surface-1)",
                    border: "1px solid var(--hairline)",
                    fontSize: "0.78rem",
                    lineHeight: 1.55,
                    color: "var(--fg-dim)",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "9px",
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      display: "block",
                      marginBottom: "0.35rem",
                    }}
                  >
                    AI Assistent
                  </span>
                  Baserat på din riskprofil rekommenderar jag en ökad exponering
                  mot nordiska räntebärande instrument.
                </div>
              </div>

              {/* User response */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  className="bento-notif"
                  style={{
                    maxWidth: "75%",
                    padding: "0.85rem 1rem",
                    borderRadius: "0.75rem 0.75rem 0.25rem 0.75rem",
                    background: "var(--navy)",
                    color: "#ffffff",
                    fontSize: "0.78rem",
                    lineHeight: 1.55,
                  }}
                >
                  Visa mig en jämförelse med nuvarande allokering.
                </div>
              </div>
            </div>

            {/* Bottom: Stats Row */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid var(--hairline)",
                marginTop: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Users size={14} color="var(--sage)" strokeWidth={1.5} />
                <div>
                  <div
                    className="font-display bento-count"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--fg)",
                      lineHeight: 1,
                    }}
                  >
                    99.8%
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "9px",
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "2px",
                    }}
                  >
                    Kundnöjdhet
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <TrendingUp size={14} color="var(--green)" strokeWidth={1.5} />
                <div>
                  <div
                    className="font-display bento-count"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--fg)",
                      lineHeight: 1,
                      animationDelay: "0.2s",
                    }}
                  >
                    +12.4%
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "9px",
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "2px",
                    }}
                  >
                    Genomsnittlig avkastning
                  </div>
                </div>
              </div>
            </div>

            {/* Link */}
            <a
              href="#metod"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.82rem",
                fontWeight: 500,
                color: "var(--navy)",
                marginTop: "1rem",
                textDecoration: "none",
                transition: "gap 0.3s var(--ease-out)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.gap = "0.65rem";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.gap = "0.35rem";
              }}
            >
              Se vår metod <ArrowRight size={14} />
            </a>
          </div>

          {/* ═══════════ CARD 2 — FI-tillstånd & regelefterlevnad ═══════════ */}
          <div
            className="reveal reveal-d2 gsap-reveal"
            style={{
              height: "620px",
              borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "linear-gradient(160deg, #0f766e 0%, #059669 50%, #047857 100%)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transition: "transform 0.5s var(--ease-out)",
              cursor: "default",
              overflow: "hidden",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-12px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {/* Background pattern — subtle radial */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 50%), " +
                  "radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />

            {/* Top Label */}
            <div
              className="font-mono"
              style={{
                position: "absolute",
                top: "2rem",
                left: "2rem",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Regelefterlevnad
            </div>

            {/* Floating Inner Card */}
            <div
              className="bento-float"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                maxWidth: "280px",
                position: "relative",
              }}
            >
              {/* Shield Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Shield size={24} color="#ffffff" strokeWidth={1.5} />
              </div>

              {/* FI Label */}
              <div
                className="font-mono"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "0.5rem",
                }}
              >
                Finansinspektionen
              </div>

              {/* Status Line */}
              <div
                className="font-display"
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 500,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                Tillstånd sedan 2023
              </div>

              {/* Animated status indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "9999px",
                  padding: "0.4rem 1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span className="bento-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#86efac" }} />
                <span
                  className="font-mono"
                  style={{
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.8)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Aktivt tillstånd
                </span>
              </div>
            </div>

            {/* Bottom Subtitle */}
            <p
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                right: "2rem",
                fontSize: "0.82rem",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.55)",
                fontWeight: 300,
              }}
            >
              Vi uppfyller Finansinspektionens samtliga krav och följer
              MiFID II, GDPR och AML-direktivet.
            </p>
          </div>

          {/* ═══════════ CARD 3 — Integrerad plattform ═══════════ */}
          <div
            className="reveal reveal-d3 gsap-reveal"
            style={{
              height: "620px",
              borderRadius: "1rem",
              border: "1px solid var(--hairline)",
              background: "linear-gradient(180deg, #f0f7ff 0%, #f8fafc 40%, #ffffff 100%)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.5s var(--ease-out)",
              cursor: "default",
              overflow: "hidden",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-12px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {/* SVG Radar Background */}
            <svg
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "340px",
                height: "340px",
                opacity: 0.12,
                pointerEvents: "none",
              }}
              viewBox="0 0 340 340"
              fill="none"
            >
              {/* Static rings */}
              <circle cx="170" cy="170" r="60" stroke="var(--navy)" strokeWidth="0.5" />
              <circle cx="170" cy="170" r="100" stroke="var(--navy)" strokeWidth="0.5" />
              <circle cx="170" cy="170" r="140" stroke="var(--navy)" strokeWidth="0.5" />
              {/* Cross hairs */}
              <line x1="170" y1="30" x2="170" y2="310" stroke="var(--navy)" strokeWidth="0.3" />
              <line x1="30" y1="170" x2="310" y2="170" stroke="var(--navy)" strokeWidth="0.3" />
              {/* Animated ping 1 */}
              <circle cx="170" cy="170" r="60" stroke="var(--navy)" strokeWidth="1" opacity="0">
                <animate attributeName="r" from="60" to="165" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="3s" repeatCount="indefinite" />
              </circle>
              {/* Animated ping 2 (offset) */}
              <circle cx="170" cy="170" r="60" stroke="var(--navy)" strokeWidth="1" opacity="0">
                <animate attributeName="r" from="60" to="165" dur="3s" begin="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="3s" begin="1.5s" repeatCount="indefinite" />
              </circle>
              {/* Data points */}
              <circle cx="210" cy="120" r="3" fill="var(--navy)" opacity="0.4" />
              <circle cx="130" cy="200" r="3" fill="var(--navy)" opacity="0.4" />
              <circle cx="240" cy="190" r="2.5" fill="var(--navy)" opacity="0.3" />
              <circle cx="110" cy="140" r="2" fill="var(--navy)" opacity="0.25" />
            </svg>

            {/* Top: Icon + Title */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem", position: "relative", zIndex: 1 }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(36, 39, 72, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link2 size={18} color="var(--navy)" strokeWidth={1.5} />
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  color: "var(--fg)",
                  letterSpacing: "-0.01em",
                }}
              >
                Integrerad plattform
              </h3>
            </div>

            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--fg-muted)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              En samlad vy över dina tillgångar, analyser och dokument
              — allt på ett ställe, i realtid.
            </p>

            {/* Center — space for radar to be visible */}
            <div style={{ flex: 1, position: "relative" }}>
              {/* Floating Badge */}
              <div
                className="bento-float"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "0.75rem",
                  padding: "1rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.25rem",
                  zIndex: 2,
                }}
              >
                <span
                  className="font-display bento-count"
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 600,
                    color: "var(--fg)",
                    lineHeight: 1,
                    animationDelay: "0.4s",
                  }}
                >
                  150+
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--fg-muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Datapunkter analyserade
                </span>
              </div>
            </div>

            {/* Bottom Feature List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              {["Realtidsdata", "Dokumenthantering", "Rapportering"].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.82rem",
                    color: "var(--fg-dim)",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "var(--sage)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Responsive Override ── */}
      <style>{`
        @media (max-width: 1024px) {
          .enterprise-bento-grid {
            grid-template-columns: 1fr !important;
          }
          .enterprise-bento-grid > div {
            height: 580px !important;
          }
        }
      `}</style>
    </section>
  );
}
