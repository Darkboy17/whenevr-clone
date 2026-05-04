import Link from "next/link";
import { footerLinks } from "./constants";

/**
 * Bottom footer row.
 *
 * Contains copyright attribution and footer navigation links.
 * Link data is imported from constants to keep markup separate from content.
 */
export default function FooterBottom() {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="relative z-[2] flex w-full max-w-[1520px] flex-col items-center justify-center gap-4 overflow-hidden text-center min-[810px]:flex-row min-[810px]:justify-between min-[810px]:text-left">
                <p className="text-[14px] font-medium leading-[1.3] tracking-[-0.04em] text-[#7c7c7c]">
                    &copy; 2025 Whenevr. Created by{" "}
                    <a
                        href="https://hxmzaehsan.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition duration-300 hover:text-[#989898]"
                    >
                        Hamza Ehsan.
                    </a>
                </p>

                <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap text-[14px] font-medium leading-[1.4] tracking-[-0.04em] text-[#7c7c7c] transition duration-300 hover:text-[#989898]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}