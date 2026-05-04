type FeatureIconProps = {
    path: string;
};

/**
 * Renders a feature icon from an SVG path string.
 *
 * The path data is stored separately so cards stay focused on layout/content.
 */
export default function FeatureIcon({ path }: FeatureIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            aria-hidden="true"
            className="h-full w-full shrink-0 fill-black text-black"
            focusable="false"
        >
            <g>
                <path d={path} />
            </g>
        </svg>
    );
}