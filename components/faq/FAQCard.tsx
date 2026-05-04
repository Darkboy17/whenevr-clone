import { faqs } from "@/lib/data";
import FAQContact from "./FAQContact";
import FAQHeader from "./FAQHeader";
import FAQItem from "./FAQItem";

/**
 * FAQ card container.
 *
 * Owns the white card surface, shadow, border, and internal section ordering.
 * The individual FAQ accordion items are handled by FAQItem.
 */
export default function FAQCard() {
    return (
        <div
            className={[
                "relative z-[2] flex w-full max-w-[588px] flex-col items-start gap-8 rounded-[24px] border-[6px] border-[#f8f8f8] bg-white",
                "p-6 pt-8 md:p-12",
                "shadow-[0_2px_4px_rgba(108,113,128,0.08),0_7px_7px_rgba(108,113,128,0.07),0_17px_10px_rgba(108,113,128,0.04),0_29px_12px_rgba(108,113,128,0.01),0_46px_13px_rgba(108,113,128,0)]",
            ].join(" ")}
        >
            <FAQHeader />

            <FAQContact />

            <div className="flex w-full flex-col gap-2">
                {faqs.map(([question, answer]) => (
                    <FAQItem key={question} question={question} answer={answer} />
                ))}
            </div>
        </div>
    );
}