"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { clientHeadingWords } from "./constants";
import { cn } from "./utils";

/**
 * Animated heading shown above the call-to-action.
 *
 * The custom classes `client-heading`, `client-heading-word`, and `is-visible`
 * are preserved because they likely control the staggered word reveal animation.
 */
export default function ClientHeading() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const heading = headingRef.current;

        if (!heading) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );

        /**
         * Respect users who prefer reduced motion by revealing content immediately
         * instead of running the scroll-triggered animation.
         */
        if (prefersReducedMotion.matches) {
            const frame = window.requestAnimationFrame(() => setIsVisible(true));

            return () => window.cancelAnimationFrame(frame);
        }

        function revealIfInView() {
            if (!heading) {
                return false;
            }

            const rect = heading.getBoundingClientRect();
            const revealLine = window.innerHeight * 0.82;

            if (rect.top <= revealLine) {
                setIsVisible(true);
                return true;
            }

            return false;
        }

        const frame = window.requestAnimationFrame(revealIfInView);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting) {
                    return;
                }

                setIsVisible(true);
                observer.unobserve(entry.target);
            },
            {
                root: null,
                rootMargin: "0px 0px -18% 0px",
                threshold: 0.01,
            },
        );

        observer.observe(heading);

        return () => {
            window.cancelAnimationFrame(frame);
            observer.disconnect();
        };
    }, []);

    return (
        <h2
            ref={headingRef}
            className={cn(
                "framer-text-features client-heading w-[370px] max-w-[calc(100vw-48px)] whitespace-pre-wrap break-words text-center text-[38px] font-semibold leading-[1.2] tracking-[-0.07em] text-black md:w-[460px] md:text-[50px] lg:w-[559px] lg:max-w-[575px] lg:text-[56px]",
                isVisible && "is-visible",
            )}
            style={
                {
                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                } as CSSProperties
            }
        >
            {clientHeadingWords.map((word, index) => (
                <span key={word.text}>
                    <span
                        className={cn(
                            "client-heading-word",
                            word.serif && "serif-italic",
                        )}
                        style={
                            {
                                "--client-heading-word-delay": `${index * 75}ms`,
                            } as CSSProperties
                        }
                    >
                        {word.text}
                    </span>
                    {index < clientHeadingWords.length - 1 ? " " : null}
                </span>
            ))}
        </h2>
    );
}