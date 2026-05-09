"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";

const cards = [
  {
    title: "Fullständigt oberoende",
    desc: "Inga egna fonder. Inga oönskade incitament. Alltid ditt bästa.",
    visual: "cards", // layered cards
  },
  {
    title: "Djup marknadserfarenhet",
    desc: "25+ år på de svenska och globala finansmarknaderna.",
    visual: "lines", // scanning lines
  },
  {
    title: "Strukturerad rådgivning",
    desc: "Systematisk process — alltid med din situation i centrum.",
    visual: "grid", // isometric grid
  },
  {
    title: "Din partner, inte din bank",
    desc: "Vi anpassar oss efter dig — inte tvärtom.",
    visual: "rings", // concentric rings
  },
];

function CardVisual({ type }: { type: string }) {
  if (type === "cards") {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-60">
        <div className="relative w-28 h-28 transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent border border-white/15 rounded-2xl -rotate-[15deg] group-hover:-rotate-[20deg] transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] to-transparent border border-white/20 rounded-2xl -rotate-[5deg] group-hover:rotate-0 transition-transform duration-500 delay-75" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent border border-white/25 rounded-2xl rotate-[5deg] group-hover:rotate-[15deg] transition-transform duration-500 delay-150 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/10 blur-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "lines") {
    return (
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          <div className="absolute top-1/4 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent -rotate-12 group-hover:translate-x-[8%] transition-transform duration-[2s]" />
          <div className="absolute top-1/2 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent -rotate-12 -translate-x-[15%] group-hover:translate-x-[12%] transition-transform duration-[1.8s]" />
          <div className="absolute top-2/3 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-12 group-hover:translate-x-[20%] transition-transform duration-[2.2s]" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2 group-hover:bg-white/10 transition-colors duration-500" />
        </div>
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "800px" }}>
        <div className="relative transform rotate-x-[55deg] rotate-z-[45deg] scale-75 group-hover:scale-90 transition-transform duration-700">
          <div className="w-44 h-44 border border-white/10 bg-white/5 grid grid-cols-4 grid-rows-4 rounded-lg">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`border-r border-b border-white/5 ${
                  i === 5 ? "bg-white/15 group-hover:bg-white/25 transition-colors" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // rings
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-36 h-36 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-white/5 scale-100 group-hover:scale-125 transition-transform duration-700 ease-out" />
        <div className="absolute inset-4 rounded-full border border-white/5 scale-100 group-hover:scale-110 transition-transform duration-700 delay-75" />
        <div className="absolute inset-8 rounded-full border border-white/10 opacity-50 border-dashed group-hover:scale-105 transition-transform duration-700 delay-150" />
        <div className="absolute inset-0 animate-[spin_14s_linear_infinite] opacity-30">
          <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2" />
          <div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2" />
        </div>
        <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)] z-10" />
      </div>
    </div>
  );
}

export default function DarkCards() {
  const ref = useScrollReveal();

  return (
    <section id="om-oss" className="relative py-28 px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
          <div className="reveal">
            <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest border-b border-zinc-200 pb-1 inline-block mb-4">
              Det här är det vi står för
            </span>
            <h2 className="text-5xl md:text-6xl font-light tracking-[-0.04em] text-zinc-900 leading-[1.0] font-display max-w-xl">
              Vår kompetens.
            </h2>
          </div>
          <div className="max-w-md reveal reveal-d2">
            <p className="text-lg text-zinc-500 font-light leading-relaxed">
              Vi bygger inte produkter — vi bygger relationer. Vår approach
              kombinerar djup finansiell kompetens med ett genuint oberoende
              perspektiv.
            </p>
            <Link
              href="#tjanster"
              className="group inline-flex items-center text-zinc-900 font-medium hover:text-zinc-600 transition mt-6 text-sm"
            >
              Se alla tjänster
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>

        {/* 4 Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal reveal-d${i + 1} group relative h-80 rounded-[2rem] bg-[#0D0F1E] overflow-hidden border border-white/5 hover:border-[#242748]/40 transition-colors duration-500`}
            >
              <CardVisual type={card.visual} />
              <div className="absolute bottom-0 left-0 right-0 p-7 flex items-end justify-between z-10">
                <div>
                  <h3 className="text-lg font-medium text-white tracking-tight group-hover:text-blue-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <button className="w-10 h-10 shrink-0 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
