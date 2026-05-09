import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Analys & Kartläggning",
    desc: "Vi börjar med en grundlig genomgång av din ekonomiska situation, dina mål och din riskprofil — utan förutfattade meningar om vilka produkter du behöver.",
  },
  {
    num: "02",
    title: "Strategi & Plan",
    desc: "Vi tar fram en personlig finansiell plan med konkreta rekommendationer — tydlig, begriplig och alltid motiverad. Du fattar alla beslut.",
  },
  {
    num: "03",
    title: "Genomförande & Uppföljning",
    desc: "Vi implementerar strategin och följer upp kontinuerligt. Marknaden förändras — din plan med den. Du har alltid direkt tillgång till din rådgivare.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 mb-32" id="process">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 md:sticky md:top-32">
          <h2 className="font-[family-name:var(--font-manrope)] text-5xl tracking-tight mb-4 font-semibold">
            Hur vi arbetar.
          </h2>
          <p className="text-gray-500 mb-8">
            Strukturerat, transparent och alltid med dig i centrum.
          </p>
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#242748] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1a1d36] transition-colors"
          >
            Kom igång →
          </Link>
        </div>

        <div className="md:w-2/3 flex flex-col gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group bg-white border border-gray-100 p-8 rounded-3xl hover:border-gray-300 hover:shadow-lg shadow-sm transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-[#242748]/10 text-[#242748] rounded-full flex items-center justify-center font-[family-name:var(--font-manrope)] font-bold text-sm">
                  {step.num}
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-medium mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
