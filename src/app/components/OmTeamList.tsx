"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const team = [
  { name: "Christoffer Mohammar", role: "VD & Grundare", href: "/team/christoffer", image: "/images/team/CHM bild 191113 (1).jpg" },
  { name: "Fredrik Lidmark", role: "Partner", href: "/team/fredrik-lidmark", image: "/images/team/fredrik-lidmark.jpg" },
  { name: "Christian Holm Svensson", role: "Partner", href: "/team/christian", image: "/images/team/christian.jpg" },
  { name: "Mats Gunnå", role: "Förvaltare", href: "/team/mats", image: "/images/team/mats.jpg" },
  { name: "Carl Christian Ottander", role: "Förvaltare", href: "/team/carl", image: "/images/team/carl.jpg" },
  { name: "Fredrik Strömberg", role: "Förvaltare", href: "/team/fredrik-stromberg", image: "/images/team/fredrik.jpg" },
];

export default function OmTeamList() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="om-team-list-wrapper">
      <div className="om-team-list">
        {team.map((t, i) => {
          const isHovered = hovered === i;
          return (
            <Link
              key={t.name}
              href={t.href}
              className={`om-team-member group ${isHovered ? 'active' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="om-team-name font-display">{t.name}</span>
              <span className="om-team-role">
                <span className="om-team-plus font-mono">+</span>
                {t.role}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Fixed Center Image */}
      <div className={`om-team-center-img ${hovered !== null ? 'visible' : ''}`}>
        {team.map((t, i) => (
          <Image
            key={t.name}
            src={t.image}
            alt={t.name}
            fill
            className={`object-cover transition-opacity duration-500 ${hovered === i ? 'opacity-100' : 'opacity-0'}`}
            sizes="(max-width: 768px) 80vw, 320px"
            priority={i < 3}
          />
        ))}
      </div>

      <style>{`
        .om-team-list-wrapper {
          position: relative;
          padding: 2rem 0;
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
          padding: clamp(1.25rem, 2.5vw, 2rem) 0;
          border-bottom: 1px solid rgba(15,15,16,0.1);
          text-decoration: none;
          color: rgba(15,15,16,0.25); /* Default dim state */
          transition: color 0.3s ease, border-color 0.3s ease;
        }
        .om-team-member:first-child {
          border-top: 1px solid rgba(15,15,16,0.1);
        }
        
        /* Active / Hovered state */
        .om-team-list-wrapper:hover .om-team-member {
          color: rgba(15,15,16,0.15); /* Dim others even more when container hovered */
        }
        .om-team-list-wrapper:hover .om-team-member.active {
          color: rgba(15,15,16,1); /* Highlight current */
          border-bottom-color: rgba(15,15,16,0.3); /* slightly stronger border under active item */
        }

        .om-team-name {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          transition: inherit;
        }
        .om-team-role {
          font-size: clamp(14px, 1.2vw, 16px);
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: inherit;
        }
        .om-team-plus {
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          font-size: 1.1em;
        }
        .om-team-member.active .om-team-plus {
          opacity: 1;
          transform: translateX(0);
        }

        /* Fixed Center Image */
        .om-team-center-img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(240px, 25vw, 360px);
          aspect-ratio: 3 / 4;
          pointer-events: none; /* Let clicks pass through to the list */
          z-index: 10;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .om-team-center-img.visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
