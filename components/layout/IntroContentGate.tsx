"use client";

import { ReactNode, useCallback, useState } from "react";
import LoadIntroduction from "./LoadIntroduction";

type IntroContentGateProps = {
  children: ReactNode;
};

/**
 * IntroContentGate
 *
 * Acts as a gatekeeper for rendering the main application content.
 *
 * - Initially renders an introductory/loading experience (`LoadIntroduction`)
 * - Once the intro signals completion, it reveals the actual page content
 *
 * This pattern is useful for:
 * - splash screens
 * - onboarding sequences
 * - preloading animations
 * - staged content reveal for UX polish
 */
export default function IntroContentGate({ children }: IntroContentGateProps) {
  /**
   * Tracks whether the intro animation/sequence has completed.
   * Until this is true, main content remains hidden.
   */
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  /**
   * Callback passed into the intro component.
   *
   * Using `useCallback` ensures a stable function reference,
   * preventing unnecessary re-renders of `LoadIntroduction`.
   */
  const handleIntroComplete = useCallback(() => {
    setIsIntroComplete(true);
  }, []);

  return (
    <>
      {/**
       * Intro component runs first and controls when the app unlocks.
       * It is always mounted so it can perform animations or async work.
       */}
      <LoadIntroduction onComplete={handleIntroComplete} />

      {/**
       * Main content is conditionally rendered only after intro completes.
       *
       * Returning `null` instead of rendering hidden content avoids:
       * - unnecessary DOM work
       * - layout shifts
       * - unwanted side effects from child components
       */}
      {isIntroComplete ? children : null}
    </>
  );
}