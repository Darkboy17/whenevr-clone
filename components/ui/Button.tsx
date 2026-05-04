type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  dark?: boolean;
  className?: string;
};

/**
 * Button
 *
 * A simple, reusable CTA component with two visual variants:
 * - light (default)
 * - dark
 *
 * Responsibilities:
 * - consistent sizing and spacing across the app
 * - unified hover/active interaction behavior
 * - flexible usage via `children`
 *
 * Notes:
 * - Uses `<a>` instead of `<button>` because it's primarily used for navigation
 * - `className` prop allows further customization without modifying base styles
 */
export default function Button({
  children,
  href = "#pricing",
  dark,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      /**
       * Base styles:
       * - consistent height, padding, typography
       * - rounded pill shape for modern CTA appearance
       */
      className={[
        "inline-flex h-12 min-w-32 items-center justify-center rounded-full px-6 text-sm font-medium leading-none transition-all duration-300",

        /**
         * Variant styles:
         * - `dark`: filled black button
         * - default: light button with subtle border
         */
        dark
          ? "bg-black text-white hover:bg-[#1c1c1c]"
          : "border border-black/10 bg-white text-black hover:border-black/20",

        /**
         * Interaction styles:
         * - slight lift on hover
         * - shadow for depth
         * - reset on active (click)
         */
        "hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] active:translate-y-0",

        /**
         * Allows external overrides/extensions
         */
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}