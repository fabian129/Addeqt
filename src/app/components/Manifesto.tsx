"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ── Manifesto heading ── */
const MANIFESTO_TEXT =
  "Vi tror att förmögenhetsförvaltning ska byggas på kundnytta — inte på tradition.";

/* ── Stats data ── */
const stats = [
  { value: "2021", label: "Grundat" },
  { value: "1 000+", label: "Kunder" },
  { value: "3+ mdr", label: "Under förvaltning" },
  { value: "100%", label: "Oberoende" },
];

/* ── Seeded random for deterministic dot positions ── */
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

/* ── Generate dot positions ── */
interface Dot {
  x: number; // percentage from left
  y: number; // percentage from top
  size: number; // px
  opacity: number;
  side: "left" | "right";
}

function generateDots(count: number): Dot[] {
  const rand = seededRandom(42);
  const dots: Dot[] = [];

  for (let i = 0; i < count; i++) {
    const side: "left" | "right" = i < count / 2 ? "left" : "right";

    // Left side: 3-18% from left, Right side: 82-97%
    const xMin = side === "left" ? 3 : 82;
    const xMax = side === "left" ? 18 : 97;

    // Cluster into 2-3 vertical "columns" per side
    const columnOffset = Math.floor(rand() * 3) * 4;
    const baseX = xMin + columnOffset;
    const x = baseX + rand() * (xMax - xMin - 12);

    const y = 10 + rand() * 75; // 10-85% vertically
    const size = 2 + rand() * 1.5; // 2-3.5px
    const opacity = 0.08 + rand() * 0.07; // 0.08-0.15

    dots.push({ x, y, size, opacity, side });
  }

  return dots;
}

const allDots = generateDots(18);
// Subset for mobile
const mobileDots = allDots.filter((_, i) => i % 3 === 0); // 6 dots

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Split text into words */
  const words = MANIFESTO_TEXT.split(" ");

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      /* ── 1. Dot entrance ── */
      const dotEls = section.querySelectorAll<HTMLElement>(".manifesto-dot");
      if (dotEls.length > 0) {
        gsap.set(dotEls, {
          opacity: 0,
          x: (i: number) => {
            const dot = dotEls[i];
            return dot.dataset.side === "left" ? -200 : 200;
          },
        });

        gsap.to(dotEls, {
          opacity: (i: number) => parseFloat(dotEls[i].dataset.targetOpacity || "0.1"),
          x: 0,
          duration: 1,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        });
      }

      /* ── 2. Word-by-word opacity reveal ── */
      const wordEls = section.querySelectorAll<HTMLElement>(".manifesto-word");
      if (wordEls.length > 0) {
        gsap.to(wordEls, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "center 40%",
            scrub: 1,
          },
        });
      }

      /* ── 3. Stats fade in ── */
      const statEls = section.querySelectorAll<HTMLElement>(".manifesto-stat");
      if (statEls.length > 0) {
        gsap.set(statEls, { opacity: 0, y: 28 });
        gsap.to(statEls, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statEls[0],
            start: "top 88%",
            once: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: "clamp(10rem, 16vw, 14rem)",
        paddingBottom: "clamp(10rem, 16vw, 14rem)",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Scattered dots (desktop) ── */}
      <div
        className="hidden md:block"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        {allDots.map((dot, i) => (
          <div
            key={i}
            className="manifesto-dot"
            data-side={dot.side}
            data-target-opacity={dot.opacity}
            style={{
              position: "absolute",
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
              borderRadius: "50%",
              backgroundColor: "var(--navy)",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* ── Scattered dots (mobile — reduced) ── */}
      <div
        className="md:hidden"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        {mobileDots.map((dot, i) => (
          <div
            key={i}
            className="manifesto-dot"
            data-side={dot.side}
            data-target-opacity={dot.opacity}
            style={{
              position: "absolute",
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
              borderRadius: "50%",
              backgroundColor: "var(--navy)",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div
        className="mx-auto px-6 md:px-8"
        style={{ maxWidth: "var(--content-width)", position: "relative" }}
      >
        {/* Subtle radial gradient backdrop */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(36,39,72,0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Hairline divider — top */}
        <div
          aria-hidden="true"
          style={{
            width: "60%",
            height: 1,
            background: "var(--hairline)",
            margin: "0 auto clamp(3rem, 5vw, 5rem)",
          }}
        />

        {/* Manifesto heading */}
        <p
          className="font-display mx-auto"
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            color: "var(--fg)",
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="manifesto-word"
              style={{
                opacity: 0.2,
                display: "inline-block",
                marginRight: "0.3em",
              }}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Hairline divider — bottom */}
        <div
          aria-hidden="true"
          style={{
            width: "60%",
            height: 1,
            background: "var(--hairline)",
            margin: "clamp(3rem, 5vw, 5rem) auto 0",
          }}
        />

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-16"
          style={{
            marginTop: "clamp(5rem, 8vw, 8rem)",
            textAlign: "center",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="manifesto-stat">
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 300,
                  color: "var(--gold)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  fontFeatureSettings: "'tnum'",
                }}
              >
                {stat.value}
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--fg-muted)",
                  marginTop: "0.75rem",
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
