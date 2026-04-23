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

const Privacy = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last Updated: March 2026</p>

        <Section title="1. Introduction">
          <p>
            Mind the Naira respects your privacy and is committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and protect your data.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p className="font-medium text-gray-700">Information You Provide</p>
          <p>We may collect information you voluntarily provide, such as:</p>
          <BulletList
            items={[
              "Name",
              "Email address",
              "Messages sent through contact forms",
              "Newsletter subscriptions",
            ]}
          />
          <p className="font-medium text-gray-700 mt-4">
            Automatically Collected Information
          </p>
          <p>When you visit the website, we may collect:</p>
          <BulletList
            items={[
              "IP address",
              "Browser type",
              "Device information",
              "Pages visited",
              "Usage statistics",
            ]}
          />
          <p className="mt-2">This helps us improve the website.</p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use collected information to:</p>
          <BulletList
            items={[
              "Improve website content",
              "Respond to user inquiries",
              "Send newsletters or updates (if you subscribe)",
              "Analyze site usage",
            ]}
          />
        </Section>

        <Section title="4. Data Sharing">
          <p>We do not sell your personal data. We may share data with:</p>
          <BulletList
            items={[
              "Website hosting providers",
              "Analytics providers",
              "Email newsletter services",
            ]}
          />
          <p className="mt-2">
            These providers only process data on our behalf.
          </p>
        </Section>

        <Section title="5. Data Security">
          <p>
            We take reasonable steps to protect your data from unauthorized
            access, misuse, or loss. However, no internet system is completely
            secure.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>Depending on your location, you may have rights to:</p>
          <BulletList
            items={[
              "Access your data",
              "Request corrections",
              "Request deletion",
              "Withdraw consent",
            ]}
          />
          <p className="mt-2">To exercise these rights, contact us.</p>
        </Section>

        <Section title="7. Data Retention">
          <p>
            We retain personal data only for as long as necessary to fulfill the
            purposes outlined in this policy, or as required by law.
          </p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time.</p>
          <p>Changes will be posted on this page with an updated date.</p>
        </Section>

        <Section title="9. Contact">
          <p>For privacy related questions:</p>
          <p>
            Email:{" "}
            <a
              href="mailto:hello@mindthenaira.com"
              className="text-teal-700 hover:underline"
            >
              hello@mindthenaira.com
            </a>
          </p>
        </Section>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
