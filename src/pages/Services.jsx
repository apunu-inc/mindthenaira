import {
  Wallet,
  Building2,
  ShieldCheck,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    icon: Wallet,
    title: "Personal Finance Training",
    description:
      "Learn the foundations of money management and build healthier financial habits.",
    list: ["Budgeting", "Saving strategy", "Debt control", "Investment basics"],
    button: "Start Learning",
    to: "/how-it-works",
    accent: "from-teal-500 to-cyan-600",
  },
  {
    icon: Building2,
    title: "SME Finance Training",
    description:
      "Give your business a stronger financial structure and improve profitability.",
    list: [
      "Cash flow management",
      "Pricing strategy",
      "Record keeping",
      "Inventory control",
    ],
    button: "Train Your Business",
    to: "/contact",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: ShieldCheck,
    title: "Personal Finance Coaching",
    description:
      "Professional coaching tailored to your personal financial goals.",
    list: [
      "Custom money plan",
      "Debt reduction strategy",
      "Savings structure",
      "Monthly check-ins",
    ],
    button: "Book A Session",
    to: "/contact",
    accent: "from-teal-600 to-cyan-700",
  },
  {
    icon: TrendingUp,
    title: "Corporate Finance Training",
    description: "Improve your team's financial literacy and decision making.",
    list: [
      "Financial statements",
      "Strategy & forecasting",
      "Revenue optimization",
      "Risk management",
    ],
    button: "Book Corporate Training",
    to: "/contact",
    accent: "from-cyan-600 to-teal-700",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <section className="bg-gray-950 text-white px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block text-teal-400 font-semibold text-xs uppercase tracking-widest bg-teal-900/40 border border-teal-800/60 px-3 py-1 rounded-full mb-4">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-xl text-base">
            Third service Personal Financial Advisory to be changed to Personal
            Finance Coaching Under Corporate Finance training...remove repeated
            apostrophes in front of team
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Gradient top bar */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${service.accent}`}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className="w-13 h-13 w-12 h-12 flex items-center justify-center rounded-xl mb-5"
                    style={{
                      background: "linear-gradient(135deg, #e6f7f8, #cceff2)",
                    }}
                  >
                    <Icon size={24} className="text-teal-700" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet list */}
                  <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-1">
                    {service.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle
                          size={14}
                          className="text-teal-600 shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  {service.to ? (
                    <Link
                      to={service.to}
                      className="mt-auto text-white text-sm py-2.5 rounded-xl transition-all hover:opacity-90 text-center block font-semibold"
                      style={{
                        background: "linear-gradient(135deg, #006A71, #004652)",
                      }}
                    >
                      {service.button}
                    </Link>
                  ) : (
                    <button
                      className="mt-auto text-white text-sm py-2.5 rounded-xl transition-all hover:opacity-90 w-full font-semibold"
                      style={{
                        background: "linear-gradient(135deg, #006A71, #004652)",
                      }}
                    >
                      {service.button}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 mb-4 text-sm">Not sure where to start?</p>
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #006A71, #004652)" }}
          >
            See How It Works
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
