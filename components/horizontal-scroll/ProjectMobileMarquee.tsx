import { projects } from "./constants";
import ProjectImage from "./ProjectImage";

/**
 * Mobile project gallery.
 *
 * Uses the existing CSS marquee class instead of scroll-driven animation
 * because horizontal sticky scrolling is only enabled on desktop.
 */
export default function ProjectMobileMarquee() {
    const marqueeProjects = [...projects, ...projects];

    return (
        <div className="flex w-full overflow-hidden py-0 min-[1200px]:hidden">
            <div className="project-mobile-marquee flex w-max gap-0">
                {marqueeProjects.map((src, index) => (
                    <div
                        key={`${src}-${index}`}
                        aria-hidden={index >= projects.length}
                        className="relative aspect-square h-112.5 shrink-0"
                    >
                        <ProjectImage src={src} />
                    </div>
                ))}
            </div>
        </div>
    );
}