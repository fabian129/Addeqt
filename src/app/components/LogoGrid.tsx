"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const logos = [
  "SEB",
  "Nordea",
  "Handelsbanken",
  "Avanza",
  "Carnegie",
  "Öhman",
  "Nordnet",
  "ABG Sundal Collier",
];

export default function LogoGrid() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="pt-48 pb-20">
      <div
        className="mx-auto px-6 md:px-8"
        style={{ maxWidth: "var(--content-width)" }}
      >
        <div className="reveal border-l border-t border-[var(--hairline)] rounded-2xl overflow-hidden bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {logos.map((name) => (
              <div
                key={name}
                className="group flex items-center justify-center border-r border-b border-[var(--hairline)] py-12 px-8 transition-colors duration-300 hover:bg-[var(--surface-1)]"
              >
                <span className="font-mono text-sm tracking-[0.15em] uppercase text-[var(--fg-muted)] opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:text-[var(--fg)] select-none">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
