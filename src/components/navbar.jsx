import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

import Logo from '../../public/Logo.png'

export default function NavBar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="relative z-10 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 text-[43.25px] text-[rgba(255,255,255,1)] font-bold">
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        Boldo
      </div>

      <div className="flex justify-center items-center space-x-10">
        {/* Navigation Links */}
        <ul className="flex space-x-10">
            {navItems.map((item) => (
            <li key={item.path}>
                <NavLink
                to={item.path}
                className={({ isActive }) =>
                    isActive
                    ? "text-[rgba(255,255,255,1)] font-semibold"
                    : "text-base text-[rgba(255,255,255,1)] font-semibold hover:text-grey-700 transition-colors "
                }
                >
                {item.name}
                </NavLink>
            </li>
            ))}
        </ul>

        {/* Right-side CTA or button */}
        <div>
            <Button btnType="primary" className="text-base bg-[rgba(255,255,255,1)] text-[rgba(10,38,64,1)] hover:bg-gray-100 px-10 py-2">
                Log In
            </Button>
        </div>
      </div>
    </nav>
  );
}
