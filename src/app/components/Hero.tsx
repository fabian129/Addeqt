"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ height: "100vh", minHeight: "650px" }}>
      {/* Background image */}
      <Image
        src="/images/pexels-mlkbnl-28267152.jpg"
        alt="Italiensk sjöstad vid Comosjön"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "center 65%" }}
        sizes="100vw"
        quality={100}
        unoptimized
      />

      {/* Cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, 
              rgba(15,15,16,0.20) 0%, 
              rgba(15,15,16,0.12) 35%, 
              rgba(15,15,16,0.08) 55%, 
              rgba(15,15,16,0.40) 80%, 
              rgba(15,15,16,0.55) 100%
            )
          `,
        }}
      />

      {/* ── Asymmetric editorial layout ── */}
      <div className="hero-layout relative z-10 h-full">

        {/* ── Top-left: eyebrow ── */}
        <div className="hero-eyebrow hero-anim hero-d1">
          <span className="hero-tag font-mono">Oberoende</span>
          <span className="hero-tag-sep">·</span>
          <span className="hero-tag font-mono">Stockholm</span>
          <span className="hero-tag-sep">·</span>
          <span className="hero-tag font-mono">FI-tillstånd</span>
        </div>

        {/* ── Headline: left-aligned, lower third ── */}
        <h1 className="hero-anim hero-d2 font-display hero-title">
          Rätt rådgivning.
          <br />
          På dina villkor.
        </h1>

        {/* ── Anchor text: offset right, creates asymmetry ── */}
        <div className="hero-anchor hero-anim hero-d3">
          <p className="hero-anchor-text">
            Oberoende förmögenhetsrådgivning, kapitalförvaltning
            och private banking — utan egna fonder, utan dolda incitament.
          </p>
          <Link
            href="#kontakt"
            className="hero-anchor-cta font-mono group"
          >
            Boka möte
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      <style>{`
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          padding: clamp(7rem, 10vh, 9rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 5vh, 4.5rem);
          gap: 0;
        }

        /* ── Eyebrow — top left ── */
        .hero-eyebrow {
          grid-column: 1 / -1;
          grid-row: 1;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }
        .hero-tag {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }
        .hero-tag-sep {
          color: rgba(255,255,255,0.2);
          font-size: 12px;
        }

        /* ── Headline — bottom left, large ── */
        .hero-title {
          grid-column: 1;
          grid-row: 3;
          align-self: end;
          font-size: clamp(3.2rem, 6.5vw, 6.5rem);
          font-weight: 300;
          letter-spacing: -0.04em;
          line-height: 0.95;
          color: #ffffff;
          margin: 0;
        }

        /* ── Anchor text — bottom right, offset up ── */
        .hero-anchor {
          grid-column: 2;
          grid-row: 3;
          align-self: end;
          justify-self: end;
          max-width: 320px;
          padding-bottom: 0.25rem;
        }
        .hero-anchor-text {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255,255,255,0.7);
          margin: 0 0 1.5rem;
        }
        .hero-anchor-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
          border-bottom: 1px solid rgba(255,255,255,0.35);
          padding-bottom: 4px;
          text-decoration: none;
          transition: border-color 0.3s ease;
        }
        .hero-anchor-cta:hover {
          border-color: rgba(255,255,255,0.9);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-layout {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto auto;
          }
          .hero-title {
            grid-column: 1;
            grid-row: 3;
            margin-bottom: 2.5rem;
          }
          .hero-anchor {
            grid-column: 1;
            grid-row: 4;
            justify-self: start;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}
