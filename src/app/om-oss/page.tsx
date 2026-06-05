"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OmTeamList from "../components/OmTeamList";
import { useSectionReveal } from "../hooks/useSectionReveal";
import OmOssScroll from "../components/OmOssScroll";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import OmOssLightsOut from "../components/OmOssLightsOut";
import { useLenis } from "../components/LenisContext";

export default function OmOssPage() {
  const containerRef = useSectionReveal();
  const lenis = useLenis();

  return (
    <>
      <Navbar forceScrolled />

      <main className="om-page" ref={containerRef}>
        <OmOssLightsOut>
          {/* ═══ SECTION 1: Cinematic Hero ═══ */}
          <section 
            id="om-hero"
            className="relative w-full h-[150vh] flex flex-col justify-start pt-[25vh] px-6 md:px-16 lg:px-32 bg-transparent"
          >
            {/* Dark Section Trigger for Navbar: hits the top when the background is fading to black */}
            <div className="absolute top-[85vh] bottom-0 left-0 right-0 dark-section pointer-events-none" />

            <div id="om-hero-content" className="max-w-7xl w-full mx-auto flex flex-col gsap-reveal h-full relative z-10">
              
              {/* TOP: Headline */}
              <div className="w-full">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 mb-10 block">
                  [ 01 ] Om Addeqt
                </span>
                <h1 
                  className="font-display text-[#0f0f10] leading-[1.05] tracking-tight max-w-5xl"
                  style={{ fontSize: "clamp(4rem, 9vw, 8.5rem)", fontWeight: 300 }}
                >
                  Din oberoende partner.
                </h1>
              </div>
              
              {/* BOTTOM RIGHT: Body text & Button */}
              <div className="w-full mt-[12vh] md:mt-[20vh] flex justify-end">
                <div className="max-w-2xl lg:max-w-[800px] flex flex-col">
                  <p className="text-xl md:text-2xl lg:text-[1.75rem] font-light text-black/70 leading-relaxed mb-16">
                    Vi byggde den finansiella partner vi själva saknade. Dina mål är vår enda kompass. Inga egna produkter, inga dolda avgifter. Bara oberoende rådgivning.
                  </p>
                  
                  <div className="flex">
                    <Link 
                      href="#om-oss-story"
                      className="group flex flex-col gap-3"
                      onClick={(e) => {
                        e.preventDefault();
                        if (lenis) {
                          lenis.scrollTo("#om-oss-story", { 
                            offset: 100,
                            duration: 1.8,
                            easing: (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
                          });
                        } else {
                          const target = document.getElementById("om-oss-story");
                          if (target) {
                            window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
                          }
                        }
                      }}
                    >
                      <div className="flex items-center gap-6">
                        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#0f0f10] font-semibold">Läs vår historia</span>
                        <ArrowDown className="w-4 h-4 text-[#0f0f10] group-hover:translate-y-2 transition-transform duration-500 ease-out" />
                      </div>
                      {/* Elegant hover line */}
                      <div className="w-full h-px bg-black/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#0f0f10] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* ═══ SECTION 2: Sticky Cinematic Scroll ═══ */}
        <OmOssScroll />
        </OmOssLightsOut>

        {/* ═══ SECTION 3: Milestones (Clean row) ═══ */}
        <section className="w-full bg-[#FAFAF8] py-32 md:py-48 px-6">
          <div className="max-w-[var(--content-width)] mx-auto">
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 mb-16 text-center gsap-reveal">
              Milstolpar
            </span>
            
            {/* The clean 4-column row with hairlines */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-black/10 gsap-reveal">
              {/* Item 1 */}
              <div className="flex flex-col items-center text-center py-12 md:py-16 px-4 border-b md:border-b-0 border-r border-black/10">
                <span className="font-display text-4xl md:text-5xl text-[#242748] mb-4">2021</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-black/40">Grundat</span>
              </div>
              {/* Item 2 */}
              <div className="flex flex-col items-center text-center py-12 md:py-16 px-4 border-b md:border-b-0 md:border-r border-black/10">
                <span className="font-display text-4xl md:text-5xl text-[#242748] mb-4">Feb 2023</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-black/40">FI-tillstånd</span>
              </div>
              {/* Item 3 */}
              <div className="flex flex-col items-center text-center py-12 md:py-16 px-4 border-r border-black/10">
                <span className="font-display text-4xl md:text-5xl text-[#242748] mb-4">Jul 2023</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-black/40">Första kunden</span>
              </div>
              {/* Item 4 */}
              <div className="flex flex-col items-center text-center py-12 md:py-16 px-4">
                <span className="font-display text-4xl md:text-5xl text-[#242748] mb-4">1000+</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-black/40">Kunder idag</span>
              </div>
            </div>
            
            <p className="text-center text-black/50 text-sm md:text-base font-light max-w-2xl mx-auto mt-12 gsap-reveal leading-relaxed">
              Med över 3 miljarder kronor under förvaltning växer vi sida vid sida med våra kunder. All tillgångsförvaring sker hos Nordnet, helt separerat från Addeqts verksamhet.
            </p>
          </div>
        </section>

        {/* ═══ SECTION 4: Team ═══ */}
        <section className="w-full bg-white py-32 md:py-48 px-6">
          <div className="max-w-[var(--content-width)] mx-auto">
            <div className="mb-20 md:mb-32 text-center">
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 mb-6 gsap-reveal">
                Teamet
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#0f0f10] font-light tracking-tight gsap-reveal-heading">
                Människorna bakom Addeqt.
              </h2>
            </div>
            <OmTeamList />
          </div>
        </section>

        {/* ═══ SECTION 5: Subtle Map / Contact Wrap-up ═══ */}
        <section className="w-full bg-[#FAFAF8] relative overflow-hidden py-32 md:py-48 px-6 flex flex-col items-center text-center">
          {/* Abstract Map Watermark (Very faint background lines to simulate a map) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
            <svg viewBox="0 0 1000 600" className="w-[150%] md:w-full h-auto" preserveAspectRatio="none">
              <path d="M 0,200 C 150,220 300,100 450,250 C 600,400 750,300 1000,350" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M 0,400 C 200,450 400,200 600,350 C 800,500 900,450 1000,400" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M 300,0 C 350,150 200,300 400,600" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M 700,0 C 650,200 800,400 650,600" fill="none" stroke="currentColor" strokeWidth="1" />
              {/* Central roads/grid */}
              <line x1="450" y1="250" x2="600" y2="350" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="400" y1="600" x2="600" y2="350" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto gsap-reveal">
            <div className="relative inline-block mb-10">
              {/* Red pulsing dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-600/20 rounded-full animate-ping"></div>
              <div className="relative w-3 h-3 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-[#0f0f10] mb-6 tracking-tight">
              Huvudkontor i Stockholm
            </h3>
            <p className="text-black/50 font-light text-lg mb-8 leading-relaxed">
              Artillerigatan 45<br/>114 45 Stockholm
            </p>
            <Link 
              href="mailto:info@addeqt.se"
              className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-[#242748] hover:text-black transition-colors"
            >
              <span>Kontakta oss</span>
              <ArrowDown className="w-3 h-3 -rotate-45" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
