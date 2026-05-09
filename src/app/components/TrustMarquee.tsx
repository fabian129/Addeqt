const partners = [
  "Nordnet",
  "Finansinspektionen",
  "SEB",
  "Avanza",
  "Carnegie",
  "Handelsbanken",
];

export default function TrustMarquee() {
  return (
    <div
      className="w-full overflow-hidden py-8"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
        {/* Double the items for seamless loop */}
        {[...partners, ...partners].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="h-14 flex items-center gap-2 px-6 border border-gray-200 rounded-full bg-white shrink-0"
          >
            <span
              className={`text-lg ${
                i % 2 === 0
                  ? "font-semibold tracking-tight"
                  : "font-medium"
              }`}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
