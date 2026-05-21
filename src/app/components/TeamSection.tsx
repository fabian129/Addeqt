"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSectionReveal } from "../hooks/useSectionReveal";
import { useRef, useState, useCallback } from "react";

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
  },
  {
    name: "Christian Holm Svensson",
    role: "Partner",
    image: "/images/team/christian.jpg",
    objectPosition: "center 15%",
  },
  {
    name: "Mats Gunnå",
    role: "Senior Rådgivare",
    image: "/images/team/mats.jpg",
    objectPosition: "center 18%",
  },
  {
    name: "Carl Christian Ottander",
    role: "Senior Rådgivare",
    image: "/images/team/carl.jpg",
    objectPosition: "center 12%",
  },
  {
    name: "Fredrik Strömberg",
    role: "Senior Rådgivare",
    image: "/images/team/fredrik.jpg",
    objectPosition: "center 15%",
  },
];

/* ── Component ── */

export default function TeamSection() {
  const sectionRef = useScrollReveal();
  const gsapRef = useSectionReveal();
  const stripRef = useRef<HTMLDivElement>(null);

  /* ── Drag-to-scroll ── */
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!stripRef.current) return;
    setIsDragging(true);
    dragState.current.startX = e.pageX - stripRef.current.offsetLeft;
    dragState.current.scrollLeft = stripRef.current.scrollLeft;
    stripRef.current.style.cursor = "grabbing";
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !stripRef.current) return;
      e.preventDefault();
      const x = e.pageX - stripRef.current.offsetLeft;
      const walk = (x - dragState.current.startX) * 1.5;
      stripRef.current.scrollLeft = dragState.current.scrollLeft - walk;
    },
    [isDragging]
  );

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    if (stripRef.current) stripRef.current.style.cursor = "grab";
  }, []);

  return (
    <section
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
            borderBottom: "1px solid var(--hairline)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          <div style={{ flex: "1 1 55%" }}>
            <div
              className="font-mono"
              style={{
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
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
      </div>

      {/* ── Draggable team strip ── */}
      <div
        ref={stripRef}
        className="team-strip"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {team.map((member) => {
          const CardWrapper = member.link
            ? ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
                <Link href={member.link!} style={{ textDecoration: 'none', color: 'inherit' }} {...props}>{children}</Link>
              )
            : ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
                <div {...props}>{children}</div>
              );

          return (
          <CardWrapper key={member.name} className="team-member" style={member.link ? { cursor: 'pointer' } : undefined}>
            {/* Name + role above photo */}
            <div className="team-member__meta">
              <span className="font-mono team-member__role">
                {member.role}
              </span>
              <h3 className="font-display team-member__name">
                {member.name}
              </h3>
            </div>

            {/* Photo */}
            <div className="team-member__photo">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 70vw, 28vw"
                className="team-member__img"
                style={{ objectPosition: member.objectPosition }}
                quality={85}
                draggable={false}
              />
            </div>
          </CardWrapper>
          );
        })}
      </div>

      {/* ── Styles ── */}
      <style>{`
        /* ── Strip layout — draggable scroll ── */
        .team-strip {
          display: flex;
          gap: clamp(0.75rem, 1.2vw, 1.25rem);
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          padding: 0 clamp(1.5rem, 4vw, 3rem);
          box-sizing: border-box;
          -webkit-user-select: none;
          user-select: none;
        }
        .team-strip::-webkit-scrollbar {
          display: none;
        }

        /* ── Member card — wide ── */
        .team-member {
          flex: 0 0 clamp(280px, 26vw, 380px);
          display: flex;
          flex-direction: column;
          cursor: grab;
          position: relative;
        }

        /* ── Meta (above photo) ── */
        .team-member__meta {
          padding: 0 0.25rem 1.25rem;
          min-height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .team-member__role {
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
          margin-bottom: 0.35rem;
        }
        .team-member__name {
          font-size: clamp(0.95rem, 1.3vw, 1.2rem);
          font-weight: 400;
          color: var(--fg);
          margin: 0;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        /* ── Photo area — TALL ── */
        .team-member__photo {
          height: clamp(420px, 68vh, 720px);
          background: #f5f4f2;
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }

        /* ── Image styling ── */
        .team-member__img {
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        /* ── Hover — subtle zoom + color hint ── */
        .team-member:hover .team-member__img {
          filter: grayscale(20%);
          transform: scale(1.03);
        }

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
          .team-member {
            flex: 0 0 clamp(240px, 65vw, 320px);
          }
          .team-member__photo {
            height: clamp(300px, 55vh, 500px);
          }
        }
      `}</style>
    </section>
  );
}
