"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ChevronIcon from "./ChevronIcon";
import HeaderMenu from "./HeaderMenu";

type HeaderProps = {
  isOverHorizontalScroll: boolean;
};

export default function Header({ isOverHorizontalScroll }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const openFrame = useRef<number | null>(null);

  const isMenuExpanded = isOpen;

  /**
   * Keep the menu mounted briefly after closing so the exit animation can finish.
   */
  useEffect(() => {
    if (isOpen || !shouldRenderMenu) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setShouldRenderMenu(false);
    }, 520);

    return () => window.clearTimeout(timeout);
  }, [isOpen, shouldRenderMenu]);

  /**
   * Prevent pending animation frames from running after the component unmounts.
   */
  useEffect(() => {
    return () => {
      if (openFrame.current !== null) {
        window.cancelAnimationFrame(openFrame.current);
      }
    };
  }, []);

  /**
   * Double requestAnimationFrame allows the menu to mount first,
   * then transition into the open state smoothly.
   */
  function toggleMenu() {
    if (!isOpen) {
      setShouldRenderMenu(true);

      openFrame.current = window.requestAnimationFrame(() => {
        openFrame.current = window.requestAnimationFrame(() => {
          setIsOpen(true);
        });
      });

      return;
    }

    setIsOpen(false);
  }

  /**
   * Used when clicking logo or menu links.
   */
  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="px-5 min-[810px]:px-9 pointer-events-none fixed inset-x-0 top-0 z-50 flex w-full items-center justify-center">
      <div
        aria-hidden="true"
        className="header-progressive-blur pointer-events-none fixed inset-x-0 top-0 z-0 hidden min-[1200px]:block"
      />

      <nav
        className="pointer-events-none relative z-1 w-full overflow-visible"
        aria-label="Primary navigation"
      >
        <div
          className={[
            "pointer-events-none fixed left-0 top-0 w-screen transition-[height,opacity,box-shadow,background-color] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isMenuExpanded
              ? "h-dvh bg-[#f0f0f0] opacity-100 shadow-[0_16px_60px_rgba(0,0,0,0.08)]"
              : "h-18.5 bg-[#f0f0f0] opacity-100 shadow-none min-[1200px]:bg-transparent",
          ].join(" ")}
        />

        <div className="pointer-events-none relative z-2 mx-auto flex h-18.5 w-full max-w-300 items-center justify-between">
          <Link
            href="/"
            className="pointer-events-auto relative flex items-start pr-3"
            aria-label="Whenevr home"
            onClick={closeMenu}
          >
            <span
              className={[
                "serif-italic text-[30px] leading-none tracking-[-0.08em] text-black",
                "transition-colors ease-out",
                isOverHorizontalScroll
                  ? `duration-200 min-[1200px]:text-white`
                  : " text-black",
              ].join(" ")}
            >
              whenevr
            </span>

            <sup
              className={[
                "absolute right-0 top-0 text-[14px] font-semibold leading-none text-black transition-colors ease-out duration-200",
                isOverHorizontalScroll ? `duration-200 min-[1200px]:text-white` : "text-black",
              ].join(" ")}
            >
              &reg;
            </sup>
          </Link>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="pointer-events-auto flex h-9 items-center justify-center gap-1.5 overflow-hidden rounded-[50px] min-[1200px]:bg-white px-4 backdrop-blur-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
          >
            <span className="framer-text-features whitespace-pre text-[16px] font-semibold leading-none tracking-[-0.04em] text-black">
              {isOpen ? "Close" : "Menu"}
            </span>

            <span className="h-4.5 w-4.5 shrink-0">
              <ChevronIcon isOpen={isOpen} />
            </span>
          </button>
        </div>

        <HeaderMenu
          isOpen={isOpen}
          shouldRenderMenu={shouldRenderMenu}
          closeMenu={closeMenu}
        />
      </nav>
    </div>
  );
}