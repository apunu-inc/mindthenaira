import { useState } from "react";

export default function MoneySession() {
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
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #003d46 0%, #006A71 50%, #00878f 100%)",
      }}
    >
      {/* decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #48d1cc, transparent)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #20b2aa, transparent)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="relative w-full max-w-md">
        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-5">🎉</div>
            <h1 className="text-white text-3xl font-bold leading-tight mb-3">
              You&apos;re all set, {form.firstName}!
            </h1>
            <p className="text-teal-200 text-sm mt-2 mb-7 leading-relaxed">
              Your 5 Minute Budget Template is ready. Check your email at{" "}
              <span className="text-white font-semibold">{form.email}</span>{" "}
              &mdash; we&apos;ll also send you tips to make the most of it.
            </p>
            <a
              href="https://docs.google.com/spreadsheets/d/1klvORDZarhUW_UlaT6BfMxtC1blkP0PIr5CL_Ec8LrI/edit?pli=1&gid=821241466#gid=821241466"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full p-4 rounded-xl bg-white text-teal-900 font-semibold hover:bg-teal-50 transition-all hover:shadow-lg"
            >
              Open Budget Template →
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs text-teal-300 underline hover:text-white transition"
            >
              Go back
            </button>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4"> 📆 </div>
              <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
                Register for <br />
                Money Session on <br />
              </h1>
              <p className="text-teal-200 text-sm mt-2">
                Friday 31/07/2026 at 6:00pm WAT
              </p>
            </div>

            <div className="space-y-3">
              <input
                name="firstName"
                placeholder="Your First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/15 border border-white/20 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
              />
              <input
                name="lastName"
                placeholder="Your Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/15 border border-white/20 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/15 border border-white/20 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
              />

              {error && (
                <p className="text-red-300 text-sm bg-red-900/20 border border-red-400/30 rounded-xl px-4 py-2">
                  {error}
                </p>
              )}

              <button
                onClick={handleDownload}
                disabled={!isValid || loading}
                className={`w-full p-4 rounded-xl font-semibold transition-all ${
                  isValid && !loading
                    ? "bg-white text-teal-900 hover:bg-teal-50 hover:shadow-xl hover:scale-[1.01]"
                    : "bg-white/20 text-white/40 cursor-not-allowed"
                }`}
              >
                {loading ? "Saving..." : "Register"}
              </button>
            </div>

            <p className="text-xs text-teal-300/70 mt-5 text-center">
              Sign in details will be shared with you after registration.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
