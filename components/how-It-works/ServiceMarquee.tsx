import type { ServiceRow } from "./types";
import { cn } from "./utils";

type ServiceMarqueeProps = {
    row: ServiceRow;
    reverse?: boolean;
};

/**
 * Animated service marquee used in the "Request" card.
 *
 * The row is duplicated several times so the CSS marquee animation has enough
 * content to loop smoothly without visible gaps.
 */
export default function ServiceMarquee({
    row,
    reverse = false,
}: ServiceMarqueeProps) {
    const items = [...row, ...row, ...row, ...row];

    return (
        <div className="h-8.75 w-150 flex-none overflow-hidden">
            <ul
                className={cn(
                    "how-service-track flex h-full w-max items-center gap-3",
                    reverse && "how-service-track-reverse",
                )}
            >
                {items.map(([service, width], index) => (
                    <li
                        key={`${service}-${index}`}
                        aria-hidden={index >= row.length}
                        className="h-8.25 shrink-0"
                        style={{ width }}
                    >
                        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#f0f0f0] px-4 py-1.5 backdrop-blur-2xl">
                            <p className="framer-text-features select-none whitespace-nowrap text-[18px] font-semibold leading-[1.2] tracking-[-0.04em] text-black">
                                {service}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}