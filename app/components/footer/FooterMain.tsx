import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const FooterMain = () => {
  return (
    <div className="w-full max-w-7xl px-4 md:px-8 py-12 relative z-20">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <FooterLeft />
        <FooterRight />
      </div>
    </div>
  );
};

export default FooterMain;
