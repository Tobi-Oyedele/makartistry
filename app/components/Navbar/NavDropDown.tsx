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
};

export default function NavDropdown({
  label,
  links,
  isOpen,
  onToggle,
  onClose,
}: NavDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    // Only add listener when dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, isOpen]);

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
        className="flex items-center gap-1"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            absolute left-0 top-full
            mt-6
            rounded-b-xl
            bg-white/90 backdrop-blur-lg
            uppercase text-black
            p-4 shadow-lg
          "
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-1 hover:opacity-70"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
