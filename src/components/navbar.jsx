import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../public/Logo.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="relative z-10 flex items-center justify-between py-4 px-4 md:px-8">
      {/* Logo */}
      <Link
        to="#"
        className="flex items-center gap-2 text-[32px] md:text-[43.25px] text-white font-bold"
      >
        <img src={Logo} alt="Logo" className="w-8 h-8 md:w-auto md:h-auto" />
        Boldo
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center space-x-10">
        <ul className="flex space-x-10">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold"
                    : "text-base text-white font-semibold hover:text-gray-200 transition-colors duration-75"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="text-base font-bold bg-white text-[rgba(10,38,64,1)] px-10 py-2 whitespace-nowrap items-center font-sans rounded-4xl transition-all duration-200 hover:bg-gray-100 hover:shadow-md">
          Log In
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 focus:outline-none"
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[rgba(10,38,64,1)] shadow-lg md:hidden">
          <ul className="flex flex-col items-center py-6 space-y-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold"
                      : "text-base text-white font-semibold hover:text-gray-200 transition-colors duration-75"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <button
              onClick={() => setMenuOpen(false)}
              className="text-base font-bold bg-white text-[rgba(10,38,64,1)] px-8 py-2 rounded-4xl transition-all duration-200 hover:bg-gray-100 hover:shadow-md"
            >
              Log In
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}