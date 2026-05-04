"use client";

import {
    type PointerEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { DOT_COUNT, testimonials } from "./constants";

/**
 * Handles carousel state, dragging, autoplay, and infinite-loop normalization.
 *
 * The visual carousel renders three blocks:
 * [clone block] [real block] [clone block]
 *
 * The user scrolls smoothly across clones, then the track is silently moved
 * back into the middle block after scrolling ends.
 */
export function useTestimonialsCarousel(autoScrollMs: number) {
    const trackRef = useRef<HTMLUListElement | null>(null);
    const dragStartXRef = useRef(0);
    const dragStartScrollLeftRef = useRef(0);
    const hasDraggedRef = useRef(false);

    const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const activeIndexRef = useRef(0);
    const isPausedRef = useRef(false);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const carouselItems = useMemo(() => {
        return Array.from({ length: DOT_COUNT }, (_, index) => {
            return testimonials[index % testimonials.length];
        });
    }, []);

    const loopedItems = useMemo(() => {
        return [...carouselItems, ...carouselItems, ...carouselItems];
    }, [carouselItems]);

    const getStep = useCallback(() => {
        const track = trackRef.current;
        const firstSlide = track?.querySelector<HTMLElement>("[data-slide]");

        if (!track || !firstSlide) {
            return 0;
        }

        const styles = window.getComputedStyle(track);
        const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");

        return firstSlide.offsetWidth + gap;
    }, []);

    const getPhysicalIndex = useCallback(() => {
        const track = trackRef.current;
        const step = getStep();

        if (!track || !step) {
            return DOT_COUNT;
        }

        return Math.round(track.scrollLeft / step);
    }, [getStep]);

    const getLogicalIndex = useCallback((physicalIndex: number) => {
        return ((physicalIndex % DOT_COUNT) + DOT_COUNT) % DOT_COUNT;
    }, []);

    const setActiveLogicalIndex = useCallback(
        (physicalIndex: number) => {
            const logicalIndex = getLogicalIndex(physicalIndex);

            activeIndexRef.current = logicalIndex;
            setActiveIndex(logicalIndex);
        },
        [getLogicalIndex],
    );

    const scrollToPhysicalIndex = useCallback(
        (physicalIndex: number, behavior: ScrollBehavior = "smooth") => {
            const track = trackRef.current;
            const step = getStep();

            if (!track || !step) {
                return;
            }

            track.scrollTo({
                left: step * physicalIndex,
                behavior,
            });

            setActiveLogicalIndex(physicalIndex);
        },
        [getStep, setActiveLogicalIndex],
    );

    const normalizeInfiniteScroll = useCallback(() => {
        const track = trackRef.current;
        const step = getStep();

        if (!track || !step) {
            return;
        }

        const physicalIndex = Math.round(track.scrollLeft / step);
        const logicalIndex = getLogicalIndex(physicalIndex);

        let normalizedPhysicalIndex = physicalIndex;

        if (physicalIndex < DOT_COUNT) {
            normalizedPhysicalIndex = DOT_COUNT + logicalIndex;
        }

        if (physicalIndex >= DOT_COUNT * 2) {
            normalizedPhysicalIndex = DOT_COUNT + logicalIndex;
        }

        if (normalizedPhysicalIndex !== physicalIndex) {
            track.scrollTo({
                left: step * normalizedPhysicalIndex,
                behavior: "instant",
            });
        }

        setActiveLogicalIndex(normalizedPhysicalIndex);
    }, [getStep, getLogicalIndex, setActiveLogicalIndex]);

    const handleScroll = useCallback(() => {
        const physicalIndex = getPhysicalIndex();
        setActiveLogicalIndex(physicalIndex);

        if (scrollEndTimerRef.current) {
            clearTimeout(scrollEndTimerRef.current);
        }

        scrollEndTimerRef.current = setTimeout(() => {
            normalizeInfiniteScroll();
        }, 160);
    }, [getPhysicalIndex, normalizeInfiniteScroll, setActiveLogicalIndex]);

    const scrollToIndex = useCallback(
        (logicalIndex: number) => {
            if (hasDraggedRef.current) {
                hasDraggedRef.current = false;
                return;
            }

            scrollToPhysicalIndex(DOT_COUNT + logicalIndex, "smooth");
        },
        [scrollToPhysicalIndex],
    );

    const scrollNext = useCallback(() => {
        const currentPhysicalIndex = getPhysicalIndex();
        scrollToPhysicalIndex(currentPhysicalIndex + 1, "smooth");
    }, [getPhysicalIndex, scrollToPhysicalIndex]);

    const pauseAutoScroll = useCallback(() => {
        isPausedRef.current = true;
    }, []);

    const resumeAutoScroll = useCallback(() => {
        isPausedRef.current = false;
    }, []);

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            scrollToPhysicalIndex(DOT_COUNT, "instant");
        });

        return () => cancelAnimationFrame(frame);
    }, [scrollToPhysicalIndex]);

    useEffect(() => {
        const handleResize = () => {
            scrollToPhysicalIndex(DOT_COUNT + activeIndexRef.current, "instant");
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [scrollToPhysicalIndex]);

    useEffect(() => {
        if (!autoScrollMs || autoScrollMs <= 0) {
            return;
        }

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }

            scrollNext();
        }, autoScrollMs);

        return () => {
            clearInterval(interval);
        };
    }, [autoScrollMs, scrollNext]);

    useEffect(() => {
        return () => {
            if (scrollEndTimerRef.current) {
                clearTimeout(scrollEndTimerRef.current);
            }
        };
    }, []);

    const startDragging = useCallback(
        (event: PointerEvent) => {
            if (event.pointerType !== "mouse") {
                return;
            }

            const track = trackRef.current;
            if (!track) return;

            setIsDragging(true);
            pauseAutoScroll();

            hasDraggedRef.current = false;
            dragStartXRef.current = event.clientX;
            dragStartScrollLeftRef.current = track.scrollLeft;

            try {
                track.setPointerCapture(event.pointerId);
            } catch {
                // Some browsers may fail pointer capture in edge cases.
            }
        },
        [pauseAutoScroll],
    );

    const dragCards = useCallback(
        (event: PointerEvent) => {
            const track = trackRef.current;

            if (!track || !isDragging) {
                return;
            }

            event.preventDefault();

            const distance = event.clientX - dragStartXRef.current;

            if (Math.abs(distance) > 4) {
                hasDraggedRef.current = true;
            }

            track.scrollLeft = dragStartScrollLeftRef.current - distance;
        },
        [isDragging],
    );

    const stopDragging = useCallback(
        (event: PointerEvent) => {
            const track = trackRef.current;

            if (!isDragging) {
                return;
            }

            try {
                if (track?.hasPointerCapture(event.pointerId)) {
                    track.releasePointerCapture(event.pointerId);
                }
            } catch {
                // Pointer capture was already released or the id is invalid.
            }

            setIsDragging(false);
            resumeAutoScroll();
            normalizeInfiniteScroll();
        },
        [isDragging, normalizeInfiniteScroll, resumeAutoScroll],
    );

    return {
        trackRef,
        activeIndex,
        isDragging,
        loopedItems,
        handleScroll,
        scrollToIndex,
        pauseAutoScroll,
        resumeAutoScroll,
        startDragging,
        dragCards,
        stopDragging,
    };
}