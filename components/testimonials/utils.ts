/**
 * Small className helper for conditional Tailwind classes.
 *
 * Keeps JSX readable without adding a dependency like clsx.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}