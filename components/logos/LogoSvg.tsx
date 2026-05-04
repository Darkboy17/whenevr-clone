import type { Logo } from "./types";

type LogoSvgProps = {
    logo: Logo;
};

/**
 * Renders a single logo as an inline SVG.
 *
 * This component is intentionally small because the logo data already contains
 * the artwork. Its job is only to apply the shared SVG wrapper attributes.
 */
export default function LogoSvg({ logo }: LogoSvgProps) {
    return (
        <svg
            aria-hidden="true"
            className="block shrink-0 fill-black [image-rendering:pixelated]"
            focusable="false"
            height={logo.height}
            role="img"
            viewBox={`0 0 ${logo.width} ${logo.height}`}
            width={logo.width}
            xmlns="http://www.w3.org/2000/svg"
        >
            {logo.artwork}
        </svg>
    );
}