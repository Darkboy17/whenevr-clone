/**
 * Small utility for joining Tailwind class names conditionally.
 *
 * This keeps JSX readable without introducing an extra dependency like clsx.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}