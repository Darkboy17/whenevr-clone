import Image from "next/image";

type BookCallButtonProps = {
  href?: string;
  imageSrc?: string;
};

/**
 * BookCallButton
 *
 * A specialized CTA component designed to encourage users to book a call.
 *
 * Animation behavior:
 * - Default content (avatar + text) slides up and fades out on hover
 * - Secondary CTA ("View calendar") fades in from below
 *
 * Visual structure:
 * - Left: avatar image
 * - Right: title + availability status
 *
 * Notes:
 * - Uses `group` for coordinated hover animations
 * - Includes a pseudo-element border overlay for layered visual depth
 * - Designed specifically for hero/CTA sections (not fully generic)
 */
export default function BookCallButton({
  href = "/#book-a-call",
  imageSrc = "/whenevr-assets/hero-02.png",
}: BookCallButtonProps) {
  return (
    <a
      href={href}
      /**
       * Root container:
       * - `group` enables hover animation sync
       * - `overflow-hidden` ensures animation stays clipped
       * - custom shadow mimics Framer-style elevation
       * - `after` pseudo-element creates a subtle inset border layer
       */
      className="group shrink-0 relative inline-flex items-center overflow-hidden rounded-full bg-white shadow-[0_2px_4px_rgba(108,113,128,0.08),0_7px_7px_rgba(108,113,128,0.07),0_17px_10px_rgba(108,113,128,0.04),0_29px_12px_rgba(108,113,128,0.01),0_46px_13px_rgba(108,113,128,0)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border-4 after:border-[#f8f8f8] after:content-['']"
    >
      {/**
       * Default content (visible initially)
       *
       * On hover:
       * - slides upward
       * - fades out
       * - applies slight blur
       */}
      <div className="flex items-center gap-2 px-2 py-2 pr-6 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 group-hover:blur-sm">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="40px"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-0">
          <p className="framer-text-features whitespace-nowrap text-[15px] font-semibold leading-none tracking-[-0.04em] text-black">
            Book a 15-min intro call
          </p>

          <div className="flex items-center gap-1">
            {/**
             * Availability indicator:
             * - green dot suggests real-time availability
             */}
            <span className="h-2 w-2 rounded-full bg-[#1dcc5d]" />

            <p className="framer-text-features whitespace-nowrap text-[12px] font-semibold leading-normal tracking-[-0.06em] text-[#989898]">
              Available now
            </p>
          </div>
        </div>
      </div>

      {/**
       * Hover content (hidden initially)
       *
       * On hover:
       * - moves into center
       * - fades in
       * - removes blur
       *
       * This creates a "content swap" effect without layout shift.
       */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-full items-center justify-center opacity-0 blur-sm transition-all duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-hover:blur-none">
        <p className="framer-text-features whitespace-nowrap text-[16px] font-semibold leading-none tracking-[-0.04em] text-black">
          View calendar
        </p>
      </div>
    </a>
  );
}