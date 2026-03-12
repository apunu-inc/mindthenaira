import { Link } from "react-router-dom";
import navLogo from "../assets/navLogo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b">
      <div>
        <img src={navLogo} alt="Mind Naira Logo" className="h-8" />
      </div>

      <ul className="flex items-center gap-8 text-gray-600">
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

      <Link
        to="/budget-download"
        className="text-white px-4 py-2 rounded-md"
        style={{ background: "linear-gradient(to right, #006A71, #004652)" }}
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
