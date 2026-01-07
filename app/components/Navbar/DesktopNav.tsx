"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, UserRound, ShoppingCart } from "lucide-react";
import NavDropdown from "./NavDropDown";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="relative flex items-center justify-between px-8 py-4 text-white border-b">
      {/* Logo */}
      <Link href="/">
        <Image src="/images/nav-logo.svg" alt="Logo" width={170} height={80} />
      </Link>

      {/* Links */}
      <div className="flex gap-8">
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
        />

        <Link href="/inspired">Get Inspired</Link>

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
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <Search className="h-5 w-5 cursor-pointer" />
        <UserRound className="h-5 w-5 cursor-pointer" />
        <ShoppingCart className="h-5 w-5 cursor-pointer" />
      </div>
    </nav>
  );
}
