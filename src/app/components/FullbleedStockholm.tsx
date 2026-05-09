import Image from "next/image";
import Link from "next/link";

export default function FullbleedStockholm() {
  return (
    <section id="om-oss" className="relative overflow-hidden py-24 lg:py-36">
      {/* Fullbleed background */}
      <Image
        src="/images/panoramic-view-stockholm-city.jpg"
        alt="Stockholm panorama"
        fill
        className="object-cover"
        quality={80}
      />

      {/* Gradient overlay — left-heavy to allow text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f1e]/85 via-[#0d0f1e]/60 to-[#0d0f1e]/30" />

      {/* Subtle grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-y-0 left-[25%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-y-0 left-[50%] w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute inset-y-0 left-[75%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Empty left — image shows through */}
          <div className="lg:col-span-7" />

          {/* Right — content panel */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 mb-6">
              <span className="uppercase tracking-widest text-[10px]">
                Vår plattform
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white font-[family-name:var(--font-manrope)] leading-[1.05]">
              Oberoende rådgivning i världsklass
            </h2>

            <p className="mt-6 text-base text-white/70 font-light leading-relaxed">
              Vi är ett oberoende värdepappersbolag under tillsyn av
              Finansinspektionen. Det innebär att vi aldrig styrs av
              provisioner eller egna intressen — bara av din ekonomiska
              framgång.
            </p>

            <Link
              href="#kontakt"
              className="group inline-flex items-center gap-2 mt-8 text-sm font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 transition"
            >
              Kontakta en rådgivare
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
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
          </div>
        </div>
      </div>
    </section>
  );
}
