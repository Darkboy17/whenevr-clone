/**
 * Joins conditional class names safely.
 *
 * This keeps JSX readable without introducing another dependency like clsx.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}