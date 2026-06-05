"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const mainNav = [
  { title: "Tjänster", href: "/tjanster" },
  { title: "Om Addeqt", href: "/om-oss" },
  { title: "Vår Process", href: "/#process" },
  { title: "Kontakt", href: "/#kontakt" },
];

export default function Hero() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden" style={{ height: "100vh", minHeight: "750px" }}>
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
            linear-gradient(to right, 
              rgba(15,15,16,0.65) 0%, 
              rgba(15,15,16,0.2) 50%, 
              rgba(15,15,16,0.4) 100%
            )
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, 
              rgba(15,15,16,0.3) 0%, 
              rgba(15,15,16,0.05) 40%, 
              rgba(15,15,16,0.6) 90%,
              rgba(15,15,16,0.85) 100%
            )
          `,
        }}
      />

      {/* ── Layout ── */}
      <div className="hero-layout relative z-10 h-full flex flex-col justify-between">
        
        {/* ── TOP/MIDDLE: Headline & Manifesto ── */}
        <div className="flex-grow flex flex-col justify-center">
          <div className="hero-eyebrow mb-6">
            <span className="hero-tag font-mono">Oberoende</span>
            <span className="hero-tag-sep">·</span>
            <span className="hero-tag font-mono">Stockholm</span>
            <span className="hero-tag-sep">·</span>
            <span className="hero-tag font-mono">FI-tillstånd</span>
          </div>

          <h1 
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              margin: 0,
              maxWidth: "800px",
              textShadow: "0 4px 60px rgba(0,0,0,0.6)"
            }}
          >
            Vårt oberoende är fundamentet i allt vi gör.
          </h1>
          
          <p 
            style={{
              fontFamily: "var(--font-body, inherit)",
              fontSize: "clamp(16px, 1.25vw, 20px)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
              maxWidth: "500px",
              marginTop: "1.5rem",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)"
            }}
          >
            Inga egna fonder. Inga dolda incitament. Bara ren, skräddarsydd rådgivning på dina villkor.
          </p>
        </div>

        {/* ── BOTTOM: Shipwave-style line & Navigation ── */}
        <div className="hero-bottom-nav">
          {mainNav.map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className="hero-nav-item group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: hovered === null ? 0.8 : hovered === i ? 1 : 0.3,
              }}
            >
              <span className="hero-nav-title font-display uppercase tracking-widest">{item.title}</span>
              <ArrowRight 
                className="hero-nav-arrow" 
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.06); }
        }

        .hero-layout {
          padding: clamp(7rem, 12vh, 10rem) clamp(2rem, 8vw, 12rem) clamp(2rem, 4vh, 3rem);
          width: 100%;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .hero-tag {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }
        .hero-tag-sep {
          color: rgba(255,255,255,0.3);
          font-size: 11px;
        }

        /* ── Bottom Line Navigation ── */
        .hero-bottom-nav {
          display: flex;
          justify-content: flex-end;
          align-self: flex-end;
          gap: clamp(2.5rem, 5vw, 6rem);
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding-bottom: clamp(1.5rem, 3vh, 2.5rem);
        }

        .hero-nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .hero-nav-title {
          font-size: clamp(0.85rem, 1.1vw, 1rem);
          font-weight: 300;
          color: #ffffff;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-nav-item:hover .hero-nav-title {
          transform: translateX(4px);
        }

        .hero-nav-arrow {
          width: 16px;
          height: 16px;
          color: #ffffff;
          opacity: 0.3;
          transform: translateX(0);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-nav-item:hover .hero-nav-arrow {
          opacity: 1;
          transform: translateX(4px);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-layout {
            padding-left: clamp(1.5rem, 5vw, 3rem);
            padding-right: clamp(1.5rem, 5vw, 3rem);
          }
          .hero-bottom-nav {
            flex-direction: column;
            gap: 1.5rem;
            padding-top: 2rem;
          }
          .hero-nav-item {
            justify-content: space-between;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 1.5rem;
          }
          .hero-nav-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
