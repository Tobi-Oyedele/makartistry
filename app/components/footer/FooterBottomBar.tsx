import Link from "next/link";
import { Copyright } from "lucide-react";

const FooterBottom = () => {
  return (
    <div className="w-full bg-secondary px-4 sm:px-6 md:px-8 py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-xs sm:text-sm md:flex-row md:justify-between md:gap-0">
        <div className="flex items-center gap-2 text-center md:text-left">
          <Copyright className="w-4" />
          <span>2026 Mak Artistry. All Rights Reserved.</span>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 text-center md:justify-end">
          <li>
            <Link href="/privacy-policy" className="transition hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/shipping-policy"
              className="transition hover:underline"
            >
              Shipping Policy
            </Link>
          </li>
          <li>
            <Link
              href="/terms-of-service"
              className="transition hover:underline"
            >
              Terms of Use
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;
