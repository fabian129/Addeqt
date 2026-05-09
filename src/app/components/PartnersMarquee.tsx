"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const partners = [
  "Nordnet", "Finansinspektionen", "SEB", "Avanza",
  "Carnegie", "Swedbank", "Handelsbanken",
];

export default function PartnersMarquee() {
  const ref = useScrollReveal();

  return (
    <section className="py-12 border-y border-zinc-100 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 mb-8 reveal">
        <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest border-b border-zinc-200 pb-3 inline-block">
          Samarbetar med
        </p>
      </div>
      <div
        className="overflow-hidden reveal reveal-d1"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <div className="ticker-track flex gap-20 items-center" style={{ width: "200%" }}>
          <div className="flex gap-20 shrink-0 items-center">
            {partners.map((name, i) => (
              <span
                key={name}
                className={`text-lg tracking-tighter whitespace-nowrap ${
                  i % 2 === 0
                    ? "font-semibold text-zinc-800"
                    : "font-normal text-zinc-500"
                }`}
              >
                {name}
              </span>
            ))}
          </div>
          <div className="flex gap-20 shrink-0 items-center" aria-hidden="true">
            {partners.map((name, i) => (
              <span
                key={`dup-${name}`}
                className={`text-lg tracking-tighter whitespace-nowrap ${
                  i % 2 === 0
                    ? "font-semibold text-zinc-800"
                    : "font-normal text-zinc-500"
                }`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
