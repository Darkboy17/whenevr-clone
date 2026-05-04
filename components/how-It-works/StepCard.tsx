import type { ReactNode } from "react";
import ScrollReveal from "../behavior/ScrollReveal";
import StepText from "./StepText";

type StepCardProps = {
    framerName: string;
    title: string;
    description: string;
    children: ReactNode;
    overflow?: "hidden" | "visible";
    className?: string;
};

/**
 * Shared bento card wrapper for all How It Works steps.
 *
 * Centralizing the repeated card structure prevents styling drift between
 * cards and makes future layout changes safer.
 */
export default function StepCard({
    framerName,
    title,
    description,
    children,
    overflow = "hidden",
    className = "",
}: StepCardProps) {
    return (
        <ScrollReveal className={className}>
            <article
                data-framer-name={framerName}
                className={[
                    "relative flex h-[450px] w-full flex-none flex-col items-center justify-end rounded-2xl border-[6px] border-[#f0f0f0] bg-white p-8 shadow-[0_2px_4px_rgba(108,113,128,0.08),0_7px_7px_rgba(108,113,128,0.07),0_17px_10px_rgba(108,113,128,0.04),0_29px_12px_rgba(108,113,128,0.01),0_46px_13px_rgba(108,113,128,0)]",
                    overflow === "visible" ? "overflow-visible" : "overflow-hidden",
                ].join(" ")}
            >
                {children}

                <StepText title={title} wide>
                    {description}
                </StepText>
            </article>
        </ScrollReveal>
    );
}