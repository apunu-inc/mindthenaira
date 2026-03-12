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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas
          fugiat laborum fuga, suscipit exercitationem.
        </p>

        <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas
          fugiat laborum fuga, suscipit exercitationem.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default About;
