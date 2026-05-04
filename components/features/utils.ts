/**
 * Lightweight className helper for conditional Tailwind classes.
 *
 * This keeps components readable without adding an external dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}