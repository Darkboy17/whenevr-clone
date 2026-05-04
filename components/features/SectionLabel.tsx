type SectionLabelProps = {
    children: string;
};

/**
 * Small section label above the main heading.
 *
 * Extracted because this style is visually distinct and may be reused by
 * other landing page sections.
 */
export default function SectionLabel({ children }: SectionLabelProps) {
    return (
        <div className="relative z-1 h-auto w-auto flex-none">
            <div className="flex h-min w-min flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[50px] bg-white px-3 py-0.5 backdrop-blur-2xl">
                <p className="select-none whitespace-pre text-[16px] font-semibold leading-none tracking-[-0.04em] text-white mix-blend-difference">
                    {children}
                </p>
            </div>
        </div>
    );
}