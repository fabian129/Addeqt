"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

/* ── KPI data ── */
const kpis = [
  { label: "Min. kapital", value: "50M+" },
  { label: "Kontaktperson", value: "Dedikerad" },
  { label: "Tjänster", value: "Alla" },
  { label: "Tillgänglighet", value: "24/7" },
];

export default function PrivateBankingPage() {
  return (
    <>
      <Navbar forceScrolled />

      <main className="sd-page">

        {/* ── Back link ── */}
        <div className="sd-container">
          <Link href="/tjanster" className="sd-back group">
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
            <span className="font-mono">Alla tjänster</span>
          </Link>
        </div>

        {/* ═══ HERO ═══ */}
        <section className="sd-hero">
          <div className="sd-container">
            <div className="sd-hero-grid">
              <div className="sd-hero-left">
                <span className="font-mono sd-eyebrow">03 — Tjänst</span>
                <h1 className="font-display sd-title">
                  Private Banking
                </h1>
              </div>
              <div className="sd-hero-right">
                <p className="sd-intro">
                  En dedikerad kontaktperson som koordinerar hela din privata
                  ekonomi som en sammanhållen helhet — från kapitalförvaltning
                  och pension till bolån, försäkringar och skatteplanering.
                </p>
              </div>
            </div>

            {/* KPI row */}
            <div className="sd-kpi-row">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="sd-kpi">
                  <span className="font-display sd-kpi-value">{kpi.value}</span>
                  <span className="font-mono sd-kpi-label">{kpi.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ EDITORIAL — Image + Text (sticky) ═══ */}
        <section className="sd-editorial">
          <div className="sd-container">
            <div className="sd-editorial-grid">

              {/* Left: Sticky image */}
              <div className="sd-editorial-image-col">
                <div className="sd-editorial-image">
                  <Image
                    src="/images/service-column-bloom.png"
                    alt="Private Banking — en dedikerad rådgivare"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    quality={90}
                  />
                </div>
              </div>

              {/* Right: Scrolling content */}
              <div className="sd-editorial-text">
                <div className="sd-text-block">
                  <h2 className="font-display sd-text-heading">
                    En person — hela bilden
                  </h2>
                  <p>
                    De flesta har sin ekonomi utspridd över flera banker, försäkringsbolag
                    och rådgivare. Ingen har helhetsbilden. Det innebär att beslut fattas
                    i stuprör — ditt bolån vet inte om din portfölj, din pension
                    vet inte om dina försäkringar.
                  </p>
                  <p>
                    Hos Addeqt får du <strong>en dedikerad kontaktperson</strong> som
                    koordinerar allt. Bolån, kapitalförvaltning, pension, försäkringar
                    och skatteplanering — som en sammanhängande strategi med ett enda
                    mål: att din totala ekonomi arbetar så effektivt som möjligt.
                  </p>
                </div>

                <div className="sd-text-block">
                  <h2 className="font-display sd-text-heading">
                    Proaktiv, inte reaktiv
                  </h2>
                  <p>
                    En traditionell bank kontaktar dig när <em>de</em> har något att sälja.
                    Vi kontaktar dig när <em>du</em> har något att vinna. Skillnaden
                    är fundamental.
                  </p>
                  <p>
                    Din rådgivare bevakar marknaden, identifierar möjligheter och agerar
                    innan problem uppstår. Ränteförändringar som påverkar ditt bolån,
                    skatteoptimering inför årsskiftet, ombalansering av portföljen vid
                    marknadsvolatilitet — du blir informerad och rådgiven <strong>innan
                    det är brådskande</strong>, inte efter.
                  </p>
                </div>

                <div className="sd-text-block">
                  <h2 className="font-display sd-text-heading">
                    Tillgänglighet som standard
                  </h2>
                  <p>
                    Livet följer inte kontorstider. En affär som kräver snabb finansiering,
                    en oväntad möjlighet på marknaden, en fråga som inte kan vänta till
                    måndag — du ska aldrig behöva vänta på svar.
                  </p>
                  <p>
                    Vår Private Banking-tjänst innebär att din rådgivare är tillgänglig
                    när du behöver dem. Inte genom ett callcenter eller ett ärendenummer,
                    utan genom <strong>en direktlinje till någon som redan
                    känner din situation</strong> och kan agera omedelbart.
                  </p>
                </div>

                <div className="sd-text-block sd-text-block--highlight">
                  <blockquote className="sd-quote">
                    <p className="font-display">
                      &ldquo;Den verkliga lyxen är inte avkastningen — det är att ha
                      någon som genuint förstår din situation och som du litar på
                      att fatta rätt beslut, även när du inte är i rummet.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="sd-cta">
          <div className="sd-container">
            <div className="sd-cta-inner">
              <div>
                <h2 className="font-display sd-cta-title">
                  Vill du ha en rådgivare som koordinerar allt?
                </h2>
                <p className="sd-cta-desc">
                  Boka en privat konsultation där vi kartlägger din totala ekonomi
                  och visar hur en dedikerad kontaktperson kan förenkla och förbättra
                  hela din finansiella vardag.
                </p>
              </div>
              <Link href="#kontakt" className="sd-cta-btn group">
                <span>Boka möte</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer hideCTA />

      <style>{`
        /* ═══════════════════════════════════
           SERVICE DETAIL PAGE
           ═══════════════════════════════════ */
        .sd-page { background: #fff; min-height: 100vh; }

        .sd-container {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 6vw, 6rem);
        }

        /* ── Back link ── */
        .sd-back {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding-top: clamp(7rem, 10vh, 9rem);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--fg-muted);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .sd-back:hover { color: var(--fg); }

        /* ── Hero ── */
        .sd-hero {
          padding: clamp(3rem, 6vw, 5rem) 0 0;
          border-bottom: 1px solid var(--hairline);
        }
        .sd-hero-grid {
          display: flex;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: flex-end;
          padding-bottom: clamp(3rem, 5vw, 4rem);
        }
        .sd-hero-left { flex: 0 0 55%; }
        .sd-eyebrow {
          display: block;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
          margin-bottom: 1.25rem;
        }
        .sd-title {
          font-size: clamp(4rem, 9vw, 8rem);
          font-weight: 300;
          letter-spacing: -0.04em;
          line-height: 0.9;
          color: var(--fg);
          margin: 0;
          hyphens: manual;
        }
        .sd-hero-right {
          flex: 1;
          padding-bottom: 0.5rem;
        }
        .sd-intro {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.7;
          color: var(--fg-dim);
          margin: 0;
          font-weight: 300;
        }

        /* KPI row */
        .sd-kpi-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          padding: clamp(2rem, 4vw, 3rem) 0;
        }
        .sd-kpi {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .sd-kpi-value {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: var(--fg);
        }
        .sd-kpi-label {
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
        }

        /* ── Editorial section ── */
        .sd-editorial {
          padding: clamp(5rem, 10vw, 8rem) 0;
        }
        .sd-editorial-grid {
          display: grid;
          grid-template-columns: 5fr 6fr;
          gap: clamp(3rem, 6vw, 5rem);
        }
        .sd-editorial-image-col {
          position: sticky;
          top: 5rem;
          height: fit-content;
        }
        .sd-editorial-image {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border-radius: 2px;
          background: var(--surface-1);
        }

        .sd-editorial-text {
          display: flex;
          flex-direction: column;
          gap: clamp(3rem, 5vw, 4rem);
        }
        .sd-text-block {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .sd-text-heading {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: var(--fg);
          margin: 0;
        }
        .sd-text-block p {
          font-size: clamp(15px, 1.15vw, 16px);
          line-height: 1.8;
          color: var(--fg-dim);
          margin: 0;
          font-weight: 300;
        }
        .sd-text-block strong {
          font-weight: 500;
          color: var(--fg);
        }
        .sd-text-block em {
          font-style: italic;
        }

        /* Quote */
        .sd-quote {
          border-left: 2px solid var(--navy);
          padding: 1.5rem 0 1.5rem 2rem;
          margin: 0;
        }
        .sd-quote p {
          font-size: clamp(1.25rem, 2vw, 1.6rem) !important;
          font-weight: 300 !important;
          line-height: 1.4 !important;
          letter-spacing: -0.02em;
          color: var(--fg) !important;
        }

        /* ── CTA ── */
        .sd-cta {
          background: var(--navy);
          padding: clamp(4rem, 8vw, 6rem) 0;
        }
        .sd-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .sd-cta-title {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: #fff;
          margin: 0 0 0.75rem;
        }
        .sd-cta-desc {
          font-size: 15px;
          line-height: 1.65;
          color: rgba(255,255,255,0.6);
          margin: 0;
          font-weight: 300;
          max-width: 480px;
        }
        .sd-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.25rem;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.2);
          background: transparent;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .sd-cta-btn:hover {
          background: #fff;
          color: var(--navy);
          border-color: #fff;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .sd-hero-grid {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          .sd-hero-left { flex: none; }
          .sd-title {
            font-size: clamp(3rem, 12vw, 5rem);
          }
          .sd-kpi-row {
            grid-template-columns: 1fr 1fr;
          }
          .sd-editorial-grid {
            grid-template-columns: 1fr;
          }
          .sd-editorial-image-col {
            position: static;
          }
          .sd-editorial-image {
            aspect-ratio: 16 / 10;
          }
        }
      `}</style>
    </>
  );
}
