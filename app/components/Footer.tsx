"use client";

import React, { useState } from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Copyright,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    // Add your subscription logic here
  };

  return (
    <footer className="relative bg-eerie-black overflow-hidden">
      {/* Background SVG Effect */}
      <div className="absolute top-0 w-full h-full z-0 blur-xl mix-blend-exclusion opacity-50">
        <svg
          className="w-full h-full scale-200 mix-blend-color-dodge"
          fill="none"
          stroke="#222121"
          viewBox="0 0 268 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 145.827C40.5 47.8272 55.5 8.49435 75.5 4.32712C88 0.327399 102.5 34.3273 102.5 34.3273C118.5 66.8274 135.292 113.661 135.5 114.327C139.5 125.327 145.5 136.827 145.5 136.827C153 150.827 162.5 150.827 164.5 150.827C165.5 150.827 175.5 151.827 188.5 131.827C204 105.827 202.5 98.3274 218.499 54.3236C218.499 54.3236 223.467 37.9793 231 37.8274C235.457 37.7375 238.5 43.3274 238.5 43.3274C245 53.3274 253.821 73.8274 259.499 104.824C262.223 119.694 265 132.827 263.5 143.327C263.5 143.327 263 153.827 256.999 154.824C254.5 155.239 249.501 153.831 243 143.327C233 125.827 223.5 75.3274 223.5 75.3274C223.5 75.3274 219.477 52.7097 212.5 38.3274C212.5 38.3274 205.5 21.3274 193.5 21.3274C188 21.3274 181.5 26.8274 177.5 36.3274C168.5 54.3274 158 90.3274 149.5 114.327C142.5 136.827 133.999 145.827 133.999 145.827C133.999 145.827 122 162.602 111.5 151.327C100 139.827 98 114.827 89.9999 89.8269C85.7227 78.1359 83 76.3656 79.5 75.8274C73.0001 74.8279 64 88.8274 64 88.8274C59 94.2819 40.9988 126.327 27.4999 154.827C21.4988 164.827 16.5 173.827 7.5 175.327C5.00013 175.327 4 173.327 4 166.827C4 159.827 8 145.827 8 145.827Z"
            strokeLinecap="round"
            strokeWidth="8"
          />
        </svg>
      </div>

      <div className="w-full max-w-7xl px-4 md:px-8 py-12 relative z-20">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Left Column - Logo, Newsletter, Social */}
          <div className="flex flex-col items-start gap-4 lg:max-w-md">
            <Link href="/">
              <Image
                src="/images/nav-logo.svg"
                alt="Mak Artistry logo"
                width={200}
                height={40}
              />
            </Link>
            <p className="font-normal w-full md:w-80 md:text-start text-secondary text-sm leading-5">
              Subscribe to our newsletter. Be the first to know about exclusive
              offers
            </p>

            <div className="w-full lg:w-80 mx-0 my-2">
              <label
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
                htmlFor="subscribe"
              >
                Subscribe
              </label>
              <div className="flex">
                <input
                  id="subscribe"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2 font-normal text-sm text-gray-100 border-0 border-b border-gray-100 bg-eerie-black bg-opacity-10 focus:ring-pink-300 focus:border-purple-300 focus:ring-0 placeholder:text-gray-400"
                  placeholder="Email Address"
                />
                <button
                  onClick={handleSubmit}
                  className="text-gray-900 bg-secondary hover:bg-yellow-100 hover:text-gray-900 focus:ring-2 focus:outline-none focus:ring-pink-300 font-medium rounded-none rounded-e-sm text-sm px-4 py-2 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p
                className="mt-2 text-xs font-normal text-gray-400"
                id="helper-text-explanation"
              >
                We&apos;ll never share your details. Read our{" "}
                <a
                  className="font-medium text-secondary hover:scale-95 transition-all duration-75 hover:underline"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </p>
            </div>

            <div className="flex items-start gap-4 mx-0">
              <a
                className="flex justify-center items-center size-8 text-gray-100 hover:text-yellow-100 transition duration-500 ease-in-out"
                href="https://www.instagram.com/mak.artistry/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a
                className="flex justify-center items-center size-8 text-gray-100 hover:text-yellow-100 transition duration-500 ease-in-out"
                href="https://x.com/mak_artistry?s=11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </a>
              <a
                className="flex justify-center items-center size-8 text-gray-100 hover:text-yellow-100 transition duration-500 ease-in-out"
                href="https://facebook.com/makartistryco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
              <a
                className="flex justify-center items-center size-8 text-gray-100 hover:text-yellow-100 transition duration-500 ease-in-out"
                href="https://www.tiktok.com/@mak.artistry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                className="flex justify-center items-center size-8 text-gray-100 hover:text-yellow-100 transition duration-500 ease-in-out"
                href="https://www.pinterest.com/makartistry/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2 10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41.86 0 1.26.63 1.26 1.44 0 .86-.57 2.09-.86 3.27-.17.98.52 1.84 1.52 1.84 1.78 0 3.16-1.9 3.16-4.58 0-2.4-1.72-4.04-4.19-4.04-2.82 0-4.48 2.1-4.48 4.31 0 .86.28 1.73.74 2.3.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11-1.28-.56-2.02-2.38-2.02-3.85 0-3.16 2.24-6.03 6.56-6.03 3.44 0 6.12 2.47 6.12 5.75 0 3.44-2.13 6.2-5.18 6.2-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="grid grid-cols-1 gap-6 lg:col-span-3 lg:grid-cols-3 lg:max-w-2xl">
            {/* Browse Section */}
            <div className="flex flex-col items-start gap-2 flex-initial w-full">
              <h2 className="mb-0 md:mb-2 xl:mb-4 font-semibold text-base md:text-lg text-champagne uppercase">
                Browse
              </h2>
              <ul className="flex flex-col text-secondary font-normal gap-1.5 text-xs md:text-sm">
                <li className="hover:scale-95 transition-all duration-500 ease-out">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:scale-95 transition-all duration-500 ease-out">
                  <Link href="/get-inspired">Get Inspired</Link>
                </li>
                <li className="hover:scale-95 transition-all duration-500 ease-out">
                  <Link href="/our-story">Our Story</Link>
                </li>
                <li className="hover:scale-95 transition-all duration-500 ease-out">
                  <Link href="/inside-our-mind">Inside Our Mind</Link>
                </li>
                <li className="hover:scale-95 transition-all duration-500 ease-out">
                  <Link href="/faq">FAQs</Link>
                </li>
                <li className="hover:scale-95 transition-all duration-500 ease-out">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col items-start gap-2 flex-initial">
              <h2 className="mb-0 md:mb-2 xl:mb-4 font-semibold text-base md:text-lg text-champagne uppercase">
                Contact Us
              </h2>
              <div className="flex flex-col gap-2 font-normal text-xs md:text-sm">
                <p className="self-stretch text-secondary text-sm">
                  Feel free to get in touch with us
                </p>
                <ul className="flex flex-col gap-1.5 text-sm text-secondary">
                  <li className="hover:scale-95 transition-all duration-500 ease-out">
                    <a
                      className="text-xs flex flex-row items-center gap-2 decoration-inherit decoration-1 underline-offset-4 hover:underline transition duration-500 ease-in-out"
                      href="https://www.google.com/maps/place/3+Residence+Rd,+Gbagada,+Lagos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-5 h-5" />3 Residence Rd, Gbagada
                      Lagos, Nigeria
                    </a>
                  </li>
                  <li className="hover:scale-95 transition-all duration-500 ease-out">
                    <a
                      className="text-xs flex flex-row items-center gap-2 decoration-inherit decoration-1 underline-offset-4 hover:underline transition duration-500 ease-in-out"
                      href="tel:+2347069356045"
                    >
                      <Phone className="w-5 h-5" />
                      +234 706 935 6045
                    </a>
                  </li>
                  <li className="hover:scale-95 transition-all duration-500 ease-out">
                    <a
                      className="text-xs flex flex-row items-center gap-2 decoration-inherit decoration-1 underline-offset-4 hover:underline transition duration-500 ease-in-out"
                      href="mailto:hello@makartistry.com"
                    >
                      <Mail className="w-5 h-5" />
                      hello@makartistry.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Shop Section */}
            <div className="flex flex-col items-start gap-2 w-full">
              <h2 className="mb-0 md:mb-2 xl:mb-4 font-semibold text-base md:text-lg text-champagne uppercase">
                Shop
              </h2>
              <ul className="flex flex-col text-secondary font-normal gap-1.5 text-xs md:text-sm">
                <li className="hover:scale-95 transition-all duration-500 ease-out">
                  <Link href="/get-a-quote">Get a Quote</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative flex w-full h-16 bg-champagne px-8 z-20 items-center">
        <div className="flex flex-wrap flex-col gap-2 md:flex-row justify-normal md:justify-between items-center w-full text-center font-sans text-xs md:text-sm font-medium lg:text-md">
          <div className="flex gap-1 md:gap-3 items-center order-last md:order-first">
            <Copyright className="w-4 md:w-5" />
            2026 Mak Artistry. All Rights Reserved.
          </div>
          <ul className="flex flex-row sm:content-center sm:items-center list-none text-gray-900">
            <li className="text-inherit after:content-['|'] after:mx-0.5 sm:after:mx-2 after:text-gray-900 hover:scale-95 transition-all duration-500 ease-out">
              <a
                className="text-inherit hover:text-purple-500 focus:text-purple-700 hover:scale-95 transition-all duration-500 ease-out"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </li>
            <li className="text-inherit after:content-['|'] after:mx-0.5 sm:after:mx-2 after:text-gray-900 hover:scale-95 transition-all duration-500 ease-out">
              <a
                className="text-inherit hover:text-purple-500 focus:text-purple-700 hover:scale-95 transition-all duration-500 ease-out"
                href="/shipping-policy"
              >
                Shipping Policy
              </a>
            </li>
            <li className="text-inherit hover:scale-95 transition-all duration-500 ease-out">
              <a
                className="hover:text-purple-500 focus:text-purple-700 hover:scale-95 transition-all duration-500 ease-out"
                href="/terms-of-service"
              >
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
