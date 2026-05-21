"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ── Card 1: Premium App Mockup with Device Frame ── */

function AppMockup() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(1.5rem, 3vw, 2.5rem)",
        background: "linear-gradient(165deg, #0f1023 0%, #1a1f3d 40%, #242748 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow behind phone */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Phone device frame */}
      <div
        style={{
          width: "100%",
          maxWidth: "240px",
          aspectRatio: "9 / 19.5",
          borderRadius: "28px",
          border: "2px solid rgba(255,255,255,0.12)",
          background: "linear-gradient(180deg, #12152e 0%, #1a1f3d 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), 0 25px 60px -12px rgba(0,0,0,0.7), 0 0 40px rgba(99,102,241,0.08)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Dynamic island */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "6px",
            position: "relative",
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: "80px",
              height: "22px",
              borderRadius: "20px",
              backgroundColor: "#000",
              boxShadow: "0 0 8px rgba(0,0,0,0.5)",
            }}
          />
        </div>

        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2px 18px 8px",
          }}
        >
          <span style={{ fontSize: "9px", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
            9:41
          </span>
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            {/* Signal bars */}
            <svg width="12" height="10" viewBox="0 0 16 12">
              <rect x="0" y="8" width="3" height="4" rx="0.5" fill="rgba(255,255,255,0.7)" />
              <rect x="4" y="5" width="3" height="7" rx="0.5" fill="rgba(255,255,255,0.7)" />
              <rect x="8" y="2" width="3" height="10" rx="0.5" fill="rgba(255,255,255,0.7)" />
              <rect x="12" y="0" width="3" height="12" rx="0.5" fill="rgba(255,255,255,0.25)" />
            </svg>
            {/* Battery */}
            <svg width="18" height="9" viewBox="0 0 25 12">
              <rect x="0" y="0" width="22" height="12" rx="3" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <rect x="2" y="2" width="14" height="8" rx="1.5" fill="rgba(255,255,255,0.7)" />
              <rect x="23" y="3.5" width="2" height="5" rx="1" fill="rgba(255,255,255,0.25)" />
            </svg>
          </div>
        </div>

        {/* App content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "0 14px",
            overflow: "hidden",
          }}
        >
          {/* Top bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <span
              className="font-mono"
              style={{ fontSize: "8px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}
            >
              ADDEQT
            </span>
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(99,102,241,0.1))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </div>

          {/* Greeting */}
          <div style={{ marginBottom: "4px" }}>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}>
              Välkommen tillbaka
            </div>
            <div
              className="font-display"
              style={{ fontSize: "1rem", fontWeight: 400, color: "#fff", marginTop: "2px" }}
            >
              Anna
            </div>
          </div>

          {/* Frosted stat card */}
          <div
            style={{
              margin: "10px 0",
              padding: "12px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "10px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: "7px",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "rgba(255,255,255,0.35)",
                marginBottom: "4px",
              }}
            >
              Total avkastning
            </div>
            <div
              className="font-display"
              style={{ fontSize: "1.4rem", fontWeight: 300, color: "#4ade80", lineHeight: 1 }}
            >
              +8.2%
            </div>
            <div style={{ fontSize: "8px", color: "rgba(255,255,255,0.25)", marginTop: "3px" }}>
              vs föregående år
            </div>
          </div>

          {/* Sparkline */}
          <svg viewBox="0 0 200 50" width="100%" height="40" style={{ display: "block", margin: "4px 0" }}>
            <defs>
              <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(74,222,128,0.15)" />
                <stop offset="100%" stopColor="rgba(74,222,128,0)" />
              </linearGradient>
            </defs>
            <polygon
              points="0,40 25,36 50,33 75,35 100,28 125,24 150,18 175,14 200,8 200,50 0,50"
              fill="url(#spark-fill)"
            />
            <polyline
              points="0,40 25,36 50,33 75,35 100,28 125,24 150,18 175,14 200,8"
              fill="none"
              stroke="#4ade80"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="200" cy="8" r="2.5" fill="#4ade80" style={{ animation: "pulse-soft 3s ease-in-out infinite" }} />
          </svg>

          {/* Quick action buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6px",
              margin: "8px 0",
            }}
          >
            {[
              { label: "Portfölj", icon: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3z" },
              { label: "Rapporter", icon: "M14 14h7v7h-7z" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "8px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
                  <path d={item.icon} />
                </svg>
                <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav bar */}
        <div
          style={{
            padding: "8px 14px 14px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {[
            <svg key="home" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>,
            <svg key="chart" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>,
            <svg key="bell" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            </svg>,
            <svg key="user" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>,
          ].map((icon, i) => (
            <div key={i} style={{ padding: "4px", opacity: i === 0 ? 1 : 0.7 }}>
              {icon}
            </div>
          ))}
        </div>

        {/* Home indicator */}
        <div style={{ display: "flex", justifyContent: "center", paddingBottom: "6px" }}>
          <div
            style={{
              width: "80px",
              height: "4px",
              borderRadius: "4px",
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Card 3: Clean Area Chart (white tones on dark) ── */

function PortfolioChart() {
  const points = "0,140 30,125 60,118 90,110 120,95 150,80 180,68 210,55 240,42 270,35 300,22";
  const fillPoints = `${points} 300,160 0,160`;

  return (
    <svg
      viewBox="0 0 300 160"
      width="100%"
      height="180"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Subtle grid lines */}
      {[50, 95, 140].map((y) => (
        <line
          key={y}
          x1="0" y1={y} x2="300" y2={y}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
      ))}

      {/* Area fill */}
      <polygon points={fillPoints} fill="url(#chart-fill)" />

      {/* Main line */}
      <polyline
        points={points}
        fill="none"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pulsing endpoint */}
      <circle
        cx="300"
        cy="22"
        r="4"
        fill="#fff"
        style={{ animation: "pulse-soft 3s ease-in-out infinite" }}
      />
    </svg>
  );
}

/* ── Card 5: Notification Bell Icon ── */

function BellIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

/* ── LIVE pill badge component ── */

function LiveBadge() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        backgroundColor: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "999px",
        padding: "4px 10px",
      }}
    >
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#4ade80",
          boxShadow: "0 0 6px rgba(74,222,128,0.5)",
          animation: "pulse-soft 3s ease-in-out infinite",
        }}
      />
      <span
        className="font-mono"
        style={{
          fontSize: "9px",
          letterSpacing: "0.12em",
          textTransform: "uppercase" as const,
          color: "rgba(255,255,255,0.6)",
        }}
      >
        Live
      </span>
    </div>
  );
}

/* ── Shared card style ── */

const cardBase: React.CSSProperties = {
  borderRadius: "12px",
  overflow: "hidden",
  boxSizing: "border-box",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  cursor: "default",
};

/* ── Flashlight onMouseMove handler ── */

function handleFlashlight(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
}

/* ── Component ── */

export default function AppBento() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = sectionRef.current;
      if (!el) return;

      const cols = el.querySelectorAll(".parallax-col");
      cols.forEach((col, i) => {
        const speed = (i + 1) * 8;
        gsap.to(col, {
          y: -speed,
          ease: "none",
          scrollTrigger: {
            trigger: el.querySelector(".masonry-grid"),
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="insikter"
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "var(--section-gap)",
      }}
    >
      {/* ── Section Header ── */}
      <div
        style={{
          maxWidth: "var(--content-width)",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 4vw, 3rem)",
          boxSizing: "border-box",
        }}
      >
        {/* Split header */}
        <div
          className="bento-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "3rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid var(--hairline)",
            marginBottom: "clamp(2rem, 4vw, 4rem)",
          }}
        >
          {/* Left */}
          <div style={{ flex: "1 1 55%" }}>
            <div
              className="font-mono"
              style={{
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "var(--fg-muted)",
                marginBottom: "1rem",
              }}
            >
              Digitala verktyg
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--fg)",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {"Full insyn.\nHela tiden."}
            </h2>
          </div>

          {/* Right — description */}
          <div
            className="bento-header-right"
            style={{
              flex: "0 1 38%",
              alignSelf: "flex-end",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "var(--fg-dim)",
                margin: 0,
                maxWidth: "420px",
              }}
            >
              Vår app och digitala plattform ger dig total kontroll över din
              förmögenhet — med realtidsdata, veckorapporter och personlig
              rådgivning i fickan.
            </p>
          </div>
        </div>

        {/* ── Masonry Grid ── */}
        <div
          className="masonry-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(1rem, 2vw, 2rem)",
            minHeight: "120vh",
          }}
        >
          {/* ══════════════════════════════════════════════
              COLUMN 1 — slowest parallax
              ══════════════════════════════════════════════ */}
          <div
            className="parallax-col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(1rem, 2vw, 2rem)",
              paddingTop: "5rem",
            }}
          >
            {/* ── Card 1: App Mockup ── */}
            <div
              className="glass-card bento-card"
              style={{
                ...cardBase,
                aspectRatio: "9 / 16",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
              onMouseMove={handleFlashlight}
            >
              <AppMockup />
            </div>

            {/* ── Card 2: Editorial Image Placeholder ── */}
            <div
              className="bento-card"
              style={{
                ...cardBase,
                aspectRatio: "4 / 3",
                background:
                  "linear-gradient(135deg, #f5f0eb 0%, #e8e2db 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                position: "relative",
                border: "1px solid var(--hairline)",
              }}
            >
              {/* Grid pattern overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                  borderRadius: "inherit",
                  pointerEvents: "none",
                }}
              />
              <span
                className="font-display"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--fg-dim)",
                  textAlign: "center",
                  lineHeight: 1.5,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Din framtid, visualiserad.
              </span>
              {/* Corner index label */}
              <span
                className="font-mono"
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1.25rem",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  color: "var(--fg-muted)",
                }}
              >
                01 / Vision
              </span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              COLUMN 2 — medium parallax
              ══════════════════════════════════════════════ */}
          <div
            className="parallax-col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(1rem, 2vw, 2rem)",
            }}
          >
            {/* ── Card 3: Live Portfolio Chart (Glass Dark) ── */}
            <div
              className="glass-card bento-card"
              style={{
                ...cardBase,
                aspectRatio: "3 / 4",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
              }}
              onMouseMove={handleFlashlight}
            >
              {/* Top row: label + LIVE badge */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase" as const,
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  Portföljutveckling
                </span>
                <LiveBadge />
              </div>

              {/* Chart */}
              <PortfolioChart />

              {/* Frosted inner stats card (card-within-card) */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <div
                      className="font-display"
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 300,
                        color: "#4ade80",
                        lineHeight: 1,
                      }}
                    >
                      +12.4%
                    </div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        color: "rgba(255,255,255,0.35)",
                        marginTop: "0.35rem",
                      }}
                    >
                      YTD
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      className="font-display"
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 300,
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      3.2 mdr
                    </div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        color: "rgba(255,255,255,0.35)",
                        marginTop: "0.35rem",
                      }}
                    >
                      AUM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Card 4: Quote ── */}
            <div
              className="bento-card"
              style={{
                ...cardBase,
                aspectRatio: "1 / 1",
                backgroundColor: "#faf9f7",
                border: "1px solid var(--hairline)",
                padding: "clamp(2rem, 4vw, 3rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
              }}
            >
              <blockquote
                className="font-display"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--fg)",
                  lineHeight: 1.5,
                  margin: 0,
                  maxWidth: "280px",
                }}
              >
                &ldquo;Transparens är inte en feature — det är vår grundprincip.&rdquo;
              </blockquote>
              <div
                className="font-mono"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "var(--fg-muted)",
                  marginTop: "1.5rem",
                }}
              >
                — Addeqt
              </div>
              {/* Corner index */}
              <span
                className="font-mono"
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1.25rem",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  color: "var(--fg-muted)",
                }}
              >
                02 / Princip
              </span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              COLUMN 3 — fastest parallax, hidden on tablet
              ══════════════════════════════════════════════ */}
          <div
            className="parallax-col bento-col3"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(1rem, 2vw, 2rem)",
              paddingTop: "10rem",
            }}
          >
            {/* ── Card 5: Smart Notifications (Glass Dark) ── */}
            <div
              className="glass-card bento-card"
              style={{
                ...cardBase,
                aspectRatio: "3 / 4",
                padding: "clamp(2rem, 4vw, 3rem)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
              }}
              onMouseMove={handleFlashlight}
            >
              {/* Top row: index label + LIVE badge */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: "2rem",
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase" as const,
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  03 / Notiser
                </span>
                <LiveBadge />
              </div>

              {/* Bell icon */}
              <BellIcon />

              {/* Title */}
              <div
                className="font-display"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "#fff",
                  marginTop: "1.5rem",
                }}
              >
                Smarta notiser
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.45)",
                  margin: 0,
                  marginTop: "0.75rem",
                  maxWidth: "220px",
                }}
              >
                Realtidsuppdateringar när det som spelar roll förändras.
              </p>

              {/* Notification skeleton bars */}
              <div
                style={{
                  marginTop: "auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {[0.7, 0.85, 0.55].map((w, i) => (
                  <div
                    key={i}
                    className="notification-skeleton"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.04)",
                      borderRadius: "8px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 12px",
                      gap: "10px",
                    }}
                  >
                    {/* Avatar placeholder */}
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.06)",
                        flexShrink: 0,
                      }}
                    />
                    {/* Text skeleton lines */}
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      <div
                        style={{
                          height: "6px",
                          width: `${w * 100}%`,
                          borderRadius: "3px",
                          background: "rgba(255,255,255,0.06)",
                        }}
                      />
                      <div
                        style={{
                          height: "5px",
                          width: `${w * 60}%`,
                          borderRadius: "3px",
                          background: "rgba(255,255,255,0.03)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Card 6: Personal Advisor ── */}
            <div
              className="bento-card"
              style={{
                ...cardBase,
                aspectRatio: "4 / 3",
                backgroundColor: "#fff",
                border: "1px solid var(--hairline)",
                padding: "clamp(1.5rem, 3vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Grid pattern bg */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                  borderRadius: "inherit",
                  pointerEvents: "none",
                }}
              />

              {/* Top label */}
              <span
                className="font-mono"
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1.25rem",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  color: "var(--fg-muted)",
                }}
              >
                04 / Rådgivning
              </span>

              {/* Avatar circle */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "var(--hairline)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.75rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "var(--fg-dim)",
                  }}
                >
                  A
                </span>
              </div>

              {/* Title */}
              <div
                className="font-display"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  color: "var(--fg)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Personlig rådgivare
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: 1.6,
                  color: "var(--fg-dim)",
                  margin: 0,
                  marginTop: "0.5rem",
                  maxWidth: "200px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Din dedikerade rådgivare, alltid tillgänglig.
              </p>

              {/* Status + arrow row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  marginTop: "1rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#4ade80",
                    boxShadow: "0 0 6px rgba(74,222,128,0.4)",
                  }}
                />
                <span
                  className="font-mono"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: "var(--fg-muted)",
                  }}
                >
                  Tillgänglig nu
                </span>
              </div>

              {/* Arrow icon bottom-right */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1.25rem",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "1px solid var(--hairline)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--fg-muted)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Styles: Glass cards, responsive, keyframes ── */}
      <style>{`
        /* ── Glass card: gradient border + flashlight ── */
        .glass-card {
          position: relative;
          background: rgba(15,15,20,0.85);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
        }
        .glass-card::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 2;
        }
        .glass-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(255,255,255,0.06),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
          z-index: 2;
        }
        .glass-card:hover::after {
          opacity: 1;
        }

        /* ── Light card hover ── */
        .bento-card:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        }
        .glass-card:hover {
          box-shadow: 0 25px 60px -12px rgba(0,0,0,0.6) !important;
        }

        /* ── Notification skeleton subtle shimmer ── */
        .notification-skeleton {
          transition: background 0.3s ease;
        }
        .glass-card:hover .notification-skeleton {
          background: rgba(255,255,255,0.05) !important;
        }

        /* ── Keyframes ── */
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .masonry-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .bento-col3 {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .masonry-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .parallax-col {
            padding-top: 0 !important;
          }
          .bento-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
          .bento-header-right {
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
