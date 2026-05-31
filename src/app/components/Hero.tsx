"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  { title: "Kapitalförvaltning", href: "/tjanster?open=0" },
  { title: "Förmögenhetsrådgivning", href: "/tjanster?open=1" },
  { title: "Private Banking", href: "/tjanster?open=2" },
  { title: "Skatteoptimering", href: "/tjanster?open=3" },
];

export default function Hero() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden" style={{ height: "100vh", minHeight: "650px" }}>
      {/* Background image */}
      <Image
        src="/images/pexels-mlkbnl-28267152.jpg"
        alt="Italiensk sjöstad vid Comosjön"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "center 65%", animation: "heroZoom 25s ease-in-out infinite alternate" }}
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
              rgba(15,15,16,0.55) 0%, 
              rgba(15,15,16,0.20) 25%, 
              rgba(15,15,16,0.10) 45%, 
              rgba(15,15,16,0.30) 70%, 
              rgba(15,15,16,0.65) 100%
            )
          `,
        }}
      />

      {/* ── Layout ── */}
      <div className="hero-layout relative z-10 h-full">

        {/* Eyebrow — top left */}
        <div className="hero-eyebrow">
          <span className="hero-tag font-mono">Oberoende</span>
          <span className="hero-tag-sep">·</span>
          <span className="hero-tag font-mono">Stockholm</span>
          <span className="hero-tag-sep">·</span>
          <span className="hero-tag font-mono">FI-tillstånd</span>
        </div>

        {/* ── LEFT: Stacked headline + CTA ── */}
        <div className="hero-left">
          <h1
            className="font-display hero-title"
            style={{ textShadow: "0 2px 60px rgba(0,0,0,0.4)" }}
          >
            Rätt
            <br />
            rådgivning.
            <br />
            <span style={{ color: "rgba(255,255,255,0.7)" }}>
              På dina
              <br />
              villkor.
            </span>
          </h1>

          <div className="hero-cta-group">
            <p className="hero-sub-text">
              Oberoende förmögenhetsrådgivning — utan egna fonder, utan dolda incitament.
            </p>
            <Link
              href="#kontakt"
              className="hero-anchor-cta font-mono group"
            >
              Boka möte
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>

        {/* ── RIGHT: Service links stacked ── */}
        <nav className="hero-services">
          {services.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              className="hero-service-link font-display group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: hovered === null ? 0.75 : hovered === i ? 1 : 0.3,
              }}
            >
              <span className="hero-service-text">{s.title}</span>
              <ArrowRight
                className="hero-service-arrow"
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </nav>
      </div>

      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.06); }
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          grid-template-rows: auto 1fr;
          padding: clamp(7rem, 10vh, 9rem) clamp(2rem, 6vw, 6rem) clamp(4rem, 7vh, 6rem);
          gap: 0;
        }

        /* ── Eyebrow ── */
        .hero-eyebrow {
          grid-column: 1 / -1;
          grid-row: 1;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }
        .hero-tag {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }
        .hero-tag-sep {
          color: rgba(255,255,255,0.25);
          font-size: 11px;
        }

        /* ── Left column ── */
        .hero-left {
          grid-column: 1;
          grid-row: 2;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: clamp(2.5rem, 5vh, 4.5rem);
        }
        .hero-title {
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 300;
          letter-spacing: -0.04em;
          line-height: 0.92;
          color: #ffffff;
          margin: 0;
        }
        .hero-cta-group {
          max-width: 400px;
        }
        .hero-sub-text {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.75;
          color: rgba(255,255,255,0.65);
          margin: 0 0 1.5rem;
          font-weight: 300;
        }
        .hero-anchor-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 4px;
          text-decoration: none;
          transition: border-color 0.3s ease, color 0.3s ease;
        }
        .hero-anchor-cta:hover {
          border-color: rgba(255,255,255,0.9);
          color: #ffffff;
        }

        /* ── Right column: service links ── */
        .hero-services {
          grid-column: 2;
          grid-row: 2;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          gap: 0;
        }
        .hero-service-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          padding: clamp(0.6rem, 1.2vh, 1rem) 0;
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .hero-service-text {
          font-size: clamp(1.5rem, 2.8vw, 2.8rem);
          font-weight: 300;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1.1;
          text-align: right;
        }
        .hero-service-arrow {
          width: 18px;
          height: 18px;
          color: #ffffff;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          flex-shrink: 0;
        }
        .hero-service-link:hover .hero-service-arrow {
          opacity: 0.7;
          transform: translateX(0);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-layout {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
          }
          .hero-left {
            grid-column: 1;
            grid-row: 2;
          }
          .hero-services {
            grid-column: 1;
            grid-row: 3;
            align-items: flex-start;
            margin-top: 2rem;
          }
          .hero-service-text {
            font-size: 1.3rem;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
