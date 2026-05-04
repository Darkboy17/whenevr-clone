"use client";

import { useRef } from "react";
import { projects } from "./constants";
import { useHorizontalScroll } from "./hooks";
import ProjectImage from "./ProjectImage";

/**
 * Desktop project gallery.
 *
 * Uses a sticky viewport and translates the image track horizontally based on
 * vertical scroll progress. Hidden below 1200px, where the mobile marquee takes over.
 */
export default function ProjectDesktopScroll() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);

    useHorizontalScroll(scrollRef, trackRef);

    return (
        <div
            data-framer-name="Projects (Desktop)"
            className="hidden w-full flex-row items-center justify-start gap-2.5 overflow-visible p-0 min-[1200px]:flex"
        >
            <div
                data-framer-name="Container"
                className="flex h-min w-px flex-1 flex-col items-start justify-start gap-16 overflow-visible p-0"
            >
                <div
                    ref={scrollRef}
                    id="scroll"
                    data-framer-name="Horizontal Scroll"
                    className="relative flex w-full flex-none flex-col items-center justify-start gap-0 overflow-visible p-0"
                >
                    <div
                        data-framer-name="Sticky"
                        className="sticky top-0 z-1 flex h-screen w-full flex-none flex-col items-center justify-center gap-0 overflow-hidden p-0"
                    >
                        <div
                            ref={trackRef}
                            data-framer-name="Images"
                            className="relative flex h-full w-full flex-1 flex-row items-center justify-start gap-0 overflow-visible p-0 opacity-100"
                        >
                            {projects.map((src) => (
                                <div key={src} className="relative aspect-square h-full flex-none">
                                    <ProjectImage src={src} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}