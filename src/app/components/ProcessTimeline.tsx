"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Kartläggning & Målbild",
    lead: "En grundlig analys av din samlade livssituation.",
    desc: "Vi inleder med strukturerade samtal för att förstå din förmögenhet, dina mål, familjens framtidsplaner och din risktolerans. Allt från bolagsstrukturer till likviditetsbehov kartläggs i detalj.",
    specs: ["90 minuters djupintervju", "Kvantitativ riskanalys", "Helhetsperspektiv"],
  },
  {
    num: "02",
    title: "Strategi & Allokering",
    lead: "Skräddarsydd portföljarkitektur utan produktbindning.",
    desc: "Baserat på kartläggningen utformar vi din unika placeringsstrategi. Vi väljer fritt bland marknadens främsta förvaltare och fonder — helt utan egna produkter eller dolda provisioner.",
    specs: ["Individuell tillgångsallokering", "Öppet marknadsuniversum", "Full kostnadstransparens"],
  },
  {
    num: "03",
    title: "Implementering",
    lead: "Säker etablering i ditt eget namn hos depåbanken.",
    desc: "När strategin godkänts öppnas depåer hos Nordnet. Dina tillgångar förvaras tryggt i ditt eget namn under statlig insättningsgaranti och investerarskydd. Vi verkställer allokeringen strukturerat.",
    specs: ["Depå i eget namn", "Insättningsgaranti", "Snabb digital etablering"],
  },
  {
    num: "04",
    title: "Aktiv Tillsyn & Uppföljning",
    lead: "Kontinuerlig portföljvård och livslång dialog.",
    desc: "Dina investeringar övervakas dagligen och rebalanseras vid marknadsförskjutningar. Du har direktkontakt med din personliga rådgivare och full tillgång till realtidsdata i vår app dygnet runt.",
    specs: ["Automatisk rebalansering", "Kvartalsvis djuprapport", "Direkt rådgivarkontakt"],
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) return;

      const stepItems = container.querySelectorAll<HTMLElement>(".timeline-step");
      stepItems.forEach((item, idx) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 65%",
          end: "bottom 35%",
          onEnter: () => setActiveStep(idx),
          onEnterBack: () => setActiveStep(idx),
        });

        gsap.fromTo(
          item,
          { opacity: 0.35, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "top 45%",
              scrub: 0.5,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="process"
      className="component--processtimeline relative w-full overflow-hidden"
      style={{
        backgroundColor: "var(--bg-warm, #FAF8F5)",
        paddingTop: "clamp(6rem, 12vw, 11rem)",
        paddingBottom: "clamp(6rem, 12vw, 11rem)",
        borderTop: "1px solid rgba(26,29,54,0.08)",
      }}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ── Left Column: Sticky Header & Current Phase ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-between pt-2">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A882]">
                  06 — Vår Process
                </span>
                <span className="h-px w-8 bg-[#C4A882]/40" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#1A1D36]/40 hidden sm:inline">
                  Strukturerad Metodik
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1D36] leading-[1.12] tracking-tight mb-6">
                Hur vi bygger <br />
                din förvaltning.
              </h2>

              <p className="text-base sm:text-lg font-light text-[#1A1D36]/70 leading-relaxed mb-8 max-w-md">
                En beprövad och disciplinerad process i fyra faser. Inga genvägar, inga standardlösningar — varje steg är utformat för att ge maximal trygghet och kontroll.
              </p>
            </div>

            {/* Quick Step Indicators */}
            <div className="hidden lg:flex flex-col gap-3 pt-4 border-t border-[#1A1D36]/10">
              {PROCESS_STEPS.map((s, idx) => (
                <div
                  key={s.num}
                  className="flex items-center gap-3 font-mono text-xs transition-colors duration-300"
                  style={{
                    color: activeStep === idx ? "#1A1D36" : "rgba(26,29,54,0.3)",
                    fontWeight: activeStep === idx ? 600 : 400,
                  }}
                >
                  <span className="text-[#C4A882]">{s.num}</span>
                  <span className="uppercase tracking-wider">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Timeline Steps ── */}
          <div className="lg:col-span-7 flex flex-col gap-12 sm:gap-16">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.num}
                className="timeline-step relative pl-8 sm:pl-12 border-l border-[#1A1D36]/15 transition-all duration-400"
              >
                {/* Timeline node */}
                <div
                  className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: activeStep === idx ? "#C4A882" : "rgba(26,29,54,0.2)",
                  }}
                />

                <span className="font-mono text-xs uppercase tracking-widest text-[#C4A882] mb-2 block">
                  Fas {step.num}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-[#1A1D36] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-base font-medium text-[#1A1D36]/80 mb-3">
                  {step.lead}
                </p>

                <p className="text-sm sm:text-base font-light text-[#1A1D36]/65 leading-relaxed mb-6 max-w-xl">
                  {step.desc}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {step.specs.map((sp, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-white/80 border border-[#1A1D36]/10 text-xs font-mono text-[#1A1D36]/70"
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
