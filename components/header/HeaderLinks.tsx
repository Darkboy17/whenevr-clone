import Link from "next/link";
import { NAV_LINKS } from "./constants";


/**
 * Renders the navigation links inside the fullscreen menu.
 *
 * Responsibilities:
 * - Display links
 * - Handle staggered animation timing
 * - Close menu on navigation
 */
type HeaderLinksProps = {
    isOpen: boolean;
    closeMenu: () => void;
};

export default function HeaderLinks({ isOpen, closeMenu }: HeaderLinksProps) {
    return (
        <ul className="flex flex-col items-center justify-center gap-1">
            {NAV_LINKS.map(([label, href], index) => (
                <li
                    key={label}
                    className={[
                        "transform-gpu transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isOpen
                            ? "translate-y-0 opacity-100 duration-700"
                            : "translate-y-200 opacity-0 transition-transform duration-900",
                    ].join(" ")}
                    style={{
                        transitionDelay: isOpen
                            ? `${index * 70 + 20}ms`
                            : `${index * 70 + 20}ms`,
                    }}
                >
                    <Link
                        href={href}
                        onClick={closeMenu}
                        className="framer-text-features block text-center text-[40px] font-semibold leading-[1.1] tracking-[-0.07em] text-black transition-colors duration-400 ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[#989898] min-[810px]:text-[56px] min-[1200px]:text-[64px]"
                    >
                        <h2>{label}</h2>
                    </Link>
                </li>
            ))}
        </ul>
    );
}