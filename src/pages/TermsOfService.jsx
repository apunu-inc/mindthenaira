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

const TermsOfService = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last Updated: March 2026</p>

        <Section title="1. Acceptance of Terms">
          <p>
            Welcome to Mind the Naira. By accessing or using our website, you
            agree to comply with and be bound by these Terms of Service.
          </p>
          <p>
            If you do not agree with these terms, please do not use the website.
          </p>
        </Section>

        <Section title="2. Purpose of the Website">
          <p>
            Mind the Naira provides financial education and informational
            content related to personal finance, budgeting, saving, and
            investing.
          </p>
          <p>
            All content on the site is for educational and informational
            purposes only.
          </p>
        </Section>

        <Section title="3. Not Financial Advice">
          <p>The information provided on this website:</p>
          <BulletList
            items={[
              "Is not financial, investment, legal, or tax advice",
              "Should not be relied upon as professional advice",
              "Does not create a financial advisor-client relationship",
            ]}
          />
          <p className="mt-2">
            Users should consult a qualified financial professional before
            making financial decisions.
          </p>
        </Section>

        <Section title="4. User Responsibilities">
          <p>By using the website, you agree:</p>
          <BulletList
            items={[
              "To use the site only for lawful purposes",
              "Not to attempt to hack, disrupt, or misuse the service",
              "Not to reproduce or redistribute site content without permission",
            ]}
          />
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            All content on Mind the Naira, including articles, graphics,
            branding, logos, and educational materials, belongs to Mind the
            Naira or its content creators and is protected by copyright laws.
          </p>
          <p>
            You may not reproduce or distribute this content without permission.
          </p>
        </Section>

        <Section title="6. Third-Party Links">
          <p>
            The website may include links to third-party websites for
            educational purposes. Mind the Naira:
          </p>
          <BulletList
            items={[
              "Does not control these websites",
              "Is not responsible for their content or practices",
            ]}
          />
        </Section>

        <Section title="7. Limitation of Liability">
          <p>Mind the Naira is not responsible for:</p>
          <BulletList
            items={[
              "Financial losses",
              "Investment decisions made by users",
              "Errors or inaccuracies in educational content",
            ]}
          />
          <p className="mt-2">Your use of the website is at your own risk.</p>
        </Section>

        <Section title="8. Changes to the Terms">
          <p>We may update these Terms at any time.</p>
          <p>Changes will be posted on this page with an updated date.</p>
        </Section>
      </div>

      <section title="9. Contact"></section>
      <div className="max-w-3xl mx-auto px-6 pb-14">
        <Section title="9. Contact">
          <p>For questions regarding these Terms:</p>
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

export default TermsOfService;
