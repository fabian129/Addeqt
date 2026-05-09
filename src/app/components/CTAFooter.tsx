import Link from "next/link";

export default function CTAFooter() {
  return (
    <footer className="max-w-6xl mx-auto px-6 md:px-8 mt-20 pb-40" id="kontakt">
      {/* CTA Block */}
      <div className="relative bg-[#0F0F10] rounded-[40px] p-10 md:p-20 overflow-hidden text-white shadow-2xl ring-1 ring-white/10">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none bg-[#242748]/30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none bg-[#3d4a8a]/15" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-[11px] font-medium mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Tar emot nya klienter
            </div>

            <h2 className="font-[family-name:var(--font-manrope)] text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95] mb-6 text-white">
              Redo att ta
              <br />
              <span className="gradient-text">nästa steg?</span>
            </h2>

            <p className="text-lg text-gray-400 max-w-md leading-relaxed mb-10 font-medium">
              Boka ett kostnadsfritt och förutsättningslöst samtal. Vi lyssnar,
              ställer rätt frågor och ger dig en tydlig bild av vad vi kan göra
              för dig.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:info@addeqt.com"
                className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-all hover:scale-105"
              >
                Skicka e-post →
              </Link>
              <Link
                href="tel:+46858006620"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-white border border-white/15 hover:bg-white/10 transition-colors"
              >
                08-580 066 20
              </Link>
            </div>
          </div>

          {/* Floating card (desktop) */}
          <div className="hidden md:block">
            <div className="flex flex-col overflow-hidden text-center bg-white/5 w-64 h-64 rounded-3xl px-8 py-8 relative shadow-2xl backdrop-blur-xl rotate-3 items-center justify-center ring-1 ring-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#242748] border border-white/10 flex items-center justify-center mb-5 shadow-xl">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="font-[family-name:var(--font-manrope)] font-bold text-2xl text-white mb-1">
                Boka möte
              </div>
              <div className="text-gray-500 text-xs mt-1 uppercase tracking-widest font-semibold">
                Kostnadsfritt
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="mt-20 px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 border-b border-gray-200 pb-12">
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
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Oberoende förmögenhetsrådgivning och kapitalförvaltning.
              Tillståndspliktigt värdepappersbolag under Finansinspektionens tillsyn.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h4 className="font-semibold text-sm mb-5 text-[#1d1d1f]">Tjänster</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><Link href="#tjanster" className="hover:text-black transition-colors">Kapitalförvaltning</Link></li>
              <li><Link href="#tjanster" className="hover:text-black transition-colors">Förmögenhetsrådgivning</Link></li>
              <li><Link href="#tjanster" className="hover:text-black transition-colors">Private Banking</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-sm mb-5 text-[#1d1d1f]">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><Link href="mailto:info@addeqt.com" className="hover:text-black transition-colors">info@addeqt.com</Link></li>
              <li><Link href="tel:+46858006620" className="hover:text-black transition-colors">08-580 066 20</Link></li>
              <li className="text-xs leading-relaxed text-gray-400">Artillerigatan 45<br />114 45 Stockholm</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <h4 className="font-semibold text-sm mb-5 text-[#1d1d1f]">Information</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><Link href="/gdpr" className="hover:text-black transition-colors">GDPR &amp; Integritet</Link></li>
              <li><Link href="/juridik" className="hover:text-black transition-colors">Juridisk information</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
          <p>© 2026 AddEqt AB. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0 px-3 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-100">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Tillståndspliktigt bolag · Finansinspektionen
          </div>
        </div>
      </div>
    </footer>
  );
}
