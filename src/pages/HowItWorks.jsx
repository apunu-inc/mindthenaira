import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const steps = [
  {
    title: "Start With Free Courses",
    description:
      "New to finance? Begin with our free courses and build your foundation at no cost.",
    button: "Browse Free Courses",
  },
  {
    title: "Learn More With Low-Cost Trainings",
    description:
      "Ready for deeper knowledge? Enroll in affordable trainings for more in-depth financial education.",
    button: "Explore Trainings",
  },
  {
    title: "Book a Personal Consultation",
    description:
      "Need personalized support? Book a session with one of our financial advisors.",
    button: "Book A Session",
    to: "/contact",
  },
  {
    title: "Custom Corporate Training",
    description:
      "Do you represent an organization? Contact us for tailored corporate finance training.",
    button: "Contact Us",
    to: "/contact",
  },
];

export default function HowItWorks() {
  return (
    <>
      <Navbar />
      <section className="bg-white px-6 md:px-12 lg:px-24 py-20">
        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>

          <p className="text-gray-600 mt-3 text-sm">
            Follow these steps to improve your financial knowledge and make
            smarter decisions.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Number Circle */}
              <div className="w-10 h-10 flex items-center justify-center border rounded-full text-gray-700 font-semibold">
                {index + 1}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 mb-3 max-w-xl">
                  {step.description}
                </p>

                {step.to ? (
                  <Link
                    to={step.to}
                    className="inline-block text-white text-sm px-4 py-2 rounded-md transition"
                    style={{
                      background: "linear-gradient(to right, #006A71, #004652)",
                    }}
                  >
                    {step.button}
                  </Link>
                ) : (
                  <button
                    className="text-white text-sm px-4 py-2 rounded-md transition"
                    style={{
                      background: "linear-gradient(to right, #006A71, #004652)",
                    }}
                  >
                    {step.button}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
