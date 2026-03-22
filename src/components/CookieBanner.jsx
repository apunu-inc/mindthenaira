import { useState } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem("cookiesAccepted"),
  );

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg px-6 py-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          This website uses cookies to ensure the site works properly and to
          improve your experience. By continuing to browse the site, you agree
          to our use of cookies.
        </p>
        <div className="flex gap-3 shrink-0">
          <Link
            to="/cookies-policy"
            className="text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-gray-700 transition"
          >
            Learn More
          </Link>
          <button
            onClick={handleAccept}
            className="text-sm px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
