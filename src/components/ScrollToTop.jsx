import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show button after scrolling 300px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      style={{ background: "linear-gradient(135deg, #006A71, #004652)" }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
