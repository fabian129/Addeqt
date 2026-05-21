"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  BarChart3,
  Layers,
  Percent,
  Wallet,
  CreditCard,
  Activity,
  Tag,
  RefreshCw,
  Building2,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Card data                                                          */
/* ------------------------------------------------------------------ */

const pillTags = [
  { label: "Avgifter", icon: Tag },
  { label: "Utdelningar", icon: TrendingUp },
  { label: "Intakter", icon: ArrowUpRight },
  { label: "Rebalansering", icon: RefreshCw },
  { label: "Fastighetsexponering", icon: Building2 },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FinanceCards() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "var(--bg-warm)",
        paddingBlock: "clamp(5rem, 8vw, 8rem)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-width)",
          marginInline: "auto",
          paddingInline: "1.5rem",
        }}
      >
        {/* Section header */}
        <div className="reveal" style={{ marginBottom: "1.5rem" }}>
          <span className="section-label">Webbkoncept</span>
        </div>

        <div className="reveal reveal-d1" style={{ marginBottom: "3rem" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--fg)",
              marginBottom: "1rem",
            }}
          >
            Interaktiva insikter
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--fg-dim)",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            Digitala verktyg som ger dig fullstandig oversikt over din
            formoogenhet — i realtid, med precision.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1.5rem",
          }}
          className="finance-cards-grid"
        >
          {/* ====== Card 1 — Automatisk veckorapport ====== */}
          <div
            className="reveal reveal-d2 card-hover"
            style={{
              height: "36rem",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              background: "linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)",
              border: "1px solid var(--border)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              position: "relative",
            }}
          >
            {/* Pill badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-pill)",
                border: "1px solid var(--border)",
                background: "#fff",
                fontSize: "11px",
                fontWeight: 500,
                color: "var(--fg-dim)",
                width: "fit-content",
                marginBottom: "1rem",
              }}
            >
              <BarChart3 size={13} strokeWidth={1.5} />
              Utvarda
            </div>

            <h3
              className="font-display"
              style={{
                fontSize: "1.5rem",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: "0.5rem",
              }}
            >
              Automatisk veckorapport
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "var(--fg-muted)",
                lineHeight: 1.6,
                maxWidth: "280px",
              }}
            >
              Sammanstallda insikter varje vecka, automatiskt levererade till din
              inkorg.
            </p>

            {/* Floating icons area */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                marginTop: "1.5rem",
              }}
            >
              <div
                style={{ position: "relative", width: "160px", height: "100px" }}
              >
                <div
                  className="icon-alive"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "10px",
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    background: "#fff",
                    border: "1px solid var(--border)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 3,
                  }}
                >
                  <Wallet size={22} strokeWidth={1.3} color="var(--navy)" />
                </div>

                <div
                  className="icon-alive"
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "60px",
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: "#fff",
                    border: "1px solid var(--border)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animationDelay: "0.8s",
                    zIndex: 2,
                  }}
                >
                  <CreditCard
                    size={18}
                    strokeWidth={1.3}
                    color="var(--indigo)"
                  />
                </div>

                <div
                  className="icon-alive"
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: "110px",
                    width: "48px",
                    height: "48px",
                    borderRadius: "15px",
                    background: "#fff",
                    border: "1px solid var(--border)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animationDelay: "1.6s",
                    zIndex: 1,
                  }}
                >
                  <Activity size={20} strokeWidth={1.3} color="var(--navy)" />
                </div>
              </div>
            </div>

            {/* Bottom stat */}
            <div style={{ marginTop: "auto" }}>
              <div
                className="font-display"
                style={{
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "var(--fg)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                +22%
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--fg-muted)",
                  marginTop: "0.25rem",
                }}
              >
                Total avkastning
              </div>
            </div>
          </div>

          {/* ====== Card 2 — Intelligent kategorisering ====== */}
          <div
            className="reveal reveal-d3 card-hover"
            style={{
              height: "36rem",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              background: "linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)",
              border: "1px solid var(--border)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            {/* Pill badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-pill)",
                border: "1px solid var(--border)",
                background: "#fff",
                fontSize: "11px",
                fontWeight: 500,
                color: "var(--fg-dim)",
                width: "fit-content",
                marginBottom: "1rem",
              }}
            >
              <Layers size={13} strokeWidth={1.5} />
              Sortera
            </div>

            <h3
              className="font-display"
              style={{
                fontSize: "1.5rem",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Intelligent kategorisering
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "var(--fg-muted)",
                lineHeight: 1.6,
                textAlign: "center",
                maxWidth: "260px",
                marginBottom: "2rem",
              }}
            >
              Automatisk klassificering av transaktioner och exponeringar.
            </p>

            {/* Floating pill tags */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.6rem",
                  justifyContent: "center",
                  maxWidth: "300px",
                }}
              >
                {pillTags.map((tag) => {
                  const Icon = tag.icon;
                  return (
                    <div
                      key={tag.label}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.5rem 1rem",
                        borderRadius: "var(--radius-pill)",
                        background: "#fff",
                        border: "1px solid var(--border)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "var(--fg-dim)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Icon size={14} strokeWidth={1.4} />
                      {tag.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ====== Card 3 — Likviditetsprojektioner ====== */}
          <div
            className="reveal reveal-d4 card-hover"
            style={{
              height: "36rem",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              background: "linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)",
              border: "1px solid var(--border)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Top content */}
            <div
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Pill badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "var(--radius-pill)",
                  border: "1px solid var(--border)",
                  background: "#fff",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "var(--fg-dim)",
                  width: "fit-content",
                  marginBottom: "1rem",
                }}
              >
                <Percent size={13} strokeWidth={1.5} />
                Prognos
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "var(--fg)",
                  textAlign: "center",
                }}
              >
                Likviditetsprojektioner
              </h3>
            </div>

            {/* Navy bottom area */}
            <div
              style={{
                flex: 1,
                background: "var(--navy)",
                borderRadius: "24px 24px 0 0",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Big number */}
              <div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    fontWeight: 400,
                    color: "#ffffff",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  +72 500 kr
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                    marginTop: "0.5rem",
                  }}
                >
                  Projicerat nettofloede
                </div>
              </div>

              {/* SVG bar chart */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1.5rem 0 0.5rem",
                }}
              >
                <svg
                  viewBox="0 0 280 100"
                  fill="none"
                  style={{ width: "100%", height: "80px" }}
                  preserveAspectRatio="none"
                >
                  {[32, 48, 55, 42, 68, 75, 60, 82, 90, 72, 95, 100].map(
                    (h, i) => (
                      <rect
                        key={i}
                        x={i * 23 + 2}
                        y={100 - h}
                        width={16}
                        rx={3}
                        height={h}
                        fill={
                          i === 11
                            ? "rgba(255,255,255,0.9)"
                            : `rgba(255,255,255,${0.12 + i * 0.04})`
                        }
                      />
                    )
                  )}
                </svg>
              </div>

              {/* Bottom row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "1rem",
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  30 dagars prognos
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "var(--radius-pill)",
                    background: "rgba(5,150,105,0.15)",
                    color: "#34d399",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  +11%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive grid override */}
      <style jsx>{`
        @media (min-width: 768px) {
          .finance-cards-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
