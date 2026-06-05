"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSectionReveal } from "../hooks/useSectionReveal";
import BrandDivider from "./BrandDivider";

/* ── Team data ── */

const team = [
  {
    name: "Christoffer Mohammar",
    role: "Grundare & VD",
    image: "/images/team/CHM bild 191113 (1).jpg",
    objectPosition: "center 15%",
    link: "/team/christoffer",
  },
  {
    name: "Fredrik Lidmark",
    role: "Partner",
    image: "/images/team/fredrik-lidmark.jpg",
    objectPosition: "center 12%",
    link: "/team/fredrik-lidmark",
  },
  {
    name: "Christian Holm Svensson",
    role: "Partner",
    image: "/images/team/christian.jpg",
    objectPosition: "center 15%",
    link: "/team/christian",
  },
  {
    name: "Mats Gunnå",
    role: "Senior Rådgivare",
    image: "/images/team/mats.jpg",
    objectPosition: "center 18%",
    link: "/team/mats",
  },
  {
    name: "Carl Christian Ottander",
    role: "Senior Rådgivare",
    image: "/images/team/carl.jpg",
    objectPosition: "center 12%",
    link: "/team/carl",
  },
  {
    name: "Fredrik Strömberg",
    role: "Senior Rådgivare",
    image: "/images/team/fredrik.jpg",
    objectPosition: "center 15%",
    link: "/team/fredrik-stromberg",
  },
];

/* ── Component ── */

export default function TeamSection() {
  const sectionRef = useScrollReveal();
  const gsapRef = useSectionReveal();

  return (
    <section
      id="om-oss"
      ref={sectionRef}
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={gsapRef}
        className="reveal"
        style={{
          maxWidth: "var(--content-width)",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 4vw, 3rem)",
          boxSizing: "border-box",
        }}
      >
        {/* ── Section Header ── */}
        <div
          className="team-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "3rem",
            paddingBottom: "2.5rem",
          }}
        >
          <div style={{ flex: "1 1 55%" }}>
            <div
              className="font-mono"
              style={{
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
                marginBottom: "1rem",
              }}
            >
              Teamet
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--fg)",
                margin: 0,
              }}
            >
              Människorna bakom Addeqt.
            </h2>
          </div>

          <div
            className="team-header-right"
            style={{ flex: "0 1 38%", alignSelf: "flex-end" }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "var(--fg-dim)",
                margin: 0,
                maxWidth: "420px",
              }}
            >
              Erfarna rådgivare med bakgrund från storbanker och
              kapitalförvaltning — förenade i övertygelsen att rådgivning ska
              vara oberoende och personlig.
            </p>
          </div>
        </div>

        <div className="mb-12 md:mb-20">
          <BrandDivider fullBleed={false} />
        </div>

        {/* ── Team Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
          {team.map((member) => (
            <Link 
              key={member.name} 
              href={member.link} 
              className="group flex flex-col gsap-reveal" 
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              {/* Photo */}
              <div 
                className="relative overflow-hidden bg-[#f5f4f2] w-full aspect-square mb-4"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-[20%] group-hover:scale-[1.03]"
                  style={{ objectPosition: member.objectPosition }}
                  quality={85}
                  draggable={false}
                />
              </div>

              {/* Meta (below photo) */}
              <div className="flex flex-col">
                <h3 className="font-display text-[15px] md:text-[17px] text-[var(--fg)] mb-0.5 font-medium tracking-tight">
                  {member.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)] opacity-80">
                  {member.role}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Styles ── */}
      <style>{`
        /* ── Responsive ── */
        @media (max-width: 768px) {
          .team-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
          .team-header-right {
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
