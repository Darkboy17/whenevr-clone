import type { CSSProperties } from "react";
import ClientAvatar from "./ClientAvatar";
import { arms } from "./constants";

type ClientOrbitProps = {
    rotation: number;
};

/**
 * Circular client orbit.
 *
 * The arm layout is built from absolutely positioned columns. Each arm is
 * rotated around the center, placing avatars evenly around the circle.
 */
export default function ClientOrbit({ rotation }: ClientOrbitProps) {
    return (
        <div className="pointer-events-none relative flex h-[500px] w-full flex-none items-start justify-center overflow-visible lg:h-[600px] lg:w-px lg:flex-1">
            <div
                className="relative z-[1] h-[900px] w-[690px] shrink-0 origin-center overflow-visible md:h-[1130px] md:w-[870px] lg:h-[1130px] lg:w-[1128px]"
                style={{ transform: "perspective(1200px)" }}
            >
                <div
                    className="relative flex h-full w-full items-center justify-center overflow-visible"
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {arms.map((arm, index) => (
                        <div
                            key={`${arm.images[0]}-${index}`}
                            className="absolute left-1/2 top-1/2 z-[1] flex h-full w-min flex-col items-center justify-between overflow-hidden p-0"
                            style={
                                {
                                    transform: `translate(-50%, -50%) rotate(${arm.rotation}deg)`,
                                } as CSSProperties
                            }
                        >
                            <ClientAvatar src={arm.images[0]} />
                            <ClientAvatar src={arm.images[1]} rotated />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}