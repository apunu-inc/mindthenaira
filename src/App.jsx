import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import BudgetTemplate from "./pages/BudgetTemplate";
import Contact from "./pages/Contact";
import Links from "./pages/Links";
import TermsOfService from "./pages/TermsOfService";
import Privacy from "./pages/Privacy";
import CookiesPolicy from "./pages/CookiesPolicy";
import Disclaimer from "./pages/Disclaimer";
import MoneyMindset from "./pages/MoneyMindset";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import HowToSaveN50K from "./pages/blog/HowToSaveN50K";
import UnhingedExpenses from "./pages/blog/UnhingedExpenses";
import DoYouKnowYourFinancialStatus from "./pages/blog/DoYouKnowYourFinancialStatus";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />

        <Route path="/budget-template" element={<BudgetTemplate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/links" element={<Links />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/money-mindset" element={<MoneyMindset />} />

        {/* Blog Articles */}
        <Route
          path="/blog/how-to-save-on-n50000-salary-in-nigeria"
          element={<HowToSaveN50K />}
        />
        <Route
          path="/blog/unhinged-ways-we-reduced-expenses-in-nigeria"
          element={<UnhingedExpenses />}
        />
        <Route
          path="/blog/do-you-know-your-financial-status"
          element={<DoYouKnowYourFinancialStatus />}
        />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
