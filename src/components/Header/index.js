import { useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { navLinks } from "../../constant/Path";
import MobileNavbar from "../MobileNavbar";
import NavLink from "../NavLink";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-Solitude fixed w-full top-0 left-0 z-20">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-4">
          <HiMenuAlt1
            className="text-3xl cursor-pointer sm:hidden"
            onClick={() => setToggle((prev) => !prev)}
          />
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
        {toggle && (
          <div className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col items-center justify-center shadow-lg gap-8 py-8">
            {navLinks.map((path) => (
              <MobileNavbar key={path.id} {...path} setToggle={setToggle} />
            ))}
            <HiX
              className="absolute right-12 top-12 text-3xl cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
