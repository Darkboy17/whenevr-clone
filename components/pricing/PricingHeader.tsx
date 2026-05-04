import AnimatedPrice from "./AnimatedPrice";
import PlanToggle from "./PlanToggle";

type PricingHeaderProps = {
    price: string;
    hasAdditionalTask: boolean;
    onToggleAdditionalTask: () => void;
};

/**
 * Top section of the pricing table.
 *
 * Contains brand copy, animated price, and plan toggle. Extracting this keeps
 * PricingTable focused on table-level layout and feature rows.
 */
export default function PricingHeader({
    price,
    hasAdditionalTask,
    onToggleAdditionalTask,
}: PricingHeaderProps) {
    return (
        <div className="flex flex-col gap-6">
            {/* 
                Responsive layout:
                - Below 810px: stack all (logo → price → toggle)
                - 810px–1199px: flex row (logo left, price+toggle right)
                - 1200px+: grid (logo+desc+price left, toggle right)
            */}
            <div className="flex flex-col min-[810px]:flex-row min-[810px]:items-start min-[810px]:justify-between min-[1200px]:grid min-[1200px]:grid-cols-[1fr_auto]">

                {/* Left section: contains logo, description, and price (stacked) */}
                <div className="flex flex-col gap-3">
                    {/* Logo row */}
                    <div className="flex items-start gap-1">
                        <h1 className="serif-italic text-[42px] leading-[1.1] text-white">
                            whenevr
                        </h1>
                        <sup className="pt-3 text-[16px] font-semibold leading-none text-white">
                            &reg;
                        </sup>
                    </div>

                    {/* Description */}
                    <p className="text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-[#7c7c7c]">
                        Submit any design task you need. Landing pages, product visuals,
                        brand assets, and more.
                    </p>

                    {/* Price – visible on all screens, but positioning varies by breakpoint */}
                    <div className="mt-4 flex items-end gap-1 min-[810px]:hidden">
                        <h1 className="framer-text-features text-left text-[40px] font-semibold leading-none tracking-[-0.07em] text-white">
                            <AnimatedPrice key={price} value={price} />
                        </h1>
                        <h1 className="pb-0.5 text-left text-[16px] font-medium leading-[1.5] tracking-[-0.07em] text-[#7c7c7c]">
                            <span className="tracking-normal">/</span>month
                        </h1>
                    </div>
                </div>

                {/* Right container: holds price (on larger screens) + toggle */}
                <div className="flex flex-col-reverse gap-4 min-[810px]:flex-col min-[810px]:items-end min-[1200px]:items-start">
                    {/* Price – hidden on <810px (already shown above) */}
                    <div className="order-1 hidden items-end gap-1 min-[810px]:flex min-[810px]:order-2">
                        <h1 className="framer-text-features text-left text-[40px] font-semibold leading-none tracking-[-0.07em] text-white">
                            <AnimatedPrice key={price} value={price} />
                        </h1>
                        <h1 className="pb-0.5 text-left text-[16px] font-medium leading-[1.5] tracking-[-0.07em] text-[#7c7c7c]">
                            <span className="tracking-normal">/</span>month
                        </h1>
                    </div>

                    {/* Toggle appears after price on <810px, but above price on larger screens */}
                    <div className="order-2 min-[810px]:order-1 pt-4">
                        <PlanToggle
                            hasAdditionalTask={hasAdditionalTask}
                            onToggle={onToggleAdditionalTask}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}