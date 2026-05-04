import Image from "next/image";
import { projectCaption } from "./constants";

type ProjectImageProps = {
    src: string;
};

/**
 * Single project image frame.
 *
 * This keeps the image, caption, and object-fit behavior consistent between
 * the desktop horizontal scroll and mobile marquee versions.
 */
export default function ProjectImage({ src }: ProjectImageProps) {
    return (
        <div className="relative h-full w-full overflow-hidden opacity-100">
            <Image
                src={src}
                alt=""
                fill
                sizes="1000px"
                loading="lazy"
                className="block h-full w-full object-cover object-center"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-pre opacity-100">
                <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.04em] text-white/50">
                    {projectCaption}
                </p>
            </div>
        </div>
    );
}