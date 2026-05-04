import Image from "next/image";
import { DEMO_IMAGE_CAPTION } from "./constants";

type PricingImageProps = {
    src: string;
    index: number;
};

/**
 * Single image used by the pricing ticker.
 *
 * The dimensions and caption overlay are preserved from the original layout
 * so the ticker keeps the same desktop/mobile proportions.
 */
export default function PricingImage({ src, index }: PricingImageProps) {
    return (
        <li className="h-[360px] w-[450px] shrink-0 min-[810px]:h-[539px] min-[1200px]:h-[450px]">
            <div
                className="relative h-full w-full shrink-0 overflow-hidden"
                data-framer-name={`Image ${index + 1}`}
            >
                <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 1200px) 450px, (min-width: 810px) 450px, 450px"
                    className="object-cover object-center"
                />

                <p className="absolute bottom-4 left-1/2 w-max -translate-x-1/2 whitespace-pre text-[12px] font-medium leading-[1.5] tracking-[-0.04em] text-white/50">
                    {DEMO_IMAGE_CAPTION}
                </p>
            </div>
        </li>
    );
}