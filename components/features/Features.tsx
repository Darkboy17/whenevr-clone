import { features } from "@/lib/data";
import ScrollReveal from "../behavior/ScrollReveal";
import FeatureCard from "./FeatureCard";
import FeatureMarquee from "./FeatureMarquee";
import SectionLabel from "./SectionLabel";
import { featureIcons } from "./constants";
import { cn } from "./utils";

/**
 * Features section.
 *
 * This top-level component only coordinates section layout and data mapping.
 * Cards, icons, labels, and the marquee are split into focused components so
 * each piece can be maintained independently.
 */
export default function Features() {
    return (
        <section
            id="features"
            className="relative z-1 flex w-full flex-col items-center justify-center gap-16 overflow-hidden px-9 py-18"
            data-framer-name="Features"
        >
            <div className="flex h-min w-full max-w-300 flex-none flex-col items-center justify-center gap-12 overflow-visible">
                <ScrollReveal>
                    <div className="flex h-min w-full flex-none flex-col items-center justify-center gap-6 overflow-visible">
                        <SectionLabel>Features</SectionLabel>

                        <h2 className="framer-text-features w-full max-w-136.5 text-center text-[clamp(40px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.07em] text-black">
                            <span className="inline lg:block">Everything you need</span>{" "}
                            <span className="inline lg:block">
                                and<span className="serif-italic"> nothing </span>you don&apos;t.
                            </span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid h-min w-[1/2] grid-cols-1 justify-items-stretch gap-4 overflow-visible min-[810px]:grid-cols-2 min-[1200px]:grid-cols-3">
                    {features.map(([title, text], index) => {
                        const isLastOddCard =
                            features.length % 2 !== 0 && index === features.length - 1;

                        return (
                            <ScrollReveal
                                key={title}
                                className={cn(
                                    "w-full",
                                    isLastOddCard &&
                                    "min-[810px]:col-span-2 min-[1200px]:col-span-1",
                                )}
                            >
                                <FeatureCard
                                    title={title}
                                    text={text}
                                    icon={featureIcons[index]}
                                />
                            </ScrollReveal>
                        );
                    })}
                </div>

                <ScrollReveal>
                    <FeatureMarquee />
                </ScrollReveal>
            </div>
        </section>
    );
}