import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/aerial-view-shot-stockholm-city-center-summer-vacation-travel-concept.jpg"
        alt="Stockholm stadsvy"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f1e]/65 via-[#0d0f1e]/45 to-[#0d0f1e]/75" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end">
        <div className="max-w-6xl mx-auto px-6 md:px-8 pb-20 w-full">
          {/* Divider */}
          <div className="mb-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            {/* Left — Headline */}
            <div className="md:col-span-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-xs text-white/80 bg-white/[0.08] ring-1 ring-white/10 rounded-full px-3 py-1.5 mb-6 backdrop-blur-sm anim-hero">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Oberoende · Stockholm · Under FI-tillsyn</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-semibold text-white leading-[1.05] font-[family-name:var(--font-manrope)] tracking-tight anim-hero anim-hero-delay-1">
                Rätt rådgivning.
                <br />
                <span className="text-white/55">På dina villkor.</span>
              </h1>

              <p className="text-lg text-white/65 leading-relaxed mt-6 max-w-md anim-hero anim-hero-delay-2">
                Vi är ett oberoende värdepappersbolag utan egna fonder eller
                provisioner — bara genuint engagerade i din ekonomiska framgång.
              </p>

              <div className="flex gap-3 mt-8 anim-hero anim-hero-delay-3">
                <Link
                  href="#kontakt"
                  className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Boka möte
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link
                  href="#tjanster"
                  className="inline-flex items-center gap-2 bg-white/10 ring-1 ring-white/15 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/15 transition-colors"
                >
                  Våra tjänster
                </Link>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden md:block md:col-span-1 self-stretch">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent mx-auto" />
            </div>

            {/* Right — Stats */}
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="25+" label="Års erfarenhet" />
                <StatCard value="100%" label="Oberoende" />
                <StatCard value="FI" label="Tillstånd" />
                <StatCard value="Sthlm" label="Artillerigatan 45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/[0.08] backdrop-blur-sm ring-1 ring-white/10 rounded-2xl p-5 hover:bg-white/[0.12] transition-colors duration-500">
      <div className="text-3xl font-[family-name:var(--font-manrope)] font-semibold text-white">
        {value}
      </div>
      <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
