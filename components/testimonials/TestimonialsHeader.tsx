/**
 * Header content for the testimonials section.
 *
 * Extracted so the carousel file can focus only on interaction and scrolling.
 */
export default function TestimonialsHeader() {
    return (
        <div className="flex h-min w-full max-w-[768px] flex-none flex-col items-center justify-center gap-8 overflow-visible">
            <div className="flex h-min w-full flex-none flex-col items-center justify-center gap-6 overflow-visible">
                <div className="relative z-[1] h-auto w-auto flex-none">
                    <div className="flex h-min w-min flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[50px] bg-white px-3 py-1.5 backdrop-blur-2xl">
                        <p className="select-none whitespace-pre text-[16px] font-semibold leading-none tracking-[-0.04em] text-white mix-blend-difference">
                            Testimonials
                        </p>
                    </div>
                </div>

                <h2
                    className="framer-text-features w-full max-w-136.5 whitespace-pre-wrap text-center text-[42px] font-semibold leading-[1.1] tracking-[-0.07em] text-black min-[1200px]:text-[56px]"
                    style={{
                        fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    }}
                >
                    Turns out, people like getting things{" "}
                    <span className="serif-italic">done.</span>
                </h2>
            </div>
        </div>
    );
}