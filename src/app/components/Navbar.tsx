"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Shield, BarChart3, Clock, Building, ChevronDown, BookOpen, Users, Target, Compass } from "lucide-react";

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
  { label: 'Vår historia', description: 'Från en vision om oberoende till en etablerad aktör.', href: '/om-oss', icon: 'book' },
  { label: 'Teamet', description: 'Möt experterna som förvaltar och rådger kring din ekonomi.', href: '/#om-oss', icon: 'users' },
  { label: 'Så arbetar vi', description: 'En inblick i vår strukturerade och trygga process.', href: '/#process', icon: 'target' },
  { label: 'Våra värderingar', description: 'Transparens, oberoende och kunden i absolut första rummet.', href: '/om-oss#varderingar', icon: 'compass' },
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
  book: BookOpen,
  users: Users,
  target: Target,
  compass: Compass,
};

type NavState = 'hero-transparent' | 'light-frosted' | 'dark-frosted';

export default function Navbar({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [navState, setNavState] = useState<NavState>(forceScrolled ? 'light-frosted' : 'hero-transparent');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOmOpen, setMobileOmOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // 1. If at the very top (Hero section) and not force-scrolled, remain transparent
      if (scrollY <= 40 && !forceScrolled) {
        setNavState('hero-transparent');
        return;
      }

      // 2. Check if navbar top area is within any .dark-section
      let isOverDark = false;
      const darkSections = document.querySelectorAll('.dark-section');
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // The navbar occupies y=0 to 70px. Check if y=50 intersects this section
        if (rect.top <= 55 && rect.bottom >= 55) {
          isOverDark = true;
        }
      });

      if (isOverDark) {
        setNavState('dark-frosted');
      } else {
        setNavState('light-frosted');
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
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

  // Theme states
  const isDarkTheme = navState === 'hero-transparent' || navState === 'dark-frosted';
  const isScrolled = navState !== 'hero-transparent';

  // Dynamic colors based on quiet luxury palette
  const linkColor = isDarkTheme ? "rgba(255, 255, 255, 0.78)" : "var(--fg-dim)";
  const linkHover = isDarkTheme ? "#ffffff" : "var(--fg)";
  const logoFill = isDarkTheme ? "#ffffff" : "var(--navy)";
  const ctaColor = navState === 'dark-frosted' ? "#C4A882" : isDarkTheme ? "rgba(255, 255, 255, 0.88)" : "var(--fg)";
  const ctaBorder = navState === 'dark-frosted' ? "rgba(196, 168, 130, 0.5)" : isDarkTheme ? "rgba(255, 255, 255, 0.4)" : "rgba(26, 29, 54, 0.35)";
  const ctaHover = navState === 'dark-frosted' ? "#ffffff" : isDarkTheme ? "#ffffff" : "#C4A882";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        height: isScrolled ? '70px' : '90px',
        backgroundColor: 
          navState === 'hero-transparent' 
            ? 'transparent' 
            : navState === 'dark-frosted' 
              ? 'rgba(15, 15, 16, 0.88)' 
              : 'rgba(250, 248, 245, 0.88)',
        borderBottom: 
          navState === 'hero-transparent' 
            ? '1px solid transparent' 
            : navState === 'dark-frosted' 
              ? '1px solid rgba(255, 255, 255, 0.08)' 
              : '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: 
          navState === 'hero-transparent' 
            ? 'none' 
            : navState === 'dark-frosted' 
              ? '0 10px 30px rgba(0, 0, 0, 0.5)' 
              : '0 4px 30px rgba(0, 0, 0, 0.03)',
        backdropFilter: isScrolled ? 'blur(20px) saturate(150%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(150%)' : 'none',
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
          className="hidden md:flex items-center gap-10"
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
                  className="text-[13px] uppercase tracking-[0.08em] font-semibold transition-all duration-300 flex items-center gap-1.5"
                  style={{ color: activeDropdown === item.dropdown ? linkHover : linkColor, background: 'none', border: 'none', cursor: 'pointer', height: '100%' }}
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
                className="text-[13px] uppercase tracking-[0.08em] font-semibold transition-all duration-300 flex items-center"
                style={{ color: linkColor, height: '100%' }}
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

          <Link
            href="#kontakt"
            className="group inline-flex items-center gap-2 font-display uppercase tracking-[0.1em] font-semibold transition-all duration-300 ml-16"
            style={{ color: ctaColor, borderBottom: `1px solid ${ctaBorder}` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = ctaHover;
              e.currentTarget.style.borderBottomColor = ctaHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = ctaColor;
              e.currentTarget.style.borderBottomColor = ctaBorder;
            }}
          >
            <span className="text-[13px] pb-1">Boka möte</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
            style={{ backgroundColor: isDarkTheme ? "#ffffff" : "var(--fg)" }}
          />
          <span
            className={`block w-4 h-[1.5px] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[2px]" : ""
            }`}
            style={{ backgroundColor: isDarkTheme ? "#ffffff" : "var(--fg)" }}
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
            background: isDarkTheme ? '#121316' : '#FAF8F5',
            borderBottom: isDarkTheme ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: isDarkTheme ? '0 30px 80px rgba(0, 0, 0, 0.75)' : '0 20px 60px rgba(0, 0, 0, 0.08)',
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
                gap: '1.5rem',
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
                      background: isDarkTheme ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
                      border: isDarkTheme ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.07)',
                      borderRadius: '14px',
                      textDecoration: 'none',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                      minHeight: '160px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = isDarkTheme ? '0 12px 30px rgba(0,0,0,0.5)' : '0 8px 30px rgba(0,0,0,0.08)';
                      e.currentTarget.style.borderColor = '#C4A882';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = isDarkTheme ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.07)';
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: isDarkTheme ? 'rgba(196, 168, 130, 0.12)' : 'var(--navy, #0f1d3a)',
                        border: isDarkTheme ? '1px solid rgba(196, 168, 130, 0.25)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: isDarkTheme ? '#C4A882' : '#ffffff' }}
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
                          color: isDarkTheme ? '#ffffff' : 'var(--fg, #1a1a1a)',
                          lineHeight: 1.3,
                        }}
                      >
                        {service.title}
                      </span>
                      <span
                        style={{
                          fontSize: '13px',
                          color: isDarkTheme ? 'rgba(255, 255, 255, 0.55)' : 'var(--fg-muted, #888)',
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
            background: isDarkTheme ? '#121316' : '#FAF8F5',
            borderBottom: isDarkTheme ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: isDarkTheme ? '0 30px 80px rgba(0, 0, 0, 0.75)' : '0 20px 60px rgba(0, 0, 0, 0.08)',
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
                gap: '1.5rem',
              }}
            >
              {omAddeqtLinks.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setActiveDropdown(null)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: isDarkTheme ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
                      border: isDarkTheme ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.07)',
                      borderRadius: '14px',
                      textDecoration: 'none',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                      minHeight: '160px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = isDarkTheme ? '0 12px 30px rgba(0,0,0,0.5)' : '0 8px 30px rgba(0,0,0,0.08)';
                      e.currentTarget.style.borderColor = '#C4A882';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = isDarkTheme ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.07)';
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: isDarkTheme ? 'rgba(196, 168, 130, 0.12)' : 'var(--navy, #0f1d3a)',
                        border: isDarkTheme ? '1px solid rgba(196, 168, 130, 0.25)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: isDarkTheme ? '#C4A882' : '#ffffff' }}
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
                          color: isDarkTheme ? '#ffffff' : 'var(--fg, #1a1a1a)',
                          lineHeight: 1.3,
                        }}
                      >
                        {link.label}
                      </span>
                      <span
                        style={{
                          fontSize: '13px',
                          color: isDarkTheme ? 'rgba(255, 255, 255, 0.55)' : 'var(--fg-muted, #888)',
                          lineHeight: 1.5,
                        }}
                      >
                        {link.description}
                      </span>
                    </div>
                  </Link>
                );
              })}
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
          background: isDarkTheme ? 'rgba(15, 15, 16, 0.98)' : 'rgba(250, 248, 245, 0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: menuOpen 
            ? isDarkTheme ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.06)' 
            : 'none',
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
              style={{ color: isDarkTheme ? 'rgba(255,255,255,0.85)' : 'var(--fg-dim)' }}
            >
              Tjänster
            </Link>

            {/* Om Addeqt — collapsible section */}
            <div>
              <button
                onClick={() => setMobileOmOpen((prev) => !prev)}
                className="flex items-center gap-1 text-sm font-medium transition-colors py-2 w-full"
                style={{ color: isDarkTheme ? 'rgba(255,255,255,0.85)' : 'var(--fg-dim)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 0' }}
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
                      style={{ color: isDarkTheme ? 'rgba(255,255,255,0.6)' : 'var(--fg-muted, #888)' }}
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
              style={{ color: isDarkTheme ? 'rgba(255,255,255,0.85)' : 'var(--fg-dim)' }}
            >
              Varför Addeqt
            </Link>
            <Link
              href="/#kontakt"
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium transition-colors py-2"
              style={{ color: isDarkTheme ? 'rgba(255,255,255,0.85)' : 'var(--fg-dim)' }}
            >
              Kontakt
            </Link>

            {/* CTA */}
            <Link
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className={`block px-5 py-3 rounded-full text-sm font-medium text-center mt-4 transition-colors ${
                isDarkTheme 
                  ? "bg-[#C4A882] text-[#0F0F10] font-semibold hover:bg-[#D4BC98]" 
                  : "bg-[var(--navy)] text-white hover:bg-black"
              }`}
            >
              Boka möte
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
