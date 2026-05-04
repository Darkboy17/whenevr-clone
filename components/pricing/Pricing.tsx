import PricingCard from "./PricingCard";

/**
 * Pricing section.
 *
 * Top-level section wrapper that handles page spacing and anchor behavior.
 * The interactive pricing card is extracted so the section remains simple.
 */
export default function Pricing() {
    return (
        <section
            id="pricing"
            className="relative z-[1] flex w-full scroll-mt-40 flex-col items-center justify-center gap-16 overflow-visible px-6 py-10 min-[810px]:px-9"
            data-framer-name="Pricing"
        >
            <div
                className="flex w-full max-w-[1128px] flex-none items-center justify-center overflow-visible"
                data-framer-name="Container"
            >
                <PricingCard />
            </div>
        </section>
    );
}   