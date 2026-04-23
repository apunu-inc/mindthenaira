import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const steps = [
  {
    title: "Start With Free Courses",
    description:
      "New to financial knowledge? Begin with our free courses and build a solid foundation at no cost. Learn budgeting, saving and the basics of money management.",
    button: "Browse Free Courses",
    to: null,
    tag: "FREE",
  },
  {
    title: "Learn More With Low Cost Trainings",
    description:
      "Ready for deeper knowledge? Enroll in affordable trainings for more in depth financial education.",
    //  — covering investments, debt strategy and advanced budgeting.,
    button: "Explore Trainings",
    to: null,
    tag: "AFFORDABLE",
  },
  {
    title: "Book a Personal Consultation",
    description:
      "Need personalised support? Book a one on one session with one of our certified financial coaches and get a plan tailored specifically to you.",
    button: "Book A Session",
    to: "/contact",
    tag: "COACHING",
  },
  {
    title: "Custom Corporate Training",
    description:
      "Do you represent an organisation? Contact us for tailored corporate finance trainings.",
    button: "Contact Us",
    to: "/contact",
    tag: "CORPORATE",
  },
];

export default function HowItWorks() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <section
        className="px-6 md:px-12 lg:px-24 py-16 md:py-20 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #003d46, #006A71)" }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #48d1cc, transparent)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <span className="inline-block text-teal-300 font-semibold text-xs uppercase tracking-widest bg-teal-900/40 border border-teal-700/40 px-3 py-1 rounded-full mb-5">
            Your Journey
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-teal-100 max-w-xl text-base">
            Follow these four steps to improve your financial knowledge and
            start making better money decisions today.
          </p>
        </div>
      </section>

      {/* Steps timeline */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* vertical connecting line */}
            <div
              className="absolute left-5 top-5 bottom-5 w-px hidden sm:block"
              style={{
                background:
                  "linear-gradient(to bottom, #006A71, #004652, transparent)",
              }}
            />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 sm:gap-8 items-start">
                  {/* Circle number */}
                  <div
                    className="relative z-10 w-10 h-10 shrink-0 flex items-center justify-center rounded-full text-white font-bold text-sm shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #006A71, #004652)",
                    }}
                  >
                    {index + 1}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-full">
                        {step.tag}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {step.description}
                    </p>

                    {step.to ? (
                      <Link
                        to={step.to}
                        className="inline-flex items-center gap-2 text-white text-sm px-5 py-2.5 rounded-xl font-semibold transition-all hover:shadow-md hover:scale-[1.02]"
                        style={{
                          background:
                            "linear-gradient(135deg, #006A71, #004652)",
                        }}
                      >
                        {step.button}
                        <ArrowRight size={15} />
                      </Link>
                    ) : (
                      <button
                        className="inline-flex items-center gap-2 text-white text-sm px-5 py-2.5 rounded-xl font-semibold transition-all hover:shadow-md hover:scale-[1.02]"
                        style={{
                          background:
                            "linear-gradient(135deg, #006A71, #004652)",
                        }}
                      >
                        {step.button}
                        <ArrowRight size={15} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-4">
            Have questions before you start?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #006A71, #004652)" }}
          >
            Talk to Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
