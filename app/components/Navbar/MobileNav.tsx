"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex lg:hidden justify-between px-6 py-5 text-white">
        <button onClick={() => setOpen(true)}>☰</button>
        <button>User</button>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
