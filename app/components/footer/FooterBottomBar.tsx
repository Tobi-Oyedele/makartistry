import { Copyright } from "lucide-react";
import Link from "next/link";

const FooterBottomBar = () => {
  return (
    <div className="flex w-full h-16 bg-secondary px-8 items-center">
      <div className="flex justify-between w-full text-xs md:text-sm">
        <div className="flex gap-2 items-center">
          <Copyright className="w-4" />
          2026 Mak Artistry. All Rights Reserved.
        </div>

        <ul className="flex gap-4">
          <li className="cursor-pointer">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/shipping-policy">Shipping Policy</Link>
          </li>
          <li>
            <Link href="/terms-of-service">Terms of Use</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBottomBar;
