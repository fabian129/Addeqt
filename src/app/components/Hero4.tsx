"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* Hero-variant 4 — som Hero 3 men med TJOCKARE vit avgränsare och MINDRE blur
   (mer definierad, skarpare linje i skärningen mellan de två bilderna). */

const PANEL_A = [
  "/images/pexels-mlkbnl-28267152.jpg",
  "/images/hero-positano.jpg",
  "/images/aerial-view-harbor-town-yachts-monaco-city.jpg",
  "/images/pexels-mlkbnl-28267040.jpg",
  "/images/pexels-mlkbnl-28267168.jpg",
];
const PANEL_B = [
  "/images/pexels-mlkbnl-28266998.jpg",
  "/images/hero-sailing.png",
  "/images/scenic-view-sea-against-sky-with-boat-lake-como.jpg",
  "/images/pexels-mlkbnl-28267250.jpg",
  "/images/view-from-terrace-positano-town-beach-amalfi-coast-italy.jpg",
];

const mainNav = [
  { title: "Tjänster", href: "/tjanster" },
  { title: "Om Addeqt", href: "/om-oss" },
  { title: "Vår Process", href: "/#process" },
  { title: "Kontakt", href: "/#kontakt" },
];

export default function Hero4() {
  const [aIdx, setAIdx] = useState(0);
  const [bIdx, setBIdx] = useState(0);
  const turn = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      if (turn.current % 2 === 0) {
        setAIdx((i) => (i + 1) % PANEL_A.length);
      } else {
        setBIdx((i) => (i + 1) % PANEL_B.length);
      }
      turn.current += 1;
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="h4-hero">
      <div className="h4-stage">
        <div className="h4-panel" data-panel="a">
          {PANEL_A.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt="" className="h4-frame" style={{ opacity: i === aIdx ? 1 : 0 }} />
          ))}
        </div>
        <div className="h4-panel" data-panel="b">
          {PANEL_B.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt="" className="h4-frame" style={{ opacity: i === bIdx ? 1 : 0 }} />
          ))}
        </div>
      </div>

      <div className="h4-grad h4-lr" />
      <div className="h4-grad h4-tb" />

      {/* Tjockare, mindre blurrad vit avgränsare längs diagonalen (i bildskarven) */}
      <svg className="h4-streck" width="100%" height="100%" aria-hidden="true">
        <line x1="100%" y1="0" x2="0" y2="100%" />
      </svg>

      <div className="h4-layout">
        <div className="h4-mid">
          <div className="h4-eyebrow">
            <span className="h4-tag font-mono">Oberoende</span>
            <span className="h4-sep">·</span>
            <span className="h4-tag font-mono">Stockholm</span>
            <span className="h4-sep">·</span>
            <span className="h4-tag font-mono">FI-tillstånd</span>
          </div>
          <h1 className="font-display h4-title">Vårt oberoende är fundamentet i allt vi gör.</h1>
          <p className="h4-sub">
            Inga egna fonder. Inga dolda incitament. Bara ren, skräddarsydd rådgivning på dina villkor.
          </p>
        </div>

        <nav className="h4-bottom-nav">
          {mainNav.map((item) => (
            <Link key={item.title} href={item.href} className="h4-nav-item">
              <span className="h4-nav-title font-display">{item.title}</span>
              <ArrowRight className="h4-nav-arrow" strokeWidth={1.5} />
            </Link>
          ))}
        </nav>
      </div>

      <style>{`
        .h4-hero{position:relative;height:100vh;min-height:750px;overflow:hidden;background:#0F0F10;font-family:var(--font-display)}
        .h4-stage{position:absolute;inset:0;z-index:1}
        .h4-panel{position:absolute;inset:0;overflow:hidden}
        .h4-panel[data-panel="a"]{clip-path:polygon(0 0, 100% 0, 0 100%)}
        .h4-panel[data-panel="b"]{clip-path:polygon(100% 0, 100% 100%, 0 100%)}
        .h4-frame{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 2.6s ease-in-out;will-change:opacity}

        .h4-grad{position:absolute;inset:0;z-index:2;pointer-events:none}
        .h4-lr{background:linear-gradient(to right,rgba(15,15,16,.65) 0%,rgba(15,15,16,.2) 50%,rgba(15,15,16,.4) 100%)}
        .h4-tb{background:linear-gradient(to bottom,rgba(15,15,16,.3) 0%,rgba(15,15,16,.05) 40%,rgba(15,15,16,.6) 90%,rgba(15,15,16,.85) 100%)}

        /* tjockare linje, mindre blur */
        .h4-streck{position:absolute;inset:0;z-index:3;pointer-events:none;filter:blur(0.8px)}
        .h4-streck line{stroke:rgba(255,255,255,.92);stroke-width:4;vector-effect:non-scaling-stroke}

        .h4-layout{position:absolute;inset:0;z-index:5;display:flex;flex-direction:column;justify-content:space-between;
          padding:clamp(7rem,12vh,10rem) clamp(2rem,8vw,12rem) clamp(2rem,4vh,3rem)}
        .h4-mid{flex:1;display:flex;flex-direction:column;justify-content:center;padding-bottom:clamp(8rem,20vh,14rem)}

        .h4-eyebrow{display:flex;align-items:center;gap:.6rem;margin-bottom:1.5rem}
        .h4-tag{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.6)}
        .h4-sep{color:rgba(255,255,255,.3);font-size:11px}

        .h4-title{font-weight:300;line-height:1.1;letter-spacing:-.02em;color:#fff;margin:0;max-width:800px;
          font-size:clamp(2rem,4.5vw,4.5rem);text-shadow:0 4px 60px rgba(0,0,0,.6)}
        .h4-sub{font-weight:300;line-height:1.6;color:rgba(255,255,255,.75);max-width:500px;margin-top:1.5rem;
          font-size:clamp(16px,1.25vw,20px);text-shadow:0 2px 20px rgba(0,0,0,.5)}

        .h4-bottom-nav{display:flex;justify-content:flex-end;align-self:flex-end;gap:clamp(2.5rem,5vw,6rem);
          border-bottom:1px solid rgba(255,255,255,.2);padding-bottom:clamp(1.5rem,3vh,2.5rem)}
        .h4-nav-item{display:flex;align-items:center;gap:1rem;text-decoration:none;opacity:.8;
          transition:opacity .7s cubic-bezier(0.16,1,0.3,1)}
        .h4-bottom-nav:hover .h4-nav-item{opacity:.3}
        .h4-bottom-nav .h4-nav-item:hover{opacity:1}
        .h4-nav-title{font-size:clamp(.85rem,1.1vw,1rem);font-weight:300;color:#fff;text-transform:uppercase;letter-spacing:.18em;
          transition:transform .7s cubic-bezier(0.16,1,0.3,1)}
        .h4-nav-item:hover .h4-nav-title{transform:translateX(4px)}
        .h4-nav-arrow{width:16px;height:16px;color:#fff;opacity:.3;transition:all .7s cubic-bezier(0.16,1,0.3,1)}
        .h4-nav-item:hover .h4-nav-arrow{opacity:1;transform:translateX(4px)}

        @media(max-width:900px){
          .h4-layout{padding-left:clamp(1.5rem,5vw,3rem);padding-right:clamp(1.5rem,5vw,3rem)}
          .h4-panel[data-panel="a"]{clip-path:none}
          .h4-panel[data-panel="b"]{display:none}
          .h4-streck{display:none}
          .h4-bottom-nav{flex-direction:column;gap:1.5rem}
          .h4-nav-item{justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.1);padding-bottom:1.5rem}
        }
        @media(prefers-reduced-motion:reduce){.h4-frame{transition:none}}
      `}</style>
    </section>
  );
}
