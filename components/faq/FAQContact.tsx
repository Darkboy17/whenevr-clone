import AnimatedButton from "../ui/AnimatedButton";

/**
 * Contact row shown above the FAQ accordion.
 *
 * Keeps email metadata and CTA grouped together so it can be edited without
 * touching the FAQ list rendering.
 */
export default function FAQContact() {
    return (
        <div className="flex w-full flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex w-full flex-1 items-center justify-start gap-3">
                <div className="flex w-full flex-col items-start gap-1.5">
                    <p className="text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-[#989898]">
                        Email
                    </p>

                    <a
                        href="mailto:hello@whenevr.com"
                        target="_blank"
                        rel="noopener"
                        className="text-[16px] font-semibold leading-none tracking-[-0.04em] text-black transition duration-200 hover:text-black/80"
                    >
                        hello@whenevr.com
                    </a>
                </div>
            </div>

            <AnimatedButton label="Get in touch" href="mailto:hello@whenevr.com">
                Get in touch
            </AnimatedButton>
        </div>
    );
}