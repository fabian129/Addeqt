"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ArrowDown, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ── Service Data ── */
const services = [
  {
    id: "kapitalforvaltning",
    title: "Kapital\u00ADförvaltning",
    strategy: "Aktiv förvaltning",
    detailHref: "/tjanster/kapitalforvaltning",
    desc: "Vi bygger och förvaltar portföljer med ett enda mål: maximal avkastning i förhållande till den risk du är beredd att ta. Som oberoende rådgivare har vi tillgång till hela marknadens utbud — fonder, direktinvesteringar, strukturerade produkter — utan att vara bundna till en enskild banks sortiment. Varje portfölj skräddarsys efter din riskaptit, tidshorisont och livssituation, med löpande ombalansering och kvartalsvis genomgång tillsammans med din personliga rådgivare.",
    stats: [
      { label: "Under förvaltning", value: "3+ mdr" },
      { label: "Avgift", value: "Fast" },
      { label: "Bindningstid", value: "Ingen" },
      { label: "Produkter", value: "100+" },
    ],
    images: ["/images/service-draped-petals.png", "/images/service-marble-dark.png"],
  },
  {
    id: "radgivning",
    title: "Förmögenhets\u00ADrådgivning",
    strategy: "Personlig planering",
    detailHref: "/tjanster/formogenhetsradgivning",
    desc: "Din ekonomi är mer än siffror — det handlar om trygghet, frihet och framtid. Vi börjar alltid med att förstå din livssituation: familj, karriär, mål och drömmar. Utifrån det skapar vi en heltäckande finansiell plan som väger samman sparande, investeringar, pension, försäkringar och skatteplanering. Planen är inte statisk — vi följer upp årligen och justerar strategin i takt med att livet förändras. Du får tillgång till vårt nätverk av experter inom juridik, skatt och fastigheter.",
    stats: [
      { label: "Kunder", value: "1 000+" },
      { label: "Min. belopp", value: "500K" },
      { label: "Plan", value: "Skräddarsydd" },
      { label: "Uppföljning", value: "Årlig" },
    ],
    images: ["/images/service-marble-dark.png", "/images/service-column-bloom.png"],
  },
  {
    id: "private-banking",
    title: "Private Banking",
    strategy: "Heltäckande tjänst",
    detailHref: "/tjanster/private-banking",
    desc: "Private Banking hos Addeqt innebär en dedikerad kontaktperson som koordinerar hela din privatekonomi. Vi hanterar bolån, försäkringar, pension och kapitalförvaltning som en sammanhållen helhet — inte som isolerade delar. Du slipper jaga olika banker och rådgivare. Istället har du en person som känner din situation och agerar proaktivt när möjligheter eller risker uppstår. Tillgänglighet utöver ordinarie öppettider är en självklarhet.",
    stats: [
      { label: "Min. kapital", value: "50M+" },
      { label: "Kontaktperson", value: "Dedikerad" },
      { label: "Tjänster", value: "Alla" },
      { label: "Tillgänglighet", value: "24/7" },
    ],
    images: ["/images/service-column-bloom.png", "/images/service-column-petals.png"],
  },
  {
    id: "skatteoptimering",
    title: "Skatte\u00ADoptimering",
    strategy: "Strukturering",
    detailHref: "/tjanster/skatteoptimering",
    desc: "Rätt struktur kan göra stor skillnad för din förmögenhet över tid. Vi analyserar din nuvarande skatteposition och rekommenderar optimala lösningar — ISK, kapitalförsäkring, holdingbolag eller en kombination. Vi hjälper även vid generationsskiften, arvsplanering och succession, med målet att bevara och överföra förmögenhet så effektivt som möjligt. Regelverken förändras löpande, och vi bevakar aktivt förändringar som påverkar din situation.",
    stats: [
      { label: "Strukturer", value: "ISK · KF" },
      { label: "Skiften", value: "Generationsplan" },
      { label: "Rådgivning", value: "Oberoende" },
      { label: "Uppföljning", value: "Löpande" },
    ],
    images: ["/images/service-column-petals.png", "/images/service-draped-petals.png"],
  },
];

/* ── Accordion Item ── */
function ServiceAccordion({
  service,
  isOpen,
  onToggle,
}: {
  service: (typeof services)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="svc-accordion-item">
      {/* ── Clickable header ── */}
      <button
        onClick={onToggle}
        className="svc-accordion-trigger"
        aria-expanded={isOpen}
      >
        <h2 className="font-display svc-accordion-title">
          {service.title.replace(/\u00AD/g, "")}
        </h2>

        <span className={`svc-accordion-arrow ${isOpen ? "svc-accordion-arrow--open" : ""}`}>
          <ArrowDown className="w-5 h-5" strokeWidth={1.5} />
        </span>
      </button>

      {/* ── Expandable content — WIDE like Tresmares ── */}
      <div
        className="svc-accordion-body"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="svc-accordion-inner">
          {/* ── 3-column layout: title stays, images center, text right ── */}
          <div className="svc-expanded">
            {/* Center: stacked images */}
            <div className="svc-expanded-images">
              <div className="svc-img-tall">
                <Image
                  src={service.images[0]}
                  alt={service.title.replace(/\u00AD/g, "")}
                  fill
                  className="object-cover"
                  sizes="35vw"
                  quality={90}
                  unoptimized
                />
              </div>
              <div className="svc-img-wide">
                <Image
                  src={service.images[1]}
                  alt={service.title.replace(/\u00AD/g, "")}
                  fill
                  className="object-cover"
                  sizes="35vw"
                  quality={90}
                  unoptimized
                />
              </div>
            </div>

            {/* Right: description + link */}
            <div className="svc-expanded-text">
              <p className="svc-accordion-desc">{service.desc}</p>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {service.detailHref && (
                  <Link
                    href={service.detailHref}
                    className="svc-accordion-link font-mono group/link"
                  >
                    Läs mer
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </Link>
                )}
                <Link
                  href="#kontakt"
                  className="svc-accordion-link font-mono group/link"
                >
                  Boka möte
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Stats — full-width horizontal row at bottom ── */}
          <div className="svc-stats-row">
            {service.stats.map((stat, si) => (
              <div key={si} className="svc-stat-item">
                <span className="font-mono svc-stat-label">{stat.label}</span>
                <span className="font-display svc-stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ── */
function TjansterContent() {
  const searchParams = useSearchParams();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const openParam = searchParams.get("open");
    if (openParam !== null) {
      const idx = parseInt(openParam, 10);
      if (!isNaN(idx) && idx >= 0 && idx < services.length) {
        setOpenIndex(idx);
        // Scroll to accordion after a short delay for DOM to render
        setTimeout(() => {
          const items = document.querySelectorAll(".svc-accordion-item");
          if (items[idx]) {
            items[idx].scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    }
  }, [searchParams]);

  return (
    <>
      <Navbar forceScrolled />

      <main className="svc-page">
        {/* ── Hero area ── */}
        <section className="svc-hero">
          <div className="svc-hero-content">
            <h1 className="font-display svc-hero-title">
              Skräddarsydda
              <br />
              finansiella
              <br />
              lösningar
            </h1>
            <p className="svc-hero-desc">
              Vi levererar oberoende strategier utformade för att möta dina unika
              behov — utan egna fonder, utan dolda incitament.
            </p>
          </div>
        </section>

        {/* ── Philosophy Block — "Varför oberoende?" ── */}
        <section className="svc-philosophy">
          <div className="svc-philosophy-inner">
            <div className="svc-philosophy-left">
              <span className="font-mono svc-philosophy-eyebrow">Vår filosofi</span>
              <h2 className="font-display svc-philosophy-heading">
                Rådgivning som
                <br />
                utgår från dig.
              </h2>
            </div>
            <div className="svc-philosophy-right">
              <p className="svc-philosophy-body">
                De flesta banker och rådgivningsbolag säljer sina egna produkter. Det innebär
                att deras rekommendationer styrs av interna incitament — inte av vad som
                faktiskt är bäst för dig.
              </p>
              <p className="svc-philosophy-body">
                Addeqt grundades med en enkel övertygelse: <strong>rådgivning ska vara helt
                oberoende</strong>. Vi har inga egna fonder, inga dolda provisioner, och ingen
                anledning att rekommendera något annat än det som maximerar din avkastning
                och trygghet.
              </p>
              <p className="svc-philosophy-body">
                Det är skillnaden mellan att vara en säljare och en rådgivare.
                Vi är det senare.
              </p>
            </div>
          </div>

          {/* ── Value pillars ── */}
          <div className="svc-pillars">
            <div className="svc-pillar">
              <span className="svc-pillar-number font-mono">01</span>
              <h3 className="svc-pillar-title">Oberoende</h3>
              <p className="svc-pillar-desc">
                Utan egna produkter kan vi alltid välja det bästa
                alternativet från hela marknaden.
              </p>
            </div>
            <div className="svc-pillar">
              <span className="svc-pillar-number font-mono">02</span>
              <h3 className="svc-pillar-title">Transparens</h3>
              <p className="svc-pillar-desc">
                Alla avgifter redovisas öppet. Inga dolda kostnader,
                inga överraskningar.
              </p>
            </div>
            <div className="svc-pillar">
              <span className="svc-pillar-number font-mono">03</span>
              <h3 className="svc-pillar-title">Långsiktighet</h3>
              <p className="svc-pillar-desc">
                Vi bygger relationer som varar — din ekonomi förtjänar
                en partner som tänker generationer framåt.
              </p>
            </div>
          </div>
        </section>

        {/* ── Editorial Image Break ── */}
        <section className="svc-editorial-image">
          <Image
            src="/images/tuscany-landscape-cypress-trees-road-italy.jpg"
            alt="Toskanskt landskap med cypresser"
            fill
            className="object-cover"
            sizes="100vw"
            quality={90}
            style={{ objectPosition: "center 40%" }}
          />
        </section>

        {/* ── KPI Trust Dashboard ── */}
        <section className="svc-kpi">
          <div className="svc-kpi-inner">
            <div className="svc-kpi-item">
              <span className="font-display svc-kpi-value">2021</span>
              <span className="font-mono svc-kpi-label">Grundat</span>
            </div>
            <div className="svc-kpi-item">
              <span className="font-display svc-kpi-value">1 000+</span>
              <span className="font-mono svc-kpi-label">Kunder</span>
            </div>
            <div className="svc-kpi-item">
              <span className="font-display svc-kpi-value">3+ mdr</span>
              <span className="font-mono svc-kpi-label">Under förvaltning</span>
            </div>
            <div className="svc-kpi-item">
              <span className="font-display svc-kpi-value">100%</span>
              <span className="font-mono svc-kpi-label">Oberoende</span>
            </div>
          </div>
        </section>

        {/* ── Column headers ── */}
        <div className="svc-columns">
          <span className="font-mono svc-col-label">Tjänster</span>
          <span className="font-mono svc-col-label">Strategi</span>
        </div>

        {/* ── Accordion list ── */}
        <div className="svc-list">
          {services.map((service, i) => (
            <ServiceAccordion
              key={service.id}
              service={service}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <section className="svc-bottom-cta">
          <div className="svc-bottom-cta-inner">
            <p className="svc-bottom-cta-text">
              Osäker på vilken tjänst som passar dig? Vi hjälper dig hitta rätt.
            </p>
            <Link
              href="#kontakt"
              className="svc-bottom-cta-btn group"
            >
              <span>Boka kostnadsfritt möte</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>

      <Footer hideCTA />

      <style>{`
        /* ═══════════════════════════════════════
           TJÄNSTER PAGE — Tresmares Soluciones
           ═══════════════════════════════════════ */

        .svc-page {
          background: #fff;
          min-height: 100vh;
        }

        /* ── Hero ── */
        .svc-hero {
          padding: clamp(10rem, 18vh, 14rem) clamp(1.5rem, 6vw, 6rem) clamp(4rem, 8vh, 7rem);
          max-width: var(--content-width);
          margin: 0 auto;
        }
        .svc-hero-content {
          max-width: 800px;
        }
        .svc-hero-title {
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 300;
          letter-spacing: -0.04em;
          line-height: 0.95;
          color: var(--fg);
          margin: 0 0 2rem;
        }
        .svc-hero-desc {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.65;
          color: var(--fg-dim);
          max-width: 480px;
        }

        /* ── Philosophy block ── */
        .svc-philosophy {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem);
        }
        .svc-philosophy-inner {
          display: flex;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: flex-start;
          padding-bottom: clamp(4rem, 8vw, 6rem);
          border-bottom: 1px solid var(--hairline);
        }
        .svc-philosophy-left {
          flex: 0 0 45%;
        }
        .svc-philosophy-eyebrow {
          display: block;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
          margin-bottom: 1.25rem;
        }
        .svc-philosophy-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--fg);
          margin: 0;
        }
        .svc-philosophy-right {
          flex: 1;
          padding-top: 0.5rem;
        }
        .svc-philosophy-body {
          font-size: clamp(15px, 1.15vw, 16px);
          line-height: 1.8;
          color: var(--fg-dim);
          margin: 0 0 1.25rem;
          font-weight: 300;
        }
        .svc-philosophy-body:last-child {
          margin-bottom: 0;
        }
        .svc-philosophy-body strong {
          font-weight: 500;
          color: var(--fg);
        }

        /* ── Value pillars ── */
        .svc-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          padding-top: clamp(3rem, 6vw, 5rem);
        }
        .svc-pillar {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .svc-pillar-number {
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--fg-muted);
        }
        .svc-pillar-title {
          font-size: clamp(1.1rem, 1.5vw, 1.35rem);
          font-weight: 500;
          color: var(--fg);
          margin: 0;
          letter-spacing: -0.02em;
        }
        .svc-pillar-desc {
          font-size: 14px;
          line-height: 1.65;
          color: var(--fg-dim);
          margin: 0;
          font-weight: 300;
          max-width: 320px;
        }

        /* ── Editorial image break ── */
        .svc-editorial-image {
          position: relative;
          width: 100%;
          height: clamp(300px, 40vw, 500px);
          overflow: hidden;
        }

        /* ── KPI trust dashboard ── */
        .svc-kpi {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem);
          border-bottom: 1px solid var(--hairline);
        }
        .svc-kpi-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
        }
        .svc-kpi-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .svc-kpi-value {
          font-size: clamp(2.5rem, 4.5vw, 3.5rem);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1;
          color: var(--fg);
        }
        .svc-kpi-label {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
        }

        /* ── Column headers ── */
        .svc-columns {
          display: flex;
          justify-content: space-between;
          max-width: var(--content-width);
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 6vw, 6rem) 1rem;
          border-bottom: 1px solid var(--hairline);
        }
        .svc-col-label {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
        }

        /* ── Accordion list ── */
        .svc-list {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 6vw, 6rem);
        }

        /* ── Accordion item ── */
        .svc-accordion-item {
          border-bottom: 1px solid var(--hairline);
        }

        /* ── Trigger ── */
        .svc-accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(2.5rem, 5vw, 4rem) 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: opacity 0.3s ease;
        }
        .svc-accordion-trigger:hover {
          opacity: 0.7;
        }

        /* ── Title — MASSIVE ── */
        .svc-accordion-title {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 300;
          letter-spacing: -0.04em;
          line-height: 1;
          color: var(--fg);
          margin: 0;
          hyphens: manual;
        }

        /* ── Arrow indicator ── */
        .svc-accordion-arrow {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          color: var(--fg-muted);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
        }
        .svc-accordion-arrow--open {
          transform: rotate(180deg);
          color: var(--fg);
        }

        /* ── Expandable body ── */
        .svc-accordion-body {
          overflow: hidden;
          transition: height 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .svc-accordion-inner {
          padding-bottom: clamp(3rem, 6vw, 5rem);
        }

        /* ═══════════════════════════════════════
           EXPANDED LAYOUT — Tresmares wide style
           Title left (already via trigger above)
           Images center, text right
           Stats full-width bottom
           ═══════════════════════════════════════ */

        .svc-expanded {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 4vw, 4rem);
          margin-bottom: clamp(3rem, 5vw, 4rem);
        }

        /* ── Stacked images (center column) ── */
        .svc-expanded-images {
          display: flex;
          flex-direction: column;
          gap: clamp(0.75rem, 1.5vw, 1.25rem);
        }

        .svc-img-tall {
          position: relative;
          width: 100%;
          height: clamp(280px, 38vh, 420px);
          border-radius: 3px;
          overflow: hidden;
          background: var(--surface-1);
        }

        .svc-img-wide {
          position: relative;
          width: 100%;
          height: clamp(180px, 24vh, 280px);
          border-radius: 3px;
          overflow: hidden;
          background: var(--surface-1);
        }

        /* ── Text (right column) ── */
        .svc-expanded-text {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 0.5rem;
        }

        .svc-accordion-desc {
          font-size: clamp(16px, 1.4vw, 19px);
          line-height: 1.75;
          color: var(--fg-dim);
          margin: 0 0 2.5rem;
          max-width: 440px;
        }

        .svc-accordion-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--fg);
          border-bottom: 1px solid var(--hairline-strong);
          padding-bottom: 3px;
          text-decoration: none;
          transition: border-color 0.3s ease;
          width: fit-content;
        }
        .svc-accordion-link:hover {
          border-color: var(--fg);
        }

        /* ── Stats — horizontal bottom row ── */
        .svc-stats-row {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--hairline);
          padding-top: clamp(1.5rem, 2.5vw, 2rem);
        }
        .svc-stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .svc-stat-label {
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
        }
        .svc-stat-value {
          font-size: clamp(0.95rem, 1.4vw, 1.2rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--fg);
        }

        /* ── Bottom CTA ── */
        .svc-bottom-cta {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem);
        }
        .svc-bottom-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .svc-bottom-cta-text {
          font-size: clamp(15px, 1.2vw, 17px);
          color: var(--fg-dim);
          line-height: 1.6;
          max-width: 400px;
          margin: 0;
        }
        .svc-bottom-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.75rem;
          background: var(--navy);
          color: #fff;
          border-radius: 60px;
          text-decoration: none;
          font-size: clamp(14px, 1.1vw, 16px);
          font-weight: 500;
          white-space: nowrap;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .svc-bottom-cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(36, 39, 72, 0.25);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .svc-expanded {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .svc-accordion-title {
            font-size: clamp(2.2rem, 10vw, 3.5rem);
          }
          .svc-hero-title {
            font-size: clamp(2.5rem, 10vw, 4rem);
          }
          .svc-bottom-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          .svc-columns {
            display: none;
          }
          .svc-stats-row {
            flex-wrap: wrap;
            gap: 1.5rem;
          }
          .svc-stat-item {
            flex: 0 0 45%;
          }
          .svc-philosophy-inner {
            flex-direction: column;
            gap: 2rem;
          }
          .svc-philosophy-left { flex: none; }
          .svc-philosophy-heading {
            font-size: clamp(2.5rem, 8vw, 3.5rem) !important;
          }
          .svc-pillars {
            grid-template-columns: 1fr;
          }
          .svc-kpi-inner {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default function TjansterPage() {
  return (
    <Suspense>
      <TjansterContent />
    </Suspense>
  );
}
