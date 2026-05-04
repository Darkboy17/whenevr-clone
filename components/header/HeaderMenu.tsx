import HeaderLinks from "./HeaderLinks";

type HeaderMenuProps = {
  isOpen: boolean;
  shouldRenderMenu: boolean;
  closeMenu: () => void;
};

export default function HeaderMenu({
  isOpen,
  shouldRenderMenu,
  closeMenu,
}: HeaderMenuProps) {
  if (!shouldRenderMenu) return null;

  return (
    <div
      className={[
        "fixed inset-x-0 top-[74px] z-1 h-[calc(100dvh-74px)] w-screen overflow-hidden",
        "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-8 opacity-0",
      ].join(" ")}
    >
      <nav
        aria-label="Menu navigation"
        className={[
          "absolute inset-0 flex h-full min-h-0 w-full flex-col items-center justify-center gap-[70px] pb-10 pt-6",
          "min-[810px]:gap-[110px] min-[1200px]:gap-[120px]",
        ].join(" ")}
      >
        <HeaderLinks isOpen={isOpen} closeMenu={closeMenu} />

        <p
          className={[
            "framer-text-features text-[14px] font-semibold leading-[1.5] tracking-[-0.04em] text-black transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)]",
            isOpen
              ? "translate-y-0 opacity-100 duration-700"
              : "-translate-y-10 opacity-0 duration-300",
          ].join(" ")}
          style={{
            transitionDelay: isOpen ? "420ms" : "0ms",
          }}
        >
          &copy; 2025 Whenevr&reg;
        </p>
      </nav>
    </div>
  );
}