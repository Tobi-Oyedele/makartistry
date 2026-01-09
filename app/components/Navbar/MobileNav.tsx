"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { UserRound, Search, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-5 text-white">
        {/* Left */}
        <div className="flex items-center gap-6">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="hover:opacity-80 transition"
          >
            <Menu />
          </button>

          <button aria-label="Search" className="hover:opacity-80 transition">
            <Search />
          </button>
        </div>

        {/* Center */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/images/wordmark-logo.png"
            alt="Logo"
            width={120}
            height={80}
            priority
          />
        </Link>

        {/* Right */}
        <div className="flex items-center gap-6">
          <button
            aria-label="User profile"
            className="hover:opacity-80 transition"
          >
            <UserRound />
          </button>

          <button
            aria-label="Shopping cart"
            className="hover:opacity-80 transition"
          >
            <ShoppingCart />
          </button>
        </div>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
