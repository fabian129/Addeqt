"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "./LenisContext";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    id: "kapitalforvaltning",
    num: "01",
    tab: "Kapitalförvaltning",
    title: "Kapitalförvaltning",
    lead: "Aktiv och oberoende portföljvård.",
    desc: "Vi handplockar marknadens främsta fonder och instrument, anpassat efter din unika riskprofil och tidshorisont. Inga egna fondprodukter, ingen bindningstid och full insyn i varje placering.",
    image: "/images/service-column-bloom.png",
    href: "/tjanster/kapitalforvaltning",
    specs: [
      { label: "Depåbank", val: "Nordnet / SEB" },
      { label: "Mandat", val: "Diskretionärt & Rådgivande" },
      { label: "Avgift", val: "Fast % (Noll kickbacks)" },
      { label: "Placeringar", val: "Öppet globalt universum" },
    ],
  },
  {
    id: "formogenhetsradgivning",
    num: "02",
    tab: "Förmögenhetsrådgivning",
    title: "Förmögenhetsrådgivning",
    lead: "En personlig finansiell arkitektur.",
    desc: "Heltäckande rådgivning med din samlade livssituation som utgångspunkt. Vi kartlägger tillgångar, bolag och framtida mål för att skapa en hållbar struktur med löpande uppföljning.",
    image: "/images/service-column-petals.png",
    href: "/tjanster/formogenhetsradgivning",
    specs: [
      { label: "Utgångspunkt", val: "Helhet & Familjesituation" },
      { label: "Strategi", val: "Skräddarsydd finansiell plan" },
      { label: "Uppföljning", val: "Kvartalsvis & Årlig dialog" },
      { label: "Oberoende", val: "100% Garanterat" },
    ],
  },
  {
    id: "private-banking",
    num: "03",
    tab: "Private Banking",
    title: "Private Banking",
    lead: "Exklusiv helhetsservice för större kapital.",
    desc: "En enda dedikerad kontaktpunkt för hela din privatekonomi. Vi koordinerar bolån, likviditetshantering, försäkring och pension — med samma diskreta omsorg som ett privat familjekontor.",
    image: "/images/service-archway-petals.png",
    href: "/tjanster/private-banking",
    specs: [
      { label: "Segment", val: "50 Mkr+" },
      { label: "Omfång", val: "Totalförmögenhet & Bolag" },
      { label: "Kontaktpunkt", val: "Dedikerad senior partner" },
      { label: "Tillgänglighet", val: "Direkt, personlig & diskret" },
    ],
  },
  {
    id: "skatteoptimering",
    num: "04",
    tab: "Skatteoptimering",
    title: "Skatteoptimering",
    lead: "Strukturering över generationer.",
    desc: "Vi analyserar ägarstrukturer, holdingbolag, ISK och kapitalförsäkringar för att säkerställa att din förmögenhet växer med maximal skatteeffektivitet och trygg succession.",
    image: "/images/service-draped-petals.png",
    href: "/tjanster/skatteoptimering",
    specs: [
      { label: "Struktur", val: "Holdingbolag, ISK & KF" },
      { label: "Generationsskifte", val: "Strukturerad successionsplan" },
      { label: "Juridik", val: "Svensk & Internationell rätt" },
      { label: "Fokus", val: "Maximal nettoeffekt över tid" },
    ],
  },
];

export default function InteractiveServices() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lenis = useLenis();

  const handleTabClick = useCallback(
    (index: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const scrollHeight = container.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (index / (SERVICES_DATA.length - 1)) * scrollHeight;
      if (lenis) {
        lenis.scrollTo(targetScroll, { duration: 0.9 });
      } else {
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    },
    [lenis]
  );

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) return;

      const slides = container.querySelectorAll<HTMLElement>(".service-slide");
      const n = SERVICES_DATA.length;

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
        onUpdate: (self) => {
          const p = self.progress;
          const val = p * (n - 1);
          const k = Math.min(n - 2, Math.floor(val));
          const frac = Math.max(0, Math.min(1, val - k));

          // Active tab index
          const active = frac > 0.5 ? Math.min(n - 1, k + 1) : k;
          setActiveIndex(active);

          // Hold threshold: 70% hold, 30% crossfade
          const hold = 0.70;

          slides.forEach((slide, i) => {
            const img = slide.querySelector<HTMLElement>(".slide-bg-img");
            const content = slide.querySelector<HTMLElement>(".slide-content");

            let opacity = 0;
            let scale = 1;
            let y = 0;

            if (p >= 0.99) {
              opacity = i === n - 1 ? 1 : 0;
              scale = 1;
              y = 0;
            } else if (i === k) {
              if (frac <= hold) {
                opacity = 1;
                scale = 1;
                y = 0;
              } else {
                const t = (frac - hold) / (1 - hold);
                const easeT = t * t * (3 - 2 * t);
                opacity = 1 - easeT;
                scale = 1 + easeT * 0.04;
                y = -easeT * 25;
              }
            } else if (i === k + 1) {
              if (frac <= hold) {
                opacity = 0;
                scale = 1.04;
                y = 25;
              } else {
                const t = (frac - hold) / (1 - hold);
                const easeT = t * t * (3 - 2 * t);
                opacity = easeT;
                scale = 1.04 - easeT * 0.04;
                y = 25 - easeT * 25;
              }
            } else {
              opacity = 0;
            }

            gsap.set(slide, {
              opacity,
              pointerEvents: opacity > 0.5 ? "auto" : "none",
              visibility: opacity > 0.005 ? "visible" : "hidden",
            });
            if (img && opacity > 0.005) gsap.set(img, { scale });
            if (content && opacity > 0.005) gsap.set(content, { y });
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="tjanster"
      className="dark-section component--interactiveservices relative w-full"
      style={{
        height: `${SERVICES_DATA.length * 100}vh`,
        backgroundColor: "#0F0F10",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* ── Sticky Full-Screen Stage ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* ── Slides with Full-Screen Screen-Covering Photos (Som al principio, zero purple) ── */}
        <div className="absolute inset-0 w-full h-full">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="service-slide absolute inset-0 w-full h-full"
              style={{
                opacity: idx === 0 ? 1 : 0,
                pointerEvents: idx === 0 ? "auto" : "none",
              }}
            >
              {/* Full-bleed Photo Background (Cubren la pantalla) */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="slide-bg-img absolute inset-0 w-full h-full transform-gpu will-change-transform">
                  <Image
                    src={service.image}
                    alt={service.tab}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={idx === 0}
                    quality={90}
                  />
                </div>

                {/* Pure Neutral Warm Graphite/Black Scrim — ZERO PURPLE / ZERO VIOLET */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: `linear-gradient(
                      to right,
                      rgba(15,15,16,0.94) 0%,
                      rgba(15,15,16,0.85) 36%,
                      rgba(15,15,16,0.45) 65%,
                      rgba(15,15,16,0.60) 100%
                    )`,
                  }}
                />
                <div 
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 80% 50%, transparent 40%, rgba(15,15,16,0.55) 100%)",
                  }}
                />
              </div>

              {/* Foreground Editorial Spread Layer */}
              <div className="relative z-20 w-full h-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex items-center">
                <div className="slide-content w-full max-w-2xl transform-gpu will-change-transform">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#C4A882]">
                      Tjänst {service.num}
                    </span>
                    <span className="text-xs text-white/30 font-mono">/</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                      04
                    </span>
                  </div>

                  <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] tracking-tight mb-4 drop-shadow-sm">
                    {service.title}
                  </h2>

                  <p className="text-lg sm:text-xl font-normal text-white/90 mb-4">
                    {service.lead}
                  </p>

                  <p className="text-sm sm:text-base font-light text-white/75 leading-relaxed max-w-xl mb-8">
                    {service.desc}
                  </p>

                  {/* Hairline Specification Table (NO CARDS, PURE LINES) */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5 py-6 border-y border-white/15 mb-8 backdrop-blur-[2px]">
                    {service.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#C4A882] mb-1">
                          {spec.label}
                        </span>
                        <span className="text-sm sm:text-base font-medium text-white">
                          {spec.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <div>
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white hover:text-[#C4A882] transition-colors py-2 border-b border-white/30 hover:border-[#C4A882]"
                    >
                      <span>Läs mer om {service.tab.toLowerCase()}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Top Header & Anchors (Floating Glass Bar) ── */}
        <div className="relative z-30 w-full pt-8 sm:pt-10 px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A882]">
              03 — Våra Tjänster
            </span>
            <span className="h-px w-8 bg-[#C4A882]/40" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/40 hidden lg:inline">
              Skräddarsydda Mandat
            </span>
          </div>

          <nav className="flex items-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar">
            {SERVICES_DATA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(idx)}
                className="whitespace-nowrap font-mono text-xs uppercase tracking-widest transition-all duration-300 relative py-1 cursor-pointer"
                style={{
                  color: activeIndex === idx ? "#ffffff" : "rgba(255,255,255,0.4)",
                  fontWeight: activeIndex === idx ? 600 : 400,
                }}
              >
                <span className="text-[#C4A882] mr-1.5">{item.num}</span>
                {item.tab}
                {activeIndex === idx && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C4A882] transition-all duration-300" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* ── Bottom Subtle Indicator ── */}
        <div className="relative z-30 w-full pb-6 px-6 sm:px-12 lg:px-16 flex items-center justify-between text-xs font-mono text-white/50 uppercase tracking-widest border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A882] animate-pulse" />
            <span>Scrolla för att utforska</span>
          </div>
          <span>
            0{activeIndex + 1} / 0{SERVICES_DATA.length}
          </span>
        </div>

      </div>
    </section>
  );
}
