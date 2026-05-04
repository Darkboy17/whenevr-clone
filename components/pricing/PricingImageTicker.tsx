import { projectImages } from "./constants";
import PricingImage from "./PricingImage";

/**
 * Visual project ticker shown beside the pricing table.
 *
 * The project list is repeated three times because the existing `pricing-track`
 * animation class expects enough items to loop without visible gaps.
 */
export default function PricingImageTicker() {
    const tickerImages = projectImages;

    return (
        <div
            className="relative order-2 h-[360px] w-full flex-none overflow-hidden rounded-2xl min-[810px]:h-[539px] min-[1200px]:order-1 min-[1200px]:h-auto min-[1200px]:w-px min-[1200px]:flex-[1.5] min-[1200px]:self-stretch"
            data-framer-name="Ticker"
        >
            <section className="absolute inset-0 flex h-full w-full items-center overflow-hidden">
                <ul className="pricing-track absolute left-0 top-0 flex list-none flex-row p-0 transform-gpu min-[1200px]:flex-col">
                    {[...tickerImages, ...tickerImages, ...tickerImages].map((src, i) => (
                        <PricingImage
                            key={`${src}-${i}`}
                            src={src}
                            index={i % tickerImages.length}
                        />
                    ))}
                </ul>
            </section>
        </div>
    );
}