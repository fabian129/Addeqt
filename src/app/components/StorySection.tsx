"use client";

import Image from "next/image";
import { useSectionReveal } from "../hooks/useSectionReveal";
import BrandDivider from "./BrandDivider";

export default function StorySection() {
  const sectionRef = useSectionReveal();

  return (
    <section 
      ref={sectionRef} 
      className="w-full relative z-10 overflow-x-hidden"
      style={{
        paddingTop: "clamp(8rem, 15vw, 15rem)",
        paddingBottom: "clamp(2rem, 5vw, 4rem)",
      }}
    >
      <div className="mx-auto px-6 md:px-8 max-w-[var(--content-width)]">
        
        {/* Main Cohesive Block */}
        <div className="flex flex-col gap-16 md:gap-24 mb-32 md:mb-48">
          
          {/* Top: Massive Headline (Wider and less tall) */}
          <div className="w-full max-w-6xl">
            <h2 
              className="font-display leading-none tracking-tight gsap-text-scrub"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)", fontWeight: 200 }}
            >
              Vårt <span className="italic">oberoende</span> är fundamentet för en modern privatbank. <span className="opacity-40">Helt fri från intressekonflikter.</span>
            </h2>
          </div>

          {/* Bottom Grid: Left sidebar intro + Right video */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          
          {/* Left Column: Eyebrow and small text (Sticky behavior for elegance) */}
          <div className="md:col-span-3 flex flex-col gap-8 gsap-reveal pt-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40">Vårt fundament</span>
            <p className="text-xl font-light opacity-60 leading-relaxed max-w-sm">
              Vårt namn reflekterar en djup övertygelse om att verkligt värdeskapande kräver total transparens. Vi bygger en finansiell partner där dina mål är vår enda kompass.
            </p>
            {/* Minimalist button/link */}
            <div className="flex items-center gap-4 mt-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer w-fit group">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest">Läs vår story</span>
            </div>
          </div>

          {/* Right Column: Media */}
          <div className="md:col-span-8 md:col-start-5">

            {/* Video Player */}
            <div className="gsap-reveal relative w-full overflow-hidden bg-black/5" style={{ aspectRatio: "16/9" }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                poster="/images/high-angle-shot-beautiful-val-d-orcia-tuscany.jpg"
                className="object-cover w-full h-full absolute inset-0 gsap-parallax-image scale-[1.35]"
              >
                {/* Switzerland nature video to give the "schweizisk privatbank" feel */}
                <source src="https://cdn.coverr.co/videos/coverr-switzerland-mountains-and-lake-3498/1080p.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-black md:text-white opacity-80 drop-shadow-md">
                <span>[01] OBEROENDE RÅDGIVNING</span>
                <span>#2026</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Branded Divider */}
        <div className="mb-32 md:mb-40 gsap-reveal">
          <BrandDivider />
        </div>

        {/* Editorial Section 1: The philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center mb-32 md:mb-48">
          <div className="md:col-span-5 gsap-reveal">
             <div className="relative w-full overflow-hidden bg-white/5" style={{ aspectRatio: "4/5" }}>
              <Image 
                src="/images/editorial-valley.jpg" 
                alt="Swiss Alps Valley" 
                fill 
                className="object-cover gsap-parallax-image scale-[1.35]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-10 md:gap-12 pl-0 md:pl-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40">Vår modell</span>
            <h3 
              className="font-display leading-[1.05] tracking-tight gsap-text-scrub"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 200 }}
            >
              En gammal privatbank — <br/>
              <span className="opacity-40 italic">fast bättre.</span>
            </h3>
            <p className="text-lg md:text-xl font-light opacity-60 leading-relaxed max-w-xl">
              Vi kombinerar den djupt personliga servicen från anrika bankhus med modern teknik och en total avsaknad av dolda avgifter. Resultatet är en renodlad upplevelse där ditt kapital får de bästa förutsättningarna att växa.
            </p>
          </div>
        </div>

        <div className="mb-32 md:mb-48 gsap-reveal">
          <BrandDivider />
        </div>

        {/* Editorial Section 2: The promise with sailing/harbor imagery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center mb-32 md:mb-48">
          
          <div className="md:col-span-5 flex flex-col gap-10 md:gap-12 gsap-reveal order-2 md:order-1 pr-0 md:pr-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40">Vår filosofi</span>
            <h3 
              className="font-display leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 200 }}
            >
              Vi letar alltid <br/><span className="opacity-40 italic">efter bättre sätt.</span>
            </h3>
            <p className="text-base md:text-lg font-light opacity-60 leading-relaxed max-w-md">
              Vi vägrar nöja oss med branschstandarden. Genom en fast, procentuell avgift och ett genuint oberoende eliminerar vi de dolda kostnader som traditionellt urholkar avkastningen. Om en lösning inte maximerar kundnyttan, förkastar vi den.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6 gsap-reveal order-1 md:order-2">
             <div className="relative w-full overflow-hidden bg-white/5" style={{ aspectRatio: "16/10" }}>
              <Image 
                src="/images/hero-harbor.jpg" 
                alt="Addeqt — tidlös arkitektur och oberoende" 
                fill 
                className="object-cover gsap-parallax-image scale-[1.35]"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>

        {/* Editorial Section 3: The final statement */}
        <div id="final-story-text" className="flex flex-col items-center text-center mt-32 md:mt-48 mb-0 md:mb-4 gsap-reveal">
          {/* The Addeqt Q Icon */}
          <svg 
            id="q-icon-final"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="120 -10 75 60" 
            className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 opacity-80 overflow-visible mb-12"
            style={{ color: "#242748" }} // Addeqt Navy Blue
          >
            <g transform="translate(-10.73 -8.17)" fill="currentColor">
              <path d="M143.57,24.23a11.92,11.92,0,0,1,.93-4.68,12.16,12.16,0,0,1,6.35-6.47,11.36,11.36,0,0,1,4.59-.95,11.24,11.24,0,0,1,4.6.95c.26.11.5.24.74.37.95-1,1.94-2,2.95-2.95a16.33,16.33,0,0,0-2-1.07,16.13,16.13,0,0,0-12.5,0,16.24,16.24,0,0,0-5.12,3.44A16.41,16.41,0,0,0,140.64,18a16.11,16.11,0,0,0,0,12.49,16.69,16.69,0,0,0,1.22,2.29c.5-.43,1-.87,1.51-1.28s1.16-.9,1.74-1.35a13,13,0,0,1-.61-1.24A11.91,11.91,0,0,1,143.57,24.23Z" />
              <path d="M169.79,31.46a15.53,15.53,0,0,0,1.7-7.23A15.6,15.6,0,0,0,170.23,18a17.18,17.18,0,0,0-1.46-2.71c-1.05,1-2.09,1.94-3.05,3a11.4,11.4,0,0,1,.65,1.31,12.17,12.17,0,0,1-2.56,13.21A12.25,12.25,0,0,1,160,35.37a11.24,11.24,0,0,1-4.6,1,11.36,11.36,0,0,1-4.59-1l-.7-.35c-.65.52-1.33,1-2,1.54-.47.38-.93.78-1.39,1.17A17.49,17.49,0,0,0,149.2,39a16,16,0,0,0,9.56.91,16.5,16.5,0,0,0,3.1-1l3.91,4.56h4.93L165.21,37A16.32,16.32,0,0,0,169.79,31.46Z" />
              <path d="M148.55,22.93h5.89V17h2.74v5.89h5.89v2.74h-5.89v5.89h-2.74V25.67h-5.89Z" />
            </g>
          </svg>
          <h3 
            className="font-display leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(3rem, 6vw, 6.5rem)", fontWeight: 200 }}
          >
            Din framtid börjar <br/>
            <span className="opacity-40 italic">med ett samtal.</span>
          </h3>
          <div className="mt-12 md:mt-16">
            <button className="bg-[#111827] text-white px-8 py-4 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-black/80 transition-colors">
              Bli kund
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
