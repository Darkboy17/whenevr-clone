import ServicePill from "./ServicePill";
import { heroServices, serviceWidths } from "./constants";

/**
 * Repeating ticker shown above the hero headline.
 *
 * The service list is duplicated multiple times so the CSS animation
 * can loop smoothly without visible empty gaps.
 */
export default function HeroTicker() {
  const tickerItems = [
    ...heroServices,
    ...heroServices,
    ...heroServices,
    ...heroServices,
  ];

  return (
    <div
      data-framer-name="Ticker"
      className="relative z-[1] flex w-full max-w-[500px] items-center justify-center gap-6 overflow-hidden"
    >
      <section className="flex h-9 flex-[1_0_0] items-center overflow-hidden p-2 [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]">
        <ul className="hero-ticker-track relative left-[-1436px] flex h-full max-h-full w-max max-w-none list-none flex-row items-center gap-4 p-0 ransform-gpu">
          {tickerItems.map((service, index) => (
            <ServicePill
              key={`${service}-${index}`}
              service={service}
              width={serviceWidths[index % serviceWidths.length]}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}