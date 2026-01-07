"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { UserRound, Search, Menu, ShoppingCart } from "lucide-react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between px-6 py-5 text-white">
        <Menu onClick={() => setOpen(true)} />
        <UserRound />
        <ShoppingCart />
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
