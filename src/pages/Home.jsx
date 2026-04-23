import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/hero.png";

const stats = [
  { value: "500+", label: "Learners Empowered" },
  { value: "4", label: "Training Programs" },
  { value: "100%", label: "Nigeria Focused Content" },
  { value: "Free", label: "Foundation Courses" },
];

const features = [
  {
    icon: BookOpen,
    title: "Locally Relevant",
    description:
      "Content built specifically for Nigeria's economic realities not generic global finance advice.",
  },
  {
    icon: Users,
    title: "For Everyone",
    description:
      "From market traders to corporate professionals, our programs meet you at your level.",
  },
  {
    icon: Award,
    title: "Expert Led",
    description:
      "Learn from certified financial educators with deep knowledge of the Nigerian economy.",
  },
  {
    icon: TrendingUp,
    title: "Action Oriented",
    description:
      "Practical tools and templates you can apply immediately to your finances.",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="relative overflow-hidden text-white px-6 md:px-12 lg:px-24 py-24 md:py-32"
        style={{
          background:
            "linear-gradient(135deg, #003d46 0%, #006A71 55%, #00878f 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #48d1cc, transparent)",
            transform: "translate(35%, -35%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #20b2aa, transparent)",
            transform: "translate(-35%, 35%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-teal-200 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              🇳🇬 Nigeria&apos;s Premier Financial Education Platform
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bridging Nigeria&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                Financial Literacy
              </span>{" "}
              Gap.
            </h1>

            <p className="text-teal-100 text-lg mb-8 leading-relaxed max-w-lg">
              Mind the Naira is Nigeria’s premier platform for high impact,
              locally developed financial education, empowering individuals and
              SMEs with the knowledge to thrive financially.
              {/* Empowering individuals and SMEs with practical, locally relevant
              financial education to thrive in Nigeria&apos;s economy. */}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-900 font-semibold px-6 py-3.5 rounded-lg hover:bg-teal-50 transition-colors duration-200 shadow-lg"
              >
                Start Digital Training
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Scale Your Business
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-white/10 blur-sm" />
            <img
              src={heroImg}
              alt="Financial Education"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-teal-800">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-50 px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-700 text-xs font-semibold uppercase tracking-widest mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Why Choose Mind the Naira?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We built a platform that speaks your language and understands your
              reality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section
        className="px-6 md:px-12 lg:px-24 py-20 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #006A71 0%, #004652 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-teal-200 mb-8 text-lg">
            Join thousands of Nigerians building better financial habits today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/how-it-works"
              className="bg-white text-teal-900 font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-100 transition shadow-md"
            >
              Get Started Free
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 text-white px-6 py-3.5 rounded-lg hover:bg-white/10 transition"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
