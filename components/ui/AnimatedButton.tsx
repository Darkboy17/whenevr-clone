import { ReactNode } from "react";

/**
 * AnimatedButtonProps
 *
 * Props for the AnimatedButton component.
 *
 * - `label`: The text to display on the button (required).
 * - `href`: Optional URL to navigate to when clicked (defaults to "#").
 * - `color`: Button background color, either "black" or "white" (defaults to "black").
 * - `fullWidth`: If true, button takes full width of container (defaults to false).
 * - `target`: Specifies where to open the linked document (e.g., "_blank").
 * - `rel`: Specifies the relationship between the current document and the linked document (e.g., "noopener noreferrer").
 */
type AnimatedButtonProps = {
  label: string;
  href?: string;
  color?: "black" | "white";
  fullWidth?: boolean;
  children?: ReactNode;
  target?: string;
  rel?: string;

};

/**
 * AnimatedButton
 *
 * A reusable CTA button with a vertical text transition on hover.
 *
 * Animation behavior:
 * - Default text slides up and fades out
 * - Duplicate text slides in from below and becomes visible
 *
 * This creates a smooth "swap" effect without changing layout.
 *
 * Notes:
 * - Uses Tailwind group hover utilities for coordinated animation
 * - Uses dynamic background color (`bg-${color}`) based on prop
 * - Designed for marketing/landing page CTAs
 */
export default function AnimatedButton({
  label,
  href = "#",
  color = "black",
  fullWidth = false,
  target,
  rel,
}: AnimatedButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      /**
       * Root container:
       * - `group` enables hover interactions for child elements
       * - `overflow-hidden` ensures animation stays within button bounds
       * - width is controlled via `fullWidth` prop
       */
      className={`group relative inline-flex h-13.5 ${fullWidth ? "w-full" : "w-fit"
        } items-center justify-center overflow-hidden rounded-full bg-${color} px-8 py-7 text-center`}
    >
      {/**
       * Hover text layer (initially hidden below)
       *
       * On hover:
       * - moves to center (-translate-y-1/2)
       * - fades in
       * - removes blur
       */}
      <span
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-full whitespace-nowrap text-[18px] font-semibold leading-[1.2] tracking-[-0.04em] ${color === "black" ? "text-white" : "text-black"
          } opacity-0 blur-sm transition-all duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-hover:blur-none`}
      >
        {label}
      </span>

      {/**
       * Default text layer (visible initially)
       *
       * On hover:
       * - slides up out of view
       * - fades out
       * - applies slight blur
       */}
      <span
        className={`whitespace-nowrap text-[18px] font-semibold leading-[1.2] tracking-[-0.04em] ${color === "black" ? "text-white" : "text-black"
          } transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 group-hover:blur-sm`}
      >
        {label}
      </span>
    </a>
  );
}