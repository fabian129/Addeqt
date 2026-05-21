"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    num: "01",
    title: "Kapitalförvaltning",
    desc: "Aktiv portföljförvaltning anpassad efter din riskaptit, tidshorisont och mål — bland marknadens bästa produkter utan begränsningar.",
    detail: "Ingen bindningstid · Löpande rapportering",
  },
  {
    num: "02",
    title: "Förmögenhetsrådgivning",
    desc: "Heltäckande rådgivning med din livssituation som utgångspunkt. Vi kartlägger, analyserar och skapar en personlig finansiell plan.",
    detail: "Skräddarsydd plan · Årlig uppföljning",
  },
  {
    num: "03",
    title: "Private Banking",
    desc: "Heltäckande och problemlösande tjänst för din privatekonomi. Bolån, försäkring, pension — vi är din koordinator i varje fråga.",
    detail: "En kontaktperson · Alla frågor",
  },
  {
    num: "04",
    title: "Skatteoptimering",
    desc: "ISK, kapitalförsäkring, generationsskiften och arv — vi hjälper dig strukturera din förmögenhet på skatteeffektivaste sätt.",
    detail: "Strukturering · Generationsskiften",
  },
];

export default function ServicesGrid() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="tjanster"
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "var(--section-gap)",
      }}
    >
      <div className="max-w-[var(--content-width)] mx-auto px-6 md:px-8">
        {/* Eyebrow */}
        <div
          className="reveal font-mono mb-8"
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
          }}
        >
          Tjänster
        </div>

        {/* Heading — constating, Fluid Glass tone */}
        <h2
          className="reveal font-display mb-20"
          style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            color: "var(--fg)",
            maxWidth: "560px",
          }}
        >
          Fyra tjänster. Ett mål.
        </h2>

        {/* Services — stacked full-width rows, not cards */}
        <div className="reveal">
          {services.map((service, i) => (
            <div
              key={service.num}
              className="group"
              style={{
                borderTop: i === 0 ? "1px solid var(--hairline-strong)" : "none",
                borderBottom: "1px solid var(--hairline-strong)",
              }}
            >
              <Link
                href="#kontakt"
                className="grid grid-cols-12 gap-4 items-baseline transition-all duration-500"
                style={{
                  paddingBlock: "clamp(2rem, 3vw, 3rem)",
                }}
              >
                {/* Number */}
                <div
                  className="col-span-1 font-mono"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "var(--fg-muted)",
                  }}
                >
                  {service.num}
                </div>

                {/* Title */}
                <h3
                  className="col-span-3 font-display group-hover:text-[var(--gold)] transition-colors duration-500"
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    color: "var(--fg)",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="col-span-5"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "var(--fg-dim)",
                  }}
                >
                  {service.desc}
                </p>

                {/* Detail + Arrow */}
                <div className="col-span-3 flex items-center justify-between">
                  <span
                    className="font-mono hidden lg:block"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--fg-muted)",
                    }}
                  >
                    {service.detail}
                  </span>
                  <ArrowRight
                    className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                    style={{ color: "var(--gold)" }}
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal flex items-center gap-8"
          style={{ marginTop: "clamp(3rem, 5vw, 5rem)" }}
        >
          <Link href="#kontakt" className="btn-primary shimmer">
            Boka rådgivning
            <ArrowRight className="w-4 h-4" />
          </Link>
          <span
            className="font-mono"
            style={{
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
            }}
          >
            Kostnadsfritt första möte
          </span>
        </div>
      </div>
    </section>
  );
}
