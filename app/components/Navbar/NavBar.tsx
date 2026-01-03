import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <div>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </div>
  );
};

export default NavBar;
