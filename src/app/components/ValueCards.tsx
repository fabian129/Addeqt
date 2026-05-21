"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSectionReveal } from "../hooks/useSectionReveal";
import { Shield, BarChart3, Eye, Users } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared styles                                                      */
/* ------------------------------------------------------------------ */

const cardBase: React.CSSProperties = {
  height: "640px",
  borderRadius: "1rem",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  transition: "transform 500ms cubic-bezier(0.23,1,0.32,1), box-shadow 500ms cubic-bezier(0.23,1,0.32,1)",
  cursor: "default",
};

const cardLight: React.CSSProperties = {
  ...cardBase,
  backgroundColor: "var(--bg-warm)",
  border: "1px solid var(--hairline)",
  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.03)",
};

const cardDark: React.CSSProperties = {
  ...cardBase,
  backgroundColor: "var(--navy)",
  border: "1px solid rgba(255,255,255,0.06)",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.18)",
};

/* ------------------------------------------------------------------ */
/*  Card 1 — Oberoende rådgivning (light)                              */
/* ------------------------------------------------------------------ */

function Card1() {
  return (
    <div className="card-hover-lift" style={cardLight}>
      <div style={{ padding: "2.5rem 2.5rem 0" }}>
        {/* Icon */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: "var(--navy)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <Shield size={22} strokeWidth={1.4} color="#ffffff" />
        </div>

        <h3
          className="font-display"
          style={{
            fontSize: "1.35rem",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            marginBottom: "0.65rem",
            lineHeight: 1.25,
          }}
        >
          Oberoende rådgivning
        </h3>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.65,
            color: "var(--fg-muted)",
            maxWidth: "280px",
          }}
        >
          Inga egna produkter, inga dolda incitament. Vi arbetar uteslutande
          i ditt intresse — alltid.
        </p>
      </div>

      {/* Bottom mock UI */}
      <div style={{ marginTop: "auto", padding: "0 2.5rem 2.5rem" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            border: "1px solid var(--hairline)",
            padding: "1.25rem 1.25rem",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "var(--navy)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              className="font-display"
              style={{
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "-0.03em",
              }}
            >
              A
            </span>
          </div>
          <div>
            <div
              className="font-display"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--fg)",
                letterSpacing: "-0.01em",
              }}
            >
              Addeqt
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "var(--fg-muted)",
                marginTop: "1px",
              }}
            >
              Oberoende sedan 2022
            </div>
          </div>
          {/* Checkmark */}
          <div
            style={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "var(--sage)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2.5 6.5L5 9L9.5 3.5"
                stroke="#ffffff"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 2 — Personlig förvaltning (dark, navy)                        */
/* ------------------------------------------------------------------ */

function Card2() {
  return (
    <div className="card-hover-lift" style={cardDark}>
      {/* Background image effect / gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(255,255,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Subtle mesh texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.02) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.03) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      {/* Glassmorphism badge top-right */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.4rem 0.9rem",
          borderRadius: "999px",
          backgroundColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          zIndex: 2,
        }}
      >
        <Users size={13} strokeWidth={1.5} color="rgba(255,255,255,0.7)" />
        <span
          className="font-mono"
          style={{
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Personligt
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "2.5rem",
          justifyContent: "flex-end",
        }}
      >
        <h3
          className="font-display"
          style={{
            fontSize: "1.35rem",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            marginBottom: "0.65rem",
            lineHeight: 1.25,
          }}
        >
          Personlig förvaltning
        </h3>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.55)",
            maxWidth: "280px",
          }}
        >
          En dedikerad rådgivare som lär känna din situation, dina mål
          och din riskprofil på djupet.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 3 — Transparenta avgifter (light)                             */
/* ------------------------------------------------------------------ */

function Card3() {
  return (
    <div className="card-hover-lift" style={cardLight}>
      <div style={{ padding: "2.5rem 2.5rem 0" }}>
        {/* Icon */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: "var(--navy)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <BarChart3 size={22} strokeWidth={1.4} color="#ffffff" />
        </div>

        <h3
          className="font-display"
          style={{
            fontSize: "1.35rem",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            marginBottom: "0.65rem",
            lineHeight: 1.25,
          }}
        >
          Transparenta avgifter
        </h3>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.65,
            color: "var(--fg-muted)",
            maxWidth: "280px",
          }}
        >
          Inga dolda kostnader. Du ser exakt vad du betalar — och varför.
          Enkel, ärlig prissättning.
        </p>
      </div>

      {/* Bottom mock UI — pricing bars */}
      <div style={{ marginTop: "auto", padding: "0 2.5rem 2.5rem" }}>
        {/* Bar 1 — outline (competitor) */}
        <div style={{ marginBottom: "0.75rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.4rem",
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--fg-muted)",
              }}
            >
              Storbank
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "var(--fg-muted)",
                fontWeight: 500,
              }}
            >
              1.8%
            </span>
          </div>
          <div
            style={{
              height: "8px",
              borderRadius: "4px",
              border: "1px solid var(--hairline)",
              backgroundColor: "transparent",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: "75%",
                borderRadius: "4px",
                backgroundColor: "var(--hairline)",
              }}
            />
          </div>
        </div>

        {/* Bar 2 — filled (Addeqt) */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.4rem",
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--fg)",
                fontWeight: 600,
              }}
            >
              Addeqt
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "var(--fg)",
                fontWeight: 600,
              }}
            >
              0.7%
            </span>
          </div>
          <div
            style={{
              height: "8px",
              borderRadius: "4px",
              backgroundColor: "var(--hairline)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: "38%",
                borderRadius: "4px",
                backgroundColor: "var(--navy)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 4 — Digital insyn i realtid (ultra-dark)                      */
/* ------------------------------------------------------------------ */

function Card4() {
  return (
    <div
      className="card-hover-lift"
      style={{
        ...cardBase,
        backgroundColor: "#0a0f1a",
        border: "1px solid rgba(255,255,255,0.05)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.2)",
      }}
    >
      {/* Glow orb — navy glow top-right */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,42,78,0.6) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Animated chart bars top-right */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          display: "flex",
          alignItems: "flex-end",
          gap: "3px",
          height: "48px",
        }}
      >
        {[28, 40, 22, 45, 34, 50, 38].map((h, i) => (
          <div
            key={i}
            className="value-card-bar"
            style={{
              width: "4px",
              height: `${h}px`,
              borderRadius: "2px",
              backgroundColor:
                i === 5
                  ? "rgba(255,255,255,0.5)"
                  : `rgba(255,255,255,${0.08 + i * 0.03})`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      {/* Content at bottom */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "2.5rem",
          justifyContent: "flex-end",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <Eye size={22} strokeWidth={1.4} color="rgba(255,255,255,0.7)" />
        </div>

        <h3
          className="font-display"
          style={{
            fontSize: "1.35rem",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            marginBottom: "0.65rem",
            lineHeight: 1.25,
          }}
        >
          Digital insyn i realtid
        </h3>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.45)",
            maxWidth: "280px",
          }}
        >
          Följ din portfölj live. Allokering, avkastning och avgifter —
          alltid tillgängligt, helt transparent.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                        */
/* ------------------------------------------------------------------ */

export default function ValueCards() {
  const ref = useScrollReveal();
  const gsapRef = useSectionReveal();

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(8rem, 14vw, 12rem) 1.5rem",
        backgroundColor: "#ffffff",
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
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
                display: "block",
                marginBottom: "1.25rem",
                fontWeight: 500,
              }}
            >
              Varför Addeqt
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
              Din förmögenhet
              <br />
              förtjänar mer
            </h2>
          </div>
          <p
            className="reveal reveal-d1 gsap-reveal"
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--fg-muted)",
              fontWeight: 300,
              maxWidth: "340px",
              paddingBottom: "0.3rem",
            }}
          >
            Vi kombinerar oberoende rådgivning med personlig förvaltning
            och fullständig transparens — för dig som kräver mer av din
            ekonomiska partner.
          </p>
        </div>

        {/* ── Hairline Divider ── */}
        <div
          className="reveal"
          style={{
            width: "100%",
            height: "1px",
            background: "var(--hairline)",
            marginBottom: "4rem",
          }}
        />

        {/* 4-column card grid */}
        <div className="value-cards-grid">
          <div className="reveal reveal-d2 gsap-reveal">
            <Card1 />
          </div>
          <div className="reveal reveal-d3 gsap-reveal">
            <Card2 />
          </div>
          <div className="reveal reveal-d4 gsap-reveal">
            <Card3 />
          </div>
          <div className="reveal reveal-d5 gsap-reveal">
            <Card4 />
          </div>
        </div>
      </div>

      {/* Scoped styles */}
      <style jsx>{`
        .value-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .value-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .value-cards-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Bar animation for Card 4 */
        @keyframes barPulse {
          0%, 100% {
            opacity: 1;
            transform: scaleY(1);
          }
          50% {
            opacity: 0.6;
            transform: scaleY(0.75);
          }
        }

        :global(.value-card-bar) {
          animation: barPulse 2.4s ease-in-out infinite;
          transform-origin: bottom;
        }

        /* Hover lift effect */
        :global(.card-hover-lift:hover) {
          transform: translateY(-8px) !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06), 0 20px 48px rgba(0,0,0,0.08) !important;
        }
      `}</style>
    </section>
  );
}
