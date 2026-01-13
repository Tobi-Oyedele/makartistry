import ProductCard, { type Product } from "./ProductCard";

const products: Product[] = [
  {
    title: "Journals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi.",
    ctaLabel: "Learn More",
    href: "/products/journals",
    imageSrc: "/images/home/our-products-4.png",
  },
  {
    title: "Cards & Prints",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi.",
    ctaLabel: "Learn More",
    href: "/products/cards-prints",
    imageSrc: "/images/home/our-products-3.png",
  },
  {
    title: "Packaging Boxes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi.",
    ctaLabel: "Customize",
    href: "/products/packaging-boxes",
    imageSrc: "/images/home/our-products-2.png",
    featured: true,
  },
  {
    title: "Digital Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi.",
    ctaLabel: "Learn More",
    href: "/products/digital-design",
    imageSrc: "/images/home/our-products-1.png",
  },
];

type OurProductsProps = {
  title?: string;
  items?: Product[];
};

const OurProducts = ({
  title = "Our Products",
  items = products,
}: OurProductsProps) => {
  return (
    <section className="w-full bg-secondary py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[475] tracking-tight text-eerie-black">
            {title}
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
