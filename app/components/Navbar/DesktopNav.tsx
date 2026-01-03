import NavDropdown from "./NavDropDown";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center justify-between px-10 py-6 text-white">
      {/* Left */}
      <div className="flex gap-8">
        <NavDropdown
          label="Shop"
          links={["Link 1", "Link 2", "Link 3", "Link 4", "Link 5"]}
        />
        <a href="/inspired">Get Inspired</a>
        <NavDropdown
          label="About Us"
          links={["Our Story", "Inside Our Mind", "FAQ", "Contact Us"]}
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button>User</button>
        <button>Cart</button>
      </div>
    </nav>
  );
}
