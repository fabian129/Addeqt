"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TEAM_MEMBERS = [
  {
    name: "Christoffer Mohammar",
    role: "Grundare & VD",
    image: "/images/team/CHM bild 191113 (1).jpg",
    objectPosition: "center 15%",
    link: "/team/christoffer",
    filterClass: "contrast-[1.05] brightness-95",
  },
  {
    name: "Fredrik Lidmark",
    role: "Partner",
    image: "/images/team/fredrik-lidmark.jpg",
    objectPosition: "center 12%",
    link: "/team/fredrik-lidmark",
    filterClass: "contrast-[1.05] brightness-95",
  },
  {
    name: "Christian Holm Svensson",
    role: "Partner",
    image: "/images/team/christian.jpg",
    objectPosition: "center 15%",
    link: "/team/christian",
    filterClass: "contrast-[1.05] brightness-95",
  },
  {
    name: "Mats Gunnå",
    role: "Förvaltare",
    image: "/images/team/mats.jpg",
    objectPosition: "center 18%",
    link: "/team/mats",
    filterClass: "contrast-[1.08] brightness-[1.12]",
  },
  {
    name: "Carl Christian Ottander",
    role: "Förvaltare",
    image: "/images/team/carl.jpg",
    objectPosition: "center 12%",
    link: "/team/carl",
    filterClass: "contrast-[1.05] brightness-[1.28]",
  },
  {
    name: "Fredrik Strömberg",
    role: "Förvaltare",
    image: "/images/team/fredrik.jpg",
    objectPosition: "center 15%",
    link: "/team/fredrik-stromberg",
    filterClass: "contrast-[1.05] brightness-[1.22]",
  },
];

export default function TeamEditorial() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) return;

      const cards = container.querySelectorAll(".team-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="team"
      className="dark-section component--teameditorial relative w-full overflow-hidden text-white"
      style={{
        backgroundColor: "#060A14", // Deep sapphire midnight base
        paddingTop: "clamp(6rem, 12vw, 11rem)",
        paddingBottom: "clamp(6rem, 12vw, 11rem)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Subtle warm ambient glow */}
      <div 
        className="absolute -top-32 left-10 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(196, 168, 130, 0.06) 0%, rgba(15, 20, 32, 0.05) 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A882]">
                07 — Människorna
              </span>
              <span className="h-px w-8 bg-[#C4A882]/40" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-white/40 hidden sm:inline">
                Dedikerat Team
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.12] tracking-tight">
              Människorna bakom <br />
              ditt mandat.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg font-light text-white/70 leading-relaxed max-w-md">
              Erfarna förvaltare och partners med decennier av samlad erfarenhet från Nordens ledande finansinstitutioner — förenade i övertygelsen om oberoende rådgivning.
            </p>
          </div>
        </div>

        {/* Team Grid — Dark Glass Capsules matching reference media_1788763347821.png */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {TEAM_MEMBERS.map((member) => (
            <Link
              key={member.name}
              href={member.link}
              className="team-card group relative h-[380px] sm:h-[420px] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/[0.08] bg-[#0E131F]/80 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:border-[#C4A882]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_20px_rgba(196,168,130,0.12)] transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between p-4 sm:p-5"
            >
              {/* Background portrait filling the capsule card */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover grayscale ${member.filterClass} group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out`}
                  style={{ objectPosition: member.objectPosition }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                {/* Dark luxury vignette overlay matching reference */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060A14] via-transparent to-[#060A14]/75 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                {/* Subtle warm ambient sheen on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card Top: Role inside card */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[#C4A882] font-semibold drop-shadow-sm">
                  {member.role}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4A882]/50 group-hover:bg-[#C4A882] group-hover:shadow-[0_0_6px_#C4A882] transition-all shrink-0 ml-1" />
              </div>

              {/* Card Bottom: Member Name & Profile Action inside card */}
              <div className="relative z-10">
                <h3 className="font-display text-sm sm:text-base font-normal text-white group-hover:text-[#E2C799] transition-colors leading-snug mb-1.5 drop-shadow-sm">
                  {member.name}
                </h3>
                <div className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-white/55 group-hover:text-white transition-colors">
                  <span>Se profil</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
