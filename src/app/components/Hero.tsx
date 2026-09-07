"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Editorial Dual-Panel Hero — Asynchronous Calm Transition ("Lugnt")
 *
 * Master Composition: C1 + D2 (Masculino, sobrio, arquitectónico, quiet wealth)
 *
 * Sequence (Ciclo asíncrono calmado cada 5 segundos):
 * 0. C1 + D2  (Composición Maestra Aprobada)
 * 1. A  + D2  (Vänster panel crossfade C1 -> A, Höger permanece D2)
 * 2. A  + B   (Höger panel crossfade D2 -> B, Vänster permanece A)
 * 3. C1 + B   (Vänster panel crossfade A -> C1, Höger permanece B)
 * 0. C1 + D2  (Höger panel crossfade B -> D2, Vänster permanece C1)
 */

// Fotografías editoriales aprobadas:
// Panel Izquierdo (Vänster):
const IMG_C1 = "/images/hero-c1-reference.jpg"; // Residencia nórdica de autor (Dirección de arte aprobada)
const IMG_A = "/images/pexels-sam-a-351058944-32716815.jpg"; // Torre señorial Lago de Como

// Panel Derecho (Höger):
const IMG_D2 = "/images/candidate-d2-como-villa.jpg"; // Villa blanca con muelle de piedra en Como (Aprobada 4K)
const IMG_B = "/images/pexels-manu-19873394.jpg"; // Villa Balbianello en el promontorio de Como

const mainNav = [
  { title: "Tjänster", href: "/tjanster" },
  { title: "Om Addeqt", href: "/om-oss" },
  { title: "Vår Process", href: "/#process" },
  { title: "Kontakt", href: "/#kontakt" },
];

export default function Hero() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Si el usuario prefiere movimiento reducido, mantener fijo en la composición maestra C1 + D2
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Parallax de profundidad y salida elegante del texto en scroll (Inspiración Tresmares)
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const content = contentRef.current;
    if (!section || !stage || !content) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // 1. Salida controlada del texto e interactivos
      gsap.to(content, {
        opacity: 0,
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom 55%",
          scrub: 0.5,
        },
      });

      // 2. Parallax calmado y sutil en el stage fotográfico
      gsap.to(stage, {
        y: "10%",
        scale: 1.03,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Determinación asíncrona de paneles (solo uno cambia cada 5s):
  const leftImage = step === 0 || step === 3 ? "C1" : "A";
  const rightImage = step === 0 || step === 1 ? "D2" : "B";

  return (
    <section ref={sectionRef} className="addeqt-hero relative overflow-hidden">
      {/* ── Background: Dual Photographic Stage (Composición Maestra Aprobada) ── */}
      <div ref={stageRef} className="addeqt-hero-stage">
        {/* Panel Izquierdo: C1 (Residencia Nórdica) / A (Torre Como) */}
        <div className="addeqt-hero-panel panel-left" data-panel="left">
          <div 
            className="hero-image-layer"
            style={{
              backgroundImage: `url("${IMG_C1}")`,
              backgroundPosition: "center 48%",
              opacity: leftImage === "C1" ? 1 : 0,
              zIndex: leftImage === "C1" ? 2 : 1,
            }}
          />
          <div 
            className="hero-image-layer"
            style={{
              backgroundImage: `url("${IMG_A}")`,
              backgroundPosition: "center 48%",
              opacity: leftImage === "A" ? 1 : 0,
              zIndex: leftImage === "A" ? 2 : 1,
            }}
          />
        </div>

        {/* Panel Derecho: D2 (Villa Como Muelle) / B (Villa Balbianello) */}
        <div className="addeqt-hero-panel panel-right" data-panel="right">
          <div 
            className="hero-image-layer"
            style={{
              backgroundImage: `url("${IMG_D2}")`,
              backgroundPosition: "center 50%",
              opacity: rightImage === "D2" ? 1 : 0,
              zIndex: rightImage === "D2" ? 2 : 1,
            }}
          />
          <div 
            className="hero-image-layer"
            style={{
              backgroundImage: `url("${IMG_B}")`,
              backgroundPosition: "center 52%",
              opacity: rightImage === "B" ? 1 : 0,
              zIndex: rightImage === "B" ? 2 : 1,
            }}
          />
        </div>
      </div>

      {/* ── Diagonal Hairline Divider ── */}
      <svg 
        className="addeqt-hero-diagonal" 
        width="100%" 
        height="100%" 
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <line 
          x1="100%" 
          y1="0" 
          x2="0" 
          y2="100%" 
          stroke="rgba(255, 255, 255, 0.32)" 
          strokeWidth="1.2" 
          vectorEffect="non-scaling-stroke" 
        />
      </svg>

      {/* ── Cinematic Overlays ── */}
      <div className="addeqt-hero-overlay overlay-left-to-right" />
      <div className="addeqt-hero-overlay overlay-top-to-bottom" />

      {/* ── Layout & Typography ── */}
      <div ref={contentRef} className="hero-layout relative z-10 h-full flex flex-col justify-between">
        
        {/* ── Headline & Manifesto (Optiskt balanserat och skyddat på vänstra sidan) ── */}
        <div className="flex-grow flex flex-col justify-center relative max-w-[540px]">
          {/* Mjuk radiell tonplatta bakom texten för perfekt kontrast mot tornet och diagonalen */}
          <div 
            className="absolute -inset-x-8 -inset-y-12 pointer-events-none rounded-3xl"
            style={{
              background: "radial-gradient(ellipse at 25% 50%, rgba(15, 15, 16, 0.65) 0%, rgba(15, 15, 16, 0.35) 55%, transparent 80%)",
              filter: "blur(20px)",
              zIndex: -1,
            }}
          />

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
              fontSize: "clamp(2rem, 3.6vw, 3.6rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: 0,
              maxWidth: "500px",
              textShadow: "0 2px 14px rgba(0,0,0,0.8), 0 6px 36px rgba(0,0,0,0.6)"
            }}
          >
            Vårt oberoende är <br className="hidden sm:inline" />
            fundamentet i allt vi gör.
          </h1>
          
          <p 
            style={{
              fontFamily: "var(--font-body, inherit)",
              fontSize: "clamp(15px, 1.1vw, 18px)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.65,
              maxWidth: "440px",
              marginTop: "1.5rem",
              textShadow: "0 2px 10px rgba(0,0,0,0.6)"
            }}
          >
            Inga egna fonder. Inga dolda incitament. Bara ren, skräddarsydd rådgivning på dina villkor.
          </p>
        </div>

        {/* ── Bottenrad: Undernavigering (utan linje under) ── */}
        <div className="hero-bottom-bar">
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
      </div>

      <style>{`
        .addeqt-hero {
          position: relative;
          height: 100vh;
          min-height: 750px;
          overflow: hidden;
          background: #0F0F10;
        }

        .addeqt-hero-stage {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        /* ── Asymmetriska bildpaneler med diagonal polygon ── */
        .addeqt-hero-panel {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .panel-left {
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }

        .panel-right {
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        /* ── Mjuk, stillsam crossfade ("Lugnt") ── */
        .hero-image-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          transition: opacity 2.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          will-change: opacity;
        }

        /* ── Stabil diagonal hairline-linje ── */
        .addeqt-hero-diagonal {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.4));
        }

        /* ── Övertoningar för läsbarhet ── */
        .addeqt-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
        }

        .overlay-left-to-right {
          background: linear-gradient(
            to right,
            rgba(15, 15, 16, 0.72) 0%,
            rgba(15, 15, 16, 0.38) 45%,
            rgba(15, 15, 16, 0.20) 75%,
            rgba(15, 15, 16, 0.35) 100%
          );
        }

        .overlay-top-to-bottom {
          background: linear-gradient(
            to bottom,
            rgba(15, 15, 16, 0.35) 0%,
            rgba(15, 15, 16, 0.05) 35%,
            rgba(15, 15, 16, 0.50) 85%,
            rgba(15, 15, 16, 0.85) 100%
          );
        }

        /* ── Layout ── */
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
          color: rgba(255, 255, 255, 0.6);
        }
        .hero-tag-sep {
          color: rgba(255, 255, 255, 0.3);
          font-size: 11px;
        }

        /* ── Bottenrad: Undernavigering ── */
        .hero-bottom-bar {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          width: 100%;
        }

        .hero-bottom-nav {
          display: flex;
          align-items: center;
          gap: clamp(2.5rem, 5vw, 6rem);
          flex-shrink: 0;
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

        /* ── Responsiv anpassning ── */
        @media (max-width: 900px) {
          .hero-layout {
            padding-left: clamp(1.5rem, 5vw, 3rem);
            padding-right: clamp(1.5rem, 5vw, 3rem);
          }
          .panel-left {
            clip-path: none;
          }
          .panel-right {
            display: none;
          }
          .addeqt-hero-diagonal {
            display: none;
          }
          .hero-bottom-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 1.75rem;
          }
          .hero-bottom-nav {
            flex-direction: column;
            gap: 1.5rem;
            align-items: stretch;
          }
          .hero-nav-item {
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 1.5rem;
          }
          .hero-nav-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image-layer {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
