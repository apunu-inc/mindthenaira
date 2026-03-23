import { Link } from "react-router-dom";
import navLogo from "../assets/navLogo.svg";

const Footer = () => {
  return (
    <footer className="border-t mt-16 px-10 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-600">
        <div>
          <Link to="/">
            <img src={navLogo} alt="Mind Naira Logo" className="h-8 mb-3" />
          </Link>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <p>Blog</p>
          <p>Careers</p>
          {/* <p>Pricing</p> */}
          <Link to="/contact" className="block hover:text-teal-700 transition">
            Contact
          </Link>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <Link
            to="/budget-download"
            className="block hover:text-teal-700 transition"
          >
            5 Minute Budget Template
          </Link>
          <Link
            to="/money-mindset"
            className="block hover:text-teal-700 transition"
          >
            Money Mindset
          </Link>
          {/* <p>Documentation</p> */}
          {/* <p>Papers</p> */}
          {/* <p>Press Conferences</p> */}
        </div>

        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <Link
            to="/terms-of-service"
            className="block hover:text-teal-700 transition"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            className="block hover:text-teal-700 transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/cookies-policy"
            className="block hover:text-teal-700 transition"
          >
            Cookies Policy
          </Link>
          <Link
            to="/disclaimer"
            className="block hover:text-teal-700 transition"
          >
            Disclaimer
          </Link>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-10">© 2025 MindNaira</p>
    </footer>
  );
};

export default Footer;
