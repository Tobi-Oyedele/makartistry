"use client";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white">
      <div className="md:hidden">
        <MobileNav isScrolled={isScrolled} />
      </div>

      <div className="hidden md:block">
        <DesktopNav isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default NavBar;
