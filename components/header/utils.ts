/**
 * Utility to conditionally join classNames.
 * Prevents repetitive `.join(" ")` usage and improves readability.
 *
 * Example:
 * cn("base", isActive && "active")
 */
export function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}