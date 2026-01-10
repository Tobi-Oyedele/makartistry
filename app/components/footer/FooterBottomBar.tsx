import { Copyright } from "lucide-react";

const FooterBottomBar = () => {
  return (
    <div className="flex w-full h-16 bg-champagne px-8 items-center">
      <div className="flex justify-between w-full text-xs md:text-sm">
        <div className="flex gap-2 items-center">
          <Copyright className="w-4" />
          2026 Mak Artistry. All Rights Reserved.
        </div>

        <ul className="flex gap-4">
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/shipping-policy">Shipping Policy</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBottomBar;
