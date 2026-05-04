import ScrollReveal from "../behavior/ScrollReveal";
import LabelPill from "./LabelPill";
import StepCard from "./StepCard";
import ReceiveVisual from "./visuals/ReceiveVisual";
import RequestVisual from "./visuals/RequestVisual";
import SubscribeVisual from "./visuals/SubscribeVisual";

/**
 * How It Works section.
 *
 * This is the top-level layout coordinator for the section.
 * Visual details are delegated to smaller components so this file stays
 * readable and focused on content order.
 */
export default function HowItWorks() {
    return (
        <section
            id="solution"
            data-framer-name="Solution"
            className="relative z-[1] flex h-min w-full flex-col items-center justify-center gap-16 overflow-hidden px-6 py-20 md:px-9"
        >
            <div
                data-framer-name="Container"
                className="relative flex h-min w-full max-w-300 flex-col items-center justify-center gap-12 overflow-visible p-0"
            >
                <div
                    data-framer-name="Text"
                    className="relative flex h-min w-full flex-col items-center justify-center gap-6 overflow-visible"
                >
                    <LabelPill>How it works</LabelPill>

                    <ScrollReveal>
                        <h2 className="framer-text-features w-full max-w-163 text-balance text-center text-[49px] min-[1200px]:text-[56px] font-semibold leading-[1.1] tracking-[-0.07em] text-black md:max-w-133.5 [min-width:810px]:text-[48px] lg:max-w-[652px]">
                            Welcome to the{" "}
                            <span className="serif-italic tracking-[-0.08em]">better</span>{" "}
                            way of getting design done.
                        </h2>
                    </ScrollReveal>
                </div>

                <div
                    data-framer-name="Bento Grid"
                    className="relative grid h-min w-full grid-cols-1 justify-center gap-6 min-[810px]:grid-cols-2 min-[1200px]:grid-cols-3"
                >
                    <StepCard
                        framerName="Step 1"
                        title="Subscribe"
                        description="Pick a plan and get started right away. No calls, no setup, just design on demand."
                    >
                        <SubscribeVisual />
                    </StepCard>

                    <StepCard
                        framerName="Step 2"
                        title="Request"
                        description="Submit any design task you need. Landing pages, product visuals, brand assets, and more."
                    >
                        <RequestVisual />
                    </StepCard>

                    <StepCard
                        framerName="Step 3"
                        title="Receive"
                        description="Your design is delivered..."
                        overflow="visible"
                        className="min-[810px]:col-span-2 min-[1200px]:col-span-1"
                    >
                        <ReceiveVisual />
                    </StepCard>
                </div>
            </div>
        </section>
    );
}