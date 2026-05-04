import { DOT_COUNT } from "./constants";

type CarouselDotsProps = {
    activeIndex: number;
    scrollToIndex: (index: number) => void;
};

/**
 * Pagination controls for the testimonial carousel.
 *
 * The fieldset wrapper is preserved from the original for accessible grouping.
 */
export default function CarouselDots({
    activeIndex,
    scrollToIndex,
}: CarouselDotsProps) {
    return (
        <fieldset
            className="pointer-events-none absolute inset-0 m-0 border-0 p-0"
            aria-label="Slideshow pagination controls"
        >
            <div className="pointer-events-auto absolute bottom-[-48px] left-1/2 flex -translate-x-1/2 flex-row items-center justify-center overflow-hidden rounded-[50px] bg-black/20">
                {Array.from({ length: DOT_COUNT }).map((_, index) => (
                    <button
                        key={index}
                        aria-label={`Scroll to page ${index + 1}`}
                        type="button"
                        onClick={() => scrollToIndex(index)}
                        className={[
                            "flex cursor-pointer items-center justify-center overflow-hidden border-0 bg-transparent py-2.5",
                            index === 0 ? "pl-2.5 pr-[5px]" : "",
                            index === DOT_COUNT - 1 ? "pl-[5px] pr-2.5" : "",
                            index > 0 && index < DOT_COUNT - 1 ? "px-[5px]" : "",
                        ].join(" ")}
                    >
                        <span
                            className={[
                                "h-2.5 w-2.5 rounded-full bg-white transition-opacity",
                                activeIndex === index ? "opacity-100" : "opacity-50",
                            ].join(" ")}
                        />
                    </button>
                ))}
            </div>
        </fieldset>
    );
}