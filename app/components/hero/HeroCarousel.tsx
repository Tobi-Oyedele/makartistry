"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/home/default-slide-1.png",
  "/images/home/default-slide-2.png",
  "/images/home/default-slide-3.webp",
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
    <div className="relative w-full h-[75vh] overflow-hidden">
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      {/* Text content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl text-secondary">
          <h1 className="text-3xl md:text-5xl lg:text-6xl">
            Crafting memories
          </h1>
          <h3 className="text-xl md:text-4xl">
            telling stories through everyday art
          </h3>
          <p className="mt-2 text-sm md:text-lg">
            Create digital designs and print art for your brand, event and
            lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}
