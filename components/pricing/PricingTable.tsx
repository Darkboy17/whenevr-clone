import AnimatedButton from "../ui/AnimatedButton";
import { perks } from "./constants";
import FeatureRow from "./FeatureRow";
import PricingHeader from "./PricingHeader";

type PricingTableProps = {
    price: string;
    hasAdditionalTask: boolean;
    onToggleAdditionalTask: () => void;
};

/**
 * Pricing table content.
 *
 * Owns the plan copy, perks list, and CTA while receiving price/toggle state
 * from the parent card.
 */
export default function PricingTable({
    price,
    hasAdditionalTask,
    onToggleAdditionalTask,
}: PricingTableProps) {
    return (
        <div
            className="order-1 flex w-full flex-none flex-col gap-8 overflow-hidden rounded-2xl bg-[#1c1c1c] p-6 min-[810px]:p-8 min-[1200px]:order-2 min-[1200px]:w-px min-[1200px]:flex-[2]"
            data-framer-name="Table"
        >
            <PricingHeader
                price={price}
                hasAdditionalTask={hasAdditionalTask}
                onToggleAdditionalTask={onToggleAdditionalTask}
            />

            <ul className="flex w-full flex-col gap-5 overflow-hidden">
                {perks.map((perk, index) => (
                    <FeatureRow
                        key={index}
                        perk={
                            index === 1 && hasAdditionalTask
                                ? "Two active task at a time"
                                : perk
                        }
                    />
                ))}
            </ul>

            <AnimatedButton label="Join today" color="white" fullWidth href="https://stripe.com" target="_blank" rel="noopener noreferrer">
                Join today
            </AnimatedButton>
        </div>
    );
}