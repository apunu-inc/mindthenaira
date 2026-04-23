import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [open, setOpen] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const faqs = [
    {
      question: "How do I get started with Mind Naira?",
      answer: (
        <>
          We have our services structured to fit different needs. Take a look at{" "}
          <Link
            to="/services"
            className="text-teal-700 underline hover:text-teal-900"
          >
            our Services
          </Link>{" "}
          and take the free trainings for Personal Finance or book a session for
          any of the services that fits your needs.
        </>
      ),
    },
    {
      question: "What financial courses do you offer?",
      answer: (
        <>
          Our goal is to make financial education accessible to all. If you are
          interested in developing your personal finance knowledge, start with
          the free courses, then move to the low cost training options. You can
          also book a personal consultation or corporate sessions via{" "}
          <Link
            to="/how-it-works"
            className="text-teal-700 underline hover:text-teal-900"
          >
            How It Works
          </Link>
          .
        </>
      ),
    },
    {
      question: "Is the 5-minute budget template free?",
      answer: (
        <>
          Yes, this is free. Download your free template{" "}
          <Link
            to="/budget-template"
            className="text-teal-700 underline hover:text-teal-900"
          >
            here
          </Link>
          .
        </>
      ),
    },
    {
      question: "How can SMEs benefit from your platform?",
      answer:
        "We have SME focused trainings that will improve your financial knowledge, enable you separate your business financials from your personal finacials and set you up with tools and resources for generating your profit and loss statement, balance sheet and cash flow statement.",
    },
    {
      question: "How do I book a one-on-one financial coaching session?",
      answer: (
        <>
          Book a personal finance session via{" "}
          <Link
            to="/services"
            className="text-teal-700 underline hover:text-teal-900"
          >
            our Services page
          </Link>
          . For SMEs and Corporate trainings, send an email via{" "}
          <Link
            to="/contact"
            className="text-teal-700 underline hover:text-teal-900"
          >
            our Contact page
          </Link>
          .
        </>
      ),
    },
  ];

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section
        className="px-6 md:px-12 lg:px-24 py-16 md:py-20 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #003d46, #006A71)" }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #48d1cc, transparent)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <span className="inline-block text-teal-300 font-semibold text-xs uppercase tracking-widest bg-teal-900/40 border border-teal-700/40 px-3 py-1 rounded-full mb-5">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Our Team
          </h1>
          <p className="text-teal-100 max-w-xl text-base">
            Get in touch to learn more about our programs, book a session, or
            ask us anything.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Send us a message
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              We typically respond within 24 hours.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
                className="border border-gray-200 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone number (optional)"
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-200 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
              />

              <textarea
                name="message"
                placeholder="Leave us a message..."
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="border border-gray-200 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition resize-none"
              ></textarea>

              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-teal-700 font-medium bg-teal-50 border border-teal-200 rounded-xl px-4 py-3">
                  ✓ Message sent! We&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #006A71, #004652)",
                }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Chat with us</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-teal-50 text-sm text-gray-700 hover:text-teal-700 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                    <MessageCircle size={16} className="text-teal-700" />
                  </div>
                  <span>Start a live chat</span>
                </a>
                <a
                  href="mailto:hello@mindthenaira.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-teal-50 text-sm text-gray-700 hover:text-teal-700 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                    <Mail size={16} className="text-teal-700" />
                  </div>
                  <span>hello@mindthenaira.com</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-2">Call us</h3>
              <p className="text-sm text-gray-500 mb-4">
                Available Monday – Friday, 8am to 5pm.
              </p>
              <a
                href="tel:+4915510312165"
                className="flex items-center gap-3 p-3 rounded-xl bg-teal-50 hover:bg-teal-100 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                  <Phone size={16} className="text-teal-700" />
                </div>
                <span className="text-teal-800 font-semibold text-sm">
                  +49 15510 312165
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-teal-700 font-semibold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Can&apos;t find the answer? Send us an email.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  open === index
                    ? "border-teal-200 bg-teal-50/40 shadow-sm"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-sm font-medium text-gray-900 text-left"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`ml-4 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-base font-bold transition-all ${
                      open === index
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {open === index ? "−" : "+"}
                  </span>
                </button>

                {open === index && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
