"use client";

import IntroContentGate from "@/components/layout/IntroContentGate";
import ScrollReveal from "@/components/behavior/ScrollReveal";

import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Logos from "@/components/logos/Logos";
import HowItWorks from "@/components/how-It-works/HowItWorks";
import WorkGrid from "@/components/work-grid/WorkGrid";
import HorizontalScroll from "@/components/horizontal-scroll/HorizontalScroll";
import Features from "@/components/features/Features";
import Testimonials from "@/components/testimonials/Testimonials";

import Pricing from "@/components/pricing/Pricing";
import Blog from "@/components/blog/Blog";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";

/**
 * Home Page
 *
 * This is the main landing page composition layer.
 *
 * Responsibilities:
 * - orchestrates section layout and ordering
 * - controls intro gating (IntroContentGate)
 * - applies scroll-based reveal animations (ScrollReveal)
 * - tracks visibility of HorizontalScroll to inform Header behavior
 *
 * This file should remain a **pure composition layer**:
 * - no heavy logic
 * - no UI implementation details
 * - only layout + cross-section coordination
 */
export default function Home() {
  /**
   * Tracks whether the HorizontalScroll section is currently intersecting
   * a specific viewport region.
   *
   * Used to modify Header behavior (e.g. styling, transparency, or interaction).
   */
  const [isOverHorizontalScroll, setIsOverHorizontalScroll] = useState(false);

  /**
   * Holds a reference to the wrapper element around HorizontalScroll.
   *
   * Using a state setter ref pattern allows React to notify us when
   * the element mounts/unmounts.
   */
  const [horizontalScrollElement, setHorizontalScrollElement] =
    useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!horizontalScrollElement) return;

    /**
     * IntersectionObserver detects when the HorizontalScroll section
     * enters/leaves a custom viewport threshold.
     *
     * rootMargin explanation:
     * - "0px 0px -100% 0px" effectively shifts the bottom boundary up,
     *   so the section is considered "visible" earlier/later depending on layout.
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("HorizontalScroll visible:", entry.isIntersecting);

        setIsOverHorizontalScroll(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -100% 0px",
      }
    );

    observer.observe(horizontalScrollElement);

    return () => {
      observer.disconnect();
    };
  }, [horizontalScrollElement]);

  return (
    <main>
      {/**
       * IntroContentGate ensures the intro animation completes
       * before rendering the main content.
       */}
      <IntroContentGate>
        {/**
         * Header reacts to scroll state (specifically HorizontalScroll visibility).
         * This enables contextual UI changes like blending with background sections.
         */}
        <Header isOverHorizontalScroll={isOverHorizontalScroll} />

        {/**
         * ScrollReveal wraps sections that should animate into view.
         * Sections that require immediate visibility or custom animation are left unwrapped.
         */}
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal>
          <Logos />
        </ScrollReveal>

        {/**
         * These sections are not wrapped because:
         * - ScrollReveal is used inside the component for more granular control
         */}
        <HowItWorks />
        <WorkGrid />

        {/**
         * HorizontalScroll is wrapped in a div so we can attach a ref
         * for IntersectionObserver tracking.
         */}
        <div ref={setHorizontalScrollElement} className="relative">
          <HorizontalScroll />
        </div>

        <ScrollReveal>
          <Features />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <Pricing />
        </ScrollReveal>

        <ScrollReveal>
          <Blog />
        </ScrollReveal>

        <ScrollReveal>
          <FAQ />
        </ScrollReveal>

        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </IntroContentGate>
    </main>
  );
}