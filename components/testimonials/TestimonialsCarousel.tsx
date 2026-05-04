"use client";

import CarouselDots from "./CarouselDots";
import TestimonialCard from "./TestimonialCard";
import { DOT_COUNT } from "./constants";
import { useTestimonialsCarousel } from "./hooks";

type TestimonialsCarouselProps = {
    autoScrollMs: number;
};

/**
 * Interactive testimonials carousel.
 *
 * This component owns the carousel UI while the hook owns scroll state,
 * dragging, autoplay, and infinite-loop behavior.
 */
export default function TestimonialsCarousel({
    autoScrollMs,
}: TestimonialsCarouselProps) {
    const {
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
    } = useTestimonialsCarousel(autoScrollMs);

    return (
        <div className="relative h-[330px] w-full max-w-[1128px] flex-none min-[810px]:h-[290px] min-[1200px]:h-[250px]">
            <section
                className={[
                    "relative flex h-full max-h-full w-full max-w-full select-none flex-row items-center",
                    isDragging ? "cursor-grabbing" : "cursor-grab",
                ].join(" ")}
                onMouseEnter={pauseAutoScroll}
                onMouseLeave={resumeAutoScroll}
                onFocus={pauseAutoScroll}
                onBlur={resumeAutoScroll}
            >
                <div className="absolute inset-0 flex justify-center overflow-visible rounded-none [perspective:1200px]">
                    <ul
                        ref={trackRef}
                        onScroll={handleScroll}
                        onPointerDown={startDragging}
                        onPointerMove={dragCards}
                        onPointerUp={stopDragging}
                        onPointerCancel={stopDragging}
                        className={[
                            "flex h-full max-h-full w-[420px] list-none flex-row items-center gap-4 overflow-x-auto p-0",
                            "min-[810px]:w-full",
                            "cursor-inherit [scrollbar-width:none] [touch-action:pan-x] [&::-webkit-scrollbar]:hidden",
                            isDragging ? "" : "snap-x snap-mandatory scroll-smooth",
                        ].join(" ")}
                        draggable={false}
                    >
                        {loopedItems.map((testimonial, index) => (
                            <li
                                key={`${testimonial.name}-${index}`}
                                className="contents"
                                aria-hidden={index < DOT_COUNT || index >= DOT_COUNT * 2}
                            >
                                <div
                                    data-slide
                                    className="h-full w-[420px] shrink-0 cursor-inherit snap-center select-none min-[810px]:w-[calc(50%-8px)] min-[810px]:snap-start min-[1200px]:w-[calc(33.3333%-10.6667px)]"
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <CarouselDots activeIndex={activeIndex} scrollToIndex={scrollToIndex} />
            </section>
        </div>
    );
}