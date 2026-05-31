"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ── Story blocks ── */
const storyBlocks = [
  {
    eyebrow: "Bakgrunden",
    heading: "En bransch byggd\npå tradition",
    text: "Större delen av den svenska förmögenhetsmarknaden drivs av storbanker som levt på tröghet och trygghetskänsla i över 100 år. Kunder med 5–50 miljoner har länge betalat dubbla avgifter, fått standardprodukter och träffat sin rådgivare max en gång om året.",
  },
  {
    eyebrow: "Insikten",
    heading: "Ingen frågade vad\nkunden behövde",
    text: "Grundaren av Addeqt kom från fintech-världen och såg en bransch full av teknikskuld och intressekonflikter. Manuella backoffice-system drev upp kostnaderna. Rådgivare rekommenderade sina egna fonder. Och kunden? Kunden fick tre produkter att välja på — inte mer.",
  },
  {
    eyebrow: "Lösningen",
    heading: "Tech\u2011first.\nKundnytta\u2011first.",
    text: "Addeqt byggdes från dag ett med teknik som grund — inte som tillägg. Minimal overhead, full transparens, genuint oberoende. Inga egna fonder, ingen ersättning från tredje part. Varje beslut styrs av en enda funktion: kundnyttan, som är produkten av avkastning och pris.",
  },
];

/* ── KPI data ── */
const kpis = [
  { value: "2021", label: "Grundat" },
  { value: "1 000+", label: "Kunder" },
  { value: "3+ mdr", label: "Under förvaltning" },
  { value: "100%", label: "Oberoende" },
];

export default function WhyAddeqt() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      /* Fade-in blocks */
      const blocks = section.querySelectorAll<HTMLElement>(".why-block");
      blocks.forEach((block) => {
        gsap.set(block, { opacity: 0, y: 40 });
        gsap.to(block, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            once: true,
          },
        });
      });

      /* Image parallax */
      const images = section.querySelectorAll<HTMLElement>(".why-image-wrap");
      images.forEach((img) => {
        gsap.to(img, {
          yPercent: -8,
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      /* KPI counter */
      const statEls = section.querySelectorAll<HTMLElement>(".why-stat");
      if (statEls.length > 0) {
        gsap.set(statEls, { opacity: 0, y: 24 });
        gsap.to(statEls, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statEls[0],
            start: "top 88%",
            once: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="why-section">
      <div className="why-container">

        {/* ── Section header ── */}
        <div className="why-header why-block">
          <span className="font-mono why-eyebrow-top">Varför Addeqt</span>
          <h2 className="font-display why-main-heading">
            En gammal privatbank
            <br />
            — men bättre.
          </h2>
          <p className="why-main-intro">
            Samma nivå av personlig service och tillit som de stora privatbankerna
            i Genève — men med modern teknik, transparenta avgifter och genuint
            oberoende.
          </p>
        </div>

        {/* ── Story blocks ── */}
        {storyBlocks.map((block, i) => (
          <div
            key={i}
            className={`why-block why-story ${i % 2 === 1 ? "why-story--reverse" : ""}`}
          >
            {/* Image */}
            <div className="why-image-col">
              <div className="why-image-wrap">
                <div className="why-image">
                  <Image
                    src={
                      i === 0
                        ? "/images/pexels-mlkbnl-28267040.jpg"
                        : i === 1
                        ? "/images/pexels-axp-photography-500641970-29851512.jpg"
                        : "/images/pexels-matthardy-1615678.jpg"
                    }
                    alt={block.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    quality={85}
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="why-text-col">
              <span className="font-mono why-eyebrow">
                {String(i + 1).padStart(2, "0")} — {block.eyebrow}
              </span>
              <h3 className="font-display why-heading">{block.heading}</h3>
              <p className="why-text">{block.text}</p>
            </div>
          </div>
        ))}

        {/* ── Pull quote ── */}
        <div className="why-block why-quote-section">
          <blockquote className="why-quote">
            <p className="font-display">
              &ldquo;Vi förstår vad du behöver — och sköter resten.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* ── KPI row ── */}
        <div className="why-kpi-row">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="why-stat">
              <span className="font-display why-stat-value">{kpi.value}</span>
              <span className="font-mono why-stat-label">{kpi.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ═══════════════════════════════════
           WHY ADDEQT — EDITORIAL STORYTELLING
           ═══════════════════════════════════ */

        .why-section {
          padding: clamp(8rem, 14vw, 12rem) 0;
          background: var(--bg);
          position: relative;
        }

        .why-container {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 6vw, 6rem);
        }

        /* ── Section header ── */
        .why-header {
          text-align: center;
          margin-bottom: clamp(6rem, 10vw, 10rem);
        }

        .why-eyebrow-top {
          display: block;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
          margin-bottom: 1.5rem;
        }

        .why-main-heading {
          font-size: clamp(2.5rem, 5.5vw, 4.5rem);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--fg);
          margin: 0 0 1.5rem;
        }

        .why-main-intro {
          font-size: clamp(16px, 1.3vw, 18px);
          line-height: 1.7;
          color: var(--fg-dim);
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ── Story blocks ── */
        .why-story {
          display: grid;
          grid-template-columns: 5fr 6fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: center;
          margin-bottom: clamp(6rem, 10vw, 10rem);
        }

        .why-story--reverse {
          direction: rtl;
        }
        .why-story--reverse > * {
          direction: ltr;
        }

        /* Image */
        .why-image-col {
          position: relative;
        }

        .why-image {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 2px;
          background: var(--surface-1);
        }

        /* Text */
        .why-text-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .why-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
        }

        .why-heading {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: var(--fg);
          margin: 0;
          white-space: pre-line;
        }

        .why-text {
          font-size: clamp(15px, 1.15vw, 17px);
          line-height: 1.8;
          color: var(--fg-dim);
          font-weight: 300;
          margin: 0;
        }

        /* ── Quote ── */
        .why-quote-section {
          text-align: center;
          padding: clamp(4rem, 8vw, 6rem) 0;
          margin-bottom: clamp(4rem, 8vw, 6rem);
          border-top: 1px solid var(--hairline);
          border-bottom: 1px solid var(--hairline);
        }

        .why-quote {
          margin: 0;
        }

        .why-quote p {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1.3;
          color: var(--fg);
        }

        /* ── KPI row ── */
        .why-kpi-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .why-stat {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .why-stat-value {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: var(--navy);
          line-height: 1;
        }

        .why-stat-label {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .why-story {
            grid-template-columns: 1fr;
          }
          .why-story--reverse {
            direction: ltr;
          }
          .why-image {
            aspect-ratio: 16 / 10;
          }
          .why-kpi-row {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
