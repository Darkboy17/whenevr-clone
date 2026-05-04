/**
 * Small className helper.
 *
 * Keeps JSX readable when Tailwind classes depend on component state.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}