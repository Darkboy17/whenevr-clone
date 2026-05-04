"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "./utils";

type FAQItemProps = {
    question: string;
    answer: string;
};

/**
 * Single accordion item.
 *
 * The answer animation uses CSS grid rows because it gives a smooth height
 * transition without manually measuring content height in JavaScript.
 */
export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="overflow-hidden rounded-lg bg-[#f8f8f8]">
            <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                aria-expanded={isOpen}
                className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-5 p-4 text-left text-[16px] font-semibold leading-none tracking-[-0.04em] text-black"
            >
                <span className="flex-1 text-balance">{question}</span>

                <span
                    className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f0f0f0] text-black transition-transform duration-300 ease-out",
                        isOpen ? "rotate-[135deg]" : "rotate-0",
                    )}
                >
                    <Plus
                        aria-hidden="true"
                        strokeWidth={1.8}
                        className="h-[18px] w-[18px]"
                    />
                </span>
            </button>

            <div
                className={cn(
                    "grid px-4 transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
            >
                <div className="overflow-hidden">
                    <p
                        className={cn(
                            "max-w-[95%] pb-5 pt-0 text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-[#7c7c7c] transition-all duration-300 ease-out",
                            isOpen
                                ? "translate-y-0 opacity-100"
                                : "-translate-y-1 opacity-0",
                        )}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}