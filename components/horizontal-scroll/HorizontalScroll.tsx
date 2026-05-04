import ProjectDesktopScroll from "./ProjectDesktopScroll";
import ProjectMobileMarquee from "./ProjectMobileMarquee";

/**
 * Projects section.
 *
 * Coordinates two presentation modes:
 * - desktop: vertical scroll drives horizontal image movement
 * - mobile/tablet: continuous marquee using the existing CSS animation
 */
export default function HorizontalScroll() {
    return (
        <section
            id="projects"
            data-framer-name="Projects"
            className="relative z-[1] w-full overflow-visible"
        >
            <ProjectDesktopScroll />
            <ProjectMobileMarquee />
        </section>
    );
}