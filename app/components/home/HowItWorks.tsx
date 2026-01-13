import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="w-full overflow-hidden bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center space-y-3 md:space-y-4">
          <h2 className="text-balance font-[475] md:font-[450] text-2xl lg:text-4xl tracking-tight text-eerie-black">
            How it Works in 4 Easy Steps
          </h2>

          <p className="text-pretty text-sm lg:text-lg leading-relaxed text-eerie-black/70">
            Carefully curated handcrafted just for you. Choose from a diverse
            range of options for each item, making it effortless to curate art
            pieces that speak volumes.
          </p>
        </div>

        <div className="mt-10 md:mt-12 lg:mt-14">
          {/* Desktop */}
          <Image
            src="/images/home/how-it-works1.svg"
            alt="How it works steps illustration"
            width={1200}
            height={750}
            sizes="(min-width: 1024px) 960px, (min-width: 768px) 90vw, 100vw"
            className="hidden md:block mx-auto h-auto w-full max-w-5xl"
            priority
          />

          {/* Mobile */}
          <Image
            src="/images/home/how-it-works2.svg"
            alt="How it works steps illustration"
            width={900}
            height={900}
            sizes="100vw"
            className="md:hidden mx-auto h-auto w-full max-w-md sm:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
