"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSectionReveal } from "../hooks/useSectionReveal";
import { useEffect, useRef } from "react";

/* ── Editorial Break — Parallax fullbleed ──
   Modeled after the ServicesScroll editorial language:
   Eyebrow top-left, large statement, description left,
   key metrics right, CTA bottom.
   ────────────────────────────────── */

export default function EditorialBreak() {
  const sectionRef = useScrollReveal();
  const gsapRef = useSectionReveal();
  const imageRef = useRef<HTMLDivElement>(null);

  /* ── Parallax effect ── */
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > windowH) return;
      const progress = (windowH - rect.top) / (windowH + rect.height);
      const offset = (progress - 0.5) * 120;
      imageRef.current.style.transform = `translateY(${offset}px) scale(1.15)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full relative overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Parallax image container */}
      <div
        ref={imageRef}
        style={{
          position: "absolute",
          inset: "-60px 0",
          willChange: "transform",
          transition: "none",
        }}
      >
        <Image
          src="/images/tuscany-landscape-cypress-trees-road-italy.jpg"
          alt="Toskanska landskapet med cypresser"
          fill
          className="object-cover"
          style={{ objectPosition: "center 60%" }}
          sizes="100vw"
          loading="lazy"
          quality={100}
          unoptimized
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,15,16,0.5) 0%, rgba(15,15,16,0.55) 40%, rgba(15,15,16,0.75) 100%)",
        }}
      />

      {/* Content overlay */}
      <div
        ref={gsapRef}
        className="reveal relative z-10 h-full max-w-[var(--content-width)] mx-auto px-6 md:px-8"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: "clamp(5rem, 8vw, 7rem)",
          paddingBottom: "clamp(3.5rem, 5vw, 5rem)",
        }}
      >
        {/* ── TOP — Eyebrow ── */}
        <div
          className="font-mono"
          style={{
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          Vår filosofi
          <span
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(255,255,255,0.25)",
            }}
          />
        </div>

        {/* ── CENTER — Statement left + Metrics right ── */}
        <div
          className="w-full flex flex-col md:flex-row md:justify-between"
          style={{ alignItems: "center", gap: "4rem" }}
        >
          {/* Left — Heading + Description + CTA */}
          <div style={{ maxWidth: "520px" }}>
            <h3
              className="font-display gsap-reveal-heading"
              style={{
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#FFFFFF",
                marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              }}
            >
              Vi började här.
            </h3>
            <p
              className="gsap-reveal"
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.8)",
                fontWeight: 300,
                marginBottom: "1.75rem",
                maxWidth: "420px",
              }}
            >
              En bransch som behöver förändras. Vi grundade Addeqt
              för att bevisa att oberoende rådgivning kan vara
              transparent, personlig och helt fri från intressekonflikter.
            </p>
            <Link
              href="/om-oss"
              className="inline-flex items-center gap-2 transition-all duration-300"
              style={{
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.3)",
                paddingBottom: "0.35rem",
              }}
            >
              Läs mer
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right — Key metrics stacked vertically */}
          <div
            className="gsap-reveal"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              textAlign: "right",
              alignItems: "flex-end",
              marginRight: "-1rem",
            }}
          >
            {[
              { label: "Kontor", value: "Stockholm" },
              { label: "Grundat", value: "2023" },
              { label: "Modell", value: "Fast avgift" },
              { label: "Depå", value: "Nordnet" },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.label}
                </div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM spacer ── */}
        <div />
      </div>
    </div>
  );
}
