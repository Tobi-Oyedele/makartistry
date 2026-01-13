import Image from "next/image";
import Link from "next/link";

export type Product = {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  imageSrc: string;
  featured?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ProductCardProps = {
  product: Product;
  className?: string;
};

const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <article
      className={cn(
        "group h-full overflow-hidden border border-black/10 bg-white shadow-sm transition",
        "hover:-translate-y-0.5 hover:shadow-md",
        product.featured && "bg-secondary",
        className
      )}
    >
      <div className="relative aspect-6/5 w-full bg-black/5">
        <Image
          src={product.imageSrc}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 90vw"
          priority={product.featured}
        />
      </div>

      <div className="p-5 text-center">
        <h3 className="text-base font-medium text-eerie-black">
          {product.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-eerie-black/70">
          {product.description}
        </p>

        <div className="mt-4 flex justify-center">
          <Link
            href={product.href}
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-md",
              "border border-black/50 px-4 py-2 text-sm text-eerie-black",
              "transition hover:bg-black hover:text-white"
            )}
          >
            {product.ctaLabel}
            <span
              aria-hidden
              className="transition group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
