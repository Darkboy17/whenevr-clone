import type { ReactNode } from "react";
import { cn } from "./utils";

type LabelPillProps = {
    children: ReactNode;
    size?: "small" | "medium";
};

/**
 * Reusable pill label used in both the section heading and visual cards.
 *
 * The class names are intentionally preserved from the original component
 * because they define the Framer-like spacing, typography, and blur treatment.
 */
export default function LabelPill({
    children,
    size = "medium",
}: LabelPillProps) {
    return (
        <div
            className={cn(
                "flex h-min w-min items-center justify-center overflow-hidden rounded-full bg-white backdrop-blur-2xl",
                size === "medium" ? "px-4 py-1.5" : "px-3 py-0.5",
            )}
        >
            <p
                className={cn(
                    "framer-text-features whitespace-nowrap font-bold tracking-[-0.04em] text-black",
                    size === "medium"
                        ? "text-[16px] leading-none"
                        : "text-[14px] leading-[2]",
                )}
            >
                {children}
            </p>
        </div>
    );
}