import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import navLogo from "../assets/navLogo.svg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact" },
  { to: "/budget-template", label: "Budget Template" },
  { to: "/money-mindset", label: "Money Mindset" },
  { to: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="px-4 md:px-10 py-3.5 flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="shrink-0">
          <img src={navLogo} alt="Mind Naira Logo" className="h-9" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`px-3 py-2 rounded-md transition-all duration-200 ${
                  pathname === link.to
                    ? "text-teal-700 bg-teal-50 font-semibold"
                    : "text-gray-600 hover:text-teal-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/services"
          className="hidden md:inline-flex items-center gap-1.5 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:scale-[1.02] shadow-sm"
          style={{ background: "linear-gradient(135deg, #006A71, #004652)" }}
        >
          Get Started
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-4 flex flex-col gap-1 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.to
                  ? "text-teal-700 bg-teal-50 font-semibold"
                  : "text-gray-600 hover:text-teal-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="text-white text-center px-4 py-3 rounded-lg mt-2 font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #006A71, #004652)" }}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
