"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import OmTeamList from "../components/OmTeamList";
import { useSectionReveal } from "../hooks/useSectionReveal";
// Metadata moved to layout or handled differently in Next.js when using 'use client'
// Or we can just omit it here for the sake of the client component.

const milestones = [
  { value: "2021", label: "Grundat" },
  { value: "Feb 2023", label: "FI-tillstånd" },
  { value: "Jul 2023", label: "Första kunden" },
  { value: "1 000+", label: "Kunder idag" },
];

const values = [
  {
    num: "01",
    title: "Transparens",
    desc: "Öppenhet i avgifter, strategi och förvaltning. Kunden ska aldrig behöva undra.",
  },
  {
    num: "02",
    title: "Kundnytta",
    desc: "Alla beslut utgår från kundens bästa — inte bolagets vinst.",
  },
  {
    num: "03",
    title: "Excellens",
    desc: "Varje beslut, varje rapport, varje kontakt — på högsta nivå.",
  },
  {
    num: "04",
    title: "Trygghet",
    desc: "Tillgångar förvaras hos Nordnet. Kunden ska känna sig förstådd och säker.",
  },
];



export default function OmOssPage() {
  const containerRef = useSectionReveal();

  return (
    <>
      <Navbar />

      <main className="om-page" ref={containerRef}>

        {/* ═══ SECTION 1: Hero — "Din oberoende partner" ═══ */}
        <section className="om-hero">
          <div className="om-hero-content">
            <span className="om-eyebrow font-mono gsap-reveal">Om Addeqt</span>
            <h1 className="om-hero-title font-display gsap-reveal-heading">
              Din oberoende
              <br />
              partner.
            </h1>
            <p className="om-hero-text gsap-reveal">
              Addeqt grundades 2021 ur en frustration över hur den svenska
              förmögenhetsmarknaden fungerar. Segmentet 5–50 Mkr har historiskt
              varit kraftigt underservat — kunderna fick storbankernas
              standardprodukter, betalade dubbla avgifter och träffade sin
              rådgivare max en gång per år.
            </p>
          </div>
          <div className="om-hero-image">
            <Image
              src="/images/mj/gondola.png"
              alt="Italiensk arkitektur"
              fill
              className="object-cover"
              style={{ objectPosition: "center 40%" }}
              sizes="50vw"
              quality={90}
            />
          </div>
        </section>

        {/* ═══ SECTION 2: Brand quote — full width statement ═══ */}
        <section className="om-statement">
          <p className="om-statement-text font-display gsap-reveal-heading">
            Kundnyttan styr varje beslut vi fattar.
            <span className="om-statement-dim">
              {" "}Fast procentuell avgift. Inga dolda kostnader. Full transparens
              i strategi och tillgångsförvaring.
            </span>
          </p>
        </section>

        {/* ═══ SECTION 3: Story + image ═══ */}
        <section className="om-story">
          <div className="om-story-image">
            <Image
              src="/images/mj/coastal-village-1.png"
              alt="Abstrakt konst i mjuka pasteller"
              fill
              className="object-cover"
              sizes="40vw"
              quality={90}
            />
          </div>
          <div className="om-story-content">
            <span className="om-eyebrow font-mono gsap-reveal">Tre insikter</span>
            <div className="om-story-insights">
              <div className="om-insight gsap-reveal">
                <span className="om-insight-num font-mono">01</span>
                <div>
                  <h3 className="om-insight-title font-display">Marknaden är underservad.</h3>
                  <p className="om-insight-text">
                    Aktiv portföljförvaltning med löpande allokering existerar knappt
                    för privatpersoner under 500 Mkr.
                  </p>
                </div>
              </div>
              <div className="om-insight gsap-reveal">
                <span className="om-insight-num font-mono">02</span>
                <div>
                  <h3 className="om-insight-title font-display">Branschen lider av teknikskuld.</h3>
                  <p className="om-insight-text">
                    Manuellt backoffice → högre kostnader → högre avgifter mot kund.
                    Addeqt byggde tech-first för minimal overhead.
                  </p>
                </div>
              </div>
              <div className="om-insight gsap-reveal">
                <span className="om-insight-num font-mono">03</span>
                <div>
                  <h3 className="om-insight-title font-display">Fintech-mentalitet i en finansvärld.</h3>
                  <p className="om-insight-text">
                    Inom tech är kunden alltid nummer ett, anställda nummer två,
                    ägarna nummer tre. Traditionell finans har alltid varit tvärtom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 4: Milestones ═══ */}
        <section className="om-milestones">
          <span className="om-eyebrow font-mono gsap-reveal">Milstolpar</span>
          <div className="om-milestones-grid">
            {milestones.map((m) => (
              <div key={m.label} className="om-milestone gsap-reveal">
                <span className="om-milestone-value font-display">{m.value}</span>
                <span className="om-milestone-label">{m.label}</span>
              </div>
            ))}
          </div>
          <p className="om-milestones-note gsap-reveal">
            3–4 miljarder kronor under förvaltning via egna system och ombudsbolag.
            All tillgångsförvaring sker via Nordnet som depå — oberoende av Addeqt som bolag.
          </p>
        </section>

        {/* ═══ SECTION 5: Värderingar ═══ */}
        <section className="om-values" id="varderingar">
          <div className="om-values-header">
            <span className="om-eyebrow font-mono gsap-reveal">Kärnvärderingar</span>
            <h2 className="om-section-title font-display gsap-reveal-heading">
              Det vi aldrig
              <br />
              kompromissar med.
            </h2>
          </div>
          <div className="om-values-grid">
            {values.map((v) => (
              <div key={v.num} className="om-value-card gsap-reveal">
                <span className="om-value-num font-mono">{v.num}</span>
                <h3 className="om-value-title font-display">{v.title}</h3>
                <p className="om-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="om-team">
          <div className="om-team-header">
            <span className="om-eyebrow font-mono gsap-reveal">Teamet</span>
            <h2 className="om-section-title font-display gsap-reveal-heading">
              Människorna bakom Addeqt.
            </h2>
          </div>
          <OmTeamList />
        </section>

      </main>

      <Footer />

      <style>{`
        .om-page {
          padding-top: 5rem;
        }

        .om-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(15,15,16,0.4);
          display: block;
          margin-bottom: 1.5rem;
        }

        /* ═══ HERO ═══ */
        .om-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 85vh;
          gap: 0;
        }
        .om-hero-content {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(3rem, 8vh, 6rem) clamp(2rem, 6vw, 6rem);
          padding-left: clamp(2rem, 8vw, 8rem);
        }
        .om-hero-title {
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 300;
          letter-spacing: -0.04em;
          line-height: 0.95;
          color: #0f0f10;
          margin: 0 0 clamp(2rem, 4vh, 3rem);
        }
        .om-hero-text {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.8;
          color: rgba(15,15,16,0.55);
          font-weight: 300;
          max-width: 480px;
          margin: 0;
        }
        .om-hero-image {
          position: relative;
          overflow: hidden;
        }

        /* ═══ STATEMENT ═══ */
        .om-statement {
          padding: clamp(6rem, 14vh, 10rem) clamp(2rem, 8vw, 8rem);
          border-top: 1px solid rgba(15,15,16,0.08);
          border-bottom: 1px solid rgba(15,15,16,0.08);
        }
        .om-statement-text {
          font-size: clamp(2rem, 3.5vw, 3.5rem);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.25;
          color: #0f0f10;
          margin: 0;
          max-width: 900px;
        }
        .om-statement-dim {
          color: rgba(15,15,16,0.3);
        }

        /* ═══ STORY ═══ */
        .om-story {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          min-height: 80vh;
          gap: 0;
        }
        .om-story-image {
          position: relative;
          overflow: hidden;
        }
        .om-story-content {
          padding: clamp(4rem, 8vh, 7rem) clamp(3rem, 6vw, 6rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .om-story-insights {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .om-insight {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .om-insight-num {
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--sage, #7A8C6E);
          flex-shrink: 0;
          padding-top: 4px;
        }
        .om-insight-title {
          font-size: clamp(1.1rem, 1.5vw, 1.3rem);
          font-weight: 500;
          letter-spacing: -0.02em;
          color: #0f0f10;
          margin: 0 0 0.5rem;
        }
        .om-insight-text {
          font-size: clamp(14px, 1.1vw, 15px);
          line-height: 1.75;
          color: rgba(15,15,16,0.5);
          font-weight: 300;
          margin: 0;
        }

        /* ═══ MILESTONES ═══ */
        .om-milestones {
          padding: clamp(6rem, 12vh, 9rem) clamp(2rem, 8vw, 8rem);
          background: #FAFAF8;
        }
        .om-milestones-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(15,15,16,0.08);
          border: 1px solid rgba(15,15,16,0.08);
          margin-bottom: 2.5rem;
        }
        .om-milestone {
          background: #FAFAF8;
          padding: clamp(1.5rem, 3vh, 2.5rem) clamp(1rem, 2vw, 2rem);
          text-align: center;
        }
        .om-milestone-value {
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          color: var(--navy, #242748);
          display: block;
          margin-bottom: 0.5rem;
        }
        .om-milestone-label {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(15,15,16,0.4);
        }
        .om-milestones-note {
          font-size: clamp(14px, 1.1vw, 15px);
          line-height: 1.75;
          color: rgba(15,15,16,0.45);
          font-weight: 300;
          max-width: 600px;
          margin: 0;
        }

        /* ═══ VALUES ═══ */
        .om-values {
          padding: clamp(6rem, 12vh, 9rem) clamp(2rem, 8vw, 8rem);
        }
        .om-values-header {
          margin-bottom: clamp(3rem, 6vh, 5rem);
        }
        .om-section-title {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #0f0f10;
          margin: 0;
        }
        .om-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(15,15,16,0.08);
          border-top: 1px solid rgba(15,15,16,0.08);
          border-bottom: 1px solid rgba(15,15,16,0.08);
        }
        .om-value-card {
          background: #fff;
          padding: clamp(2rem, 4vh, 3rem) clamp(1.5rem, 2vw, 2rem);
        }
        .om-value-num {
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--sage, #7A8C6E);
          display: block;
          margin-bottom: 1.25rem;
        }
        .om-value-title {
          font-size: clamp(1.2rem, 1.5vw, 1.4rem);
          font-weight: 500;
          letter-spacing: -0.02em;
          color: #0f0f10;
          margin: 0 0 0.75rem;
        }
        .om-value-desc {
          font-size: 14px;
          line-height: 1.75;
          color: rgba(15,15,16,0.5);
          font-weight: 300;
          margin: 0;
        }

        /* ═══ TEAM ═══ */
        .om-team {
          padding: clamp(6rem, 12vh, 9rem) clamp(2rem, 8vw, 8rem);
          background: #FAFAF8;
        }
        .om-team-header {
          margin-bottom: clamp(3rem, 6vh, 5rem);
        }

        /* ═══ RESPONSIVE ═══ */
        @media (max-width: 768px) {
          .om-hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .om-hero-image {
            height: 50vh;
          }
          .om-hero-content {
            padding: 3rem 1.5rem;
          }
          .om-story {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .om-story-image {
            height: 40vh;
          }
          .om-milestones-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .om-values-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
