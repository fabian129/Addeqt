"use client";

import { useSectionReveal } from "../hooks/useSectionReveal";

/* ── Rows data matching Tresmares grid (Target, Tesis, Parameters) ── */
const gridRows = [
  {
    target: "Regulatorisk Säkerhet",
    tesis: [
      "Värdepappersbolag under strikt tillsyn av svenska Finansinspektionen.",
      "Anslutna till Swedsec för licensiering av samtliga rådgivare.",
    ],
    parameters: [
      "Fullständig MiFID II-efterlevnad.",
      "Transparens kring samtliga avgifter och kostnader, inga dolda provisioner.",
    ],
  },
  {
    target: "Förvaring & Plattform",
    tesis: [
      "Samtliga kunders kapital förvaras i säkra depåer hos vår partner Nordnet.",
      "Ditt kapital är strikt avskilt från Addeqts egen balansräkning.",
    ],
    parameters: [
      "Omfattas av statlig insättningsgaranti.",
      "Omfattas av det statliga investerarskyddet.",
    ],
  },
  {
    target: "Öppet Universum",
    tesis: [
      "Inga egna finansiella produkter eller fonder som vi styrs mot att sälja.",
      "Oberoende urval från hela den globala finansmarknaden.",
    ],
    parameters: [
      "ETF:er, aktier, räntor & alternativ.",
      "Fokus på extremt låga underliggande fondavgifter.",
    ],
  },
];

export default function TrustSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--navy, #1A1C23)",
        color: "white",
        paddingTop: "clamp(8rem, 14vw, 12rem)",
        paddingBottom: "clamp(8rem, 14vw, 12rem)",
      }}
    >
      <div
        className="mx-auto px-6 md:px-8"
        style={{ maxWidth: "var(--content-width)" }}
      >
        {/* ── TOP AREA (Heading + Intro Paragraph) ── */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32"
        >
          <div className="gsap-reveal">
            <span 
              className="font-mono block mb-8"
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.4)",
              }}
            >
              Vårt Fundament
            </span>
            <h2
              className="font-display gsap-reveal-heading"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "rgba(255, 255, 255, 0.95)",
                maxWidth: "600px",
              }}
            >
              Vårt oberoende är fundamentet i allt vi gör, stöttat av rigorösa regelverk och säkra samarbetspartners.
            </h2>
          </div>
          
          <div className="lg:pt-16 gsap-reveal">
            <p
              style={{
                fontSize: "clamp(15px, 1.2vw, 17px)",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 300,
                maxWidth: "460px",
              }}
            >
              Genom vårt tillstånd från Finansinspektionen och partnerskap med Nordnet kan vi erbjuda en fullständigt säker plattform. Allt kapital är separerat från vår egen balansräkning, vilket garanterar att dina intressen alltid sätts i allra första rummet.
            </p>
          </div>
        </div>

        {/* ── GRID AREA ── */}
        <div className="gsap-reveal">
          {/* Header Row */}
          <div 
            className="grid grid-cols-12 gap-8 pb-4 mb-12 hidden md:grid"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}
          >
            <div className="col-span-4 font-mono uppercase tracking-[0.14em] text-[10px] text-white/40">
              Fokusområde
            </div>
            <div className="col-span-4 font-mono uppercase tracking-[0.14em] text-[10px] text-white/40">
              Struktur
            </div>
            <div className="col-span-4 font-mono uppercase tracking-[0.14em] text-[10px] text-white/40">
              Kriterier
            </div>
          </div>

          {/* Data Rows */}
          {gridRows.map((row, i) => (
            <div 
              key={i} 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 pb-12 mb-12"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Target / Fokus */}
              <div className="md:col-span-4">
                {/* Mobile eyebrow fallback */}
                <span className="block md:hidden font-mono uppercase tracking-[0.14em] text-[10px] text-white/40 mb-3">Fokusområde</span>
                <h3 
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.9)",
                    maxWidth: "200px"
                  }}
                >
                  {row.target.split(' ').map((word, wi) => (
                    <span key={wi} className="block">{word}</span>
                  ))}
                </h3>
              </div>

              {/* Tesis / Struktur */}
              <div className="md:col-span-4 flex flex-col gap-6">
                 {/* Mobile eyebrow fallback */}
                 <span className="block md:hidden font-mono uppercase tracking-[0.14em] text-[10px] text-white/40 mt-4 mb-[-1rem]">Struktur</span>
                {row.tesis.map((text, ti) => (
                  <p 
                    key={ti}
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.65)",
                      fontWeight: 300,
                      maxWidth: "320px",
                      margin: 0
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>

              {/* Parameters / Kriterier */}
              <div className="md:col-span-4 flex flex-col gap-6">
                {/* Mobile eyebrow fallback */}
                <span className="block md:hidden font-mono uppercase tracking-[0.14em] text-[10px] text-white/40 mt-4 mb-[-1rem]">Kriterier</span>
                {row.parameters.map((text, pi) => (
                  <p 
                    key={pi}
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.65)",
                      fontWeight: 300,
                      maxWidth: "320px",
                      margin: 0
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
