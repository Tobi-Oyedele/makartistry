import Image from "next/image";

export default function PageHero({
  image,
  title,
}: {
  image: string;
  title?: string;
}) {
  return (
    <section className="relative h-[60vh] w-full">
      <Image
        src={image}
        alt={title ?? "Page hero"}
        fill
        className="object-cover"
        priority
      />

      {title && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">{title}</h1>
        </div>
      )}
    </section>
  );
}
