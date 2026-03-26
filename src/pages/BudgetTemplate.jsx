import { useState } from "react";

export default function BudgetTemplate() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValid =
    form.firstName.trim() !== "" &&
    form.lastName.trim() !== "" &&
    form.email.trim() !== "";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleDownload = async () => {
    if (!isValid) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          firstName: form.firstName,
          lastName: form.lastName,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err.message && err.message !== "Something went wrong."
          ? err.message
          : "Couldn't save your details. Please try again.",
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-900 px-4">
      <div className="w-full max-w-md text-center">
        {submitted ? (
          <div className="space-y-4">
            <div className="text-5xl mb-4">🎉</div>
            <h1 className="text-white text-3xl sm:text-4xl font-semibold leading-tight">
              You're all set, {form.firstName}!
            </h1>
            <p className="text-teal-200 text-sm mt-3">
              Your 5 Minute Budget Template is ready. Check your email at{" "}
              <span className="text-white font-medium">{form.email}</span> —
              we'll send you tips to make the most of it.
            </p>
            <a
              href="https://docs.google.com/spreadsheets/d/1klvORDZarhUW_UlaT6BfMxtC1blkP0PIr5CL_Ec8LrI/edit?pli=1&gid=821241466#gid=821241466"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full p-4 rounded-lg bg-white text-teal-900 font-medium hover:bg-gray-200 transition"
            >
              Open Budget Template
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 text-xs text-teal-300 underline hover:text-white transition"
            >
              Go back
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-white text-3xl sm:text-4xl font-semibold mb-8 leading-tight">
              Download the <br /> 5 Minute Budget Template
            </h1>

            <div className="space-y-4">
              <input
                name="firstName"
                placeholder="Your First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                name="lastName"
                placeholder="Your Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              {error && <p className="text-red-300 text-sm">{error}</p>}

              <button
                onClick={handleDownload}
                disabled={!isValid || loading}
                className={`w-full p-4 rounded-lg font-medium transition
                  ${
                    isValid && !loading
                      ? "bg-white text-teal-900 hover:bg-gray-200"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                {loading ? "Saving..." : "Budget Template"}
              </button>
            </div>

            <p className="text-xs text-teal-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
