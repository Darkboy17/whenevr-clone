import Image from "next/image";
import Link from "next/link";
import Pill from "./Pill";
import type { BlogPost } from "./types";
import { cn } from "./utils";

type PostCardProps = {
    post: BlogPost;
};

/**
 * Blog post card.
 *
 * Handles both normal and featured post layouts. The featured card keeps the
 * same visual language as standard cards below 1200px, then expands into a
 * two-column editorial layout on desktop.
 */
export default function PostCard({ post }: PostCardProps) {
    const imageSizes = post.featured
        ? "(min-width: 1200px) max((100vw - 32px) / 2, 1px), max(100vw - 16px, 1px)"
        : "max(100vw - 16px, 1px)";

    return (
        <Link
            href={post.href}
            className={cn(
                "group flex w-full overflow-hidden rounded-[24px] border-[6px] border-[#f8f8f8] bg-white p-2 no-underline",
                "shadow-[0_2px_4px_rgba(108,113,128,0.08),0_7px_7px_rgba(108,113,128,0.07),0_17px_10px_rgba(108,113,128,0.04),0_29px_12px_rgba(108,113,128,0.01),0_46px_13px_rgba(108,113,128,0)]",
                "transition duration-500",
                post.featured
                    ? "min-h-[430px] flex-col gap-4 min-[1200px]:h-[500px] min-[1200px]:min-h-0 min-[1200px]:flex-row"
                    : "min-h-[430px] flex-col gap-4",
            )}
        >
            <div
                className={cn(
                    "relative w-full flex-none overflow-hidden rounded-t-[16px]",
                    "[mask:linear-gradient(0deg,rgba(0,0,0,0)_0%,rgb(0,0,0)_35%,rgb(0,0,0)_100%)]",
                    "[-webkit-mask:linear-gradient(0deg,rgba(0,0,0,0)_0%,rgb(0,0,0)_35%,rgb(0,0,0)_100%)]",
                    post.featured
                        ? "aspect-[4/3] min-[1200px]:h-auto min-[1200px]:min-h-[427px] min-[1200px]:w-1/2 min-[1200px]:flex-1 min-[1200px]:rounded-l-[16px] min-[1200px]:rounded-r-none"
                        : "aspect-[4/3]",
                )}
            >
                <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes={imageSizes}
                    className="object-cover object-center transition duration-400 group-hover:scale-[1.07]"
                />

                <Pill
                    className={cn(
                        "absolute right-4 top-4 z-[1] bg-[#f0f0f0]",
                        post.featured && "min-[1200px]:hidden",
                    )}
                >
                    {post.featured ? (
                        <>
                            <span className="block min-[1200px]:hidden">Strategy</span>
                            <span className="hidden min-[1200px]:block">
                                {post.category}
                            </span>
                        </>
                    ) : (
                        post.category
                    )}
                </Pill>
            </div>

            <div
                className={cn(
                    "flex w-full flex-1 flex-col p-4",
                    post.featured
                        ? "gap-8 min-[1200px]:w-1/2 min-[1200px]:justify-between"
                        : "gap-8",
                )}
            >
                <div className="flex flex-col gap-2">
                    <div
                        className={
                            post.featured
                                ? "flex flex-col gap-0 min-[1200px]:gap-6"
                                : ""
                        }
                    >
                        {post.featured && (
                            <Pill className="!hidden w-fit bg-[#f0f0f0] min-[1200px]:!inline-flex">
                                {post.category}
                            </Pill>
                        )}

                        <h3
                            className={cn(
                                "overflow-hidden font-semibold text-black min-[810px]:text-[25px]",
                                post.featured
                                    ? "text-[22px] leading-[1.3] tracking-[-0.06em] min-[1200px]:max-w-[460px] min-[1200px]:text-[40px] min-[1200px]:leading-[1.2]"
                                    : "text-[20px] leading-[1.04] tracking-[-0.06em]",
                            )}
                        >
                            {post.title}
                        </h3>
                    </div>

                    <div className="pt-2 text-[#7c7c7c] text-[15px] font-medium leading-[1.5] min-[1200px]:text-[18px] min-[1200px]:leading-[1.4]">
                        <span className="block min-[1200px]:hidden">
                            {post.mobileExcerpt ?? post.excerpt}
                        </span>

                        <span className="hidden min-[1200px]:block">{post.excerpt}</span>
                    </div>
                </div>

                {post.featured && (
                    <div className="hidden w-full items-center justify-between gap-4 min-[1200px]:flex">
                        <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-black" />
                            <span className="text-[12px] font-semibold leading-none tracking-[-0.08em] text-black">
                                5 min read
                            </span>
                        </div>

                        <div className="relative flex items-start">
                            <h4 className="serif-italic text-[24px] leading-none tracking-[-0.06em] text-black">
                                by Whenver
                            </h4>
                            <sup className="absolute -right-3 top-0 text-[14px] font-semibold leading-none text-black">
                                ®
                            </sup>
                        </div>
                    </div>
                )}
            </div>
        </Link>
    );
}