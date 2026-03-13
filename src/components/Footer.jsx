import { Link } from "react-router-dom";
import navLogo from "../assets/navLogo.svg";

const Footer = () => {
  return (
    <footer className="border-t mt-16 px-10 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-600">
        <div>
          <img src={navLogo} alt="Mind Naira Logo" className="h-8 mb-3" />
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <p>Blog</p>
          <p>Careers</p>
          <p>Pricing</p>
          <Link to="/contact" className="block hover:text-teal-700 transition">
            Contact
          </Link>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <p>Documentation</p>
          <p>Papers</p>
          <p>Press Conferences</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies Policy</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-10">© 2025 MindNaira</p>
    </footer>
  );
};

export default Footer;
