import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white">
      <div className="md:hidden">
        <MobileNav />
      </div>

      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </header>
  );
};

export default NavBar;
