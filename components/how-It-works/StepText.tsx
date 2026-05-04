import type { ReactNode } from "react";
import { cn } from "./utils";

type StepTextProps = {
    title: string;
    children: ReactNode;
    wide?: boolean;
};

/**
 * Shared text block for each bento card.
 *
 * Keeping this separate avoids repeating heading/body typography across all
 * three steps and ensures future copy changes do not affect layout styling.
 */
export default function StepText({
    title,
    children,
    wide = false,
}: StepTextProps) {
    return (
        <div
            className={cn(
                "relative flex w-full flex-col gap-2 overflow-hidden",
                wide ? "items-center md:items-start" : "items-center",
            )}
        >
            <h3 className="framer-text-features w-full max-w-[652px] text-left text-[28px] font-semibold leading-[1.3] tracking-[-0.05em] text-black">
                {title}
            </h3>

            <p
                className={cn(
                    "framer-text-features w-full text-left text-[18px] font-medium leading-[1.4] tracking-[-0.04em] text-[#989898]",
                    wide ? "max-w-[517px]" : "max-w-[476px]",
                )}
            >
                {children}
            </p>
        </div>
    );
}