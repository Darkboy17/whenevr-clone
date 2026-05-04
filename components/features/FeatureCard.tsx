import FeatureIcon from "./FeatureIcon";

type FeatureCardProps = {
    title: string;
    text: string;
    icon: string;
};

/**
 * Single feature card.
 *
 * The card shadow, border, radius, and spacing are kept exactly as authored
 * so the section retains its original Framer-like visual depth.
 */
export default function FeatureCard({ title, text, icon }: FeatureCardProps) {
    return (
        <article
            className={[
                "flex h-min w-full flex-col items-start justify-start gap-5 overflow-visible rounded-2xl border-[6px] border-[#f8f8f8] bg-white p-6",
                "shadow-[0_2px_4px_rgba(108,113,128,0.08),0_7px_7px_rgba(108,113,128,0.07),0_17px_10px_rgba(108,113,128,0.04),0_29px_12px_rgba(108,113,128,0.01),0_46px_13px_rgba(108,113,128,0)]",
            ].join(" ")}
            data-framer-name="Card"
        >
            <div className="flex w-min items-center justify-center gap-2.5 rounded-2xl">
                <div className="relative h-10 w-10 flex-none">
                    <FeatureIcon path={icon} />
                </div>
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <p className="w-full text-balance text-[18px] font-semibold leading-[1.2] tracking-[-0.04em] text-black">
                    {title}
                </p>

                <p className="w-full text-balance text-[14px] font-medium leading-normal tracking-[-0.04em] text-[#989898]">
                    {text}
                </p>
            </div>
        </article>
    );
}