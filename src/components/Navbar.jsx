import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import navLogo from "../assets/navLogo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 md:px-10 py-4 border-b">
      <div className="flex items-center justify-between">
        <div>
          <img src={navLogo} alt="Mind Naira Logo" className="h-8" />
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/how-it-works">How It Works</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/budget-download"
          className="hidden md:block text-white px-4 py-2 rounded-md"
          style={{ background: "linear-gradient(to right, #006A71, #004652)" }}
        >
          Get Started
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-600 border-t pt-4 pb-2">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/how-it-works" onClick={() => setIsOpen(false)}>
            How It Works
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link
            to="/budget-download"
            onClick={() => setIsOpen(false)}
            className="text-white text-center px-4 py-2 rounded-md"
            style={{
              background: "linear-gradient(to right, #006A71, #004652)",
            }}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
