"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Slide Data ── */
const slides = [
  {
    title: "Bakgrunden",
    desc: "Segmentet 5–50 Mkr har historiskt varit kraftigt underservat — storbankernas standardprodukter, dubbla avgifter, och en rådgivare max en gång per år.",
    image: "/images/service-draped-petals.png",
    stats: [
      { label: "Grundat", value: "2021" },
      { label: "Segment", value: "5–50 Mkr" },
      { label: "Marknad", value: "Underservad" },
      { label: "Tradition", value: "125+ år" },
    ],
  },
  {
    title: "Insikten",
    desc: "Ingen ringde och frågade om jag behövde hjälp. Tre produkter att välja på — inte mer. Manuellt backoffice drev upp kostnaderna och avgifterna.",
    image: "/images/service-marble-dark.png",
    stats: [
      { label: "Teknikskuld", value: "Manuellt" },
      { label: "Avgifter", value: "Dubbla" },
      { label: "Rådgivning", value: "1x/år" },
      { label: "Oberoende", value: "Sällsynt" },
    ],
  },
  {
    title: "Lösningen",
    desc: "Addeqt byggde tech-first — inga egna fonder, ingen ersättning från tredje part. Varje beslut styrs av en enda funktion: kundnyttan.",
    image: "/images/service-column-bloom.png",
    stats: [
      { label: "Teknik", value: "First" },
      { label: "Avgift", value: "Fast %" },
      { label: "Oberoende", value: "100%" },
      { label: "Produkter", value: "Öppet universum" },
    ],
  },
  {
    title: "Resultatet",
    desc: "Modern förmögenhetsförvaltning — en gammal privatbank, men bättre. Samma personliga service som Genève, med transparenta avgifter och genuint oberoende.",
    image: "/images/service-column-petals.png",
    stats: [
      { label: "Kunder", value: "1 000+" },
      { label: "AUM", value: "3+ mdr" },
      { label: "Depå", value: "Nordnet" },
      { label: "FI-tillstånd", value: "Feb 2023" },
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

    const numSlides = slides.length;

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
      id="varfor-addeqt"
      className="relative"
      style={{ height: `${slides.length * 100}vh` }}
    >
      {/* ── Sticky viewport container ── */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* ── Slides ── */}
        {slides.map((slide, i) => (
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
                src={slide.image}
                alt={slide.title}
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
              className="absolute inset-0"
              style={{
                transform: i === 0 ? "translateY(0%)" : "translateY(30%)",
                willChange: "transform",
              }}
            >
              {/* Title + statement stacked, stats right */}
              <div
                ref={(el) => { titleRefs.current[i] = el as HTMLHeadingElement | null; }}
                className="absolute inset-0"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  willChange: "opacity",
                }}
              >
                {/* Title + body — stacked, center */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "clamp(12rem, 25vw, 26rem)",
                    transform: "translateY(-55%)",
                    maxWidth: "500px",
                  }}
                >
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(3.5rem, 7vw, 6rem)",
                      fontWeight: 300,
                      letterSpacing: "-0.05em",
                      lineHeight: 1,
                      color: "#ffffff",
                      textShadow: "0 2px 30px rgba(0,0,0,0.35)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {slide.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "clamp(17px, 1.4vw, 22px)",
                      color: "#ffffff",
                      lineHeight: 1.65,
                      textShadow: "0 1px 12px rgba(0,0,0,0.3)",
                      fontWeight: 300,
                      maxWidth: "420px",
                    }}
                  >
                    {slide.desc}
                  </p>
                </div>

                {/* Stats — stacked, lower-right */}
                <div
                  className="absolute hidden md:flex flex-col gap-5"
                  style={{
                    right: "clamp(2rem, 6vw, 6rem)",
                    bottom: "clamp(3rem, 8vh, 6rem)",
                    textAlign: "right",
                  }}
                >
                  {slide.stats.map((stat, si) => (
                    <div key={si}>
                      <span
                        className="font-mono block"
                        style={{
                          fontSize: "10px",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase" as const,
                          color: "rgba(255,255,255,0.45)",
                          marginBottom: "3px",
                          textShadow: "0 1px 4px rgba(0,0,0,0.15)",
                        }}
                      >
                        {stat.label}
                      </span>
                      <span
                        className="font-display block"
                        style={{
                          fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                          fontWeight: 400,
                          color: "rgba(255,255,255,0.85)",
                          letterSpacing: "-0.01em",
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
          </div>
        ))}

        {/* ── Nav (top-left, above content) ── */}
        <nav
          className="absolute z-50 hidden lg:flex gap-6"
          style={{
            top: "clamp(5rem, 10vh, 8rem)",
            left: "clamp(1.5rem, 6vw, 6rem)",
          }}
        >
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                const section = sectionRef.current;
                if (!section) return;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight - window.innerHeight;
                const targetProgress = i / (slides.length - 1);
                const targetScroll = sectionTop + sectionHeight * targetProgress;
                window.scrollTo({ top: targetScroll, behavior: "smooth" });
              }}
              className="text-left transition-all duration-500"
              style={{ opacity: activeIndex === i ? 1 : 0.4 }}
            >
              <span
                className="font-display block"
                style={{
                  fontSize: "13px",
                  fontWeight: activeIndex === i ? 500 : 300,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  textShadow: "0 1px 6px rgba(0,0,0,0.3)",
                }}
              >
                {s.title}
              </span>
            </button>
          ))}
        </nav>

        {/* ── Scroll progress indicator ── */}
        <div
          className="absolute z-50 bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
        >
          {slides.map((_, i) => (
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
