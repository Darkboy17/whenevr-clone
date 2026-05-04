import { calEmbedSrcDoc } from "./constants";

/**
 * Calendar embed shown on the right side of the footer.
 *
 * The iframe uses `srcDoc` to keep the embed self-contained and preserve the
 * original Cal.com initialization script and dark theme configuration.
 */
export default function FooterCalendar() {
    return (
        <div className="w-full flex-none min-[1200px]:w-px min-[1200px]:flex-[0.5]">
            <iframe
                title="Book a call calendar"
                className="min-[1200px]:h-[546px] min-[810px]:h-[586px] h-[700px] w-full border-0"
                srcDoc={calEmbedSrcDoc}
            />
        </div>
    );
}