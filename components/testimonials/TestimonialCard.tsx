import Image from "next/image";
import QuoteIcon from "./QuoteIcon";
import type { Testimonial } from "./types";

type TestimonialCardProps = {
    testimonial: Testimonial;
};

/**
 * Single testimonial card.
 *
 * The border, shadow, radius, and spacing are preserved from the original
 * Framer-style design to keep the card visually unchanged.
 */
export default function TestimonialCard({
    testimonial,
}: TestimonialCardProps) {
    return (
        <article
            className={[
                "relative flex h-auto w-full cursor-inherit flex-col items-start justify-start gap-3 overflow-visible rounded-2xl border-[6px] border-[#f8f8f8] bg-white p-6",
                "shadow-[0_2px_4px_rgba(108,113,128,0.08),0_7px_7px_rgba(108,113,128,0.07),0_17px_10px_rgba(108,113,128,0.04),0_29px_12px_rgba(108,113,128,0.01),0_46px_13px_rgba(108,113,128,0)]",
            ].join(" ")}
            data-framer-name="Variant 1"
        >
            <div className="pointer-events-none absolute right-4 top-3 h-12 w-12">
                <QuoteIcon />
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-3">
                <div className="relative h-12 w-12 flex-none overflow-hidden rounded-[96px]">
                    <Image
                        src={testimonial.avatar}
                        alt=""
                        fill
                        sizes="48px"
                        draggable={false}
                        className="object-fill"
                    />
                </div>

                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <p className="text-left text-[16px] font-semibold leading-none tracking-[-0.04em] text-black">
                        {testimonial.name}
                    </p>

                    <p className="text-left text-[12px] font-medium leading-none tracking-[-0.04em] text-[#bdbdbd]">
                        {testimonial.role}
                    </p>
                </div>
            </div>

            <p className="w-full text-balance text-left text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-[#7c7c7c]">
                {testimonial.quote}
            </p>
        </article>
    );
}