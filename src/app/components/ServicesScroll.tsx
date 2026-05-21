"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Service Data ── */
const services = [
  {
    title: "Kapital\u00ADförvaltning",
    desc: "Aktiv portföljförvaltning anpassad efter din riskaptit, tidshorisont och mål — bland marknadens bästa produkter utan begränsningar.",
    link: "/tjanster?open=0",
    image: "/images/service-draped-petals.png",
    stats: [
      { label: "Under förvaltning", value: "3+ mdr" },
      { label: "Avgift", value: "Fast" },
      { label: "Bindningstid", value: "Ingen" },
      { label: "Produkter", value: "100+" },
    ],
  },
  {
    title: "Förmögenhets\u00ADrådgivning",
    desc: "Heltäckande rådgivning med din livssituation som utgångspunkt. Vi kartlägger, analyserar och skapar en personlig finansiell plan.",
    link: "/tjanster?open=1",
    image: "/images/service-marble-dark.png",
    stats: [
      { label: "Kunder", value: "1 000+" },
      { label: "Min. belopp", value: "500K" },
      { label: "Plan", value: "Skräddarsydd" },
      { label: "Uppföljning", value: "Årlig" },
    ],
  },
  {
    title: "Private Banking",
    desc: "Heltäckande och problemlösande tjänst för din privatekonomi. Bolån, försäkring, pension — vi är din koordinator i varje fråga.",
    link: "/tjanster?open=2",
    image: "/images/service-column-bloom.png",
    stats: [
      { label: "Min. kapital", value: "50M+" },
      { label: "Kontaktperson", value: "Dedikerad" },
      { label: "Tjänster", value: "Alla" },
      { label: "Tillgänglighet", value: "24/7" },
    ],
  },
  {
    title: "Skatte\u00ADoptimering",
    desc: "ISK, kapitalförsäkring, generationsskiften och arv — vi hjälper dig strukturera din förmögenhet på skatteeffektivaste sätt.",
    link: "/tjanster?open=3",
    image: "/images/service-column-petals.png",
    stats: [
      { label: "Strukturer", value: "ISK · KF" },
      { label: "Skiften", value: "Generationsplan" },
      { label: "Rådgivning", value: "Oberoende" },
      { label: "Uppföljning", value: "Löpande" },
    ],
  },
];

export default function ServicesScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const infoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const numSlides = services.length;

    const ctx = gsap.context(() => {
      /* ── Main scroll-driven animation ── */
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const transitions = numSlides - 1; // 3 transitions for 4 slides

          for (let i = 1; i < numSlides; i++) {
            const slide = slideRefs.current[i];
            const info = infoRefs.current[i];
            const prevInfo = infoRefs.current[i - 1];
            const title = titleRefs.current[i];
            const prevTitle = titleRefs.current[i - 1];

            if (!slide) continue;

            // Each transition gets an equal portion of scroll
            const transitionStart = (i - 1) / transitions;
            const transitionEnd = i / transitions;
            const transitionProgress = Math.max(
              0,
              Math.min(1, (progress - transitionStart) / (transitionEnd - transitionStart))
            );

            // Clip-path: wipe from bottom to top
            const clipTop = 100 - transitionProgress * 100;
            slide.style.clipPath = `inset(${clipTop}% 0% 0%)`;

            // Info parallax: incoming slides up from 30% to 0%
            if (info) {
              const infoY = 30 - transitionProgress * 30;
              info.style.transform = `translateY(${infoY}%)`;
            }

            // Previous info: slides up from 0% to -30%
            if (prevInfo) {
              const prevY = -transitionProgress * 30;
              prevInfo.style.transform = `translateY(${prevY}%)`;
            }

            // Title opacity: fast fade
            if (title) {
              const titleOp = Math.max(0, transitionProgress * 4 - 3);
              title.style.opacity = String(titleOp);
            }
            if (prevTitle) {
              const prevOp = Math.max(0, 1 - transitionProgress * 4);
              prevTitle.style.opacity = String(prevOp);
            }

            // Update active index for sidebar
            if (transitionProgress > 0.5) {
              setActiveIndex((prev) => Math.max(prev, i));
            }
          }

          // Recalculate active index properly
          const rawIndex = Math.round(progress * transitions);
          setActiveIndex(Math.min(rawIndex, numSlides - 1));
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tjanster"
      className="relative"
      style={{ height: `${services.length * 100 + 100}vh` }}
    >
      {/* ── Sticky viewport container ── */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* ── Slides ── */}
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => { slideRefs.current[i] = el; }}
            className="absolute inset-0"
            style={{
              clipPath: i === 0 ? "none" : "inset(100% 0% 0%)",
              zIndex: i + 1,
              willChange: "clip-path",
            }}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="100vw"
                quality={100}
                unoptimized
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
              {/* Dark overlay for text readability — lighter to let image detail through */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(
                    135deg,
                    rgba(15,15,16,0.45) 0%,
                    rgba(15,15,16,0.25) 40%,
                    rgba(15,15,16,0.12) 70%,
                    rgba(15,15,16,0.40) 100%
                  )`,
                }}
              />
            </div>

            {/* Info layer (parallax) */}
            <div
              ref={(el) => { infoRefs.current[i] = el; }}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: i === 0 ? "translateY(0%)" : "translateY(30%)",
                willChange: "transform",
              }}
            >
              {/* Centered title */}
              <h2
                ref={(el) => { titleRefs.current[i] = el; }}
                className="font-display absolute"
                style={{
                  fontSize: "clamp(3.5rem, 12vw, 12rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                  color: "#ffffff",
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                  opacity: i === 0 ? 1 : 0,
                  willChange: "opacity",
                  textAlign: "center",
                  hyphens: "manual",
                  maxWidth: "90vw",
                }}
              >
                {service.title}
              </h2>

              {/* Bottom-left: description */}
              <div
                className="absolute"
                style={{
                  left: "clamp(1.5rem, 6vw, 6rem)",
                  bottom: "clamp(1.5rem, 6vw, 6rem)",
                  maxWidth: "320px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.92)",
                    lineHeight: 1.65,
                    marginBottom: "1.25rem",
                    textShadow: "0 1px 8px rgba(0,0,0,0.25)",
                  }}
                >
                  {service.desc}
                </p>
                <Link
                  href={service.link}
                  className="font-mono inline-flex items-center gap-2 group/link"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    borderBottom: "1px solid rgba(255,255,255,0.5)",
                    paddingBottom: "4px",
                  }}
                >
                  Läs mer
                  <ArrowRight
                    className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>

              {/* Bottom-right: stats */}
              <div
                className="absolute hidden md:flex flex-col gap-5"
                style={{
                  right: "clamp(1.5rem, 6vw, 6rem)",
                  bottom: "clamp(1.5rem, 6vw, 6rem)",
                  textAlign: "right",
                }}
              >
                {service.stats.map((stat, si) => (
                  <div key={si}>
                    <span
                      className="font-mono block"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.75)",
                        marginBottom: "2px",
                        textShadow: "0 1px 4px rgba(0,0,0,0.2)",
                      }}
                    >
                      {stat.label}
                    </span>
                    <span
                      className="font-display block"
                      style={{
                        fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        color: "#ffffff",
                        textShadow: "0 1px 6px rgba(0,0,0,0.2)",
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* ── Sidebar nav (top-left) ── */}
        <nav
          className="absolute z-50 hidden lg:flex flex-col gap-3"
          style={{
            top: "clamp(1.5rem, 6vw, 6rem)",
            left: "clamp(1.5rem, 6vw, 6rem)",
          }}
        >
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                // Scroll to the right position
                const section = sectionRef.current;
                if (!section) return;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight - window.innerHeight;
                const targetProgress = i / (services.length - 1);
                const targetScroll = sectionTop + sectionHeight * targetProgress;
                window.scrollTo({ top: targetScroll, behavior: "smooth" });
              }}
              className="text-left transition-all duration-500"
              style={{ opacity: activeIndex === i ? 1 : 0.55 }}
            >
              <span
                className="font-display block"
                style={{
                  fontSize: "15px",
                  fontWeight: activeIndex === i ? 600 : 400,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  textShadow: "0 1px 6px rgba(0,0,0,0.3)",
                }}
              >
                {s.title.replace(/\u00AD/g, "")}
              </span>
            </button>
          ))}
        </nav>

        {/* ── Column headers ── */}
        <div
          className="absolute z-50 hidden md:flex justify-between w-full"
          style={{
            top: "clamp(1.5rem, 6vw, 6rem)",
            left: 0,
            right: 0,
            paddingLeft: "clamp(12rem, 20vw, 20rem)",
            paddingRight: "clamp(1.5rem, 6vw, 6rem)",
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              textShadow: "0 1px 4px rgba(0,0,0,0.2)",
            }}
          >
            Tjänster
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              textShadow: "0 1px 4px rgba(0,0,0,0.2)",
            }}
          >
            Nyckeltal
          </span>
        </div>

        {/* ── Scroll progress indicator ── */}
        <div
          className="absolute z-50 bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
        >
          {services.map((_, i) => (
            <div
              key={i}
              className="transition-all duration-500"
              style={{
                width: activeIndex === i ? "24px" : "6px",
                height: "3px",
                borderRadius: "2px",
                background: activeIndex === i ? "#ffffff" : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
