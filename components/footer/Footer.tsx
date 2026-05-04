import FooterBottom from "./FooterBottom";
import FooterBrandCTA from "./FooterBrandCTA";
import FooterCalendar from "./FooterCalendar";

/**
 * Footer section.
 *
 * Top-level layout wrapper for the brand CTA, Cal.com booking embed,
 * and legal/navigation footer row.
 */
export default function Footer() {
    return (
        <footer className="relative z-[2] flex w-full flex-col items-center justify-center gap-12 overflow-hidden bg-black px-6 py-10 min-[810px]:px-9">
            <div className="relative z-[4] flex w-full max-w-[1200px] flex-col items-center gap-8">
                <div className="flex w-full flex-col items-start gap-16 min-[1200px]:flex-row min-[1200px]:gap-0">
                    <FooterBrandCTA />

                    <FooterCalendar />
                </div>

                <FooterBottom />
            </div>
        </footer>
    );
}