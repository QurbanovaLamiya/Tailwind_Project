import { HiMenuAlt1 } from "react-icons/hi";
import { navLinks } from "../../constant/Path";
import NavLink from "../NavLink";

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-20">
      <div>
        <div className="container mx-auto flex items-center justify-between py-4 px-2">
          <div className="flex items-center gap-4">
            <HiMenuAlt1 className="text-3xl cursor-pointer sm:hidden" />
            <span className="text-xl text-Teal uppercase font-bold tracking-wide">
              Skillex
            </span>
          </div>
          <nav className="sm:flex items-center hidden">
            {navLinks.map((path) => (
              <NavLink key={path.id} {...path} />
            ))}
          </nav>
          <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
