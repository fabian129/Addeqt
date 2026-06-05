"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSectionReveal } from "../hooks/useSectionReveal";

gsap.registerPlugin(ScrollTrigger);

function GlassCard({ 
  children, 
  delay = 0,
  maxWidth = "240px",
  padding = "1rem"
}: { 
  children: React.ReactNode; 
  delay?: number;
  maxWidth?: string;
  padding?: string;
}) {
  return (
    <div
      className="glass-card-float flex flex-col justify-between relative overflow-hidden"
      data-delay={delay}
      style={{
        width: "100%",
        maxWidth: maxWidth, 
        background: "rgba(15, 16, 25, 0.85)", 
        backdropFilter: "blur(40px) saturate(150%)",
        WebkitBackdropFilter: "blur(40px) saturate(150%)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "12px", 
        padding: padding, 
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      }}
    >
      {children}
    </div>
  );
}

export default function AppBento() {
  const containerRef = useRef<HTMLElement>(null);
  const sectionRef = useSectionReveal();

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const cards = el.querySelectorAll(".glass-card-float");
      cards.forEach((card, i) => {
        const delay = parseFloat((card as HTMLElement).dataset.delay || "0");
        
        // Fade in snabbt utan scrub
        gsap.fromTo(
          card,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 60%", // Fade:ar in när sektionen kommer in i bild
            },
          }
        );

        // Scrubba enbart y-rörelsen
        gsap.fromTo(
          card,
          { y: 150 },
          {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={(el) => {
        containerRef.current = el;
        if (sectionRef) {
          (sectionRef as any).current = el;
        }
      }}
      id="insikter"
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        paddingTop: "clamp(6rem, 12vh, 8rem)",
        paddingBottom: "clamp(4rem, 8vh, 6rem)",
        minHeight: "100vh",
      }}
    >
      {/* ── 1. Full Bleed Background Image (Med CSS-trolleri) ── */}
      {/* Genom att begränsa maxbredden till 1400px slipper vi att webbläsaren super-zoomar på breda skärmar.
          Vi har centrerat bilden för att ge exakt lika mycket utrymme till vänster (text) som höger (widgets). */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div 
          className="relative w-full h-full max-w-[1400px] md:translate-x-[15%]"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <Image
            src="/images/App-mocck/Smartphone mockup with real reflection.png"
            alt="Addeqt App Overview"
            fill
            className="object-cover" 
            sizes="100vw"
            priority
            style={{
              objectPosition: "center center",
            }}
          />
        </div>
      </div>

      {/* ── 2. Subtle overlay to ensure text legibility at edges ── */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, rgba(26,29,54,0.4) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── 3. Content Container for Glass Cards ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "var(--content-width)",
          padding: "clamp(2rem, 5vh, 6rem) clamp(1.5rem, 4vw, 3rem)",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "2rem",
          minHeight: "100vh",
        }}
      >
        {/* Left Column (Text + Premium CTA Button) */}
        <div 
          className="col-span-12 md:col-span-5 flex flex-col justify-center md:-translate-x-8 lg:-translate-x-12 md:-translate-y-12"
          style={{ minHeight: "100%", paddingBottom: "clamp(2rem, 5vh, 4rem)" }}
        >
          {/* Main Section Text */}
          <div className="text-left">
            <span className="font-mono text-xs tracking-widest uppercase text-[#3B82F6] mb-4 block">Digitala verktyg</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-6">
              Din förmögenhet, <br/>direkt i fickan.
            </h2>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Följ marknaden i realtid, signera viktiga dokument med BankID och kommunicera säkert med ditt rådgivningsteam.
            </p>
          </div>

          {/* Premium CTA Button */}
          <div className="mt-12">
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#06B6D4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg className="w-5 h-5 relative z-10 text-[#3B82F6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
              <span className="relative z-10 tracking-wide text-sm">Ladda ner Addeqt</span>
            </button>
          </div>
        </div>

        {/* Right Column (3 Data Widgets Stacked) */}
        <div 
          className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-3 items-end md:translate-x-12 lg:translate-x-24 md:-translate-y-8"
          style={{ marginTop: "clamp(2rem, 5vh, 4rem)", paddingBottom: "clamp(2rem, 5vh, 4rem)" }}
        >
          {/* Card 1: Portfolio Analytics */}
          <GlassCard delay={0.1}>
            <div className="flex flex-col gap-2 w-full">
              {/* Header */}
              <div className="flex items-center gap-1.5 mb-1 text-white/50">
                <svg className="w-3 h-3 text-[#4ade80]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                <span className="font-mono tracking-widest uppercase text-[8px]">Portföljanalys</span>
              </div>
              
              {/* Metric */}
              <div>
                <div className="font-display text-2xl md:text-3xl text-white font-light tracking-tighter">
                  +14.2<span className="text-lg text-white/40">%</span>
                </div>
                <p className="text-[8px] text-white/40 mt-0.5 font-mono uppercase tracking-wider">Avkastning YTD</p>
              </div>

              {/* Bar Chart */}
              <div className="mt-1 w-full h-10 flex items-end gap-1">
                {[40, 55, 30, 80, 50, 90, 75, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-white/10 rounded-t-sm relative overflow-hidden" style={{ height: `${h}%` }}>
                     {i === 7 && <div className="absolute inset-0 bg-[#4ade80]/60"></div>}
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Card 2: Security / Vault */}
          <GlassCard delay={0.2}>
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex items-center gap-1.5 mb-0.5 text-white/50">
                <svg className="w-3 h-3 text-[#8B5CF6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span className="font-mono tracking-widest uppercase text-[8px]">Krypterat Valv</span>
              </div>
              <h3 className="font-display text-sm font-light text-white leading-tight">
                BankID-skyddad <br/>dokumenthantering.
              </h3>
              <div className="mt-1.5 w-full">
                <div className="flex justify-between text-[7px] text-white/40 mb-1 uppercase tracking-widest">
                  <span>Säkerhetsnivå</span>
                  <span className="text-[#8B5CF6]">Maximal</span>
                </div>
                <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Card 3: Live Sync */}
          <GlassCard delay={0.3}>
            <div className="flex flex-col gap-2 w-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-mono tracking-widest uppercase text-white/50 text-[8px]">Live Sync</span>
                <div className="w-1 h-1 rounded-full bg-[#06B6D4] animate-pulse" style={{ boxShadow: "0 0 6px #06B6D4" }}></div>
              </div>

              <h3 className="font-display text-sm font-light text-white leading-tight">
                Alltid i fas med <br/>din rådgivare.
              </h3>

              {/* Activity Feed */}
              <div className="flex flex-col gap-1 mt-1">
                {/* Item 1 */}
                <div className="flex items-center gap-2 p-1.5 rounded-md bg-white/5 border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-medium text-white">Signering krävs</span>
                    <span className="text-[7px] text-white/50 uppercase tracking-wide">Årsredovisning 2025</span>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="flex items-center gap-2 p-1.5 rounded-md bg-white/5 border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-medium text-white">Ny veckorapport</span>
                    <span className="text-[7px] text-white/50 uppercase tracking-wide">Kvartal 1</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
