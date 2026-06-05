import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ── Slide Data ── */
const slides = [
  {
    title: "Frustrationen.",
    desc: "Addeqt grundades ur en tydlig brist i finansbranschen. En marknad präglad av institutionella egon, dolda kostnader och modeller där storbankens vinst går före kundens avkastning.",
    image: "/images/Mj bilder/mountain.png",
  },
  {
    title: "Transparensen.",
    desc: "Helt fristående. Inga egna fonder, inga dolda provisioner. Resultatet är en renodlad förvaltning där varje beslut styrs uteslutande av dina mål.",
    image: "/images/Mj bilder/armillary-sphere.png",
  },
  {
    title: "Framkanten.",
    desc: "Modern förmögenhetsförvaltning. Vi kombinerar teknikdriven precision med traditionellt hantverk. Aktiv allokering och transparenta avgifter – helt utan agendor.",
    image: "/images/Mj bilder/swan.png",
  },
];

export default function OmOssScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const infoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const numSlides = slides.length;

    // Refresh ScrollTrigger to ensure correct height calculations on hard load
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 1, // Säker smoothing
      onUpdate: (self) => {
        const progress = self.progress;

        // Lights out effect for the hero section
        const hero = document.getElementById("om-hero");
        if (hero) {
          // Fade out the hero completely during the first 10% of the scroll
          const heroOpacity = Math.max(0, 1 - progress * 10);
          hero.style.opacity = String(heroOpacity);
        }

        // Dwell and transition weights
        // 1:1 ratio = Exakt lika mycket scroll-tid för paus som för animation. Kontrollerat och förutsägbart.
        const dwellWeight = 1; 
        const transitionWeight = 1; 
        const totalWeight = (numSlides * dwellWeight) + ((numSlides - 1) * transitionWeight);

        let currentIndex = 0;

        for (let i = 1; i < numSlides; i++) {
          const slide = slideRefs.current[i];
          const info = infoRefs.current[i];
          const prevInfo = infoRefs.current[i - 1];
          const title = titleRefs.current[i];
          const prevTitle = titleRefs.current[i - 1];

          if (!slide) continue;

          const startWeight = (i * dwellWeight) + ((i - 1) * transitionWeight);
          const endWeight = startWeight + transitionWeight;
          
          const transitionStart = startWeight / totalWeight;
          const transitionEnd = endWeight / totalWeight;
          
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

          // Determine active index based on halfway point of transition
          const halfway = transitionStart + (transitionWeight / 2 / totalWeight);
          if (progress >= halfway) {
            currentIndex = i;
          }
        }

        setActiveIndex(currentIndex);
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="om-oss-story"
      className="dark-section relative w-full"
      style={{ height: `${slides.length * 150}vh` }}
    >
      {/* ── Sticky viewport container ── */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-[#0f0f10]"
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
              {/* Cinematic Dark Overlay (Bottom only for text) */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(
                    to top,
                    rgba(15,15,16,0.85) 0%,
                    rgba(15,15,16,0.2) 35%,
                    rgba(15,15,16,0.0) 100%
                  )`,
                }}
              />
            </div>

            {/* Info layer (parallax) */}
            <div
              ref={(el) => { infoRefs.current[i] = el; }}
              className="absolute inset-0 flex flex-col justify-end pb-[15vh] md:pb-[20vh] px-8 md:px-[12%]"
              style={{
                transform: i === 0 ? "translateY(0%)" : "translateY(30%)",
                willChange: "transform",
              }}
            >
              <div
                ref={(el) => { titleRefs.current[i] = el as HTMLHeadingElement | null; }}
                className="w-full max-w-4xl"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  willChange: "opacity",
                }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-6">
                  Kapitel 0{i + 1}
                </div>
                <h2
                  className="font-display mb-6"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5.5rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: "#ffffff",
                    textShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  className="font-light"
                  style={{
                    fontSize: "clamp(17px, 1.5vw, 22px)",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.7,
                    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                    maxWidth: "600px",
                  }}
                >
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* ── Scroll progress indicator ── */}
        <div className="absolute z-50 bottom-8 md:bottom-12 left-8 md:left-[12%] flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className="transition-all duration-500"
              style={{
                width: activeIndex === i ? "32px" : "8px",
                height: "2px",
                borderRadius: "1px",
                background: activeIndex === i ? "#ffffff" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
