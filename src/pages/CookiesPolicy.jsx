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

const CookiesPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Cookies Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last Updated: March 2026</p>

        <Section title="1. What Are Cookies">
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help websites function properly and improve user
            experience.
          </p>
        </Section>

        <Section title="2. How We Use Cookies">
          <p>Mind the Naira may use cookies to:</p>
          <BulletList
            items={[
              "Remember user preferences",
              "Analyze website traffic",
              "Improve website functionality",
            ]}
          />
        </Section>

        <Section title="3. Types of Cookies We Use">
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-700">Essential Cookies</p>
              <p>Required for the website to function properly.</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Analytics Cookies</p>
              <p>
                Used to understand how visitors interact with the website.
                Example tools may include analytics services.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Preference Cookies</p>
              <p>Remember user choices and settings.</p>
            </div>
          </div>
        </Section>

        <Section title="4. Managing Cookies">
          <p>
            You can control or disable cookies through your browser settings.
          </p>
          <p>Disabling cookies may affect website functionality.</p>
        </Section>

        <Section title="5. Third-Party Cookies">
          <p>
            Some third-party services used on the website may place cookies on
            your device. These cookies are governed by the privacy policies of
            those services.
          </p>
        </Section>

        <Section title="6. Changes to This Policy">
          <p>We may update this Cookies Policy from time to time.</p>
          <p>Updates will be posted on this page.</p>
        </Section>

        <Section title="7. Contact">
          <p>For cookie-related questions:</p>
          <p>
            Email:{" "}
            <a
              href="mailto:mindthenaira@gmail.com"
              className="text-teal-700 hover:underline"
            >
              mindthenaira@gmail.com
            </a>
          </p>
        </Section>
      </div>

      <Footer />
    </>
  );
};

export default CookiesPolicy;
