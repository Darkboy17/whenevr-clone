import TestimonialsCarousel from "./TestimonialsCarousel";
import TestimonialsHeader from "./TestimonialsHeader";

type TestimonialsProps = {
    autoScrollMs?: number;
};

/**
 * Testimonials section.
 *
 * Top-level layout component for testimonial content and carousel.
 * The carousel logic is intentionally moved out to keep this file focused
 * on page structure.
 */
export default function Testimonials({ autoScrollMs = 3000 }: TestimonialsProps) {
    return (
        <section
            id="testimonials"
            className="relative z-[1] flex w-full flex-col items-center justify-center gap-16 overflow-hidden px-6 pb-10 pt-20 min-[810px]:px-9"
            data-framer-name="Testimonials"
        >
            <div className="flex h-min w-full max-w-[1200px] flex-none flex-col items-center justify-center gap-12 overflow-visible">
                <div
                    className="flex h-min w-full max-w-[1128px] flex-row items-center justify-center overflow-hidden bg-[#f0f0f0] px-0 pb-20 min-[810px]:px-2"
                    data-framer-name="Desktop"
                >
                    <div className="z-[1] flex h-min w-full flex-none flex-col items-center justify-center gap-12 overflow-visible min-[810px]:w-px min-[810px]:flex-1">
                        <TestimonialsHeader />

                        <TestimonialsCarousel autoScrollMs={autoScrollMs} />
                    </div>
                </div>
            </div>
        </section>
    );
}