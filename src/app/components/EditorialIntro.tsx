"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const STATEMENT = "Vi tror att förmögenhetsförvaltning ska byggas på ren kundnytta — inte på gamla banktraditioner.";

export default function EditorialIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const words = STATEMENT.split(" ");

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) return;

      const wordEls = section.querySelectorAll<HTMLElement>(".intro-word");
      if (wordEls.length > 0) {
        gsap.to(wordEls, {
          opacity: 1,
          color: "#1A1D36",
          stagger: 0.05,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "center 40%",
            scrub: 0.7,
          },
        });
      }

      const subEl = section.querySelector<HTMLElement>(".intro-sub");
      if (subEl) {
        gsap.fromTo(
          subEl,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: subEl,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="om-oss"
      className="component--editorialintro relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-warm, #FAF8F5)",
        paddingTop: "clamp(6rem, 14vw, 12rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
      }}
    >
      {/* Sutil gradiente de transición desde el Hero */}
      <div 
        className="absolute top-0 inset-x-0 h-28 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(15, 15, 16, 0.08) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A882]">
            01 / Om Addeqt
          </span>
          <span className="h-px w-12 bg-[#C4A882]/40" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#1A1D36]/40 hidden sm:inline">
            Oberoende Förmögenhetsförvaltning
          </span>
        </div>

        {/* Monumental Headline with Word Fill */}
        <h2
          className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-light leading-[1.12] tracking-tight max-w-5xl mb-10 sm:mb-16"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="intro-word inline-block mr-[0.28em] transition-colors duration-200"
              style={{
                opacity: 0.22,
                color: "#1A1D36",
                willChange: "opacity, color",
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Subtext and Key Tenets (Tresmares Editorial Spacing) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-8 sm:pt-12 border-t border-[#1A1D36]/10">
          <div className="lg:col-span-6 intro-sub">
            <p className="text-base sm:text-xl font-light text-[#1A1D36]/75 leading-relaxed">
              Som oberoende rådgivare har vi inga egna fonder, inga dolda kickbacks och inga säljmål. Vi företräder uteslutande dig — med öppen marknadsåtkomst, transparent arvodesstruktur och genuint personligt engagemang.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#C4A882] mb-1.5">
                FI-tillstånd
              </span>
              <span className="text-sm sm:text-base font-normal text-[#1A1D36]">
                Auktoriserat värdepappersbolag under Finansinspektionens tillsyn
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#C4A882] mb-1.5">
                Depåförvaring
              </span>
              <span className="text-sm sm:text-base font-normal text-[#1A1D36]">
                Dina tillgångar förvaras säkert på ditt eget konto hos Nordnet
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
