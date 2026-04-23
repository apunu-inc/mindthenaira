import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from "../assets/about.webp";

const values = [
  {
    title: "Accessibility",
    description:
      "Financial education should be available to every Nigerian, regardless of income or background.",
  },
  {
    title: "Relevance",
    description:
      "Our content is built for Nigeria's economic reality, not generic global finance templates.",
  },
  {
    title: "Practicality",
    description:
      "Every lesson translates to an action you can take today to improve your financial life.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero section */}
      <section
        className="px-6 md:px-12 lg:px-24 py-16 md:py-24 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #003d46, #006A71)" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #48d1cc, transparent)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="inline-block text-teal-300 font-semibold text-xs uppercase tracking-widest bg-teal-900/40 border border-teal-700/40 px-3 py-1 rounded-full mb-5">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Building a Financially
              <br />
              Smarter Nigeria
            </h1>
            <p className="text-teal-100 text-lg leading-relaxed max-w-lg">
              Mind the Naira is a locally developed financial education
              platform. We believe every Nigerian deserves the knowledge and
              confidence to make better money decisions.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-white/10 blur-2xl" />
            <img
              src={aboutImg}
              alt="About Mind Naira"
              className="relative rounded-2xl shadow-2xl w-full object-cover ring-1 ring-white/20"
            />
          </div>
        </div>
      </section>

      {/* Our Story + Solution */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: "linear-gradient(135deg, #e6f7f8, #cceff2)",
              }}
            >
              <span className="text-teal-700 text-lg font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Mind the Naira was born from a simple but urgent observation,
              millions of Nigerians work hard every day yet struggle to grow,
              save, invest or protect their money. This is not because they lack
              financial ambition but because no one ever taught them how. We
              started with a mission to change the narrative. To make pratical,
              locally relevant financial education accessible to every Nigerian,
              from the market trader in Lagos to the corporate professional in
              Abuja.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: "linear-gradient(135deg, #e6f7f8, #cceff2)",
              }}
            >
              <span className="text-teal-700 text-lg font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our Solution
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              We built a platform that meets Nigerians where they are. Through
              free and affordable courses, hands on SME trainings, personal
              financial coaching and corporate finance programs, Mind the Naira
              delivers high impact education tailored to Nigeria’s real economic
              environment. Our content covers everything from budgeting, debt
              control to cash flow management and investment basics, giving
              individuals and businesses the tools to make informed money
              decisions and build lasting financial confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-teal-700 font-semibold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">
              What Guides Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-teal-700 font-bold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #e6f7f8, #cceff2)",
                  }}
                >
                  0{i + 1}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
