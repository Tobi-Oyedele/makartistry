"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/default-slide-1.png",
  "/images/default-slide-2.png",
  "/images/default-slide-3.webp",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden ">
      {images.map((img, i) => (
        <Image
          key={img}
          src={img}
          alt={`Hero image ${i + 1}`}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}
    </div>
  );
}
