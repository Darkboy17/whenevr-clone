import Pill from "./Pill";

/**
 * Header content for the FAQ card.
 *
 * Extracted so the main card component can focus on layout composition.
 */
export default function FAQHeader() {
    return (
        <div className="flex w-full flex-col items-start gap-6">
            <Pill>FAQs</Pill>

            <h2 className="max-w-[300px] text-[40px] font-semibold leading-[1.2] tracking-[-0.06em] text-black">
                Frequently{" "}
                <p>
                    Asked{" "}
                    <span className="serif-italic tracking-[-0.07em]">Questions</span>
                </p>
            </h2>
        </div>
    );
}