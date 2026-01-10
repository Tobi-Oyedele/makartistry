import FooterLinkGroup from "./FooterLinkGroup";
import FooterContact from "./FooterContact";
const FooterRight = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:max-w-2xl">
      <FooterLinkGroup
        title="Browse"
        links={[
          { label: "Home", href: "/" },
          { label: "Get Inspired", href: "/get-inspired" },
          { label: "Our Story", href: "/our-story" },
          { label: "Inside Our Mind", href: "/inside-our-mind" },
          { label: "FAQs", href: "/faq" },
          { label: "Contact Us", href: "/contact-us" },
        ]}
      />

      <FooterContact />

      <FooterLinkGroup
        title="Shop"
        links={[{ label: "Get a Quote", href: "/get-a-quote" }]}
      />
    </div>
  );
};

export default FooterRight;
