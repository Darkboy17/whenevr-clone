import { framerAssets } from "../constants";

/**
 * Visual for Step 3.
 *
 * The folder layers rely on custom CSS classes for depth, hover, and stacking.
 * Those classes are intentionally kept instead of converting them to Tailwind.
 */
export default function ReceiveVisual() {
    return (
        <div className="receive-visual absolute inset-x-0 top-0 z-[1] flex h-[265px] items-center justify-center overflow-visible rounded-2xl bg-[#ffffff8f] px-0 py-12">
            <div className="absolute left-1/2 top-1/2 z-[1] h-[265px] w-[360px] max-w-[calc(100vw-88px)] -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-[28px]">
                <div className="how-folder absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                        aria-hidden="true"
                        className="how-folder-back"
                        style={{
                            WebkitMask: `url(${framerAssets.folderMask}) center center / cover no-repeat`,
                            mask: `url(${framerAssets.folderMask}) center center / cover no-repeat`,
                        }}
                    />

                    {framerAssets.receive.map((src, index) => (
                        <div
                            key={src}
                            className={`how-folder-image how-folder-image-${index + 1}`}
                            style={{ backgroundImage: `url(${src})` }}
                        >
                            <div className="how-folder-light" />
                        </div>
                    ))}

                    <div className="how-folder-front">
                        <div
                            aria-hidden="true"
                            className="how-folder-logo"
                            style={{ backgroundImage: `url(${framerAssets.logoMark})` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}