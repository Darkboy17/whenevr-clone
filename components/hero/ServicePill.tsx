type ServicePillProps = {
  service: string;
  width: number;
};

/**
 * Individual ticker pill.
 *
 * The explicit width is intentional because the original design uses
 * fixed-width pills to create a predictable ticker rhythm.
 */
export default function ServicePill({ service, width }: ServicePillProps) {
  return (
    <li className="h-[33px] shrink-0" style={{ width }}>
      <div className="h-[33px] shrink-0" style={{ width }}>
        <div className="flex h-min w-min flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[50px] bg-white px-4 py-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
          <p className="framer-text-features select-none whitespace-pre text-[18px] font-semibold leading-[1.2] tracking-[-0.04em] text-black">
            {service}
          </p>
        </div>
      </div>
    </li>
  );
}