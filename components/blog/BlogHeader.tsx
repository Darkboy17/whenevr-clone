/**
 * Header block for the Blog section.
 *
 * Extracted to keep the main Blog component focused on layout and post mapping.
 */
export default function BlogHeader() {
    return (
        <div className="flex w-full flex-col items-center gap-6 text-center">
            <div className="flex h-min w-min flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[50px] bg-white px-3 py-1.5 backdrop-blur-2xl">
                <p className="select-none whitespace-pre text-[16px] font-semibold leading-none tracking-[-0.04em] text-white mix-blend-difference">
                    Blog
                </p>
            </div>

            <h2 className="framer-text-features max-w-[502px] text-[40px] font-semibold leading-[1.1] tracking-[-0.07em] text-black md:text-[40px]">
                Practical reads to help you move{" "}
                <span className="serif-italic tracking-[-0.08em]">faster.</span>
            </h2>
        </div>
    );
}