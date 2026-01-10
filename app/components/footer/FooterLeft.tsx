"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FooterNewsletter from "./FooterNewsletter";
import SocialLinks from "./SocialLinks";

const FooterLeft = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
  };

  return (
    <div className="flex flex-col items-start gap-4 lg:max-w-md">
      <Link href="/">
        <Image
          src="/images/nav-logo.svg"
          alt="Mak Artistry logo"
          width={200}
          height={40}
        />
      </Link>

      <p className="font-normal w-full md:w-80 text-secondary text-sm leading-5">
        Subscribe to our newsletter. Be the first to know about exclusive offers
      </p>

      <FooterNewsletter
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}
      />

      <SocialLinks />
    </div>
  );
};

export default FooterLeft;
