"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const COMPARISON_DATA = [
  {
    categoryNum: "01",
    category: "Produktval & Frihet",
    trad: {
      title: "Egna fondprodukter i fokus",
      desc: "Banken styrs av incitamentet att distribuera sina egna fondbolags produkter och paketerade strukturer — oavsett om externa alternativ på världsmarknaden presterar bättre till lägre kostnad.",
      tag: "Inlåst utbud",
    },
    addeqt: {
      title: "100% Öppet fonduniversum",
      desc: "Vi förvaltar inga egna fonder och har inga egna produktintressen. Varje enskilt instrument handplockas uteslutande för att maximera din portföljs riskjusterade avkastning.",
      tag: "Total frihet",
    },
  },
  {
    categoryNum: "02",
    category: "Ersättningsstruktur & Avgifter",
    trad: {
      title: "Dolda kickbacks & retrocessioner",
      desc: "Distributionsersättningar och dolda provisioner skapar en inbyggd intressekonflikt som systematiskt urholkar din faktiska nettoavkastning över tid utan din vetskap.",
      tag: "Dolda avgifter",
    },
    addeqt: {
      title: "Fast, transparent arvode — noll kickbacks",
      desc: "Noll dolda provisioner, noll kickbacks och inga inlåsningar. Alla distributionsrabatter från depåbanker återförs till 100% oavkortat till din depå.",
      tag: "Noll provisioner",
    },
  },
  {
    categoryNum: "03",
    category: "Relation & Kontinuitet",
    trad: {
      title: "Hög personalomsättning & standardmallar",
      desc: "Din kontaktperson byts ut regelbundet och relationen styrs av bankens interna kampanjer och försäljningskvoter snarare än din familjs verkliga behov.",
      tag: "Kundnummer",
    },
    addeqt: {
      title: "Seniora delägare som livslång kontaktpunkt",
      desc: "Du samarbetar direkt med seniora delägare som har ett personligt och långsiktigt ansvar för din förmögenhet. Kontinuitet och diskretion genom decennier.",
      tag: "Senior partner",
    },
  },
];

export default function PhilosophyCompare() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) return;

      const rows = container.querySelectorAll(".compare-row");
      gsap.fromTo(
        rows,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="varfor-addeqt"
      className="component--philosophycompare relative w-full overflow-hidden"
      style={{
        backgroundColor: "var(--bg-warm, #FAF8F5)",
        paddingTop: "clamp(6rem, 12vw, 11rem)",
        paddingBottom: "clamp(6rem, 12vw, 11rem)",
        borderTop: "1px solid rgba(26,29,54,0.08)",
      }}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header: Monograph Typographic Layout */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A882]">
              04 — Modelljämförelse
            </span>
            <span className="h-px w-8 bg-[#C4A882]/40" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#1A1D36]/40 hidden sm:inline">
              Arkitektur & Incitament
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1D36] leading-[1.12] tracking-tight mb-6">
            Två fundamentalt olika sätt <br />
            att förvalta förmögenhet.
          </h2>

          <p className="text-base sm:text-lg font-light text-[#1A1D36]/70 leading-relaxed max-w-2xl">
            Mellan storbankens egenintresse och vårt genuina oberoende finns inga kompromisser. 
            Skillnaden sitter i strukturen — från hur dina medel placeras till vem som faktiskt 
            tjänar på råden du får.
          </p>
        </div>

        {/* ── Frameless Architectural Editorial Spread (Zero SaaS Cards) ── */}
        <div className="w-full border-t border-[#1A1D36]/15">
          {/* Column Header Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 py-6 border-b border-[#1A1D36]/10 gap-8 lg:gap-16">
            {/* Left Header: Traditional */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#1A1D36]/40">
                  01
                </span>
                <span className="h-3 w-px bg-[#1A1D36]/20" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#1A1D36]/60">
                  Den Traditionella Modellen
                </span>
              </div>
              <span className="text-xs font-mono text-[#1A1D36]/35 hidden sm:inline">
                Storbankerna
              </span>
            </div>

            {/* Right Header: Addeqt */}
            <div className="flex items-center justify-between lg:pl-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#C4A882]">
                  02
                </span>
                <span className="h-3 w-px bg-[#C4A882]/40" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#1A1D36] font-semibold">
                  Addeqt-Standarden
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4A882]" />
                <span className="text-xs font-mono text-[#C4A882] tracking-wider uppercase font-medium">
                  Genuint Oberoende
                </span>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-[#1A1D36]/10">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={idx}
                className="compare-row grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-10 lg:py-14 transition-colors duration-300 hover:bg-[#1A1D36]/[0.015]"
              >
                {/* Traditional Side (Subtle, Muted) */}
                <div className="flex flex-col justify-between pr-0 lg:pr-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A1D36]/40">
                        {row.categoryNum} / {row.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-light text-[#1A1D36]/75 mb-3 leading-snug">
                      {row.trad.title}
                    </h3>

                    <p className="text-sm sm:text-base font-light text-[#1A1D36]/55 leading-relaxed">
                      {row.trad.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1A1D36]/05 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#1A1D36]/35">
                      Struktur
                    </span>
                    <span className="font-mono text-[11px] text-[#1A1D36]/45">
                      {row.trad.tag}
                    </span>
                  </div>
                </div>

                {/* Addeqt Side (Sharp Ink, Crisp Contrast, Gold Accents) */}
                <div className="flex flex-col justify-between lg:pl-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#C4A882]">
                        {row.categoryNum} / {row.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-normal text-[#1A1D36] mb-3 leading-snug">
                      {row.addeqt.title}
                    </h3>

                    <p className="text-sm sm:text-base font-light text-[#1A1D36]/80 leading-relaxed">
                      {row.addeqt.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1A1D36]/08 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#C4A882]">
                      Garanti
                    </span>
                    <span className="font-mono text-[11px] font-medium text-[#1A1D36]">
                      {row.addeqt.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Architectural Summary Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8 border-t border-[#1A1D36]/15 bg-[#1A1D36]/[0.02]">
            {/* Traditional Incentive */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="uppercase tracking-wider text-[#1A1D36]/40 text-[10px]">
                Incitament:
              </span>
              <span className="text-[#1A1D36]/60">
                Maximerar bankens egen marginal
              </span>
            </div>

            {/* Addeqt Incentive */}
            <div className="flex items-center justify-between text-xs font-mono lg:pl-4">
              <span className="uppercase tracking-wider text-[#C4A882] text-[10px]">
                Incitament:
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[#1A1D36] font-medium">
                  100% sammanflätat med din nettoavkastning
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4A882]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
