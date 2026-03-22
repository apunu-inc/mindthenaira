import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import BudgetDownload from "./pages/BudgetDownload";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import Privacy from "./pages/Privacy";
import CookiesPolicy from "./pages/CookiesPolicy";
import Disclaimer from "./pages/Disclaimer";
import MoneyMindset from "./pages/MoneyMindset";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/budget-download" element={<BudgetDownload />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/money-mindset" element={<MoneyMindset />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
