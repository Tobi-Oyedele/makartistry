"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, UserRound, ShoppingCart } from "lucide-react";
import NavDropdown from "./NavDropDown";

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isDark = isScrolled;

  const navClasses = isScrolled
    ? "bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
    : "bg-transparent border-b border-white/20";

  const textClasses = isDark ? "text-eerie-black" : "text-white";
  const linkBase =
    "uppercase text-sm tracking-wide transition-colors duration-200";
  const linkHover = isDark ? "hover:text-black/70" : "hover:text-white/70";

  const logoSrc = isDark
    ? "/images/home/nav-logo-dark.svg"
    : "/images/home/nav-logo.svg";

  return (
    <nav
      className={[
        "relative z-50 flex items-center justify-between px-8 py-3 transition-all duration-300",
        navClasses,
        textClasses,
      ].join(" ")}
    >
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image
          src={logoSrc}
          alt="Mak Artistry Logo"
          width={170}
          height={80}
          className="h-auto w-37.5 lg:w-42.5"
          priority
        />
      </Link>

      {/* Links */}
      <div className="flex items-center gap-8">
        <NavDropdown
          label="Shop"
          links={[
            { label: "Link 1", href: "/shop/link-1" },
            { label: "Link 2", href: "/shop/link-2" },
            { label: "Link 3", href: "/shop/link-3" },
          ]}
          isOpen={openDropdown === "Shop"}
          onToggle={() =>
            setOpenDropdown(openDropdown === "Shop" ? null : "Shop")
          }
          onClose={() => setOpenDropdown(null)}
          isDark={isDark}
        />

        <Link href="/get-inspired" className={`${linkBase} ${linkHover}`}>
          Get Inspired
        </Link>

        <NavDropdown
          label="About Us"
          links={[
            { label: "Our Story", href: "/our-story" },
            { label: "Inside Our Mind", href: "/inside-our-mind" },
            { label: "FAQ", href: "/faq" },
            { label: "Contact Us", href: "/contact-us" },
          ]}
          isOpen={openDropdown === "About Us"}
          onToggle={() =>
            setOpenDropdown(openDropdown === "About Us" ? null : "About Us")
          }
          onClose={() => setOpenDropdown(null)}
          isDark={isDark}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <button
          aria-label="Search"
          className={`transition-colors duration-200 ${linkHover}`}
        >
          <Search className="h-5 w-5" />
        </button>

        <button
          aria-label="Account"
          className={`transition-colors duration-200 ${linkHover}`}
        >
          <UserRound className="h-5 w-5" />
        </button>

        <button
          aria-label="Shopping cart"
          className={`transition-colors duration-200 ${linkHover}`}
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}
