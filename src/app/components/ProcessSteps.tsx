"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Kartläggning",
    subtitle: "Förutsättningar & målbild",
    description:
      "Vi börjar med att förstå din ekonomiska situation, dina mål och din riskprofil på djupet. Genom strukturerade samtal kartlägger vi allt från tillgångar och skulder till familjesituation och framtidsplaner.",
    metrics: [
      { label: "Djupintervju", value: "90 min" },
      { label: "Riskanalys", value: "Kvantitativ" },
      { label: "Dokumentation", value: "Fullständig" },
    ],
  },
  {
    num: "02",
    title: "Strategi & Plan",
    subtitle: "Skräddarsydd portföljallokering",
    description:
      "Baserat på kartläggningen bygger vi en skräddarsydd investeringsstrategi. Vi presenterar allokering, förväntad avkastning, risknivåer och kostnadsstruktur — transparent och tydligt, helt utan dolda provisioner.",
    metrics: [
      { label: "Tillgångsallokering", value: "Individuell" },
      { label: "Prognos", value: "10+ år" },
      { label: "Kostnadsbild", value: "Transparent" },
    ],
  },
  {
    num: "03",
    title: "Genomförande",
    subtitle: "Effektiv etablering & mandat",
    description:
      "När strategin är godkänd implementerar vi den effektivt. Vi öppnar depåkonton hos Nordnet, väljer instrument bland marknadens bästa alternativ, och säkerställer att allt är på plats för optimal förvaltning.",
    metrics: [
      { label: "Implementering", value: "5–10 dagar" },
      { label: "Depåbank", value: "Nordnet" },
      { label: "Uppföljning", value: "Omgående" },
    ],
  },
  {
    num: "04",
    title: "Löpande uppföljning",
    subtitle: "Aktiv tillsyn & ständig kontakt",
    description:
      "Din portfölj övervakas kontinuerligt och rebalanseras vid marknadsförändringar. Du får regelbundna rapporter, har tillgång till vår portal dygnet runt, och din rådgivare finns alltid ett telefonsamtal bort.",
    metrics: [
      { label: "Kvartalsrapporter", value: "Automatiska" },
      { label: "Depååtkomst", value: "24/7" },
      { label: "Rådgivarsamtal", value: "När du vill" },
    ],
  },
];

export default function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) return;

      const stepCards = container.querySelectorAll<HTMLElement>(".process-step-card");
      stepCards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });

        gsap.fromTo(
          card,
          { opacity: 0.35, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
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
      className="relative"
      style={{
        paddingTop: "clamp(7rem, 12vw, 11rem)",
        paddingBottom: "clamp(7rem, 12vw, 11rem)",
        backgroundColor: "var(--bg, #FAFAF8)",
      }}
    >
      <div
        className="mx-auto px-6 md:px-8"
        style={{ maxWidth: "var(--content-width)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Process Manifesto & Indicator */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 flex flex-col justify-between">
            <div>
              <span
                className="font-mono"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--fg-muted, #737373)",
                }}
              >
                [ 03 ] Vår Process · Arbetssätt
              </span>

              <h2
                className="font-display mt-6"
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: "var(--fg, #0F0F10)",
                }}
              >
                En strukturerad process för din trygghet.
              </h2>

              <p
                className="font-light mt-6"
                style={{
                  fontSize: "clamp(15px, 1.1vw, 18px)",
                  lineHeight: 1.65,
                  color: "var(--fg-muted, #4A4A4D)",
                  maxWidth: "420px",
                }}
              >
                Varje klientrelation inleds med att vi lyssnar på dina ambitioner. Sedan bygger
                vi — strukturerat, metodiskt och med full transparens genom varje fas.
              </p>
            </div>

            {/* Vertical Indicator Track */}
            <div className="hidden lg:flex flex-col gap-4 mt-12 pt-8 border-t border-black/[0.08]">
              {steps.map((step, i) => {
                const isActive = i === activeStep;
                return (
                  <div
                    key={step.num}
                    className="flex items-center gap-4 transition-all duration-500"
                    style={{
                      opacity: isActive ? 1 : 0.35,
                      transform: isActive ? "translateX(6px)" : "translateX(0)",
                    }}
                  >
                    <span
                      className="font-mono text-[11px] tracking-widest font-semibold"
                      style={{
                        color: isActive ? "var(--navy, #171C26)" : "inherit",
                      }}
                    >
                      {step.num}
                    </span>
                    <div
                      className="h-px transition-all duration-500"
                      style={{
                        width: isActive ? "28px" : "14px",
                        backgroundColor: isActive
                          ? "var(--navy, #171C26)"
                          : "rgba(0,0,0,0.2)",
                      }}
                    />
                    <span className="font-display text-[15px] font-light">
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Narrative Steps Sequence */}
          <div className="lg:col-span-7 flex flex-col gap-16 lg:gap-24">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="process-step-card relative rounded-[2px] p-8 md:p-12 border border-black/[0.08] bg-white/[0.6] backdrop-blur-sm shadow-sm transition-all"
                style={{
                  overflow: "hidden",
                }}
              >
                {/* Giant Monolith Watermark Number */}
                <div
                  aria-hidden="true"
                  className="font-display select-none pointer-events-none absolute right-4 -bottom-4 text-black/[0.04]"
                  style={{
                    fontSize: "clamp(6rem, 12vw, 10rem)",
                    lineHeight: 0.8,
                    fontWeight: 200,
                  }}
                >
                  {step.num}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-black/40 mb-3">
                    <span>Steg {step.num}</span>
                    <span>·</span>
                    <span>{step.subtitle}</span>
                  </div>

                  <h3
                    className="font-display text-2xl md:text-3xl font-light text-neutral-900"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-4 text-neutral-600 font-light text-base md:text-lg leading-relaxed max-w-xl">
                    {step.description}
                  </p>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-black/[0.06]">
                    {step.metrics.map((metric) => (
                      <div key={metric.label}>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-black/40 block">
                          {metric.label}
                        </span>
                        <span className="font-display text-[14px] font-normal text-neutral-800 mt-1 block">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process CTA — Discreet, quiet wealth tone */}
        <div className="mt-20 text-center border-t border-black/[0.08] pt-12">
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-widest text-neutral-800 hover:text-black transition-colors group"
          >
            <span>Boka ett förutsättningslöst introduktionsmöte</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
