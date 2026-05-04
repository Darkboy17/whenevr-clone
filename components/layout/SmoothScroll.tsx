"use client";

import { useEffect } from "react";

/**
 * Smooth-scroll tuning values.
 *
 * `ease` controls interpolation speed:
 * - lower = smoother/slower
 * - higher = snappier/faster
 *
 * `wheelMultiplier` controls how far each wheel event moves the target.
 */
const ease = 0.12;
const wheelMultiplier = 1.4;

/**
 * Restricts a value between a minimum and maximum range.
 */
function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Calculates the maximum scrollable distance for the current document.
 */
function getMaxScroll() {
  return Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
}

/**
 * Applies scroll position immediately.
 *
 * `behavior: "instant"` is used because this component handles smoothing
 * manually through requestAnimationFrame.
 */
function setScrollTop(top: number) {
  window.scrollTo({ top, left: 0, behavior: "instant" });
}

/**
 * Allows native browser scrolling for interactive or embedded elements.
 *
 * This prevents the custom scroll handler from breaking:
 * - iframes
 * - form controls
 * - intentionally scrollable regions
 * - elements marked to opt out of smooth scrolling
 */
function shouldUseNativeScroll(event: WheelEvent) {
  if (event.ctrlKey || event.metaKey || event.defaultPrevented) {
    return true;
  }

  const target = event.target;

  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(
    target.closest(
      "iframe, textarea, input, select, [data-native-scroll], [data-lenis-prevent]",
    ),
  );
}

/**
 * SmoothScroll
 *
 * Global wheel-based smooth scrolling controller.
 *
 * This component:
 * - listens for wheel events
 * - prevents native wheel scrolling
 * - interpolates toward a target scroll position
 * - respects reduced-motion preferences
 * - allows native scrolling inside selected interactive elements
 *
 * It renders nothing because its only responsibility is browser behavior.
 */
export default function SmoothScroll() {
  useEffect(() => {
    /**
     * Respect accessibility preferences.
     * Users who prefer reduced motion should get native scrolling.
     */
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      return;
    }

    let current = window.scrollY;
    let target = current;
    let frame = 0;

    /**
     * Cancels any active animation frame.
     */
    function stop() {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    }

    /**
     * Animation loop.
     *
     * Moves the current scroll position toward the target using interpolation.
     */
    function tick() {
      const delta = target - current;

      current += delta * ease;

      if (Math.abs(delta) < 0.35) {
        current = target;
        setScrollTop(current);
        frame = 0;
        return;
      }

      setScrollTop(current);
      frame = window.requestAnimationFrame(tick);
    }

    /**
     * Starts the animation loop if it is not already running.
     */
    function start() {
      if (!frame) {
        frame = window.requestAnimationFrame(tick);
      }
    }

    /**
     * Converts wheel movement into a new target scroll position.
     */
    function onWheel(event: WheelEvent) {
      if (shouldUseNativeScroll(event)) {
        return;
      }

      event.preventDefault();

      current = window.scrollY;
      target = clamp(
        target + event.deltaY * wheelMultiplier,
        0,
        getMaxScroll(),
      );

      start();
    }

    /**
     * Keeps internal scroll state in sync when scroll position may change
     * outside this component's wheel handler.
     */
    function syncScrollPosition() {
      current = window.scrollY;
      target = current;
      stop();
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", syncScrollPosition);
    window.addEventListener("keydown", syncScrollPosition);

    return () => {
      stop();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", syncScrollPosition);
      window.removeEventListener("keydown", syncScrollPosition);
    };
  }, []);

  return null;
}