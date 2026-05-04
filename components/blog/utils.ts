/**
 * Joins Tailwind classes conditionally.
 *
 * This keeps JSX readable while avoiding an extra dependency for simple cases.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}