"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTAFooter() {
  const sectionRef = useScrollReveal();

  return (
    <footer ref={sectionRef} className="max-w-6xl mx-auto px-6 md:px-8 mt-20 pb-40" id="kontakt">
      {/* CTA Block */}
      <div className="reveal relative bg-[#0F0F10] rounded-[40px] p-10 md:p-20 overflow-hidden text-white shadow-2xl ring-1 ring-white/10">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none bg-[#242748]/30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none bg-[#3d4a8a]/15" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-[11px] font-medium mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Tar emot nya klienter
          </div>

          {/* Heading */}
          <h2 className="font-[family-name:var(--font-manrope)] text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95] mb-6 text-white">
            Redo att ta
            <br />
            <span className="gradient-text">nästa steg?</span>
          </h2>

          {/* Body */}
          <p className="text-lg text-gray-400 max-w-md mx-auto leading-relaxed mb-10 font-medium">
            Boka ett kostnadsfritt och förutsättningslöst samtal. Vi lyssnar,
            ställer rätt frågor och ger dig en tydlig bild av vad vi kan göra
            för dig.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href="mailto:info@addeqt.com"
              className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-all hover:scale-105"
            >
              Skicka e-post
            </Link>
            <Link
              href="tel:+46858006620"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-white border border-white/15 hover:bg-white/10 transition-colors"
            >
              08-580 066 20
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-[family-name:var(--font-mono)] text-gray-500 uppercase tracking-wider">
            <span>Kostnadsfritt första möte</span>
            <span className="text-gray-600">/</span>
            <span>Inga bindningar</span>
            <span className="text-gray-600">/</span>
            <span>Tillståndspliktigt bolag</span>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="reveal reveal-d2 mt-20 px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 border-b border-gray-200 pb-12">
          {/* Logo + description */}
          <div className="col-span-2 md:col-span-4 pr-0 md:pr-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 189 35.32" className="h-5 w-auto mb-5" style={{ fill: "#1d1d1f" }}>
              <g>
                <path d="M22.73,8.64h5.08l12,31.17H35.58L33,33H17.57L15,39.81H10.73ZM31.58,29.3,25.29,12.73,19,29.3Z" transform="translate(-10.73 -8.17)" />
                <path d="M45.39,39.81V8.64H56.33a18.58,18.58,0,0,1,6.58,1.11A14.64,14.64,0,0,1,68,12.92a13.72,13.72,0,0,1,3.26,4.91,17.13,17.13,0,0,1,1.14,6.4,17.38,17.38,0,0,1-1.14,6.42A13.42,13.42,0,0,1,68,35.55a14.89,14.89,0,0,1-5.07,3.15,18.58,18.58,0,0,1-6.58,1.11Zm4-3.72h7a13.91,13.91,0,0,0,4.88-.81A10.62,10.62,0,0,0,65,32.93a10.42,10.42,0,0,0,2.4-3.75,14,14,0,0,0,.83-4.95,14.1,14.1,0,0,0-.83-5A10.42,10.42,0,0,0,65,15.52a10.62,10.62,0,0,0-3.75-2.35,13.91,13.91,0,0,0-4.88-.81h-7Z" transform="translate(-10.73 -8.17)" />
                <path d="M79.36,39.81V8.64H90.3a18.58,18.58,0,0,1,6.58,1.11A14.64,14.64,0,0,1,102,12.92a13.85,13.85,0,0,1,3.26,4.91,17.13,17.13,0,0,1,1.14,6.4,17.38,17.38,0,0,1-1.14,6.42,13.55,13.55,0,0,1-3.26,4.9,14.89,14.89,0,0,1-5.07,3.15,18.58,18.58,0,0,1-6.58,1.11Zm4-3.72h7a14,14,0,0,0,4.88-.81,10.62,10.62,0,0,0,3.75-2.35,10.4,10.4,0,0,0,2.39-3.75,13.82,13.82,0,0,0,.84-4.95,13.87,13.87,0,0,0-.84-5,10.4,10.4,0,0,0-2.39-3.75,10.62,10.62,0,0,0-3.75-2.35,14,14,0,0,0-4.88-.81h-7Z" transform="translate(-10.73 -8.17)" />
                <path d="M113.33,8.64h21.4v3.72H117.28V22.55h14.85V26H117.28V36.09h17.45v3.72h-21.4Z" transform="translate(-10.73 -8.17)" />
                <path d="M143.57,24.23a11.92,11.92,0,0,1,.93-4.68,12.16,12.16,0,0,1,6.35-6.47,11.36,11.36,0,0,1,4.59-.95,11.24,11.24,0,0,1,4.6.95c.26.11.5.24.74.37.95-1,1.94-2,2.95-2.95a16.33,16.33,0,0,0-2-1.07,16.13,16.13,0,0,0-12.5,0,16.24,16.24,0,0,0-5.12,3.44A16.41,16.41,0,0,0,140.64,18a16.11,16.11,0,0,0,0,12.49,16.69,16.69,0,0,0,1.22,2.29c.5-.43,1-.87,1.51-1.28s1.16-.9,1.74-1.35a13,13,0,0,1-.61-1.24A11.91,11.91,0,0,1,143.57,24.23Z" transform="translate(-10.73 -8.17)" />
                <path d="M169.79,31.46a15.53,15.53,0,0,0,1.7-7.23A15.6,15.6,0,0,0,170.23,18a17.18,17.18,0,0,0-1.46-2.71c-1.05,1-2.09,1.94-3.05,3a11.4,11.4,0,0,1,.65,1.31,12.17,12.17,0,0,1-2.56,13.21A12.25,12.25,0,0,1,160,35.37a11.24,11.24,0,0,1-4.6,1,11.36,11.36,0,0,1-4.59-1l-.7-.35c-.65.52-1.33,1-2,1.54-.47.38-.93.78-1.39,1.17A17.49,17.49,0,0,0,149.2,39a16,16,0,0,0,9.56.91,16.5,16.5,0,0,0,3.1-1l3.91,4.56h4.93L165.21,37A16.32,16.32,0,0,0,169.79,31.46Z" transform="translate(-10.73 -8.17)" />
                <path d="M184.57,12.36H173.35V8.64h26.38v3.72H188.52V39.81h-4Z" transform="translate(-10.73 -8.17)" />
                <path d="M148.55,22.93h5.89V17h2.74v5.89h5.89v2.74h-5.89v5.89h-2.74V25.67h-5.89Z" transform="translate(-10.73 -8.17)" />
              </g>
            </svg>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs font-medium">
              Oberoende förmögenhetsrådgivning och kapitalförvaltning.
              Tillståndspliktigt värdepappersbolag under Finansinspektionens tillsyn.
            </p>
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-[#242748] hover:text-white transition-all mt-5"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
          </div>

          {/* Tjanster */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h4 className="font-semibold text-sm mb-5 text-[#1d1d1f]">Tjänster</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><Link href="#tjanster" className="hover:text-black transition-colors">Kapitalförvaltning</Link></li>
              <li><Link href="#tjanster" className="hover:text-black transition-colors">Förmögenhetsrådgivning</Link></li>
              <li><Link href="#tjanster" className="hover:text-black transition-colors">Private Banking</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-sm mb-5 text-[#1d1d1f]">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><Link href="mailto:info@addeqt.com" className="hover:text-black transition-colors">info@addeqt.com</Link></li>
              <li><Link href="tel:+46858006620" className="hover:text-black transition-colors">08-580 066 20</Link></li>
              <li className="text-xs leading-relaxed text-gray-400">Artillerigatan 45<br />114 45 Stockholm</li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-2 md:col-span-3">
            <h4 className="font-semibold text-sm mb-5 text-[#1d1d1f]">Information</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><Link href="/gdpr" className="hover:text-black transition-colors">GDPR &amp; Integritet</Link></li>
              <li><Link href="/juridik" className="hover:text-black transition-colors">Juridisk information</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
          <p>&copy; 2026 AddEqt AB. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0 px-3 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-100">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Tillståndspliktigt bolag &middot; Finansinspektionen
          </div>
        </div>
      </div>
    </footer>
  );
}
