import Image from "next/image";
import { cn } from "./utils";

type ClientAvatarProps = {
    src: string;
    rotated?: boolean;
};

/**
 * Circular client avatar used at both ends of each orbit arm.
 *
 * The custom shadow and border are preserved to match the original card-like
 * Framer visual treatment.
 */
export default function ClientAvatar({
    src,
    rotated = false,
}: ClientAvatarProps) {
    return (
        <div
            className={cn(
                "relative h-[96px] w-[96px] shrink-0 overflow-hidden rounded-full border-[6px] border-[#f8f8f8] bg-white",
                "shadow-[0_2px_4px_rgba(108,113,128,0.08),0_7px_7px_rgba(108,113,128,0.07),0_17px_10px_rgba(108,113,128,0.04),0_29px_12px_rgba(108,113,128,0.01),0_46px_13px_rgba(108,113,128,0)]",
                "md:h-[110px] md:w-[110px]",
                rotated && "rotate-180",
            )}
        >
            <Image
                src={src}
                alt=""
                fill
                sizes="110px"
                className="object-cover object-center"
            />
        </div>
    );
}