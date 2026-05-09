import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Stockholm aerial */}
      <Image
        src="/images/aerial-view-shot-stockholm-city-center-summer-vacation-travel-concept.jpg"
        alt="Stockholm"
        fill
        className="object-cover pointer-events-none"
        priority
        quality={85}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f1e]/70 via-[#0d0f1e]/50 to-[#0d0f1e]/80" />

      {/* Subtle grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="grid-line left-[25%]" />
        <div className="grid-line left-[50%] !bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.08),transparent)]" />
        <div className="grid-line left-[75%]" />
      </div>

      {/* Content — pinned to bottom, V4 editorial 3-column */}
      <main className="relative z-20 flex h-[calc(100vh-73px)] items-end">
        <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-20 w-full">
          {/* Divider line */}
          <div className="mb-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent hero-anim hero-d1" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            {/* Left: Headline */}
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-white/80 bg-white/[0.08] ring-1 ring-white/10 rounded-full px-3 py-1.5 mb-6 backdrop-blur-sm hero-anim hero-d1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span>Oberoende · Stockholm · Grundat 2021</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-light tracking-[-0.05em] text-white leading-[1.05] font-display hero-anim hero-d2">
                Rätt rådgivning.
                <br />
                <span className="text-white/50">På dina villkor.</span>
              </h1>
            </div>

            {/* Vertical divider */}
            <div className="hidden md:block md:col-span-1 hero-anim hero-d3">
              <div className="w-px h-24 bg-gradient-to-b from-white/20 to-white/5 mx-auto" />
            </div>

            {/* Center: Description + address */}
            <div className="md:col-span-3 hero-anim hero-d3">
              <p className="text-base text-white/60 leading-relaxed font-light">
                Vi erbjuder helt oberoende förmögenhetsrådgivning,
                kapitalförvaltning och private banking — utan egna fonder och
                utan oönskade incitament.
              </p>
              <div className="border-t border-white/10 mt-6 pt-6 flex items-center gap-2 text-sm text-white/40">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Artillerigatan 45, Stockholm</span>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block lg:col-span-1 hero-anim hero-d4">
              <div className="w-px h-24 bg-gradient-to-b from-white/20 to-white/5 mx-auto" />
            </div>

            {/* Right: CTAs */}
            <div className="md:col-span-12 lg:col-span-2 hero-anim hero-d4">
              <div className="flex flex-row lg:flex-col gap-3">
                <Link
                  href="#kontakt"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-zinc-900 bg-white hover:bg-zinc-100 rounded-full px-4 py-2.5 transition whitespace-nowrap"
                >
                  Boka möte
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="#tjanster"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-white/10 ring-1 ring-white/15 hover:bg-white/15 rounded-full px-4 py-2.5 transition whitespace-nowrap"
                >
                  Våra tjänster
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
