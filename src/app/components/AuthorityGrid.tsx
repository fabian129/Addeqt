"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const METRICS_LEFT = [
  {
    num: "2021",
    label: "Grundat i Stockholm",
    sub: "Auktoriserat och under Finansinspektionens fulla tillsyn.",
  },
  {
    num: "3+ Mrd",
    label: "Under rådgivning",
    sub: "Kronor i förvaltat kapital under aktiva kundmandat.",
  },
];

const METRICS_RIGHT = [
  {
    num: "100%",
    label: "Genuint oberoende",
    sub: "Öppet fonduniversum utan egna produkter eller inlåsningar.",
  },
  {
    num: "0 kr",
    label: "Dolda provisioner",
    sub: "Noll tredjepartsersättning, kickbacks eller dolda avgifter.",
  },
];

export default function AuthorityGrid() {
  const containerRef = useRef<HTMLElement>(null);
  const colLeftRef = useRef<HTMLDivElement>(null);
  const colRightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const left = colLeftRef.current;
      const right = colRightRef.current;
      if (!container || !left || !right) return;

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) return;

      // Parallax differential scroll between metric columns
      gsap.fromTo(
        left,
        { y: 35 },
        {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        }
      );

      gsap.fromTo(
        right,
        { y: 80 },
        {
          y: -45,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="component--authoritygrid relative w-full overflow-hidden"
      style={{
        backgroundColor: "var(--bg-warm, #FAF8F5)",
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(6rem, 12vw, 11rem)",
        borderTop: "1px solid rgba(26,29,54,0.08)",
      }}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ── Left Column: Editorial Story & Authority ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-between pt-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A882] mb-5 block">
                02 — Solidet & Mått
              </span>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1D36] leading-[1.12] tracking-tight mb-6">
                Ett oberoende mandat <br />
                mätt i resultat.
              </h3>
              <p className="text-base sm:text-lg font-light text-[#1A1D36]/70 leading-relaxed mb-8 max-w-md">
                Vi startade Addeqt ur en enkel övertygelse: kapitalförvaltning ska inte styras av bankernas egna vinstintressen. Genom att eliminera dolda marginaler skapar vi en direkt intressegemenskap med dig som kund.
              </p>
            </div>

            <div>
              <Link
                href="/om-oss"
                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#1A1D36] hover:text-[#C4A882] transition-colors py-2 border-b border-[#1A1D36]/25 hover:border-[#C4A882]"
              >
                <span>Vår filosofi & historik</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ── Right Column: Architectural Grid (Pure Hairline, No Cards) ── */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            
            {/* Sub-column 0 */}
            <div ref={colLeftRef} className="flex flex-col gap-12">
              {METRICS_LEFT.map((m, idx) => (
                <div
                  key={idx}
                  className="metric-item border-t border-[#1A1D36]/15 pt-6 flex flex-col group"
                >
                  <span
                    className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[#1A1D36] group-hover:text-[#C4A882] tracking-tight transition-colors duration-400 mb-3"
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    {m.num}
                  </span>
                  <span className="text-base font-medium text-[#1A1D36] mb-1.5">
                    {m.label}
                  </span>
                  <p className="text-xs sm:text-sm font-light text-[#1A1D36]/60 leading-relaxed">
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Sub-column 1 (Offset down for architectural stagger) */}
            <div ref={colRightRef} className="flex flex-col gap-12 sm:pt-14">
              {METRICS_RIGHT.map((m, idx) => (
                <div
                  key={idx}
                  className="metric-item border-t border-[#1A1D36]/15 pt-6 flex flex-col group"
                >
                  <span
                    className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[#1A1D36] group-hover:text-[#C4A882] tracking-tight transition-colors duration-400 mb-3"
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    {m.num}
                  </span>
                  <span className="text-base font-medium text-[#1A1D36] mb-1.5">
                    {m.label}
                  </span>
                  <p className="text-xs sm:text-sm font-light text-[#1A1D36]/60 leading-relaxed">
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
