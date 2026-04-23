import { Link } from "react-router-dom";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import navLogo from "../assets/navLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Brand */}
          <div>
            <Link to="/">
              <img
                src={navLogo}
                alt="Mind Naira Logo"
                className="h-8 mb-4 brightness-0 invert"
              />
            </Link>
            <p className="text-gray-500 leading-relaxed mb-5 max-w-xs">
              Nigeria's premier platform for practical, locally relevant
              financial education.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <Twitter size={14} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/about"
                  className="hover:text-teal-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <span className="text-gray-600">Blog</span>
              </li>
              <li>
                <span className="text-gray-600">Careers</span>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-teal-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/budget-template"
                  className="hover:text-teal-400 transition-colors"
                >
                  5 Minute Budget Template
                </Link>
              </li>
              <li>
                <Link
                  to="/money-mindset"
                  className="hover:text-teal-400 transition-colors"
                >
                  Money Mindset Quiz
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-teal-400 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-teal-400 transition-colors"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-teal-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-teal-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies-policy"
                  className="hover:text-teal-400 transition-colors"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="hover:text-teal-400 transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
            <a
              href="mailto:hello@mindthenaira.com"
              className="flex items-center gap-2 text-gray-500 hover:text-teal-400 transition-colors text-xs"
            >
              <Mail size={13} /> hello@mindthenaira.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 px-6 md:px-12 lg:px-24 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <p>© 2025 Mind the Naira. All rights reserved.</p>
          <p>Built for Nigeria 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
