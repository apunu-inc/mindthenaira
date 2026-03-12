import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/hero.png";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Bridging Nigeria's <br />
            <span className="text-green-700">Financial Literacy Gap.</span>
          </h1>

          <p className="text-gray-600 mb-6">
            Mind Naira is Nigeria’s premier platform for high-impact, localized
            financial education, empowering individuals and SMEs with the
            knowledge to thrive.
          </p>

          <div className="flex gap-4">
            <button
              className="text-white px-5 py-3 rounded-md"
              style={{
                background: "linear-gradient(to right, #006A71, #004652)",
              }}
            >
              Start Digital Training
            </button>

            <button
              className="text-white px-5 py-3 rounded-md"
              style={{
                background: "linear-gradient(to right, #006A71, #004652)",
              }}
            >
              Scale Your Business Knowledge
            </button>
          </div>
        </div>

        <img src={heroImg} alt="Hero" className="rounded-lg shadow" />
      </section>

      <Footer />
    </>
  );
};

export default Home;
