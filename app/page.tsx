import Hero from "./components/hero/Hero";
import FeaturesStrip from "./components/home/FeaturesStrip";
import HowItWorks from "./components/home/HowItWorks";
import OurProducts from "./components/home/OurProducts";

const page = () => {
  return (
    <div>
      <Hero />
      <OurProducts />
      <FeaturesStrip />
      <HowItWorks />
    </div>
  );
};

export default page;
