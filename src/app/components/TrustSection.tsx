"use client";

import { useSectionReveal } from "../hooks/useSectionReveal";

/* ── Trust items data (Target / Parameters style) ── */
const trustData = [
  {
    label: "Tillstånd",
    value: "FI-Godkänd",
    desc: "Värdepappersbolag under tillsyn.",
  },
  {
    label: "Förvaring",
    value: "Nordnet",
    desc: "Säker depåförvaring, skild från vår balansräkning.",
  },
  {
    label: "Oberoende",
    value: "100%",
    desc: "Inga dolda provisioner eller egna fonder.",
  },
  {
    label: "Regelefterlevnad",
    value: "MiFID II",
    desc: "Full transparens kring avgifter och risker.",
  },
];

/* ── Partner names ── */
const partners = ["SEB", "Nordnet", "Carnegie", "Handelsbanken", "Avanza", "Öhman"];

export default function TrustSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--navy)",
        color: "white",
        paddingTop: "clamp(8rem, 14vw, 12rem)",
        paddingBottom: "clamp(8rem, 14vw, 12rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="mx-auto px-6 md:px-8 relative z-10"
        style={{ maxWidth: "var(--content-width)" }}
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* ── Left Column: Heading & Text ── */}
          <div className="lg:w-5/12 flex flex-col justify-center">
            <div
              className="font-mono gsap-reveal"
              style={{
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: "1.5rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              Tillförlitlighet i varje led
              <span
                style={{
                  width: "40px",
                  height: "1px",
                  background: "rgba(255, 255, 255, 0.25)",
                }}
              />
            </div>

            <h2
              className="font-display gsap-reveal-heading"
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              Säkerhet som fundament.
            </h2>

            <p
              className="gsap-reveal"
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 300,
                maxWidth: "480px",
              }}
            >
              Din trygghet är vår högsta prioritet. Genom strikt regelefterlevnad, tillstånd från Finansinspektionen och samarbete med etablerade depåförvarare ser vi till att ditt kapital alltid är skyddat.
            </p>
          </div>

          {/* ── Right Column: Data Grid ── */}
          <div className="lg:w-7/12 flex items-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {trustData.map((item, i) => (
                <div
                  key={item.label}
                  className="gsap-reveal"
                  style={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                    paddingTop: "1.5rem",
                  }}
                >
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(255, 255, 255, 0.5)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.5rem, 2vw, 1.75rem)",
                      fontWeight: 300,
                      color: "white",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.5,
                      color: "rgba(255, 255, 255, 0.6)",
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Partners ── */}
        <div
          className="gsap-reveal mt-32 pt-12"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(1.5rem, 3vw, 3rem)",
          }}
        >
          {partners.map((name, i) => (
            <span
              key={name}
              className="font-display"
              style={{
                fontSize: "clamp(13px, 1.1vw, 15px)",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "rgba(255, 255, 255, 0.4)",
                display: "inline-flex",
                alignItems: "center",
                gap: "clamp(1.5rem, 3vw, 3rem)",
              }}
            >
              {name}
              {i < partners.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{
                    color: "rgba(255, 255, 255, 0.15)",
                    fontSize: "10px",
                    userSelect: "none",
                  }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
