"use client";

import { ReactNode, useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * ScrollReveal
 *
 * A lightweight scroll-triggered reveal wrapper.
 *
 * Responsibilities:
 * - observes when an element enters the viewport
 * - adds the `is-visible` class to trigger CSS animations
 * - respects reduced motion preferences
 *
 * Animation is controlled entirely via CSS:
 * - `.scroll-reveal` → initial hidden state
 * - `.scroll-reveal.is-visible` → revealed state
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 300,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const revealElement = element;

    /**
     * Respect user accessibility preferences.
     * If reduced motion is enabled, reveal immediately without animation.
     */
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      revealElement.classList.add("is-visible");
      return;
    }

    /**
     * Fallback check using requestAnimationFrame.
     *
     * This ensures elements already in view on initial load
     * are revealed immediately without waiting for IntersectionObserver.
     */
    function revealIfInView() {
      const rect = revealElement.getBoundingClientRect();

      /**
       * Reveal threshold:
       * Element becomes visible when it reaches ~80% of viewport height.
       *
       * Lower value = earlier reveal
       * Higher value = later reveal
       */
      const revealLine = window.innerHeight * 0.8;

      if (rect.top <= revealLine) {
        revealElement.classList.add("is-visible");
        return true;
      }

      return false;
    }

    const frame = window.requestAnimationFrame(revealIfInView);

    /**
     * IntersectionObserver handles scroll-based visibility changes.
     *
     * Once revealed, the element is unobserved to avoid unnecessary work.
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      },
      {
        root: null,
        rootMargin: "0px 0px -16% 0px",
        threshold: 0.01,
      },
    );

    observer.observe(revealElement);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      /**
       * Base class is required for animation.
       * Additional className allows layout customization by parent components.
       */
      className={["scroll-reveal", className].filter(Boolean).join(" ")}
      /**
       * Delay is applied via inline style so each instance can stagger
       * animations without needing multiple CSS classes.
       */
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}