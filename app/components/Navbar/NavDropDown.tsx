"use client";

import { useState } from "react";

export default function NavDropdown({
  label,
  links,
}: {
  label: string;
  links: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button>{label}</button>

      {open && (
        <div className="absolute top-full mt-4 rounded-xl bg-white/90 backdrop-blur-lg text-black p-4">
          {links.map((link) => (
            <a key={link} className="block py-1">
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
