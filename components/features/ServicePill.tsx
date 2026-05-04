type ServicePillProps = {
    service: string;
    width: number;
};

/**
 * Pill item used in the bottom services marquee.
 *
 * The width is passed in explicitly to preserve the original ticker spacing.
 */
export default function ServicePill({ service, width }: ServicePillProps) {
    return (
        <li className="h-8.25 shrink-0 transform-gpu" style={{ width }}>
            <div className="h-8.25 shrink-0" style={{ width }}>
                <div className="flex h-min w-min flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[50px] bg-white px-4 py-1.5 backdrop-blur-2xl">
                    <p className="select-none whitespace-pre text-[18px] font-semibold leading-[1.2] tracking-[-0.04em] text-white mix-blend-difference">
                        {service}
                    </p>
                </div>
            </div>
        </li>
    );
}