"use client";

export default function TrustMarquee() {
  const items = [
    "FI-tillstånd feb 2023",
    "Nordnet som depå",
    "Fast avgift",
    "100% oberoende",
    "Inga egna fonder",
    "Artillerigatan 45, Stockholm",
  ];

  // Double the items for seamless loop
  const track = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
        paddingBlock: "20px",
      }}
    >
      <div className="ticker-track flex items-center gap-0 whitespace-nowrap">
        {track.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-mono"
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
              }}
            >
              {item}
            </span>
            <span
              className="mx-8"
              style={{
                color: "var(--fg-muted)",
                opacity: 0.4,
                fontSize: "11px",
              }}
            >
              —
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
