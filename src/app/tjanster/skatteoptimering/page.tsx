"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

/* ── KPI data ── */
const kpis = [
  { label: "Strukturer", value: "ISK · KF" },
  { label: "Skiften", value: "Generationsplan" },
  { label: "Rådgivning", value: "Oberoende" },
  { label: "Bevakning", value: "Löpande" },
];

export default function SkatteoptimeringsPage() {
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
                <span className="font-mono sd-eyebrow">04 — Tjänst</span>
                <h1 className="font-display sd-title">
                  Skatte&shy;optimering
                </h1>
              </div>
              <div className="sd-hero-right">
                <p className="sd-intro">
                  Strategisk strukturering av din förmögenhet för maximal 
                  skatteeffektivitet — genom ISK, kapitalförsäkring, holdingbolag 
                  och framsynt generationsplanering.
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
                    src="/images/service-draped-petals.png"
                    alt="Skatteoptimering — strategisk rådgivning"
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
                    Rätt struktur, rätt tidpunkt
                  </h2>
                  <p>
                    ISK, kapitalförsäkring eller holdingbolag — svaret beror helt på 
                    din situation. Din inkomst, dina tillgångar, din familjestruktur 
                    och din tidshorisont avgör vilken lösning som faktiskt minimerar 
                    din skattebörda.
                  </p>
                  <p>
                    Vi analyserar helheten och bygger en struktur som passar 
                    <em>dig</em> — inte en standardmodell. Varje krona som inte 
                    går till skatt är en krona som fortsätter arbeta i din portfölj.
                  </p>
                </div>

                <div className="sd-text-block">
                  <h2 className="font-display sd-text-heading">
                    Generationsskiften
                  </h2>
                  <p>
                    Att bygga förmögenhet är en sak. Att bevara den över generationer 
                    är en helt annan. Utan en genomtänkt plan riskerar arv och gåvor 
                    att urholkas av onödiga skattekonsekvenser och familjetvister.
                  </p>
                  <p>
                    Vi hjälper dig att strukturera <strong>testamenten, gåvobrev, 
                    familjeföretagsöverlåtelser och stiftelselösningar</strong> så att 
                    din förmögenhet når nästa generation intakt. Planeringen börjar 
                    långt innan den behövs — det är hela poängen.
                  </p>
                </div>

                <div className="sd-text-block">
                  <h2 className="font-display sd-text-heading">
                    Regelverk i förändring
                  </h2>
                  <p>
                    Skatteregler är aldrig statiska. En förändring i 
                    schablonbeskattningen av ISK, nya regler för fåmansbolag, eller 
                    skiftande EU-direktiv kan förändra förutsättningarna över en natt.
                  </p>
                  <p>
                    Vi bevakar regelverket löpande och agerar proaktivt. När andra 
                    reagerar har vi redan justerat din struktur. Det är skillnaden 
                    mellan att förlora pengar och att ligga steget före.
                  </p>
                </div>

                <div className="sd-text-block sd-text-block--highlight">
                  <blockquote className="sd-quote">
                    <p className="font-display">
                      &ldquo;Den dyraste kostnaden är den du aldrig visste att 
                      du betalade. Vi ser till att du inte har några 
                      överraskningar.&rdquo;
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
                  Betalar du mer skatt än du behöver?
                </h2>
                <p className="sd-cta-desc">
                  Vi analyserar din nuvarande skatteposition kostnadsfritt och 
                  identifierar konkreta möjligheter att optimera din struktur.
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

      <Footer />

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
