import Image from "next/image";

type FeatureRowProps = {
    perk: string;
};

/**
 * Single perk row in the pricing table.
 *
 * Uses the original plus icon asset and spacing so the pricing checklist
 * remains visually consistent with the source design.
 */
export default function FeatureRow({ perk }: FeatureRowProps) {
    return (
        <li className="flex w-full items-center justify-start gap-[10px]">
            <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#f0f0f0]">
                <span className="relative h-[10px] w-[10px]">
                    <Image
                        src="/whenevr-assets/pricing/plus.png"
                        alt=""
                        fill
                        sizes="10px"
                        className="object-contain"
                    />
                </span>
            </span>

            <span className="text-[16px] font-semibold leading-none tracking-[-0.04em] text-white">
                {perk}
            </span>
        </li>
    );
}