import BookCallButton from "../ui/BookCallButton";
import AnimatedButton from "../ui/AnimatedButton";
import HeroImage from "./HeroImage";
import HeroTicker from "./HeroTicker";
import HeroText from "./HeroText";

/**
 * Hero section.
 *
 * This component acts as the layout coordinator only.
 * Visual sub-sections such as ticker, text, and images are extracted
 * so this file stays easy to scan and maintain.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      data-framer-name="Hero"
      className="relative z-2 flex h-[900px] w-full flex-col items-center justify-start gap-12 overflow-hidden px-6 py-40 min-[810px]:px-9 min-[1200px]:h-[850px] min-[1200px]:justify-center"
    >
      <div
        data-framer-name="Container"
        className="relative z-4 flex h-min w-full max-w-300 flex-col items-start justify-center gap-8 overflow-visible"
      >
        <HeroImage variant="desktop" />

        <HeroTicker />

        <HeroText />

        <div
          data-framer-name="Buttons"
          className="relative z-[1] flex w-full flex-col items-start justify-start gap-4 overflow-visible min-[810px]:w-auto min-[810px]:flex-row min-[810px]:items-center"
        >
          <AnimatedButton
            label="See Pricing"
            href="/#pricing"
            fullWidth={false}
          />

          <BookCallButton />
        </div>
      </div>

      <HeroImage variant="mobile" />

      {/* Bottom blur overlay that softens the hero image edge. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[178px] backdrop-blur-[12px] [mask:linear-gradient(#0000_0%,#000_50%)] [-webkit-mask:linear-gradient(#0000_0%,#000_50%)]"
      />

      {/* Background fade overlay used to blend the hero into the next section. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-[5] bg-[#f0f0f0] [mask:linear-gradient(#0000_88%,#000_97%)] [-webkit-mask:linear-gradient(#0000_88%,#000_97%)] min-[810px]:[mask:linear-gradient(#0000_75%,#000_97%)] min-[810px]:[-webkit-mask:linear-gradient(#0000_75%,#000_97%)]"
      />
    </section>
  );
}