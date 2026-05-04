"use client";

import { useState } from "react";
import {
    ADDITIONAL_TASK_PRICE,
    BASE_PRICE,
} from "./constants";
import PricingImageTicker from "./PricingImageTicker";
import PricingTable from "./PricingTable";

/**
 * Interactive pricing card.
 *
 * This component owns pricing state because the toggle affects both:
 * - the animated price
 * - the active-task perk copy
 */
export default function PricingCard() {
    const [hasAdditionalTask, setHasAdditionalTask] = useState(false);

    const price = hasAdditionalTask ? ADDITIONAL_TASK_PRICE : BASE_PRICE;

    return (
        <div
            className={[
                "relative w-full overflow-hidden rounded-[24px] border-[6px] border-[#f8f8f8]",
                "shadow-[0_2px_4px_rgba(108,113,128,0.08),0_7px_7px_rgba(108,113,128,0.07),0_17px_10px_rgba(108,113,128,0.04),0_29px_12px_rgba(108,113,128,0.01),0_46px_13px_rgba(108,113,128,0)]",
            ].join(" ")}
            data-framer-name="Desktop - 1"
        >
            <div className="absolute inset-[6px] rounded-[18px] bg-black" />

            <div className="relative z-1 flex w-full flex-col gap-4 overflow-hidden bg-black p-4 min-[1200px]:flex-row">
                <PricingImageTicker />

                <PricingTable
                    price={price}
                    hasAdditionalTask={hasAdditionalTask}
                    onToggleAdditionalTask={() =>
                        setHasAdditionalTask((current) => !current)
                    }
                />
            </div>
        </div>
    );
}