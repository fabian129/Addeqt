"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function OmOssLightsOut({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      const storySection = document.getElementById("om-oss-story");
      
      if (el && storySection) {
        gsap.to(el, {
          backgroundColor: "#0f0f10", // Svart
          ease: "none",
          scrollTrigger: {
            trigger: storySection,
            start: "top 85%", // Börjar mörklägga när bildspelet kommer in nedifrån
            end: "top 30%", // Helt mörkt innan den når toppen
            scrub: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div 
      ref={containerRef} 
      style={{ backgroundColor: "#ffffff" }}
      className="transition-colors w-full"
    >
      {children}
    </div>
  );
}
