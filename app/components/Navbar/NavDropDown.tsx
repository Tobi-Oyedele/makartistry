"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useRef, useEffect } from "react";

type NavDropdownProps = {
  label: string;
  links: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  isDark?: boolean; // <-- NEW: true when scrolled (dark text theme)
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function NavDropdown({
  label,
  links,
  isOpen,
  onToggle,
  onClose,
  isDark = false,
}: NavDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, isOpen]);

  const triggerHover = isDark ? "hover:text-black/70" : "hover:text-white/80";

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (isOpen) {
            onClose();
          } else {
            onToggle();
          }
        }}
        className={cn(
          "flex items-center gap-1 uppercase text-sm cursor-pointer transition-colors duration-200",
          triggerHover
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "absolute left-0 top-full mt-4 w-56 rounded-xl p-2 shadow-lg",
            "backdrop-blur-xl border",
            // Panel styling
            isDark
              ? "bg-white/90 text-eerie-black border-black/10"
              : "bg-white/95 text-eerie-black border-black/10"
          )}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className={cn(
                "block rounded-lg px-3 py-2 text-sm transition",
                "hover:bg-black/5"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
