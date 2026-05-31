"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSectionReveal } from "../hooks/useSectionReveal";

const steps = [
  {
    num: "01",
    title: "Kartläggning",
    description:
      "Vi börjar med att förstå din ekonomiska situation, dina mål och din riskprofil på djupet. Genom strukturerade samtal kartlägger vi allt från tillgångar och skulder till familjesituation och framtidsplaner.",
    metrics: [
      { label: "Djupintervju", value: "90 min" },
      { label: "Riskanalys", value: "Kvantitativ" },
      { label: "Dokumentation", value: "Fullständig" },
    ],
  },
  {
    num: "02",
    title: "Strategi & Plan",
    description:
      "Baserat på kartläggningen bygger vi en skräddarsydd investeringsstrategi. Vi presenterar allokering, förväntad avkastning, risknivåer och kostnadsstruktur — transparent och tydligt.",
    metrics: [
      { label: "Tillgångsallokering", value: "Individuell" },
      { label: "Prognos", value: "10+ år" },
      { label: "Kostnadsbild", value: "Transparent" },
    ],
  },
  {
    num: "03",
    title: "Genomförande",
    description:
      "När strategin är godkänd implementerar vi den effektivt. Vi öppnar depåkonton, väljer fonder och instrument, och säkerställer att allt är på plats för optimal förvaltning.",
    metrics: [
      { label: "Implementering", value: "5–10 dagar" },
      { label: "Depåbank", value: "Nordnet" },
      { label: "Uppföljning", value: "Omgående" },
    ],
  },
  {
    num: "04",
    title: "Löpande uppföljning",
    description:
      "Din portfölj övervakas kontinuerligt och rebalanseras vid behov. Du får regelbundna rapporter, har tillgång till vår app dygnet runt, och din rådgivare finns alltid tillgänglig.",
    metrics: [
      { label: "Kvartalsrapporter", value: "Automatiska" },
      { label: "App-åtkomst", value: "24/7" },
      { label: "Rådgivarsamtal", value: "När du vill" },
    ],
  },
];

export default function ProcessSteps() {
  const sectionRef = useScrollReveal();
  const gsapRef = useSectionReveal();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "var(--section-gap)",
      }}
    >
      <div
        ref={gsapRef}
        className="max-w-[var(--content-width)] mx-auto px-6 md:px-8 relative"
      >
        {/* Centered header */}
        <div className="text-center mb-16 md:mb-20 gsap-reveal">
          <div
            className="font-mono mb-6"
            style={{
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
            }}
          >
            Hur vi arbetar
          </div>
          <h2
            className="font-display gsap-reveal-heading"
            style={{
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: "var(--fg)",
              marginBottom: "1.5rem",
            }}
          >
            En strukturerad process
            <br />
            för din trygghet.
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--fg-dim)",
              maxWidth: "520px",
            }}
          >
            Varje klientrelation börjar med att vi lyssnar. Sedan bygger vi —
            steg för steg, med full transparens.
          </p>
        </div>

        {/* Full-width accordion */}
        <div>
          {steps.map((step, i) => {
            const isOpen = activeIndex === i;
            return (
              <div
                key={step.num}
                className="gsap-reveal"
                style={{
                  borderTop: "1px solid var(--hairline-strong)",
                  ...(i === steps.length - 1
                    ? { borderBottom: "1px solid var(--hairline-strong)" }
                    : {}),
                }}
              >
                {/* Row header — clickable */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left group"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(1.5rem, 3vw, 2.5rem)",
                    paddingTop: "clamp(2rem, 3.5vw, 3rem)",
                    paddingBottom: "clamp(2rem, 3.5vw, 3rem)",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    width: "100%",
                  }}
                >
                  {/* Number */}
                  <span
                    className="font-mono shrink-0"
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: isOpen ? "var(--gold)" : "var(--fg-muted)",
                      transition: "color 0.4s ease",
                      minWidth: "2rem",
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      fontWeight: 300,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.05,
                      color: "var(--fg)",
                      flex: 1,
                      transition: "transform 0.4s ease",
                      transform: isOpen ? "translateX(0.5rem)" : "translateX(0)",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Expand icon */}
                  <span
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 200,
                      lineHeight: 1,
                      color: "var(--fg-muted)",
                      transition: "transform 0.4s ease, color 0.4s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      flexShrink: 0,
                      width: "2rem",
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Expandable content */}
                <div
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition:
                      "max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease, padding 0.5s ease",
                    paddingTop: isOpen ? "0.5rem" : "0",
                    paddingBottom: isOpen ? "3rem" : "0",
                    paddingLeft: "calc(2rem + clamp(1.5rem, 3vw, 2.5rem))",
                  }}
                >
                  {/* Description */}
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: "var(--fg-dim)",
                      maxWidth: "560px",
                      marginBottom: "2rem",
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Metrics row */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "3rem",
                    }}
                  >
                    {step.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div
                          className="font-mono"
                          style={{
                            fontSize: "10px",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--fg-muted)",
                            marginBottom: "0.4rem",
                          }}
                        >
                          {metric.label}
                        </div>
                        <div
                          className="font-display"
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: 500,
                            color: "var(--fg)",
                          }}
                        >
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA row — same format as accordion rows but navy full-width */}
        <Link
          href="#kontakt"
          className="gsap-reveal group"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem 1.5rem",
            backgroundColor: "var(--navy)",
            borderRadius: "60px",
            textDecoration: "none",
            marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <span
            className="font-display"
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              color: "#FFFFFF",
              flex: 1,
            }}
          >
            Boka kostnadsfritt möte
          </span>

          <span
            className="shrink-0 inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: "#FFFFFF" }}
          >
            <ArrowRight className="w-5 h-5" />
          </span>
        </Link>
      </div>
    </section>
  );
}
