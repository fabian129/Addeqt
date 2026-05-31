"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

/* ── Related services ── */
const relatedServices = [
  {
    title: "Kapitalförvaltning",
    desc: "Aktiv portföljförvaltning anpassad efter din riskaptit och dina mål.",
    href: "/tjanster?open=0",
  },
  {
    title: "Förmögenhetsrådgivning",
    desc: "Heltäckande rådgivning som tar sin utgångspunkt i din unika situation.",
    href: "/tjanster?open=1",
  },
  {
    title: "Private Banking",
    desc: "Problemlösande helhetstjänst för allt som rör din privatekonomi.",
    href: "/tjanster?open=2",
  },
];

const expertise = [
  "Private Banking",
  "Förmögenhetsrådgivning",
  "Strukturering",
  "Generationsskiften",
];

export default function CarlPage() {
  return (
    <>
      <Navbar forceScrolled />

      <main className="chm-page">
        <div className="chm-container">

          {/* ── Breadcrumb ── */}
          <nav className="chm-breadcrumb font-mono">
            <Link href="/">Hem</Link>
            <span className="chm-breadcrumb-sep">/</span>
            <span>Team</span>
            <span className="chm-breadcrumb-sep">/</span>
            <span className="chm-breadcrumb-active">Carl Christian Ottander</span>
          </nav>

          <div className="chm-grid">

            {/* ═══ LEFT: Content ═══ */}
            <div className="chm-content">

              {/* Header */}
              <div className="chm-header">
                <span className="chm-eyebrow font-mono">
                  Senior Rådgivare
                </span>
                <h1 className="font-display chm-name">
                  Carl Christian
                  <br />
                  Ottander
                </h1>

                {/* Contact links */}
                <div className="chm-contact-links">
                  <a
                    href="mailto:carl@addeqt.com"
                    className="chm-contact-link group"
                  >
                    <Mail className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                    <span className="chm-contact-reveal">carl@addeqt.com</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chm-contact-link group"
                  >
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <span className="chm-contact-reveal">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="chm-quote">
                <p className="font-display">
                  &ldquo;De bästa finansiella besluten fattas med både hjärta och huvud.&rdquo;
                </p>
              </blockquote>

              {/* Biography */}
              <div className="chm-bio">
                <p>
                  Carl Christian Ottander är <strong>Senior Rådgivare</strong> på AddEqt
                  med en lång och framgångsrik karriär inom private banking och
                  förmögenhetsrådgivning. Han har arbetat med några av Sveriges mest
                  framstående familjer och entreprenörer, där han byggt upp ett
                  djupt förtroende genom sin förmåga att kombinera <strong>finansiell
                  expertis med genuin omsorg</strong> om sina kunders långsiktiga väl.
                </p>
                <p>
                  Carl Christians specialområde är <strong>strukturering och
                  generationsskiften</strong> — komplexa processer som kräver både
                  teknisk kompetens och diplomatisk fingertoppskänsla. Han har lett
                  flertalet framgångsrika generationsövergångar där familjeförmögenheter
                  bevarats och utvecklats över generationsgränserna. Hans filosofi är
                  enkel: de bästa finansiella lösningarna uppstår när man förstår
                  hela familjens dynamik, inte bara balansräkningen.
                </p>
                <p>
                  På AddEqt bidrar Carl Christian med sin breda erfarenhet och sitt
                  omfattande nätverk till att stärka bolagets erbjudande inom
                  <strong> helhetsorienterad förmögenhetsrådgivning</strong>. Han
                  uppskattar den oberoende plattform som AddEqt erbjuder, där
                  kundens bästa alltid står i centrum. Utanför arbetet är Carl
                  Christian en engagerad hästsportentusiast och ägnar sig gärna
                  åt jakt och kulturella upplevelser.
                </p>
              </div>

              {/* Related services */}
              <div className="chm-services">
                <h3 className="chm-services-title font-mono">Relaterade tjänster</h3>
                <div className="chm-services-list">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="chm-service-item group"
                    >
                      <div>
                        <h4 className="chm-service-name">{service.title}</h4>
                        <p className="chm-service-desc">{service.desc}</p>
                      </div>
                      <span className="chm-service-arrow">
                        <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ═══ RIGHT: Photo & Info (sticky) ═══ */}
            <aside className="chm-aside">

              {/* Portrait */}
              <div className="chm-portrait">
                <Image
                  src="/images/team/carl.jpg"
                  alt="Carl Christian Ottander — Senior Rådgivare, AddEqt"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
              </div>

              {/* Expertise tags */}
              <div className="chm-expertise">
                <h3 className="chm-expertise-title font-mono">Expertisområden</h3>
                <div className="chm-expertise-tags">
                  {expertise.map((tag) => (
                    <span key={tag} className="chm-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Contact card */}
              <div className="chm-card">
                <h3 className="font-display chm-card-title">Kontakta Carl Christian</h3>
                <p className="chm-card-desc">
                  Diskutera din ekonomiska situation direkt med Carl Christian och teamet på AddEqt.
                </p>

                <a
                  href="mailto:carl@addeqt.com"
                  className="chm-card-btn group"
                >
                  <span>Skicka e-post</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </a>

                <Link
                  href="#kontakt"
                  className="chm-card-btn group"
                >
                  <span>Boka möte</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>

                <div className="chm-card-footer font-mono">
                  <div>
                    <div className="chm-card-company">AddEqt AB</div>
                    <div>Artillerigatan 45, Stockholm</div>
                  </div>
                  <div>08-580 066 20</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        /* ═══════════════════════════════════════
           CARL PAGE — Editorial Profile
           ═══════════════════════════════════════ */

        .chm-page {
          background: #fff;
          min-height: 100vh;
        }

        .chm-container {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 6vw, 6rem);
        }

        /* ── Breadcrumb ── */
        .chm-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding-top: clamp(7rem, 10vh, 9rem);
          margin-bottom: clamp(3rem, 5vw, 5rem);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--fg-muted);
        }
        .chm-breadcrumb a {
          text-decoration: none;
          color: var(--fg-muted);
          transition: color 0.3s ease;
        }
        .chm-breadcrumb a:hover {
          color: var(--fg);
        }
        .chm-breadcrumb-sep {
          color: var(--hairline-strong);
        }
        .chm-breadcrumb-active {
          color: var(--fg);
        }

        /* ── Main grid ── */
        .chm-grid {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: clamp(3rem, 6vw, 6rem);
          padding-bottom: clamp(5rem, 10vw, 8rem);
        }

        /* ── Left: Content ── */
        .chm-content {
          display: flex;
          flex-direction: column;
          gap: clamp(2.5rem, 4vw, 3.5rem);
        }

        /* Header */
        .chm-header {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .chm-eyebrow {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
          border-bottom: 1px solid var(--hairline);
          padding-bottom: 0.5rem;
          width: fit-content;
        }
        .chm-name {
          font-size: clamp(3rem, 6.5vw, 5.5rem);
          font-weight: 300;
          letter-spacing: -0.04em;
          line-height: 0.95;
          color: var(--fg);
          margin: 0;
        }

        /* Contact links */
        .chm-contact-links {
          display: flex;
          gap: 1.5rem;
          padding-top: 0.25rem;
        }
        .chm-contact-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--fg-muted);
          text-decoration: none;
          font-size: 12px;
          transition: color 0.3s ease;
        }
        .chm-contact-link:hover {
          color: var(--fg);
        }
        .chm-contact-reveal {
          font-size: 11px;
          opacity: 0;
          margin-left: -4px;
          transition: opacity 0.3s ease, margin-left 0.3s ease;
        }
        .chm-contact-link:hover .chm-contact-reveal {
          opacity: 1;
          margin-left: 0;
        }

        /* Quote */
        .chm-quote {
          border-left: 2px solid var(--hairline-strong);
          padding: 2rem 0 2rem 2rem;
          margin: 0;
        }
        .chm-quote p {
          font-size: clamp(1.35rem, 2.5vw, 1.85rem);
          font-weight: 300;
          line-height: 1.35;
          letter-spacing: -0.02em;
          color: var(--fg);
          margin: 0;
        }

        /* Biography */
        .chm-bio {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .chm-bio p {
          font-size: clamp(15px, 1.15vw, 16px);
          line-height: 1.8;
          color: var(--fg-dim);
          margin: 0;
          font-weight: 300;
        }
        .chm-bio strong {
          font-weight: 500;
          color: var(--fg);
        }

        /* Related services */
        .chm-services {
          border-top: 1px solid var(--hairline);
          padding-top: clamp(2.5rem, 4vw, 3.5rem);
        }
        .chm-services-title {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg);
          font-weight: 600;
          margin: 0 0 1.5rem;
        }
        .chm-services-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .chm-service-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem;
          margin: 0 -1.25rem;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.3s ease;
        }
        .chm-service-item:hover {
          background: var(--surface-1);
        }
        .chm-service-name {
          font-size: 15px;
          font-weight: 500;
          color: var(--fg);
          margin: 0 0 0.25rem;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }
        .chm-service-item:hover .chm-service-name {
          color: var(--fg-dim);
        }
        .chm-service-desc {
          font-size: 13px;
          color: var(--fg-muted);
          margin: 0;
          font-weight: 300;
          line-height: 1.5;
        }
        .chm-service-arrow {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--hairline-strong);
          color: var(--fg-muted);
          transition: border-color 0.3s ease, color 0.3s ease;
        }
        .chm-service-item:hover .chm-service-arrow {
          border-color: var(--navy);
          color: var(--navy);
        }

        /* ── Right: Aside (sticky) ── */
        .chm-aside {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: sticky;
          top: 5rem;
          height: fit-content;
        }

        /* Portrait */
        .chm-portrait {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 2px;
          background: var(--surface-1);
        }
        .chm-portrait img {
          filter: grayscale(100%);
          opacity: 0.9;
          transition: filter 0.7s ease, opacity 0.7s ease, transform 0.7s ease;
        }
        .chm-portrait:hover img {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.02);
        }

        /* Expertise */
        .chm-expertise {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .chm-expertise-title {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-muted);
          font-weight: 500;
          margin: 0;
        }
        .chm-expertise-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .chm-tag {
          display: inline-flex;
          align-items: center;
          padding: 0.4rem 0.75rem;
          font-size: 12px;
          font-weight: 400;
          color: var(--fg-dim);
          border: 1px solid var(--hairline-strong);
          letter-spacing: 0.02em;
          transition: border-color 0.3s ease;
          cursor: default;
        }
        .chm-tag:hover {
          border-color: var(--fg-muted);
        }

        /* Contact card */
        .chm-card {
          background: var(--navy);
          color: #fff;
          padding: clamp(1.5rem, 3vw, 2rem);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }
        .chm-card-title {
          font-size: clamp(1.1rem, 1.5vw, 1.3rem);
          font-weight: 500;
          letter-spacing: -0.02em;
          margin: 0 0 0.5rem;
        }
        .chm-card-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin: 0 0 1.75rem;
          font-weight: 300;
          max-width: 260px;
        }
        .chm-card-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.85rem 1rem;
          margin-bottom: 0.5rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .chm-card-btn:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.3);
        }
        .chm-card-footer {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .chm-card-company {
          color: rgba(255,255,255,0.55);
          margin-bottom: 0.25rem;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .chm-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .chm-aside {
            position: static;
            order: -1;
          }
          .chm-portrait {
            max-height: 500px;
          }
        }
      `}</style>
    </>
  );
}
