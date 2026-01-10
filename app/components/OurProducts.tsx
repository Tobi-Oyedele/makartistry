import Image from "next/image";

const OurProducts = () => {
  return (
    <section className="w-full h-min overflow-hidden bg-secondary">
      <div className="flex flex-col justify-center items-center gap-12 w-full mx-auto my-12 md:my-16 lg:my-20 px-4 md:px-8 lg:px-16 relative z-10">
        <h2 className="font-[475] md:font-[450] text-2xl md:text-3xl lg:text-4xl text-eerie-black leading-none tracking-normal lg:tracking-tight">
          Our Products
        </h2>

        <Image
          src="/images/our-products1.svg"
          alt="Our Products"
          width={800}
          height={600}
          className="w-full h-auto max-w-4xl hidden md:block"
        />

        <Image
          src="/images/our-products2.svg"
          alt="Our Products"
          width={800}
          height={600}
          className="w-full h-auto max-w-4xl md:hidden"
        />
      </div>
    </section>
  );
};

export default OurProducts;
