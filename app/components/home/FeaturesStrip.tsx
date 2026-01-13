import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  iconSrc: string;
};

const features: Feature[] = [
  {
    title: "Flexible Order Quantities",
    description:
      "Tailored to your needs, minimum order quantities providing what you need, whether its a single item or small batch",
    iconSrc: "/images/icons/foq.svg",
  },
  {
    title: "Custom Mode",
    description:
      "One of a kind custom items that reflects your unique style, all items can come in custom sizes",
    iconSrc: "/images/icons/custom.svg",
  },
  {
    title: "Creativity",
    description:
      "Discover the beauty of art and the power of thoughtful design. Each creation embody the beauty of self-expression",
    iconSrc: "/images/icons/creativity.svg",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="w-full bg-eerie-black py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-10 w-10 md:h-12 md:w-12">
                <Image
                  src={f.iconSrc}
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <h3 className="mt-4 text-base md:text-lg font-medium text-white">
                {f.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
