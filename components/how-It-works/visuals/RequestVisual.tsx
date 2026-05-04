"use client";

import { useState } from "react";
import { framerAssets, serviceRows } from "../constants";
import ServiceMarquee from "../ServiceMarquee";
import { cn } from "../utils";

/**
 * Visual for Step 2.
 *
 * This card combines animated service marquees with an interactive request
 * button. The custom CSS classes are preserved because they likely control
 * the hover/focus animation exported from the original Framer design.
 */
export default function RequestVisual() {
    const [isIconActive, setIsIconActive] = useState(false);

    return (
        <div className="how-request-visual absolute inset-x-0 top-0 z-1 flex flex-col items-center justify-center gap-8 overflow-hidden bg-[#ffffff8f] px-0 py-12">
            <ServiceMarquee row={serviceRows[0]} />
            <ServiceMarquee row={serviceRows[1]} reverse />
            <ServiceMarquee row={serviceRows[2]} />

            <button
                aria-label="Request design"
                className={cn(
                    "how-request-icon absolute left-1/2 top-[50.1887%] z-2 -translate-x-1/2 -translate-y-1/2",
                    isIconActive && "how-request-icon-active",
                )}
                onBlur={() => setIsIconActive(false)}
                onFocus={() => setIsIconActive(true)}
                onMouseEnter={() => setIsIconActive(true)}
                onMouseMove={() => setIsIconActive(true)}
                onPointerEnter={() => setIsIconActive(true)}
                onPointerLeave={() => setIsIconActive(false)}
                onPointerMove={() => setIsIconActive(true)}
                type="button"
            >
                <div
                    aria-hidden="true"
                    className="how-request-logo"
                    style={{ backgroundImage: `url(${framerAssets.logoMark})` }}
                />

                <div className="how-request-send">
                    <svg
                        aria-hidden="true"
                        className="h-full w-full"
                        fill="currentColor"
                        focusable="false"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M223.69,42.18l-58.22,192a8,8,0,0,1-14.92,1.25L108,148,20.58,105.45a8,8,0,0,1,1.25-14.92l192-58.22A8,8,0,0,1,223.69,42.18Z"
                            opacity="0.2"
                        />
                        <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z" />
                    </svg>
                </div>
            </button>
        </div>
    );
}