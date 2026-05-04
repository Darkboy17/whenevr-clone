import Image from "next/image";
import { heroMobileImageSizes } from "./constants";

type HeroImageProps = {
  variant: "desktop" | "mobile";
};

/**
 * Hero image used in both desktop and mobile layouts.
 *
 * The desktop and mobile wrappers are intentionally separate because
 * their positioning is very different across breakpoints.
 */
export default function HeroImage({ variant }: HeroImageProps) {

  if (variant === "desktop") {
    return (
      <div
        data-framer-name="Image (Desktop)"
        className="pointer-events-none absolute bottom-[-264px] right-[-350px] top-[-246px] hidden aspect-[1.48636] w-[1211px] rotate-[-75deg] overflow-hidden min-[1200px]:flex"
      >
        <Image
          src="/whenevr-assets/hero-main.png"
          alt=""
          aria-hidden="true"
          priority
          fill
          sizes="1211px"
          className="object-contain object-center"
        />
      </div>
    );
  }

  return (
    <div
      data-framer-name="Image (Mobile)"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 w-screen max-w-none overflow-hidden min-[810px]:left-1/2 min-[810px]:right-auto min-[810px]:bottom-[-350px] min-[810px]:left-[550px] min-[810px]:w-[max(1210.5837px,100vw)] min-[810px]:-translate-x-1/2 min-[1200px]:hidden"
      style={{ aspectRatio: "1.48636" }}
    >
      <Image
        src="/whenevr-assets/hero-main.png"
        alt=""
        aria-hidden="true"
        priority
        fill
        sizes={heroMobileImageSizes}
        className="object-contain object-center"
      />
    </div>
  );
}