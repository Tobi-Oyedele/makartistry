import { Instagram, Twitter, Facebook } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex items-start gap-4">
      <a href="https://www.instagram.com/mak.artistry/" target="_blank">
        <Instagram size={24} />
      </a>
      <a href="https://x.com/mak_artistry?s=11" target="_blank">
        <Twitter size={24} />
      </a>
      <a href="https://facebook.com/makartistryco" target="_blank">
        <Facebook size={24} />
      </a>
      {/* TikTok + Pinterest SVGs stay here */}
    </div>
  );
};

export default SocialLinks;
