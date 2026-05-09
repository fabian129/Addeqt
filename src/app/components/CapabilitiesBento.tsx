"use client";

export default function CapabilitiesBento() {
  return (
    <section id="tjanster" className="max-w-6xl mx-auto px-6 md:px-8 pt-24 pb-8">
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="leading-[1.1] md:text-5xl text-3xl font-semibold text-[#1d1d1f] tracking-tight font-[family-name:var(--font-manrope)] mb-6">
          Kompetens för varje{" "}
          <span className="text-gray-400">livssituation.</span>
        </h2>
        <p className="text-xl font-medium text-[#86868b] max-w-3xl leading-relaxed">
          Vi kombinerar djup finansiell expertis med ett genuint oberoende
          perspektiv — alltid anpassat efter din situation.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[520px]">
        {/* Left card (2/3) */}
        <div className="md:col-span-2 bg-white rounded-[32px] border border-gray-100/80 p-8 md:p-10 relative overflow-hidden group shadow-sm hover:shadow-2xl hover:shadow-[#242748]/10 transition-all duration-700">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#242748]/5 pointer-events-none" />
          <div className="absolute bottom-[-30%] left-[-10%] w-[120%] h-[70%] bg-gradient-to-r from-[#242748]/20 via-blue-200/20 to-[#242748]/10 blur-[80px] opacity-40 group-hover:opacity-80 transition-opacity duration-1000" />

          <div className="relative z-10 flex justify-between items-start mb-10">
            <h3 className="font-[family-name:var(--font-manrope)] text-2xl md:text-3xl font-medium tracking-tight max-w-sm text-[#1d1d1f]">
              Förmögenhetsrådgivning — helt på dina villkor.
            </h3>
            <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>

          {/* Phone Mockup + Chart */}
          <div className="relative z-10 w-full h-full flex items-end justify-center md:justify-start gap-8 translate-y-6 transition-transform duration-700 ease-out">
            {/* Phone */}
            <div className="w-[220px] bg-white rounded-[36px] border-[5px] border-[#1d1d1f] shadow-2xl overflow-hidden relative z-20 shrink-0 transform -rotate-3 group-hover:-rotate-1 transition-all duration-700">
              {/* Notch */}
              <div className="absolute top-0 w-full h-5 flex justify-center z-20 pointer-events-none">
                <div className="w-16 h-4 bg-black rounded-b-xl" />
              </div>

              <div className="p-5 flex flex-col h-[420px] bg-white relative pt-7">
                <div className="relative z-10 mt-4 text-center mb-6">
                  <div className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold mb-1">
                    Portföljvärde
                  </div>
                  <div className="text-3xl font-[family-name:var(--font-manrope)] font-semibold tracking-tighter text-[#1d1d1f]">
                    4 862 500 kr
                  </div>
                  <div className="text-xs text-green-600 bg-green-50 border border-green-100 px-2 py-0.5 rounded-md font-medium inline-flex mt-2">
                    +8,4% YTD
                  </div>
                </div>

                <div className="space-y-3 bg-gray-50 p-3 rounded-xl border border-gray-100 mx-1">
                  <AllocationRow label="Aktier" value="62%" />
                  <AllocationRow label="Räntor" value="24%" />
                  <AllocationRow label="Alternativa" value="14%" isLast />
                </div>

                <button className="w-full h-10 bg-[#242748] text-white rounded-xl flex items-center justify-center text-[10px] font-medium mt-auto hover:bg-[#1a1d36] transition-colors">
                  Se full rapport →
                </button>
              </div>
            </div>

            {/* Chart Panel (desktop only) */}
            <div className="hidden md:block flex-1 bg-white rounded-tl-[20px] shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] border-l border-t border-gray-100 h-[380px] overflow-hidden relative -mb-10 transform transition-transform duration-700 translate-y-4 group-hover:translate-y-0">
              {/* Browser chrome */}
              <div className="h-10 border-b border-gray-100 flex items-center px-4 gap-3 bg-white">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                </div>
                <div className="bg-gray-50 px-3 py-1 rounded-md text-[9px] text-gray-400 font-medium border border-gray-100">
                  addeqt.com · Rådgivning
                </div>
              </div>

              {/* Chart */}
              <div className="p-6 bg-[#fafafa] h-full">
                <div className="text-[9px] font-bold text-[#242748] tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#242748]" />
                  Portföljutveckling — 12 månader
                </div>
                <div className="flex items-end gap-2 h-36">
                  {[45, 55, 48, 62, 58, 70, 78, 68, 82, 88, 92, 100].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          backgroundColor: `rgba(36, 39, 72, ${0.1 + i * 0.075})`,
                        }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right card (1/3) */}
        <div className="md:col-span-1 bg-[#fbfbfd] rounded-[32px] border border-gray-100 p-8 md:p-10 relative overflow-hidden group min-h-[500px] hover:shadow-2xl transition-all duration-700 hover:shadow-[#242748]/15">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbfd] via-[#242748]/5 to-[#242748]/10" />

          <div className="relative z-10 flex justify-between items-start mb-10">
            <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-medium tracking-tight text-[#1d1d1f]">
              Anpassad till varje marknadsläge.
            </h3>
            <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center text-[#1d1d1f] group-hover:scale-110 transition-transform shadow-sm border border-white/50">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-4 pb-6">
            {/* Risk Profile */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/50">
              <div className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold mb-1">
                Riskprofil
              </div>
              <div className="text-sm font-semibold text-[#1d1d1f] mb-3">
                Balanserad
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[60%] bg-gradient-to-r from-[#242748] to-[#4a5296] rounded-full" />
              </div>
            </div>

            {/* Return */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-white/50 flex-1">
              <div className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold mb-1">
                Avkastning
              </div>
              <div className="text-2xl font-[family-name:var(--font-manrope)] font-semibold text-[#1d1d1f]">
                +8,4%
              </div>
              <div className="flex items-end gap-1 h-24 w-full mt-4">
                {[30, 45, 38, 55, 62, 75, 80, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-t-sm anim-bar"
                    style={{
                      ["--h" as string]: `${h}%`,
                      animationDelay: `${0.1 + i * 0.05}s`,
                      backgroundColor: `rgba(36, 39, 72, ${0.15 + i * 0.1})`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AllocationRow({
  label,
  value,
  isLast,
}: {
  label: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <div
      className={`flex justify-between text-[10px] text-gray-500 ${
        !isLast ? "pb-2 border-b border-gray-200/50" : ""
      }`}
    >
      <span>{label}</span>
      <span className="font-semibold text-black">{value}</span>
    </div>
  );
}
