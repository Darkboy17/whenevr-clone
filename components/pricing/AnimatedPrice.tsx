import type { CSSProperties } from "react";

type AnimatedPriceProps = {
    value: string;
};

/**
 * Animated price text.
 *
 * Each character receives a staggered CSS delay so price changes can animate
 * character-by-character using the existing pricing CSS classes.
 */
export default function AnimatedPrice({ value }: AnimatedPriceProps) {
    return (
        <span key={value} className="pricing-price-value" aria-label={value}>
            {[...value].map((character, index) => (
                <span
                    key={`${character}-${index}`}
                    aria-hidden="true"
                    className="pricing-price-character"
                    style={
                        {
                            "--pricing-price-character-delay": `${index * 35}ms`,
                        } as CSSProperties
                    }
                >
                    {character}
                </span>
            ))}
        </span>
    );
}