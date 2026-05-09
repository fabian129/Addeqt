export default function PhilosophyBlock() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 mb-32">
      <div className="py-20 px-8 md:px-20 bg-[#161617] rounded-[40px] relative overflow-hidden text-center">
        {/* Radial glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(75,75,75,0.3)_0%,_#161617_70%)]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#86868b] text-sm font-medium tracking-widest uppercase mb-8">
            Vår filosofi
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-4xl md:text-6xl text-white font-medium leading-tight mb-8">
            Vi designar inte produkter.
            <br />
            <span className="gradient-text">Vi bygger förtroende.</span>
          </h3>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            I en värld av provisioner och dolda incitament är fullständigt
            oberoende en styrka. Vi tar aldrig betalt av andra — bara av dig.
            Det ger oss rätt att alltid säga sanningen.
          </p>
        </div>
      </div>
    </section>
  );
}
