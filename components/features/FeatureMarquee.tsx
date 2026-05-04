import { services } from "@/lib/data";
import { serviceWidths } from "./constants";
import ServicePill from "./ServicePill";

/**
 * Bottom services marquee.
 *
 * The service list is duplicated so the existing marquee CSS animation
 * can loop continuously without an obvious gap.
 */
export default function FeatureMarquee() {
    const marqueeItems = [...services, ...services];

    return (
        <div className="relative h-8.75 w-full max-w-225 flex-none">
            <section className="flex h-full max-h-full w-full max-w-full items-center overflow-hidden mt-2 mask-[linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)]">
                <ul className="marquee relative flex h-full max-h-full w-max max-w-none list-none flex-row items-center gap-4 p-0 ">
                    {marqueeItems.map((service, index) => (
                        <ServicePill
                            key={`${service}-${index}`}
                            service={service}
                            width={serviceWidths[index % serviceWidths.length]}
                        />
                    ))}
                </ul>
            </section>
        </div>
    );
}