import { quotePath } from "./constants";

/**
 * Decorative quote icon used inside each testimonial card.
 *
 * Kept as inline SVG so the shape stays crisp and does not require
 * an additional asset request.
 */
export default function QuoteIcon() {
    return (
        <svg
            overflow="visible"
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
        >
            <path strokeLinejoin="miter" fill="#f0f0f0" d={quotePath} />
        </svg>
    );
}