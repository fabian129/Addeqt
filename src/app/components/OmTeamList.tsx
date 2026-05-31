"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

const team = [
  { name: "Christoffer Mohammar", role: "VD & Grundare", href: "/team/christoffer", image: "/images/team/CHM bild 191113 (1).jpg" },
  { name: "Fredrik Lidmark", role: "Partner", href: "/team/fredrik-lidmark", image: "/images/team/fredrik-lidmark.jpg" },
  { name: "Christian Holm Svensson", role: "Partner", href: "/team/christian", image: "/images/team/christian.jpg" },
  { name: "Mats Gunnå", role: "Senior Rådgivare", href: "/team/mats", image: "/images/team/mats.jpg" },
  { name: "Carl Christian Ottander", role: "Senior Rådgivare", href: "/team/carl", image: "/images/team/carl.jpg" },
  { name: "Fredrik Strömberg", role: "Senior Rådgivare", href: "/team/fredrik-stromberg", image: "/images/team/fredrik.jpg" },
];

export default function OmTeamList() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className="om-team-list-wrapper"
      onMouseMove={handleMouseMove}
    >
      <div className="om-team-list">
        {team.map((t, i) => (
          <Link
            key={t.name}
            href={t.href}
            className="om-team-member group"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div>
              <span className="om-team-name font-display">{t.name}</span>
              <span className="om-team-role">{t.role}</span>
            </div>
            <ArrowRight className="om-team-arrow" strokeWidth={1.5} />
          </Link>
        ))}
      </div>

      {/* Floating cursor image */}
      {hovered !== null && (
        <div
          className="om-team-cursor-img"
          style={{
            left: mouse.x,
            top: mouse.y,
          }}
        >
          <Image
            src={team[hovered].image}
            alt={team[hovered].name}
            width={200}
            height={260}
            className="object-cover"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      )}

      <style>{`
        .om-team-list-wrapper {
          position: relative;
        }
        .om-team-list {
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }
        .om-team-member {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: clamp(1.25rem, 2.5vh, 2rem) 0;
          border-top: 1px solid rgba(15,15,16,0.08);
          text-decoration: none;
          transition: padding-left 0.3s ease;
        }
        .om-team-member:last-child {
          border-bottom: 1px solid rgba(15,15,16,0.08);
        }
        .om-team-member:hover {
          padding-left: 1rem;
        }
        .om-team-name {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          color: #0f0f10;
          display: block;
          margin-bottom: 0.25rem;
        }
        .om-team-role {
          font-size: 13px;
          color: rgba(15,15,16,0.4);
          font-weight: 300;
        }
        .om-team-arrow {
          width: 20px;
          height: 20px;
          color: rgba(15,15,16,0.25);
          transition: color 0.3s ease, transform 0.3s ease;
          flex-shrink: 0;
        }
        .om-team-member:hover .om-team-arrow {
          color: rgba(15,15,16,0.6);
          transform: translateX(4px);
        }

        /* Floating cursor image */
        .om-team-cursor-img {
          position: absolute;
          width: 110px;
          height: 140px;
          pointer-events: none;
          z-index: 10;
          overflow: hidden;
          border-radius: 3px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          transform: translate(-50%, -70%);
          transition: opacity 0.2s ease;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
