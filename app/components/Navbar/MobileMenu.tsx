"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, X } from "lucide-react";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [shopOpen, setShopOpen] = useState(false);

  // Reset dropdown when menu closes
  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => setShopOpen(false), 0);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-40 flex transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Menu panel */}
      <div
        className={`
          h-screen w-3/4 max-w-sm bg-linear-to-b from-gray-200 via-gray-100 to-white p-6 overflow-y-auto
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" aria-label="Go to homepage" onClick={onClose}>
            <Image
              src="/images/wordmark-logo-dark.png"
              alt="Logo"
              width={120}
              height={80}
              priority
            />
          </Link>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-1 hover:bg-black/5 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Links */}
        <ul className="space-y-5 text-eerie-black uppercase">
          {/* Shop dropdown */}
          <li>
            <button
              onClick={() => setShopOpen((prev) => !prev)}
              className="flex w-full items-center gap-2 text-left"
            >
              <span className="uppercase">Shop</span>
              {shopOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {shopOpen && (
              <ul className="mt-3 space-y-2 pl-4 text-sm">
                <li>
                  <Link href="/shop/link-1" onClick={onClose}>
                    Link 1
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Normal links */}
          <li>
            <Link href="/get-inspired" onClick={onClose}>
              Get Inspired
            </Link>
          </li>
          <li>
            <Link href="/our-story" onClick={onClose}>
              Our Story
            </Link>
          </li>
          <li>
            <Link href="/inside-our-mind" onClick={onClose}>
              Inside Our Mind
            </Link>
          </li>
          <li>
            <Link href="/faq" onClick={onClose}>
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={onClose}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      <div
        onClick={onClose}
        className="flex-1 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
      />
    </div>
  );
}
