"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Shield, BarChart3, Clock, Building, ChevronDown } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: 'tjanster' | 'om-addeqt';
};

const navLinks: NavLink[] = [
  { label: "Tjänster", href: "/tjanster", dropdown: 'tjanster' },
  { label: "Om Addeqt", href: "/om-oss", dropdown: 'om-addeqt' },
  { label: "Varför Addeqt", href: "/#varfor-addeqt" },
  { label: "Kontakt", href: "/#kontakt" },
];

const omAddeqtLinks = [
  { label: 'Vår historia', href: '/om-oss' },
  { label: 'Teamet', href: '/#om-oss' },
  { label: 'Så arbetar vi', href: '/#process' },
  { label: 'Våra värderingar', href: '/om-oss#varderingar' },
];

const services = [
  { title: 'Kapitalförvaltning', description: 'Aktiv portföljförvaltning anpassad efter din riskaptit', href: '/tjanster?open=0', icon: 'chart' },
  { title: 'Förmögenhetsrådgivning', description: 'Heltäckande rådgivning med din livssituation som utgångspunkt', href: '/tjanster?open=1', icon: 'shield' },
  { title: 'Private Banking', description: 'Dedikerad kontaktperson som koordinerar hela din privatekonomi', href: '/tjanster?open=2', icon: 'building' },
  { title: 'Skatteoptimering', description: 'Strukturering av förmögenhet för maximal skatteeffektivitet', href: '/tjanster?open=3', icon: 'clock' },
];

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  shield: Shield,
  chart: BarChart3,
  clock: Clock,
  building: Building,
};

export default function Navbar({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOmOpen, setMobileOmOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (forceScrolled) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!activeDropdown) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-dropdown-zone]')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [activeDropdown]);

  const handleMouseEnterZone = useCallback((zone: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(zone);
  }, []);

  const handleMouseLeaveZone = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  }, []);

  // Static colors — always white frosted bar
  const linkColor = "var(--fg-dim)";
  const linkHover = "var(--fg)";
  const logoFill = "var(--navy)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: '60px',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div
        className="h-full flex items-center justify-between"
        style={{
          maxWidth: 'var(--content-width)',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* LEFT — Logo (no pill) */}
        <Link
          href="/"
          className="flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 189 35.32"
            className="h-[15px] w-auto"
            style={{ fill: logoFill }}
          >
            <g>
              <path d="M22.73,8.64h5.08l12,31.17H35.58L33,33H17.57L15,39.81H10.73ZM31.58,29.3,25.29,12.73,19,29.3Z" transform="translate(-10.73 -8.17)" />
              <path d="M45.39,39.81V8.64H56.33a18.58,18.58,0,0,1,6.58,1.11A14.64,14.64,0,0,1,68,12.92a13.72,13.72,0,0,1,3.26,4.91,17.13,17.13,0,0,1,1.14,6.4,17.38,17.38,0,0,1-1.14,6.42A13.42,13.42,0,0,1,68,35.55a14.89,14.89,0,0,1-5.07,3.15,18.58,18.58,0,0,1-6.58,1.11Zm4-3.72h7a13.91,13.91,0,0,0,4.88-.81A10.62,10.62,0,0,0,65,32.93a10.42,10.42,0,0,0,2.4-3.75,14,14,0,0,0,.83-4.95,14.1,14.1,0,0,0-.83-5A10.42,10.42,0,0,0,65,15.52a10.62,10.62,0,0,0-3.75-2.35,13.91,13.91,0,0,0-4.88-.81h-7Z" transform="translate(-10.73 -8.17)" />
              <path d="M79.36,39.81V8.64H90.3a18.58,18.58,0,0,1,6.58,1.11A14.64,14.64,0,0,1,102,12.92a13.85,13.85,0,0,1,3.26,4.91,17.13,17.13,0,0,1,1.14,6.4,17.38,17.38,0,0,1-1.14,6.42,13.55,13.55,0,0,1-3.26,4.9,14.89,14.89,0,0,1-5.07,3.15,18.58,18.58,0,0,1-6.58,1.11Zm4-3.72h7a14,14,0,0,0,4.88-.81,10.62,10.62,0,0,0,3.75-2.35,10.4,10.4,0,0,0,2.39-3.75,13.82,13.82,0,0,0,.84-4.95,13.87,13.87,0,0,0-.84-5,10.4,10.4,0,0,0-2.39-3.75,10.62,10.62,0,0,0-3.75-2.35,14,14,0,0,0-4.88-.81h-7Z" transform="translate(-10.73 -8.17)" />
              <path d="M113.33,8.64h21.4v3.72H117.28V22.55h14.85V26H117.28V36.09h17.45v3.72h-21.4Z" transform="translate(-10.73 -8.17)" />
              <path d="M143.57,24.23a11.92,11.92,0,0,1,.93-4.68,12.16,12.16,0,0,1,6.35-6.47,11.36,11.36,0,0,1,4.59-.95,11.24,11.24,0,0,1,4.6.95c.26.11.5.24.74.37.95-1,1.94-2,2.95-2.95a16.33,16.33,0,0,0-2-1.07,16.13,16.13,0,0,0-12.5,0,16.24,16.24,0,0,0-5.12,3.44A16.41,16.41,0,0,0,140.64,18a16.11,16.11,0,0,0,0,12.49,16.69,16.69,0,0,0,1.22,2.29c.5-.43,1-.87,1.51-1.28s1.16-.9,1.74-1.35a13,13,0,0,1-.61-1.24A11.91,11.91,0,0,1,143.57,24.23Z" transform="translate(-10.73 -8.17)" />
              <path d="M169.79,31.46a15.53,15.53,0,0,0,1.7-7.23A15.6,15.6,0,0,0,170.23,18a17.18,17.18,0,0,0-1.46-2.71c-1.05,1-2.09,1.94-3.05,3a11.4,11.4,0,0,1,.65,1.31,12.17,12.17,0,0,1-2.56,13.21A12.25,12.25,0,0,1,160,35.37a11.24,11.24,0,0,1-4.6,1,11.36,11.36,0,0,1-4.59-1l-.7-.35c-.65.52-1.33,1-2,1.54-.47.38-.93.78-1.39,1.17A17.49,17.49,0,0,0,149.2,39a16,16,0,0,0,9.56.91,16.5,16.5,0,0,0,3.1-1l3.91,4.56h4.93L165.21,37A16.32,16.32,0,0,0,169.79,31.46Z" transform="translate(-10.73 -8.17)" />
              <path d="M184.57,12.36H173.35V8.64h26.38v3.72H188.52V39.81h-4Z" transform="translate(-10.73 -8.17)" />
              <path d="M148.55,22.93h5.89V17h2.74v5.89h5.89v2.74h-5.89v5.89h-2.74V25.67h-5.89Z" transform="translate(-10.73 -8.17)" />
            </g>
          </svg>
        </Link>

        {/* RIGHT — Nav links + CTA (desktop, no pill wrapper) */}
        <nav
          className="hidden md:flex items-center gap-1"
        >
          {navLinks.map((item) =>
            item.dropdown ? (
              /* Dropdown trigger button */
              <div
                key={item.label}
                data-dropdown-zone
                className="relative"
                onMouseEnter={() => handleMouseEnterZone(item.dropdown!)}
                onMouseLeave={handleMouseLeaveZone}
              >
                <button
                  className="text-[13px] font-medium px-4 py-1.5 transition-all duration-300 flex items-center gap-1"
                  style={{ color: activeDropdown === item.dropdown ? linkHover : linkColor, background: 'none', border: 'none', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = linkHover;
                  }}
                  onMouseLeave={(e) => {
                    if (activeDropdown !== item.dropdown) {
                      e.currentTarget.style.color = linkColor;
                    }
                  }}
                  onClick={() => setActiveDropdown((prev) => prev === item.dropdown ? null : item.dropdown!)}
                >
                  {item.label}
                  <ChevronDown
                    className="w-3 h-3 transition-transform duration-300"
                    style={{ transform: activeDropdown === item.dropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium px-4 py-1.5 transition-all duration-300"
                style={{ color: linkColor }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = linkHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = linkColor;
                }}
              >
                {item.label}
              </Link>
            )
          )}

          {/* CTA button — navy filled pill */}
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium rounded-full px-5 py-1.5 transition-all duration-300 text-white hover:brightness-110 ml-2"
            style={{
              background: "var(--navy)",
            }}
          >
            Boka möte
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label="Meny"
        >
          <span
            className={`block w-4 h-[1.5px] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
            style={{ backgroundColor: "var(--fg)" }}
          />
          <span
            className={`block w-4 h-[1.5px] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[2px]" : ""
            }`}
            style={{ backgroundColor: "var(--fg)" }}
          />
        </button>
      </div>

      {/* ─── Tjänster Mega Menu Dropdown ─── */}
      <div
        data-dropdown-zone
        className="hidden md:block"
        onMouseEnter={() => handleMouseEnterZone('tjanster')}
        onMouseLeave={handleMouseLeaveZone}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '100%',
          pointerEvents: activeDropdown === 'tjanster' ? 'auto' : 'none',
        }}
      >
        {/* Invisible bridge zone to connect nav button to dropdown */}
        <div style={{ height: '8px' }} />

        <div
          style={{
            opacity: activeDropdown === 'tjanster' ? 1 : 0,
            transform: activeDropdown === 'tjanster' ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            background: '#ffffff',
            borderBottom: '1px solid var(--hairline, rgba(0,0,0,0.08))',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          }}
        >
          <div
            style={{
              maxWidth: 'var(--content-width)',
              margin: '0 auto',
              padding: '2.5rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
              }}
            >
              {services.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={() => setActiveDropdown(null)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: 'var(--bg-warm, #f8f7f5)',
                      border: '1px solid var(--hairline, rgba(0,0,0,0.08))',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      minHeight: '160px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'var(--navy, #0f1d3a)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: '#ffffff' }}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-display, inherit)',
                          fontSize: '15px',
                          fontWeight: 500,
                          color: 'var(--fg, #1a1a1a)',
                          lineHeight: 1.3,
                        }}
                      >
                        {service.title}
                      </span>
                      <span
                        style={{
                          fontSize: '13px',
                          color: 'var(--fg-muted, #888)',
                          lineHeight: 1.5,
                        }}
                      >
                        {service.description}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Om Addeqt Dropdown ─── */}
      <div
        data-dropdown-zone
        className="hidden md:block"
        onMouseEnter={() => handleMouseEnterZone('om-addeqt')}
        onMouseLeave={handleMouseLeaveZone}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '100%',
          pointerEvents: activeDropdown === 'om-addeqt' ? 'auto' : 'none',
        }}
      >
        {/* Invisible bridge zone */}
        <div style={{ height: '8px' }} />

        <div
          style={{
            opacity: activeDropdown === 'om-addeqt' ? 1 : 0,
            transform: activeDropdown === 'om-addeqt' ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--hairline, rgba(0,0,0,0.08))',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          }}
        >
          <div
            style={{
              maxWidth: 'var(--content-width)',
              margin: '0 auto',
              padding: '1.5rem 2.5rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '0.25rem',
                flexDirection: 'column',
                maxWidth: '260px',
              }}
            >
              {omAddeqtLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveDropdown(null)}
                  style={{
                    display: 'block',
                    padding: '0.65rem 1rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 450,
                    color: 'var(--fg-dim, #555)',
                    transition: 'background 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bg-warm, #f8f7f5)';
                    e.currentTarget.style.color = 'var(--fg, #1a1a1a)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--fg-dim, #555)';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: menuOpen ? '1px solid rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--content-width)',
            margin: '0 auto',
            padding: '16px 24px 24px',
          }}
        >
          <div className="space-y-1">
            {/* Tjänster — direct link on mobile */}
            <Link
              href="/tjanster"
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium transition-colors py-2"
              style={{ color: 'var(--fg-dim)' }}
            >
              Tjänster
            </Link>

            {/* Om Addeqt — collapsible section */}
            <div>
              <button
                onClick={() => setMobileOmOpen((prev) => !prev)}
                className="flex items-center gap-1 text-sm font-medium transition-colors py-2 w-full"
                style={{ color: 'var(--fg-dim)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 0' }}
              >
                Om Addeqt
                <ChevronDown
                  className="w-3 h-3 transition-transform duration-300"
                  style={{ transform: mobileOmOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileOmOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 space-y-1 pb-1">
                  {omAddeqtLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => { setMenuOpen(false); setMobileOmOpen(false); }}
                      className="block text-sm transition-colors py-1.5"
                      style={{ color: 'var(--fg-muted, #888)' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Simple links */}
            <Link
              href="/#varfor-addeqt"
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium transition-colors py-2"
              style={{ color: 'var(--fg-dim)' }}
            >
              Varför Addeqt
            </Link>
            <Link
              href="/#kontakt"
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium transition-colors py-2"
              style={{ color: 'var(--fg-dim)' }}
            >
              Kontakt
            </Link>

            {/* CTA */}
            <Link
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="block bg-[var(--navy)] text-white px-5 py-3 rounded-full text-sm font-medium text-center mt-4"
            >
              Boka möte
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
