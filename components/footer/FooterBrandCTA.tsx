import AnimatedButton from "../ui/AnimatedButton";

/**
 * Left-side footer CTA.
 *
 * Contains the brand lockup, main closing message, supporting copy, and CTA.
 * Extracted so the Footer component can remain focused on overall layout.
 */
export default function FooterBrandCTA() {
    return (
        <div className="flex w-full flex-none flex-col items-start gap-8 min-[1200px]:w-px min-[1200px]:flex-1">
            <div className="relative z-[1] flex w-min items-center gap-2.5">
                <h2 className="serif-italic whitespace-nowrap text-[30px] leading-none tracking-[-0.08em] text-white">
                    whenevr
                </h2>

                <p className="absolute -right-3 top-0 text-[14px] font-semibold leading-none text-white">
                    &reg;
                </p>
            </div>

            <div className="flex w-full flex-col items-center gap-8">
                <div className="flex w-full flex-col items-start gap-8">
                    <div className="flex w-full flex-col items-start gap-6">
                        <h2 className="framer-text-features max-w-none text-balance text-left text-[40px] font-semibold leading-[1.03] tracking-[-0.07em] text-white min-[810px]:max-w-[573px] min-[810px]:text-[70px] min-[1200px]:max-w-[677px] min-[1200px]:text-[82px]">
                            Design{" "}
                            <span className="serif-italic tracking-[-0.08em]">
                                doesn&apos;t
                            </span>{" "}
                            need to be complicated.
                        </h2>

                        <p className="max-w-none text-left text-[20px] font-medium leading-[1.4] tracking-[-0.05em] text-[#7c7c7c] min-[810px]:max-w-[500px] min-[1200px]:max-w-[547px]">
                            Book a quick call and get a clear look at how Whenevr works,
                            what&apos;s included, and whether it fits your pace.
                        </p>
                    </div>

                    <AnimatedButton label="See Pricing" href="/#pricing" color="white">
                        See Pricing
                    </AnimatedButton>
                </div>
            </div>
        </div>
    );
}