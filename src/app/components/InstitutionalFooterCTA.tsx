"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InstitutionalFooterCTA() {
  return (
    <footer
      id="kontakt"
      className="dark-section component--footer relative w-full overflow-hidden text-white"
      style={{
        backgroundColor: "#0F0F10",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: "clamp(6rem, 14vw, 12rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* ── Massive Closing Call to Action ── */}
        <div className="max-w-4xl mb-20 sm:mb-28">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C4A882] mb-6 block">
            08 — Dialog & Kontakt
          </span>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light leading-[1.05] tracking-tight mb-8">
            Din framtid börjar <br />
            med ett förtroendefullt samtal.
          </h2>

          <p className="text-base sm:text-xl font-light text-white/70 leading-relaxed mb-10 max-w-2xl">
            Ta kontakt för en konfidentiell genomgång av din nuvarande portfölj, dina familjemål och hur ett genuint oberoende mandat kan stärka din nettoavkastning.
          </p>

          <div>
            <Link
              href="mailto:kontakt@addeqt.se"
              className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#C4A882] hover:bg-[#D4BC98] text-[#0F0F10] font-medium text-xs sm:text-sm font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_40px_rgba(196,168,130,0.35)]"
            >
              <span>Boka ett introduktionsmöte</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Institutional Partner Marquee Strip ── */}
        <div className="py-8 border-y border-white/10 mb-16 flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-white/40 uppercase tracking-widest">
          <span>Depåbank: Nordnet</span>
          <span>·</span>
          <span>Samarbetspartners: SEB · Carnegie</span>
          <span>·</span>
          <span>FI-auktorisation: Feb 2023</span>
          <span>·</span>
          <span>Stockholm, Sverige</span>
        </div>

        {/* ── Footer Navigation & Corporate Details ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-6">
          
          {/* Col 1: Addeqt Brand */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-display text-2xl font-light tracking-widest text-white block mb-4">
                ADDEQT
              </span>
              <p className="text-xs text-white/50 leading-relaxed font-light max-w-sm">
                Addeqt Asset Management AB är ett svenskt värdepappersbolag med tillstånd från Finansinspektionen att bedriva diskretionär portföljförvaltning och investeringsrådgivning.
              </p>
            </div>

            <div className="pt-8 text-[11px] font-mono text-white/30">
              © {new Date().getFullYear()} Addeqt Asset Management AB. Alla rättigheter förbehållna.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
            <span className="text-[#C4A882] mb-2">Tjänster</span>
            <Link href="/tjanster/kapitalforvaltning" className="text-white/70 hover:text-white transition-colors">
              Kapitalförvaltning
            </Link>
            <Link href="/tjanster/formogenhetsradgivning" className="text-white/70 hover:text-white transition-colors">
              Förmögenhetsrådgivning
            </Link>
            <Link href="/tjanster/private-banking" className="text-white/70 hover:text-white transition-colors">
              Private Banking
            </Link>
            <Link href="/tjanster/skatteoptimering" className="text-white/70 hover:text-white transition-colors">
              Skatteoptimering
            </Link>
          </div>

          {/* Col 3: Address & Legal */}
          <div className="md:col-span-3 flex flex-col gap-3 font-mono text-xs">
            <span className="text-[#C4A882] uppercase tracking-wider mb-2">Kontor</span>
            <span className="text-white/70">Artillerigatan 45</span>
            <span className="text-white/70">114 45 Stockholm</span>
            <Link href="mailto:kontakt@addeqt.se" className="text-white/70 hover:text-[#C4A882] transition-colors pt-2">
              kontakt@addeqt.se
            </Link>
            <span className="text-white/40 text-[10px] pt-4 leading-relaxed">
              Organisationsnummer: 559288-7404 <br />
              Styrelsens säte: Stockholm
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
