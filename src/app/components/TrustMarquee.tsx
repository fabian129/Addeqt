"use client";

export default function TrustMarquee() {
  const items = [
    "FI-tillstånd feb 2023",
    "Nordnet som depåbank",
    "Över 3 mdr kr under förvaltning",
    "100% oberoende rådgivning",
    "Inga egna fonder",
    "Fast procentuell avgift",
    "Artillerigatan 45, Stockholm",
  ];

  // Multiple items for seamless infinite marquee loop
  const track = [...items, ...items, ...items];

  return (
    <div
      className="w-full overflow-hidden select-none relative z-10"
      style={{
        backgroundColor: "var(--bg-warm, #FAF8F5)",
        borderTop: "1px solid var(--hairline, rgba(36, 39, 72, 0.08))",
        borderBottom: "1px solid var(--hairline, rgba(36, 39, 72, 0.08))",
        paddingBlock: "22px",
      }}
    >
      <div className="ticker-track flex items-center gap-0 whitespace-nowrap">
        {track.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-mono"
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--navy, #242748)",
                opacity: 0.75,
                fontWeight: 500,
              }}
            >
              {item}
            </span>
            <span
              className="mx-8"
              style={{
                color: "var(--gold, #C4A882)",
                opacity: 0.6,
                fontSize: "11px",
              }}
            >
              —
            </span>
          </span>
        ))}
      </div>

      <style>{`
        .ticker-track {
          animation: tickerScroll 45s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
