// components/hero/Hero.tsx
import HeroCarousel from "./HeroCarousel";
import Navbar from "../Navbar/NavBar";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      <HeroCarousel />

      {/* Overlay content */}
      <Navbar />
    </section>
  );
}
