"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function FullbleedStockholm() {
  const ref = useScrollReveal();

  return (
    <section className="relative overflow-hidden py-24 lg:py-36" ref={ref}>
      {/* Fullbleed background */}
      <Image
        src="/images/panoramic-view-stockholm-city.jpg"
        alt="Stockholm panorama"
        fill
        className="object-cover"
        quality={80}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f1e]/85 via-[#0d0f1e]/60 to-[#0d0f1e]/30" />

      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="grid-line left-[25%]" />
        <div className="grid-line left-[50%] !bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.08),transparent)]" />
        <div className="grid-line left-[75%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — empty, image shows through */}
          <div className="lg:col-span-7" />

          {/* Right — content */}
          <div className="lg:col-span-5">
            <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 mb-6">
              <span className="uppercase tracking-widest text-[10px]">
                Vår plattform
              </span>
            </div>

            <h2 className="reveal reveal-d1 text-4xl sm:text-5xl font-light tracking-[-0.04em] text-white font-display leading-[1.05]">
              Oberoende rådgivning i världsklass
            </h2>

            <p className="reveal reveal-d2 mt-6 text-base text-white/70 font-light leading-relaxed">
              Vi är ett oberoende värdepappersbolag under tillsyn av
              Finansinspektionen. Det innebär att vi aldrig styrs av
              provisioner eller egna intressen — bara av din ekonomiska
              framgång.
            </p>

            <Link
              href="#kontakt"
              className="reveal reveal-d3 group inline-flex items-center gap-2 mt-8 text-sm font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 transition"
            >
              Kontakta en rådgivare
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
