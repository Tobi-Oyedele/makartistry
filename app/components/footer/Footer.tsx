"use client";

import FooterBackground from "./BackgroundEffect";
import FooterMain from "./FooterMain";
import FooterBottomBar from "./FooterBottomBar";

const Footer = () => {
  return (
    <footer className="relative bg-eerie-black overflow-hidden">
      <FooterBackground />
      <FooterMain />
      <FooterBottomBar />
    </footer>
  );
};

export default Footer;
