'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Premium GSAP-based section reveal hook.
 *
 * Usage:
 *   const sectionRef = useSectionReveal();
 *   <section ref={sectionRef}> ... </section>
 *
 * CSS classes:
 *   .gsap-reveal          — fade-up with blur (staggered)
 *   .gsap-reveal-heading  — larger fade-up with blur (headings)
 *   .gsap-parallax        — subtle parallax on scroll
 */
export function useSectionReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = ref.current;
      if (!container) return;

      // ── Standard reveals (staggered fade-up + blur) ──
      const reveals = container.querySelectorAll('.gsap-reveal');
      if (reveals.length) {
        gsap.fromTo(
          reveals,
          { opacity: 0, y: 40, filter: 'blur(4px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // ── Heading reveals (cinematic entrance) ──
      const headings = container.querySelectorAll('.gsap-reveal-heading');
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 60, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 80%',
              once: true,
            },
          }
        );
      });

      // ── Parallax elements (scrub-based) ──
      const parallaxEls = container.querySelectorAll('.gsap-parallax');
      parallaxEls.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      });
    },
    { scope: ref }
  );

  return ref;
}
