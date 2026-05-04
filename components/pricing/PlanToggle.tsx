import { ADDITIONAL_TASK_UPCHARGE } from "./constants";
import { cn } from "./utils";

type PlanToggleProps = {
    hasAdditionalTask: boolean;
    onToggle: () => void;
};

/**
 * Toggle for enabling an additional active task.
 *
 * The mobile ordering fix is preserved:
 * - toggle appears before text on mobile
 * - text aligns to the right on larger screens
 */
export default function PlanToggle({
    hasAdditionalTask,
    onToggle,
}: PlanToggleProps) {
    return (
        <div
            className="order-2 flex flex-col items-start justify-end gap-4 min-[810px]:order-1 min-[810px]:items-end"
            data-framer-name="Plan Price Toggle"
        >
            <div className="flex w-full items-center justify-none gap-3 min-[810px]:flex-col min-[810px]:items-end min-[810px]:gap-2">
                <button
                    type="button"
                    aria-pressed={hasAdditionalTask}
                    aria-label="Toggle additional active task"
                    onClick={onToggle}
                    className="order-1 relative flex h-[30px] w-[52px] shrink-0 items-center rounded-[50px] bg-white p-[5px] hover:cursor-pointer min-[810px]:order-2"
                >
                    <span
                        className={cn(
                            "h-5 w-5 rounded-full bg-black transition-transform duration-300",
                            hasAdditionalTask ? "translate-x-[22px]" : "translate-x-0",
                        )}
                    />
                </button>

                <div className="order-2 flex flex-col items-start gap-2 min-[810px]:order-1 min-[810px]:items-end">
                    <p
                        className={cn(
                            "text-[16px] font-semibold leading-none tracking-[-0.04em] text-white transition-opacity",
                            hasAdditionalTask ? "opacity-100" : "opacity-40",
                        )}
                    >
                        Additional Active Task
                    </p>

                    <p
                        className={cn(
                            "text-[14px] font-semibold leading-none tracking-[-0.04em] text-white transition-opacity",
                            hasAdditionalTask ? "opacity-100" : "opacity-40",
                        )}
                    >
                        {ADDITIONAL_TASK_UPCHARGE}
                    </p>
                </div>
            </div>
        </div>
    );
}