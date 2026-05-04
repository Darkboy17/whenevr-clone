"use client";

import { useEffect, useRef, useState } from "react";
import {
    INITIAL_ROTATION,
    MIN_ROTATION_VELOCITY,
    ROTATION_FRICTION,
    SCROLL_VELOCITY_MULTIPLIER,
} from "./constants";

/**
 * Rotates the client orbit based on scroll velocity.
 *
 * The rotation continues briefly after scrolling and eases out using friction,
 * giving the orbit a natural momentum-based feel.
 */
export function useScrollRotation() {
    const lastScrollY = useRef(0);
    const velocity = useRef(0);
    const animationFrame = useRef<number | null>(null);
    const [rotation, setRotation] = useState(INITIAL_ROTATION);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        function animate() {
            setRotation((previous) => previous + velocity.current);
            velocity.current *= ROTATION_FRICTION;

            if (Math.abs(velocity.current) > MIN_ROTATION_VELOCITY) {
                animationFrame.current = requestAnimationFrame(animate);
                return;
            }

            velocity.current = 0;
            animationFrame.current = null;
        }

        function handleScroll() {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - lastScrollY.current;

            velocity.current += scrollDifference * SCROLL_VELOCITY_MULTIPLIER;
            lastScrollY.current = currentScrollY;

            if (animationFrame.current === null) {
                animationFrame.current = requestAnimationFrame(animate);
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);

            if (animationFrame.current !== null) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, []);

    return rotation;
}