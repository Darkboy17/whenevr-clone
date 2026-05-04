"use client";

import BookCallButton from "../ui/BookCallButton";
import ClientHeading from "./ClientHeading";
import ClientOrbit from "./ClientOrbit";
import { useScrollRotation } from "./hooks";

/**
 * WorkGrid / Clients section.
 *
 * This component coordinates the animated client orbit, heading, CTA,
 * and bottom visual fade overlays. Most rendering details are delegated
 * to smaller components so this file stays easy to scan.
 */
export default function WorkGrid() {
    const rotation = useScrollRotation();

    return (
        <section
            id="clients"
            className="relative z-[2] flex w-full flex-col items-center justify-center overflow-hidden px-9 pb-0 pt-20 lg:flex-row min-[1200px]:py-20"
        >
            <ClientOrbit rotation={rotation} />

            <div className="absolute left-1/2 top-[67%] z-[6] flex w-min -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 overflow-visible md:top-[69%] lg:top-[61%]">
                <ClientHeading />

                <BookCallButton />
            </div>

            {/* Soft blur layer that helps the orbit fade into the lower edge. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[178px] backdrop-blur-[10px] [mask:linear-gradient(#0000_0%,#000_50%)] [-webkit-mask:linear-gradient(#0000_0%,#000_50%)]"
            />

            {/* Background fade used to blend this section into the page background. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-[5] bg-[#f0f0f0] [mask:linear-gradient(#0000_75%,#000_97%)] [-webkit-mask:linear-gradient(#0000_75%,#000_97%)]"
            />
        </section>
    );
}