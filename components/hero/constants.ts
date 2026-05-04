import { services } from "@/lib/data";

/**
 * The hero ticker intentionally shows only the first few services.
 * This keeps the animation compact and visually balanced.
 */
export const heroServices = services.slice(0, 5);

/**
 * Fixed pill widths are preserved from the original Framer layout.
 * These widths help the ticker spacing match the original design exactly.
 */
export const serviceWidths = [158.5, 117, 127, 129, 105.5];

/**
 * Image sizes are kept as-is to preserve Next/Image optimization behavior
 * and avoid layout changes across breakpoints.
 */
export const heroImageSizes =
  "(min-width: 1200px) 1211px, 100vw";

export const heroMobileImageSizes =
  "(min-width: 810px) 1211px, 100vw";