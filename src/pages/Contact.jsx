import { useState } from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [open, setOpen] = useState(null);

  const faqs = [
    "How do I get started with Mind Naira?",
    "What financial courses do you offer?",
    "Is the 5-minute budget template free?",
    "How can SMEs benefit from your platform?",
    "How do I book a one-on-one financial coaching session?",
  ];

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <div
        className="h-48 md:h-56 flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-teal-900/70"></div>

        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Contact Our Team
          </h1>
          <p className="text-sm mt-2">
            Get in touch with us to learn more or book a session
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border rounded-md p-3 text-sm w-full"
              />

              <input
                type="text"
                placeholder="Last name"
                className="border rounded-md p-3 text-sm w-full"
              />
            </div>

            <input
              type="email"
              placeholder="Email address"
              className="border rounded-md p-3 text-sm w-full"
            />

            <input
              type="text"
              placeholder="Phone number"
              className="border rounded-md p-3 text-sm w-full"
            />

            <textarea
              placeholder="Leave us a message..."
              rows="5"
              className="border rounded-md p-3 text-sm w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-teal-700 text-white px-6 py-3 rounded-md text-sm hover:bg-teal-800 transition"
            >
              Send message
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Chat with us</h3>

              <a
                href="#"
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-teal-700 transition mb-2"
              >
                <MessageCircle size={18} className="text-teal-700" />
                <span>Start a live chat</span>
              </a>

              <a
                href="mailto:hello@mindnaira.com"
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-teal-700 transition"
              >
                <Mail size={18} className="text-teal-700" />
                <span>hello@mindnaira.com</span>
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Call us</h3>
              <p className="text-sm text-gray-600">
                Call our team Monday – Friday from 8am to 5pm.
              </p>

              <a
                href="tel:+2340000000000"
                className="flex items-center gap-3 mt-2 text-teal-700 font-medium hover:text-teal-900 transition"
              >
                <Phone size={18} />
                +234 000 000 0000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* TEXT */}
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Frequently asked questions
            </h2>

            <p className="text-sm text-gray-600">
              Can't find the answer to your question? Send us an email now.
            </p>
          </div>

          {/* ACCORDION */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-md">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-3 text-sm"
                >
                  {faq}
                  <span>{open === index ? "-" : "+"}</span>
                </button>

                {open === index && (
                  <div className="px-3 pb-3 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    This is where the answer will appear.
                  </div>
                )}
              </div>
            ))}

            <button className="bg-teal-700 text-white text-sm px-5 py-2 rounded-md mt-3">
              Load more
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
