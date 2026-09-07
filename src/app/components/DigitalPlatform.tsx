"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { 
  Shield, 
  Lock, 
  TrendingUp, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  Download,
  Users
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────────
   HUD MODULES DATA (Preserving Fabian's Data & Wealth Copy)
   ───────────────────────────────────────────────────────────── */

interface ModuleData {
  id: string;
  num: string;
  code: string;
  title: string;
  breadcrumb: string;
  navLabel: string;
  subLabels: string[];
  funktion: string;
  arkitektur: string;
  status: string;
  metric: {
    value: string;
    unit: string;
    badge: string;
    badgeColor: string;
    subtitle: string;
  };
  callouts: {
    label: string;
    val: string;
  }[];
}

const HUD_MODULES: ModuleData[] = [
  {
    id: "portfolio",
    num: "01",
    code: "MODUL 01",
    title: "PORTFÖLJANALYS & REALTIDSVÄRDERING",
    breadcrumb: "Plattform // Portföljarkitektur // Realtidskurser",
    navLabel: "01. PORTFÖLJANALYS",
    subLabels: ["- REALTIDSKURSER", "- FONDALLOKERING"],
    funktion: "Realtidsuppföljning av din samlade allokering mot globala index med diskretionär anpassning efter din riskprofil och tidshorisont.",
    arkitektur: "100% Öppet fonduniversum utan egna produkter. Automatisk portföljbalansering och noll dolda kickbacks.",
    status: "+14.2% YTD · Depå hos Nordnet & SEB · 0 kr kickbacks",
    metric: {
      value: "14 850 000",
      unit: "SEK",
      badge: "+14.2% YTD",
      badgeColor: "#4ADE80",
      subtitle: "Samlat portföljvärde i realtid",
    },
    callouts: [
      { label: "Depåbank", val: "Nordnet / SEB" },
      { label: "Mandat", val: "Diskretionärt & Rådgivande" },
      { label: "Universum", val: "100% Öppet (Noll kickbacks)" },
    ],
  },
  {
    id: "vault",
    num: "02",
    code: "MODUL 02",
    title: "KRYPTERAT VALV & BANKID-SIGNERING",
    breadcrumb: "Plattform // Krypterat Arkiv // BankID Säkerhet",
    navLabel: "02. KRYPTERAT VALV",
    subLabels: ["- BANKID-SIGNERING", "- DOKUMENTARKIV"],
    funktion: "Säker distribution och omedelbar BankID-signering av förvaltningsbeslut, årsredovisningar och kvartalsrapporter utan pappershantering.",
    arkitektur: "End-to-end hårdvarukrypterad arkitektur (AES-256) under strikt tillsyn av Finansinspektionen.",
    status: "Säkerhetsnivå: Maximal · BankID-verifierad · 2 ärenden klara",
    metric: {
      value: "BankID",
      unit: "Aktivt",
      badge: "Säkerhetsnivå: Maximal",
      badgeColor: "#C4A882",
      subtitle: "Dokumentskydd & Signering",
    },
    callouts: [
      { label: "Verifiering", val: "Svenskt BankID (Biometri)" },
      { label: "Kryptering", val: "AES-256 Hårdvarusäkrat" },
      { label: "Tillsyn", val: "Finansinspektionen (FI)" },
    ],
  },
  {
    id: "dialog",
    num: "03",
    code: "MODUL 03",
    title: "DIREKT DIALOG MED SENIOR PARTNER",
    breadcrumb: "Plattform // Rådgivningsteam // Diskret Kanal",
    navLabel: "03. DIREKT DIALOG",
    subLabels: ["- SENIOR FÖRVALTARE", "- DISKRET CHATT"],
    funktion: "En personlig, direkt kommunikationskanal till dina förvaltare utan telefonköer, servicedesk eller standardiserade svarsmallar.",
    arkitektur: "Direktkontakt med Mats Gunnå, Carl Christian Ottander och Fredrik Lidmark. Löpande avstämningar och strategiska initiativ.",
    status: "Live Sync aktiv · Seniora partners tillgängliga · Svarstid < 15 min",
    metric: {
      value: "Live Sync",
      unit: "Aktiv",
      badge: "Partner Direkt",
      badgeColor: "#38BDF8",
      subtitle: "Inga servicedesks eller köer",
    },
    callouts: [
      { label: "Kontaktpunkt", val: "Mats, Carl Christian, Fredrik" },
      { label: "Kanal", val: "Krypterad direktkommunikation" },
      { label: "Respons", val: "Omedelbar partnerdialog" },
    ],
  },
];

export default function DigitalPlatform() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  const currentMod = HUD_MODULES[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : HUD_MODULES.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < HUD_MODULES.length - 1 ? prev + 1 : 0));
  };

  useGSAP(
    () => {
      const container = containerRef.current;
      const hud = hudRef.current;
      if (!container || !hud) return;

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) return;

      gsap.fromTo(
        hud,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="insikter"
      className="dark-section component--digitalplatform relative w-full overflow-hidden text-white"
      style={{
        backgroundColor: "#0A0D16", // Subtle muted midnight navy base
        paddingTop: "clamp(5rem, 10vw, 8rem)",
        paddingBottom: "clamp(6rem, 10vw, 9rem)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Ambient background glows — Soft Muted Sapphire & Warm Champagne */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse at center, rgba(30, 58, 110, 0.12) 0%, rgba(196, 168, 130, 0.04) 50%, transparent 75%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A882]">
              05 — Digital Plattform
            </span>
            <span className="h-px w-8 bg-[#C4A882]/40" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/40 hidden sm:inline">
              Förmögenhetsarkitektur
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.12] tracking-tight mb-4">
            Din förmögenhet, <br />
            direkt i fickan.
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-xl">
            Följ marknaden i realtid, signera viktiga dokument med BankID och kommunicera säkert med ditt rådgivningsteam. Byggd från grunden för total transparens.
          </p>
        </div>

        {/* ── THE GLASS HUD CONSOLE (Understated Muted Sapphire & Champagne Cockpit) ── */}
        <div
          ref={hudRef}
          className="relative w-full rounded-[26px] sm:rounded-[34px] bg-[#101522]/90 border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.7)] p-5 sm:p-8 lg:p-10 backdrop-blur-2xl overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        >
          {/* Subtle top ambient sheen */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          {/* ── HUD Top Navigation Bar ── */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            
            {/* Horizontal Tabs */}
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 max-w-full">
              {["ÖVERSIKT", "PORTFÖLJ", "VALV", "RÅDGIVNING", "SÄKERHET"].map((tab, idx) => {
                const targetModIdx = idx === 0 || idx === 1 ? 0 : idx === 2 ? 1 : idx === 3 ? 2 : 1;
                const isSelected = activeIdx === targetModIdx;
                
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveIdx(targetModIdx)}
                    className={`font-mono text-[10px] sm:text-xs uppercase tracking-widest px-3.5 sm:px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-white/12 text-white font-medium border border-white/25 shadow-sm"
                        : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Top Right System Status */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse shadow-[0_0_8px_#4ade80]" />
                <span className="font-mono text-[10px] tracking-wider uppercase text-white/80">
                  LIVE SYNC
                </span>
              </div>
              <div className="font-mono text-[11px] tracking-widest text-[#C4A882] font-medium hidden sm:block">
                ADDEQT // OS
              </div>
            </div>
          </div>

          {/* ── HUD Breadcrumb & Module Heading ── */}
          <div className="mb-8">
            <div className="font-mono text-[11px] text-white/50 tracking-widest uppercase mb-2 flex items-center gap-2">
              <span>{currentMod.breadcrumb}</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-[#C4A882] tracking-widest uppercase font-semibold">
                {currentMod.code}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
                {currentMod.title}
              </h3>
            </div>
          </div>

          {/* ── HUD Main Cockpit Grid (3 Columns) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* ── Left Column: Interactive Module Selector Pills ── */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">
                Välj Kontrollmodul
              </span>

              {HUD_MODULES.map((mod, i) => {
                const isActive = activeIdx === i;
                return (
                  <div key={mod.id} className="flex flex-col">
                    <button
                      onClick={() => setActiveIdx(i)}
                      className={`text-left w-full px-4 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-between ${
                        isActive
                          ? "bg-white/[0.08] border border-[#C4A882]/60 text-white font-medium shadow-sm"
                          : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      <span>{mod.navLabel}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? "text-[#C4A882] translate-x-1" : "text-white/30"}`} />
                    </button>

                    {/* Sub-items when active */}
                    {isActive && (
                      <div className="pl-4 py-2 flex flex-col gap-1 border-l-2 border-[#C4A882]/40 ml-4 mt-1.5">
                        {mod.subLabels.map((sub, sIdx) => (
                          <span key={sIdx} className="font-mono text-[10px] text-[#C4A882]/80 tracking-widest uppercase">
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ── Middle Column: Technical Specifications & Telemetry ── */}
            <div className="lg:col-span-4 flex flex-col justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex flex-col gap-5">
                
                {/* Spec Block 1: Funktion */}
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C4A882] block mb-1.5">
                    // Funktion
                  </span>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    {currentMod.funktion}
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                {/* Spec Block 2: Arkitektur & Säkerhet */}
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 block mb-1.5">
                    // Arkitektur & Säkerhet
                  </span>
                  <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                    {currentMod.arkitektur}
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                {/* Spec Block 3: Status & Depå */}
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#4ADE80] block mb-1.5">
                    // Status & Depå
                  </span>
                  <p className="font-mono text-xs text-white/90 leading-relaxed">
                    {currentMod.status}
                  </p>
                </div>
              </div>

              {/* Dynamic Callout Badges */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {currentMod.callouts.map((c, cIdx) => (
                  <div key={cIdx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                    <span className="text-[#C4A882]">{c.label}: </span>
                    <span>{c.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Column: Interactive Visual Core & Device Telemetry ── */}
            <div className="lg:col-span-5 relative flex items-center justify-center p-4 sm:p-6 rounded-2xl bg-black/30 border border-white/10 overflow-hidden min-h-[360px]">
              
              {/* Technical schematic background lines in subtle white */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
                <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="rgba(196,168,130,0.3)" strokeDasharray="4 4" />
                <line x1="10%" y1="80%" x2="90%" y2="80%" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
                <circle cx="50%" cy="50%" r="90" stroke="rgba(255,255,255,0.15)" fill="none" />
                <circle cx="50%" cy="50%" r="130" stroke="rgba(255,255,255,0.06)" fill="none" />
              </svg>

              {/* ── Module 1 Visual: Live Portfolio Telemetry ── */}
              {activeIdx === 0 && (
                <div className="relative z-10 w-full max-w-[340px] p-5 rounded-2xl bg-[#131826]/95 border border-white/12 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-2">
                    <span>PORTFÖLJVÄRDERING</span>
                    <span className="text-[#4ADE80] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" /> LIVE
                    </span>
                  </div>

                  <div className="font-display text-3xl font-light text-white mb-1">
                    14 850 000 <span className="text-sm font-sans text-white/40">SEK</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs mb-4">
                    <span className="px-2 py-0.5 rounded bg-[#4ADE80]/15 text-[#4ADE80] font-mono font-medium">
                      +14.2% YTD
                    </span>
                    <span className="text-white/40 text-[11px]">vs OMXS30 (+8.2%)</span>
                  </div>

                  {/* Sparkline curve in soft steel blue */}
                  <div className="w-full h-12 mb-4">
                    <svg viewBox="0 0 240 50" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="hud-spark-fill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(96,165,250,0.2)" />
                          <stop offset="100%" stopColor="rgba(96,165,250,0)" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 45 Q 40 40, 80 28 T 160 22 T 240 6 L 240 50 L 0 50 Z"
                        fill="url(#hud-spark-fill)"
                      />
                      <path
                        d="M 0 45 Q 40 40, 80 28 T 160 22 T 240 6"
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="240" cy="6" r="4" fill="#60A5FA" />
                    </svg>
                  </div>

                  {/* Volume Allocation Bars */}
                  <div className="flex items-end gap-1.5 h-8 pt-2 border-t border-white/10">
                    {[35, 50, 42, 70, 58, 85, 76, 100].map((val, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 rounded-t-sm transition-all duration-300 ${
                          idx === 7 ? "bg-[#60A5FA] shadow-[0_0_8px_rgba(96,165,250,0.5)]" : "bg-white/10 hover:bg-white/20"
                        }`}
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* ── Module 2 Visual: BankID Encrypted Vault ── */}
              {activeIdx === 1 && (
                <div className="relative z-10 w-full max-w-[340px] p-5 rounded-2xl bg-[#131826]/95 border border-white/12 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-3">
                    <span className="flex items-center gap-1.5 text-[#C4A882]">
                      <Shield className="w-3.5 h-3.5 text-[#C4A882]" /> KRYPTERAT VALV
                    </span>
                    <span className="text-[#4ADE80] font-mono">BANKID SÄKRAD</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-3">
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-mono text-white/50">SÄKERHETSNIVÅ</span>
                      <span className="font-mono text-[#4ADE80] font-medium">MAXIMAL (AES-256)</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#C4A882] to-[#4ADE80] w-full" />
                    </div>
                  </div>

                  {/* Document Items */}
                  <div className="flex flex-col gap-2">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-[#C4A882]" />
                        <span className="text-white/90">Signering: Årsredovisning 2025</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded bg-[#C4A882]/20 text-[#C4A882] font-mono text-[9px]">
                        BANKID
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-[#4ADE80]" />
                        <span className="text-white/90">Kvartalsrapport Q1</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded bg-[#4ADE80]/20 text-[#4ADE80] font-mono text-[9px]">
                        REDO
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Module 3 Visual: Partner Advisory Dialog ── */}
              {activeIdx === 2 && (
                <div className="relative z-10 w-full max-w-[340px] p-5 rounded-2xl bg-[#131826]/95 border border-white/12 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-3">
                    <span className="flex items-center gap-1.5 text-[#60A5FA]">
                      <Users className="w-3.5 h-3.5 text-[#60A5FA]" /> DEDIKERAT PARTNERTEAM
                    </span>
                    <span className="text-[#4ADE80] font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" /> ONLINE
                    </span>
                  </div>

                  <div className="space-y-2.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#C4A882]/20 border border-[#C4A882]/40 flex items-center justify-center font-display text-xs text-[#C4A882]">
                        MG
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-xs text-white font-medium">Mats Gunnå</div>
                        <div className="text-[10px] text-white/50 font-mono">Senior Förvaltare</div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#4ADE80] shadow-[0_0_6px_#4ade80]" />
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#60A5FA]/20 border border-[#60A5FA]/40 flex items-center justify-center font-display text-xs text-[#60A5FA]">
                        CC
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-xs text-white font-medium">Carl Christian Ottander</div>
                        <div className="text-[10px] text-white/50 font-mono">Senior Förvaltare</div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#4ADE80] shadow-[0_0_6px_#4ade80]" />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-white/90">
                    <span className="font-mono text-[9px] text-[#C4A882] block mb-0.5">// DIREKTKANAL</span>
                    "Löpande omviktning genomförd i enlighet med överenskommet mandat."
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* ── HUD Bottom Controls & Metadata ── */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            
            {/* Step buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-white/60" />
                <span>Föregående</span>
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Nästa</span>
                <ChevronRight className="w-3.5 h-3.5 text-white/60" />
              </button>
            </div>

            {/* HUD Metadata */}
            <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
              // ADDEQT WEALTH ARCHITECTURE // REV 2.6 // BANKID CERTIFIED // FI-REGLERAD
            </div>
          </div>

        </div>

        {/* ── Download CTAs & Badges (Fabian's Complete Package) ── */}
        <div className="mt-12 flex flex-col items-center justify-center gap-5 text-center">
          <div>
            <button className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#C4A882]/70 rounded-full text-white font-medium hover:shadow-[0_0_35px_rgba(196,168,130,0.3)] transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C4A882]/25 to-[#C4A882]/05 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Download className="w-4 h-4 relative z-10 text-[#C4A882]" />
              <span className="relative z-10 font-mono text-xs uppercase tracking-widest text-white">
                Ladda ner Addeqt
              </span>
            </button>
          </div>

          {/* Official Store Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#app-store"
              className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-200"
            >
              <svg className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.75 1.01.08 2.06-.5 2.68-1.25z"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-white/50 leading-none">Hämta i</span>
                <span className="text-xs font-medium text-white/90 group-hover:text-white leading-tight">App Store</span>
              </div>
            </a>

            <a
              href="#google-play"
              className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-200"
            >
              <svg className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.036 2.036 0 0 1-.22-.924V2.738c0-.337.08-.654.219-.924zm11.242 11.243l2.456 2.456-11.45 6.47 8.994-8.926zm0-2.114L5.857 2.017l11.45 6.47-2.456 2.456zm1.472 1.057l3.666 2.072a1.05 1.05 0 0 1 0 1.856l-3.666 2.072-2.18-2.18 2.18-1.82z"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-white/50 leading-none">Ladda ned på</span>
                <span className="text-xs font-medium text-white/90 group-hover:text-white leading-tight">Google Play</span>
              </div>
            </a>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-2 pt-1 text-white/40 text-xs font-mono">
            <Shield className="w-3.5 h-3.5 text-[#4ADE80]" />
            <span>Svenskt BankID · Krypterad direktkommunikation · FI-reglerat</span>
          </div>
        </div>

      </div>
    </section>
  );
}
