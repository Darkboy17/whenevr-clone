import FAQCard from "./FAQCard";

/**
 * FAQ section.
 *
 * Top-level page section wrapper. It provides spacing, positioning, and the
 * hidden `book-a-call` anchor target used elsewhere in the page.
 */
export default function FAQ() {
    return (
        <section
            id="faq"
            className="relative flex w-full items-center justify-center overflow-visible px-6 py-20 md:px-9"
        >
            <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-16">
                <FAQCard />
            </div>

            <div
                id="book-a-call"
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full"
            />
        </section>
    );
}