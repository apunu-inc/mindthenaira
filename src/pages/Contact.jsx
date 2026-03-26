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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="border rounded-md p-3 text-sm w-full"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                required
                className="border rounded-md p-3 text-sm w-full"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
              className="border rounded-md p-3 text-sm w-full"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              className="border rounded-md p-3 text-sm w-full"
            />

            <textarea
              name="message"
              placeholder="Leave us a message..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="border rounded-md p-3 text-sm w-full"
            ></textarea>

            {status === "success" && (
              <p className="text-sm text-teal-700 font-medium">
                Message sent! We&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-teal-700 text-white px-6 py-3 rounded-md text-sm hover:bg-teal-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send message"}
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
                href="mailto:mindthenaira@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-700 hover:text-teal-700 transition"
              >
                <Mail size={18} className="text-teal-700" />
                <span>mindthenaira@gmail.com</span>
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
                  {faq.question}
                  <span>{open === index ? "-" : "+"}</span>
                </button>

                {open === index && (
                  <div className="px-3 pb-3 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
            {/* 
            <button className="bg-teal-700 text-white text-sm px-5 py-2 rounded-md mt-3">
              Load more
            </button> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
