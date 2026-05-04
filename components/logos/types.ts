import type { ReactNode } from "react";

/**
 * Describes one logo item used in the ticker.
 *
 * width and height are stored with the logo data so each SVG can preserve
 * its original viewBox ratio and render at the exact intended size.
 */
export type Logo = {
    name: string;
    width: number;
    height: number;
    artwork: ReactNode;
};