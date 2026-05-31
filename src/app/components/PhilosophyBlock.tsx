"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSectionReveal } from "../hooks/useSectionReveal";

gsap.registerPlugin(ScrollTrigger);

const HEADING_TEXT = "Vi designar inte produkter. Vi bygger förtroende.";
const BODY_TEXT =
  "I en värld av provisioner och dolda incitament är fullständigt oberoende en styrka. Vi tar aldrig betalt av andra — bara av dig. Det ger oss rätt att alltid säga sanningen.";

export default function PhilosophyBlock() {
  const containerRef = useSectionReveal();
  const headingWords = HEADING_TEXT.split(" ");
  const bodyWords = BODY_TEXT.split(" ");

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const headingWordEls = container.querySelectorAll(".philosophy-word-heading");
      if (headingWordEls.length > 0) {
        gsap.to(headingWordEls, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "center 45%",
            scrub: 1,
          },
        });
      }

      const bodyWordEls = container.querySelectorAll(".philosophy-word-body");
      if (bodyWordEls.length > 0) {
        gsap.to(bodyWordEls, {
          opacity: 1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: container,
            start: "top 60%",
            end: "center 30%",
            scrub: 1,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="max-w-6xl mx-auto px-6 md:px-8 mb-32 relative">
      <div className="py-20 px-8 md:px-20 bg-[#161617] rounded-[40px] relative overflow-hidden text-center">
        {/* Radial glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(75,75,75,0.3)_0%,_#161617_70%)]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#86868b] text-sm font-medium tracking-widest uppercase mb-8 gsap-reveal">
            Vår filosofi
          </p>

          <h3 className="font-[family-name:var(--font-manrope)] text-4xl md:text-6xl text-white font-medium leading-tight mb-8">
            {headingWords.map((word, i) => {
              // Highlight "förtroende." based on index.
              // "Vi designar inte produkter. Vi bygger förtroende."
              // index: 0=Vi, 1=designar, 2=inte, 3=produkter., 4=Vi, 5=bygger, 6=förtroende.
              const isGradient = i >= 4;
              return (
                <span
                  key={i}
                  className={`philosophy-word-heading ${isGradient ? "gradient-text" : ""}`}
                  style={{
                    opacity: 0.2,
                    display: "inline-block",
                    marginRight: "0.25em",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </h3>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {bodyWords.map((word, i) => (
              <span
                key={i}
                className="philosophy-word-body"
                style={{
                  opacity: 0.2,
                  display: "inline-block",
                  marginRight: "0.25em",
                }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
