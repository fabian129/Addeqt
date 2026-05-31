"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "./LenisContext";

gsap.registerPlugin(ScrollTrigger);

/* ── Service data ── */
const services = [
  {
    title: "Kapital\u00ADförvaltning",
    desc: "Aktiv portföljförvaltning anpassad efter din riskaptit, tidshorisont och mål — bland marknadens bästa produkter utan begränsningar. Ingen bindningstid, löpande rapportering, och full transparens i varje beslut.",
    image: "/images/mj/venice-taxi-3.png",
    href: "/tjanster/kapitalforvaltning",
    stats: [
      { label: "Avgift", value: "Fast %" },
      { label: "Bindningstid", value: "Ingen" },
      { label: "Produkter", value: "Öppet universum" },
      { label: "Rapportering", value: "Löpande" },
    ],
  },
  {
    title: "Förmögenhets\u00ADrådgivning",
    desc: "Heltäckande rådgivning med din livssituation som utgångspunkt. Vi kartlägger, analyserar och skapar en personlig finansiell plan — skräddarsydd för dig, med årlig uppföljning.",
    image: "/images/mj/mood-1.png",
    href: "/tjanster/formogenhetsradgivning",
    stats: [
      { label: "Utgångspunkt", value: "Din situation" },
      { label: "Plan", value: "Skräddarsydd" },
      { label: "Uppföljning", value: "Årlig" },
      { label: "Oberoende", value: "100%" },
    ],
  },
  {
    title: "Private Banking",
    desc: "Heltäckande och problemlösande tjänst för din privatekonomi. Bolån, försäkring, pension — vi är din enda kontaktpunkt i varje finansiell fråga.",
    image: "/images/mj/impasto-1.png",
    href: "/tjanster/private-banking",
    stats: [
      { label: "Kontaktpunkt", value: "En enda" },
      { label: "Segment", value: "50 Mkr+" },
      { label: "Scope", value: "Allting" },
      { label: "Relation", value: "Personlig" },
    ],
  },
  {
    title: "Skatte\u00ADoptimering",
    desc: "ISK, kapitalförsäkring, generationsskiften och arv — vi hjälper dig strukturera din förmögenhet på det mest skatteeffektiva sättet, med full hänsyn till din totala situation.",
    image: "/images/mj/coastal-village-1.png",
    href: "/tjanster/skatteoptimering",
    stats: [
      { label: "Strukturering", value: "Helhet" },
      { label: "Generationsskiften", value: "Ja" },
      { label: "ISK/KF", value: "Optimerat" },
      { label: "Arv", value: "Planering" },
    ],
  },
];

export default function HomepageServices() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lenis = useLenis();

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  /* ── GSAP accordion animation + Lenis scroll (Tresmares pattern) ── */
  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === openIndex) {
        // OPEN — GSAP height: "auto"
        gsap.to(el, {
          height: "auto",
          duration: 0.55,
          ease: "power2.inOut",
          onComplete: () => ScrollTrigger.refresh(),
        });
        gsap.to(el, { opacity: 1, duration: 0.4, delay: 0.1, ease: "power2.out" });
      } else {
        // CLOSE — all others simultaneously
        gsap.to(el, { height: 0, duration: 0.45, ease: "power2.inOut" });
        gsap.to(el, { opacity: 0, duration: 0.25, ease: "power2.in" });
      }
    });

    // Lenis smooth scroll to opened header
    if (openIndex !== null && lenis && buttonRefs.current[openIndex]) {
      lenis.scrollTo(buttonRefs.current[openIndex]! as HTMLElement, {
        offset: -100,
        duration: 0.8,
      });
    }
  }, [openIndex, lenis]);

  return (
    <section
      id="tjanster"
      style={{
        background: "var(--bg, #FAFAF8)",
        paddingTop: "clamp(6rem, 14vh, 10rem)",
        paddingBottom: "clamp(4rem, 10vh, 8rem)",
      }}
    >
      {/* Section header — Waterfall layout */}
      <div
        style={{
          padding: "0 clamp(1.5rem, 4vw, 4rem)",
          marginBottom: "clamp(6rem, 12vh, 10rem)",
        }}
      >
        <span
          className="font-mono gsap-reveal"
          style={{
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--fg-muted, rgba(15,15,16,0.4))",
            display: "block",
            marginBottom: "1.5rem",
          }}
        >
          Tjänster
        </span>
        <h2
          className="font-display gsap-reveal-heading"
          style={{
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "var(--fg, #0f0f10)",
            margin: "0 0 clamp(3rem, 6vh, 5rem)",
            maxWidth: "1200px",
          }}
        >
          Våra lösningar.
        </h2>

        {/* Text and Quote in a Waterfall / staggered layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3rem, 6vh, 5rem)" }}>
          {/* Intro text - Left aligned */}
          <p
            className="gsap-reveal"
            style={{
              fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)",
              lineHeight: 1.7,
              color: "var(--fg-dim, rgba(15,15,16,0.6))",
              margin: 0,
              fontWeight: 300,
              maxWidth: "600px",
            }}
          >
            Allt vi gör utgår från att ge dig full kontroll,
            oberoende rådgivning och en avgiftsmodell helt utan överraskningar.
          </p>

          {/* Quote - Right aligned, pushed down */}
          <p
            className="font-display gsap-reveal"
            style={{
              fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
              color: "var(--sage, #7A8C6E)",
              margin: 0,
              fontStyle: "italic",
              textAlign: "right",
              alignSelf: "flex-end",
              maxWidth: "400px",
            }}
          >
            &ldquo;Transparens är inte en feature —
            <br />
            det är en grundförutsättning.&rdquo;
          </p>
        </div>
      </div>

      {/* Accordion — full bleed */}
      <div>
        {services.map((service, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              style={{
                borderTop: "1px solid rgba(15,15,16,0.1)",
                ...(i === services.length - 1
                  ? { borderBottom: "1px solid rgba(15,15,16,0.1)" }
                  : {}),
              }}
            >
              {/* Accordion header — clickable */}
              <button
                ref={(el) => { buttonRefs.current[i] = el; }}
                onClick={() => toggle(i)}
                className="w-full text-left group"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "clamp(2.5rem, 5vh, 4.5rem)",
                  paddingBottom: "clamp(2.5rem, 5vh, 4.5rem)",
                  paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
                  paddingRight: "clamp(1.5rem, 4vw, 4rem)",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
              >
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5.5rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.04em",
                    lineHeight: 1.15,
                    color: "var(--fg, #0f0f10)",
                    opacity: 0.85,
                    hyphens: "manual" as const,
                  }}
                >
                  {service.title}
                </h3>

                {/* Toggle arrow */}
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="var(--fg, #0f0f10)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Expanded content — GSAP animated (Tresmares pattern) */}
              <div
                ref={(el) => { contentRefs.current[i] = el; }}
                style={{
                  height: 0,
                  opacity: 0,
                  overflow: "hidden",
                }}
              >
                <div
                  data-content
                  style={{
                    padding: "clamp(1.5rem, 3vh, 2.5rem) clamp(1.5rem, 4vw, 4rem) clamp(4rem, 8vh, 6rem)",
                  }}
                >
                  {/* Two-zone: IMAGE left, TEXT+CTA right */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.2fr 1fr",
                      gap: "clamp(2rem, 5vw, 5rem)",
                      alignItems: "start",
                      minHeight: "clamp(18rem, 36vh, 26rem)",
                      paddingTop: "clamp(0.5rem, 1vh, 1rem)",
                    }}
                  >

                    {/* Center: image — larger, dominant */}
                    <div
                      data-animate
                      style={{
                        position: "relative",
                        aspectRatio: "4/5",
                        borderRadius: "3px",
                        overflow: "hidden",
                        maxHeight: "clamp(18rem, 38vh, 26rem)",
                        alignSelf: "center",
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>

                    {/* Right: description + CTA */}
                    <div data-animate style={{ alignSelf: "center" }}>
                      <p
                        style={{
                          fontSize: "clamp(17px, 1.5vw, 21px)",
                          color: "var(--fg-dim, rgba(15,15,16,0.55))",
                          lineHeight: 1.75,
                          fontWeight: 300,
                          marginBottom: "clamp(2rem, 4vh, 3rem)",
                        }}
                      >
                        {service.desc}
                      </p>
                      <Link
                        href={service.href}
                        className="font-display inline-flex items-center gap-3"
                        style={{
                          fontSize: "17px",
                          fontWeight: 400,
                          color: "var(--fg, #0f0f10)",
                          textDecoration: "underline",
                          textUnderlineOffset: "5px",
                          textDecorationColor: "rgba(15,15,16,0.3)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Läs mer →
                      </Link>
                    </div>
                  </div>

                  {/* Bottom stats — slim, subtle, non-competing */}
                  <div
                    data-stats
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "auto",
                      paddingTop: "clamp(6rem, 14vh, 10rem)",
                    }}
                  >
                    {service.stats.map((stat, si) => (
                      <div key={si}>
                        <span
                          className="font-mono block"
                          style={{
                            fontSize: "9px",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase" as const,
                            color: "var(--fg-muted, rgba(15,15,16,0.3))",
                            paddingBottom: "2px",
                          }}
                        >
                          {stat.label}
                        </span>
                        <span
                          className="font-display block"
                          style={{
                            fontSize: "12px",
                            fontWeight: 400,
                            color: "var(--fg-muted, rgba(15,15,16,0.45))",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
