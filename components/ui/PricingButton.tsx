type PricingButtonProps = {
  href?: string;
};

/**
 * PricingButton
 *
 * A specialized CTA button with a vertical text transition animation.
 *
 * Animation behavior:
 * - Default text moves downward and fades out on hover
 * - Duplicate text slides into center from above and becomes visible
 *
 * This creates a smooth "swap" animation without affecting layout.
 *
 * Notes:
 * - Uses `group` for coordinated hover effects
 * - Text is duplicated intentionally for animation layering
 * - Designed specifically for high-visibility pricing CTAs
 */
export default function PricingButton({
  href = "/#pricing",
}: PricingButtonProps) {
  return (
    <a
      href={href}
      /**
       * Root container:
       * - `group` enables hover animation sync
       * - `overflow-hidden` ensures animation stays clipped
       * - fixed height and padding maintain consistent CTA sizing
       */
      className="group relative inline-flex h-14 min-w-[117px] items-center justify-center overflow-hidden rounded-full bg-black px-[30px] py-[18px]"
    >
      {/**
       * Hover text (initially hidden above)
       *
       * On hover:
       * - moves to vertical center
       * - fades in
       * - removes blur
       *
       * Positioned absolutely to overlap default text
       */}
      <div className="pointer-events-none absolute left-1/2 top-[-22px] z-[1] flex -translate-x-1/2 items-center justify-center opacity-0 blur-[5px] transition-all duration-200 ease-out group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100 group-hover:blur-none">
        <p className="framer-text-features select-none whitespace-nowrap text-center text-[18px] font-semibold leading-[1.2] tracking-[-0.04em] text-white">
          See Pricing
        </p>
      </div>

      {/**
       * Default text (visible initially)
       *
       * On hover:
       * - moves downward out of view
       * - fades out
       * - applies blur
       *
       * Remains in normal document flow
       */}
      <div className="relative flex items-center justify-center transition-all duration-200 ease-out group-hover:translate-y-[58px] group-hover:opacity-0 group-hover:blur-[5px]">
        <p className="framer-text-features select-none whitespace-nowrap text-center text-[18px] font-semibold leading-[1.2] tracking-[-0.04em] text-white">
          See Pricing
        </p>
      </div>
    </a>
  );
}