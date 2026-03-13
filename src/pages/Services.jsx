import { Wallet, Building2, ShieldCheck, TrendingUp } from "lucide-react";
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
    to: null,
  },
  {
    icon: Building2,
    title: "SME Finance Training",
    description:
      "Give your business stronger financial structure and improve profitability.",
    list: [
      "Cash flow management",
      "Pricing strategy",
      "Record keeping",
      "Inventory control",
    ],
    button: "Train Your Business",
    to: "/contact",
  },
  {
    icon: ShieldCheck,
    title: "Personal Financial Advisory",
    description:
      "Professional advice tailored to your personal financial goals.",
    list: [
      "Custom money plan",
      "Debt reduction strategy",
      "Savings structure",
      "Monthly check-ins",
    ],
    button: "Book A Session",
    to: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Corporate Finance Training",
    description: "Improve your team'\''s financial literacy and decision making.",
    list: [
      "Financial statements",
      "Strategy & forecasting",
      "Revenue optimization",
      "Risk management",
    ],
    button: "Book Corporate Training",
    to: "/contact",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="bg-white px-6 md:px-12 lg:px-24 py-20">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl font-bold text-gray-900">OUR SERVICES</h2>

          <p className="text-gray-600 mt-3 text-sm">
            Empowering individuals, SMEs, and organizations with financial
            knowledge that creates real impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-xl p-7 hover:shadow-md transition duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-white shadow-sm mb-6">
                  <Icon size={28} className="text-teal-700" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                {/* Bullet list */}
                <ul className="text-sm text-gray-700 space-y-1 mb-6">
                  {service.list.map((item, i) => (
                    <li key={i}>&bull; {item}</li>
                  ))}
                </ul>

                {/* Button */}
                {service.to ? (
                  <Link
                    to={service.to}
                    className="mt-auto text-white text-sm py-2 rounded-md transition text-center block"
                    style={{
                      background: "linear-gradient(to right, #006A71, #004652)",
                    }}
                  >
                    {service.button}
                  </Link>
                ) : (
                  <button
                    className="mt-auto text-white text-sm py-2 rounded-md transition"
                    style={{
                      background: "linear-gradient(to right, #006A71, #004652)",
                    }}
                  >
                    {service.button}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
