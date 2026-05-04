/**
 * Chevron icon used in the menu toggle button.
 * Rotates based on menu state for visual feedback.
 */
export default function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      aria-hidden="true"
      focusable="false"
      className={[
        "h-full w-full fill-black transition-transform duration-300",
        isOpen ? "rotate-0" : "rotate-180",
      ].join(" ")}
    >
      <path d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z" />
    </svg>
  );
}