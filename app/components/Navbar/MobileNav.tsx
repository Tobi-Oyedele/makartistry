import { Search, Menu, User, ShoppingCart } from "lucide-react";
import Image from "next/image";

const MobileNav = () => {
  return (
    <nav className="h-20 flex items-center justify-between px-4">
      <div className="flex gap-3">
        <Menu />
        <Search />
      </div>

      <div>
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="flex gap-3">
        <User />
        <ShoppingCart />
      </div>
    </nav>
  );
};

export default MobileNav;
