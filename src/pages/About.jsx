import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="px-4 md:px-10 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
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
            Mind the Naira is a locally developed financial education platform.
            We believe every Nigerian deserve the knowledge and confidence to
            make better money decisions.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-10 py-10 max-w-4xl">
        <h3 className="text-xl font-semibold mb-3">Our Story</h3>
        <p className="text-gray-600 mb-6">
          Mind the Naira was born from a simple but urgent observation, millions
          of Nigerians work hard every day yet struggle to grow, save, invest or
          protect their money. This is not because they lack financial ambition
          but because no one ever taught them how. We started with a mission to
          change the narrative. To make pratical, locally relevant financial
          education accessible to every Nigerian, from the market trader in
          Lagos to the corporate professional in Abuja.
        </p>

        <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
        <p className="text-gray-600">
          We built a platform that meets Nigerians where they are. Through free
          and affordable courses, hands on SME trainings, personal financial
          coaching and corporate finance programs, Mind the Naira delivers high
          impact education tailored to Nigeria’s real economic environment. Our
          content covers everything from budgeting, debt control to cash flow
          management and investment basics, giving individuals and businesses
          the tools to make informed money decisions and build lasting financial
          confidence.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default About;
