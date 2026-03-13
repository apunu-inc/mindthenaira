import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={aboutImg}
          alt="About Mind Naira"
          className="rounded-lg shadow"
        />

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Building a Financially Smarter Nigeria
          </h2>

          <p className="text-gray-600">
            Mind Naira is a high-impact, market-driven and localized financial
            education platform. We believe every Nigerian deserves the knowledge
            and confidence to make better money decisions.
          </p>
        </div>
      </section>

      <section className="px-10 py-10 max-w-4xl">
        <h3 className="text-xl font-semibold mb-3">Our Story</h3>
        <p className="text-gray-600 mb-6">
          Mind Naira was born from a simple but urgent observation — millions of
          Nigerians work hard every day yet struggle to grow, save, or protect
          their money. Not because they lack ambition, but because no one ever
          taught them how. We started with a mission to change that: to make
          practical, locally relevant financial education accessible to every
          Nigerian, from the market trader in Lagos to the corporate
          professional in Abuja.
        </p>

        <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
        <p className="text-gray-600">
          We built a platform that meets Nigerians where they are. Through free
          and affordable courses, hands-on SME training, personal financial
          advisory, and corporate finance programs, Mind Naira delivers
          high-impact education tailored to Nigeria's real economic environment.
          Our content covers everything from budgeting and debt control to cash
          flow management and investment basics — giving individuals and
          businesses the tools to make smarter money decisions and build lasting
          financial confidence.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default About;
