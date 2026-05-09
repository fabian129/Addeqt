import Link from "next/link";

const services = [
  {
    num: "01",
    icon: (
      <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h.01M7 20v-4M12 20V10M17 20V4" />
      </svg>
    ),
    title: "Kapitalförvaltning",
    desc: "Aktiv portföljförvaltning anpassad efter din riskaptit, tidshorisont och mål — bland marknadens bästa produkter utan begränsningar.",
  },
  {
    num: "02",
    icon: (
      <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Förmögenhetsrådgivning",
    desc: "Heltäckande rådgivning med din livssituation som utgångspunkt. Vi kartlägger, analyserar och skapar en personlig finansiell plan.",
  },
  {
    num: "03",
    icon: (
      <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Private Banking",
    desc: "Heltäckande och problemlösande tjänst för din privatekonomi. Bolån, försäkring, pension — vi är din koordinator i varje fråga.",
  },
  {
    num: "04",
    icon: (
      <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Skatteoptimering",
    desc: "ISK, kapitalförsäkring, generationsskiften och arv — vi hjälper dig strukturera din förmögenhet på skatteeffektivaste sätt.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 mb-32" id="tjanster-grid">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Sticky sidebar */}
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/80 border border-gray-200 text-gray-500 text-[11px] font-medium mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#242748]" />
            Tjänster
          </div>

          <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-6 leading-tight">
            Heltäckande finansiella tjänster.
          </h2>

          <p className="text-lg text-[#86868b] leading-relaxed mb-8 font-medium">
            Tre kärnområden — alla levererade med samma oberoende perspektiv och
            djupa marknadskännedom.
          </p>

          <Link
            href="#kontakt"
            className="group inline-flex items-center text-sm font-semibold text-[#1d1d1f] hover:opacity-70 transition-opacity"
          >
            Kontakta oss
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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

        {/* Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.num}
              className="group relative p-8 bg-white rounded-[32px] border border-gray-100 hover:border-gray-300/60 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Ghost number */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="text-6xl font-[family-name:var(--font-manrope)] font-bold text-gray-100">
                  {service.num}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] text-[#1d1d1f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#242748] group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="text-xl font-[family-name:var(--font-manrope)] font-semibold text-[#1d1d1f] mb-3 tracking-tight">
                {service.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
