"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function LightsOutWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const finalStoryText = document.getElementById("final-story-text");
      const qIcon = document.getElementById("q-icon-final");
      
      if (finalStoryText) {
        gsap.to(el, {
          backgroundColor: "#1A1D36", // Ljusare marinblå för att matcha bilden i nästa sektion
          color: "#ffffff", // Byt global textfärg till ljus
          ease: "none",
          scrollTrigger: {
            trigger: finalStoryText,
            start: "top 85%", // Börjar mörklägga så fort rubriken kommer in
            end: "top 65%", // Snabbt förlopp, helt mörkt redan när texten är nedanför mitten
            scrub: true,
          },
        });

        if (qIcon) {
          gsap.to(qIcon, {
            color: "#ffffff",
            ease: "none",
            scrollTrigger: {
              trigger: finalStoryText,
              start: "top 85%",
              end: "top 65%",
              scrub: true,
            },
          });
        }
      }
    },
    { scope: containerRef }
  );

  return (
    <div 
      ref={containerRef} 
      style={{ 
        backgroundColor: "#FAFAFA", // Startar ljust
        color: "#1A1C23" 
      }}
      className="transition-colors"
    >
      {children}
    </div>
  );
}
