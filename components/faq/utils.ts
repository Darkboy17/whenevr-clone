/**
 * Joins Tailwind classes conditionally.
 *
 * This keeps conditional class logic readable without adding an external
 * dependency like clsx.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}