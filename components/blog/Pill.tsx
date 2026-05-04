import type { ReactNode } from "react";
import { cn } from "./utils";

type PillProps = {
    children: ReactNode;
    className?: string;
};

/**
 * Reusable pill label used for categories and section badges.
 *
 * The base styling is preserved from the original design so all pills share
 * the same typography, height, radius, and blur treatment.
 */
export default function Pill({ children, className = "" }: PillProps) {
    return (
        <span
            className={cn(
                "framer-text-features inline-flex h-[30px] items-center rounded-full px-4 text-[13px] font-extrabold leading-none text-black backdrop-blur-3xl",
                className,
            )}
        >
            {children}
        </span>
    );
}