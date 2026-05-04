"use client";

import { useEffect, useState } from "react";

/**
 * Brand letters are split so each character can animate independently.
 */
const brandLetters = ["W", "h", "e", "n", "e", "v", "r"];

/**
 * Total intro duration.
 *
 * This should stay in sync with the CSS animation timing used by
 * `.load-introduction` and its child elements.
 */
const INTRODUCTION_DURATION_MS = 2400;

type LoadIntroductionProps = {
  onComplete?: () => void;
};

export { INTRODUCTION_DURATION_MS };

/**
 * LoadIntroduction
 *
 * Displays the branded intro animation before the page content is revealed.
 *
 * Responsibilities:
 * - show the animated brand mark
 * - temporarily lock page scrolling
 * - respect reduced-motion preferences
 * - notify the parent once the intro finishes
 */
export default function LoadIntroduction({ onComplete }: LoadIntroductionProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;

    /**
     * Users with reduced motion enabled should not wait through the full
     * animation duration.
     */
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /**
     * Prevent the page behind the intro from scrolling while the intro is active.
     */
    html.style.overflow = "hidden";

    const timeout = window.setTimeout(
      () => {
        setIsVisible(false);
        html.style.overflow = previousOverflow;
        onComplete?.();
      },
      prefersReducedMotion ? 100 : INTRODUCTION_DURATION_MS,
    );

    return () => {
      window.clearTimeout(timeout);

      /**
       * Always restore the previous overflow value on cleanup to avoid leaving
       * the page locked if the component unmounts early.
       */
      html.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="load-introduction" aria-hidden="true">
      <div className="load-introduction-mark-wrap">
        <h1 className="load-introduction-word serif-italic text-black">
          {brandLetters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className="load-introduction-letter"
              style={{ animationDelay: `${200 + index * 50}ms` }}
            >
              {letter}
            </span>
          ))}

          <sup className="load-introduction-registered">&reg;</sup>
        </h1>
      </div>
    </div>
  );
}