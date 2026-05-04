import type { ReactNode } from "react";

type PillProps = {
    children: ReactNode;
};

/**
 * Small label pill used in the FAQ card header.
 *
 * Extracted so the section label styling stays reusable and consistent.
 */
export default function Pill({ children }: PillProps) {
    return (
        <span className="inline-flex h-[35px] items-center rounded-full bg-[#f8f8f8] px-4 text-[16px] font-semibold leading-none tracking-[-0.04em] text-black backdrop-blur-3xl">
            {children}
        </span>
    );
}