import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <header className="absolute top-0 left-0 z-30 w-full">
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
