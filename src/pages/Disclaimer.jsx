import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
    <div className="text-gray-600 leading-relaxed space-y-2">{children}</div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="list-disc list-inside space-y-1 ml-2">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const Disclaimer = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Disclaimer</h1>
        <p className="text-sm text-gray-400 mb-10">Last Updated: March 2026</p>

        <Section title="General Information">
          <p>
            The information provided on Mind the Naira is for educational and
            informational purposes only. All content on this website, including
            articles, guides, tools, and resources, is intended to help improve
            financial literacy and awareness.
          </p>
          <p>
            While we aim to provide accurate and up to date information, we make
            no guarantees about the completeness, reliability, or accuracy of
            the information presented.
          </p>
        </Section>

        <Section title="Not Financial Advice">
          <p>
            The content on this website does not constitute financial,
            investment, legal, or tax advice. Nothing on this website should be
            interpreted as a recommendation to:
          </p>
          <BulletList
            items={[
              "Buy or sell financial assets",
              "Invest in specific securities",
              "Make financial decisions based solely on the information provided",
            ]}
          />
          <p className="mt-2">
            You should always consult a qualified financial advisor or
            professional before making financial decisions.
          </p>
        </Section>

        <Section title="Personal Responsibility">
          <p>
            By using this website, you acknowledge that any financial decisions
            you make are your sole responsibility. Mind the Naira shall not be
            held liable for any losses or damages resulting from reliance on the
            information provided.
          </p>
        </Section>

        <Section title="No Professional Relationship">
          <p>
            Using this website does not create a financial advisor-client
            relationship between you and Mind the Naira.
          </p>
        </Section>

        <Section title="External Links">
          <p>
            This website may include links to third-party websites for
            educational or informational purposes. We do not control these
            websites and are not responsible for their content, accuracy, or
            privacy practices.
          </p>
        </Section>

        <Section title="Educational Content">
          <p>Some content may include:</p>
          <BulletList
            items={[
              "Examples",
              "Case studies",
              "Hypothetical financial scenarios",
            ]}
          />
          <p className="mt-2">
            These are provided for educational purposes only and should not be
            interpreted as real financial projections or guarantees of outcomes.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have any questions about this Disclaimer, please{" "}
            <a href="/contact" className="text-teal-700 hover:underline">
              contact us
            </a>
            .
          </p>
        </Section>
      </div>

      <Footer />
    </>
  );
};

export default Disclaimer;
