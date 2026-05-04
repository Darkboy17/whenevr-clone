"use client";

import { RefObject, useEffect } from "react";

/**
 * Synchronizes vertical page scroll with horizontal track movement.
 *
 * The section height is calculated from the track overflow width so users can
 * naturally scroll vertically while the images translate horizontally.
 */
export function useHorizontalScroll(
    scrollRef: RefObject<HTMLDivElement | null>,
    trackRef: RefObject<HTMLDivElement | null>,
) {
    useEffect(() => {
        const scrollElement = scrollRef.current;
        const trackElement = trackRef.current;

        if (!scrollElement || !trackElement) return;

        let frame = 0;

        function updateTrack() {
            frame = 0;

            if (!scrollElement || !trackElement) return;

            /**
             * Respect reduced-motion preferences by disabling horizontal movement.
             */
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                trackElement.style.transform = "translateX(0px)";
                return;
            }

            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;
            const maxOffset = Math.max(0, trackElement.scrollWidth - viewportWidth);

            /**
             * The scroll container height controls how much vertical distance is
             * available to drive the horizontal animation.
             */
            scrollElement.style.height = `${maxOffset + viewportHeight}px`;

            const scrollDistance = scrollElement.offsetHeight - viewportHeight;
            const sectionTop = scrollElement.getBoundingClientRect().top;
            const progressRange = scrollDistance + viewportHeight;

            const progress =
                progressRange <= 0
                    ? 0
                    : Math.min(
                        Math.max((viewportHeight - sectionTop) / progressRange, 0),
                        1,
                    );

            trackElement.style.transform = `translateX(${-maxOffset * progress}px)`;
        }

        /**
         * Batches scroll/resize updates into requestAnimationFrame to avoid
         * excessive layout reads during fast scrolling.
         */
        function requestUpdate() {
            if (frame) return;
            frame = window.requestAnimationFrame(updateTrack);
        }

        updateTrack();

        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);

        return () => {
            window.removeEventListener("scroll", requestUpdate);
            window.removeEventListener("resize", requestUpdate);

            if (frame) {
                window.cancelAnimationFrame(frame);
            }
        };
    }, [scrollRef, trackRef]);
}