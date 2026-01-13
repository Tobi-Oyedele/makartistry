"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { UserRound, Search, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav({ isScrolled }: { isScrolled: boolean }) {
  const [open, setOpen] = useState(false);

  const isDark = isScrolled;

  const navClasses = isScrolled
    ? "bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
    : "bg-transparent border-b border-white/20";

  const iconColor = isDark ? "text-eerie-black" : "text-white";
  const iconHover = isDark ? "hover:text-black/70" : "hover:text-white/80";

  // swap logo on scroll (change dark logo path to yours)
  const logoSrc = isDark
    ? "/images/wordmark-logo-dark.png"
    : "/images/wordmark-logo.png";

  return (
    <>
      <nav
        className={[
          "flex items-center justify-between px-6 py-5 transition-all duration-300",
          navClasses,
          iconColor,
        ].join(" ")}
      >
        {/* Left */}
        <div className="flex items-center gap-6">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={`transition-colors duration-200 ${iconHover}`}
          >
            <Menu className="h-6 w-6" />
          </button>

          <button
            aria-label="Search"
            className={`transition-colors duration-200 ${iconHover}`}
          >
            <Search className="h-6 w-6" />
          </button>
        </div>

        {/* Center */}
        <Link href="/" aria-label="Go to homepage" className="shrink-0">
          <Image
            src={logoSrc}
            alt="Logo"
            width={120}
            height={80}
            priority
            className="h-auto w-27.5"
          />
        </Link>

        {/* Right */}
        <div className="flex items-center gap-6">
          <button
            aria-label="User profile"
            className={`transition-colors duration-200 ${iconHover}`}
          >
            <UserRound className="h-6 w-6" />
          </button>

          <button
            aria-label="Shopping cart"
            className={`transition-colors duration-200 ${iconHover}`}
          >
            <ShoppingCart className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
