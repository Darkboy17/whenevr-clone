import LogoSvg from "./LogoSvg";
import { logos } from "./constants";

/**
 * Logos section.
 *
 * Displays a masked horizontal ticker of brand logos.
 * Layout classes, spacing, mask gradients, and ticker class names are kept
 * identical to the original so the visual output and animation remain intact.
 */
export default function Logos() {
    /**
     * Repeats the logo list to create enough content for a seamless ticker loop.
     *
     * The duplicated logos are marked aria-hidden below so screen readers do not
     * announce the same logos multiple times.
     */
    const logoLoop = Array.from({ length: 4 }, () => logos).flat();

    return (
        <section
            id="logos"
            className="relative z-[2] flex w-full items-center justify-center overflow-hidden px-6 py-[36px] md:px-9"
        >
            <div className="px-3 flex flex-row w-full max-w-[1200px] flex-col items-center justify-center gap-4 overflow-hidden">
                <p className="w-auto text-left text-sm font-semibold tracking-[-0.03em] leading-5 text-[#989898] ">
                    Trusted by the biggest brands worldwide
                </p>

                {/* Viewport for the scrolling logo track. */}
                <div className="h-[25px] w-full overflow-hidden">
                    {/*
            The mask fades the logo track at both edges.
            This keeps the marquee feeling soft instead of abruptly clipped.
          */}
                    <section className="flex h-full w-full max-w-full items-center overflow-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,#000_12.5%,#000_87.5%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,#000_12.5%,#000_87.5%,rgba(0,0,0,0)_100%)]">
                        {/*
              The animation should remain attached to logos-ticker-track.
              This preserves the existing CSS animation contract.
            */}
                        <ul className="logos-ticker-track flex h-full w-max list-none flex-row items-center gap-12 p-0">
                            {logoLoop.map((logo, index) => (
                                <li
                                    key={`${logo.name}-${index}`}
                                    aria-hidden={index >= logos.length}
                                    className="flex h-full shrink-0 items-center justify-center"
                                >
                                    <LogoSvg logo={logo} />
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
}