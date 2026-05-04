import BlogHeader from "./BlogHeader";
import PostCard from "./PostCard";
import { posts } from "./constants";

/**
 * Blog section.
 *
 * Coordinates the section heading and responsive blog grid.
 * Individual card behavior is handled by PostCard so this file remains focused
 * on the page-level layout.
 */
export default function Blog() {
    return (
        <section
            id="blog"
            className="relative z-[1] flex w-full flex-col items-center justify-center overflow-hidden px-6 pb-10 pt-20 md:px-9"
        >
            <div className="flex w-full max-w-[1200px] flex-col items-center gap-12">
                <BlogHeader />

                <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 min-[810px]:grid-cols-2 min-[1200px]:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.href}
                            className={post.featured ? "min-[1200px]:col-span-3" : undefined}
                        >
                            <PostCard post={post} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}