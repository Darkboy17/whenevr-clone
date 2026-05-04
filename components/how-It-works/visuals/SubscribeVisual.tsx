import AnimatedButton from "../../ui/AnimatedButton";
import LabelPill from "../LabelPill";

/**
 * Visual for Step 1.
 *
 * This recreates the pricing card preview inside the bento card.
 * Absolute positioning and masks are preserved to match the original artwork.
 */
export default function SubscribeVisual() {
    return (
        <div className="absolute inset-x-0 top-0 z-1 flex h-66.25 items-center justify-center overflow-hidden bg-[#ffffff8f] px-0 py-12 [mask:linear-gradient(#000_0%_80%,#0000_100%)]">
            <div className="absolute inset-x-8 bottom-0 top-8 z-1 flex flex-col items-start gap-6 overflow-hidden rounded-t-[10px] bg-[#f0f0f0] p-8">
                <div className="relative flex w-full flex-col gap-3 overflow-hidden">
                    <div className="relative w-full">
                        <h3 className="serif-italic text-left text-[24px] font-semibold leading-[1.1] tracking-[-0.08em] text-black">
                            whenevr
                        </h3>

                        <p className="absolute left-21.25 top-px text-[16px] font-semibold leading-none text-black">
                            &reg;
                        </p>
                    </div>

                    <div className="flex w-full items-end justify-start gap-1 overflow-hidden">
                        <h1 className="framer-text-features whitespace-nowrap text-[40px] font-semibold leading-[1] tracking-[-0.07em] text-black">
                            $2,995
                        </h1>

                        <p className="framer-text-features whitespace-nowrap pb-1 text-[16px] font-semibold leading-normal tracking-[-0.07em] text-[#989898]">
                            /month
                        </p>
                    </div>
                </div>

                <AnimatedButton label="Join today" href="/#pricing" fullWidth={true} />
            </div>

            <div className="absolute right-10 top-12 z-2">
                <LabelPill size="small">Popular</LabelPill>
            </div>
        </div>
    );
}