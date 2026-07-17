import calenderDate from "../assets/calendar-date-31-icon.svg";

export default function MoneySession() {
  // Form functionality temporarily disabled.

  // const [form, setForm] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  // });

  // const [submitted, setSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // const isValid =
  //   form.firstName.trim() !== "" &&
  //   form.lastName.trim() !== "" &&
  //   form.email.trim() !== "";

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  //   setError("");
  // };

  // const handleDownload = async () => {
  //   ...
  // };

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
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-2">
              <img
                src={calenderDate}
                className="h-8 w-8 object-contain"
                alt="Calendar 31"
              />
            </div>

            <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
              Register for <br />
              "Let's Talk Money"
              <br />
            </h1>

            <p className="text-teal-200 text-sm mt-2">
              Friday 31/07/2026 at 6:00pm WAT.
            </p>
          </div>

          {/* Registration form temporarily disabled */}
          {/*
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
          */}

          <a
            href="https://forms.gle/YhDY79Bbi3K6hKTG6"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 rounded-xl bg-white text-teal-900 font-semibold text-center hover:bg-teal-50 hover:shadow-xl hover:scale-[1.01] transition-all"
          >
            Register
          </a>

          <p className="text-xs text-white mt-5 text-center">
            Sign in details will be shared with you after registration.
          </p>
        </div>
      </div>
    </div>
  );
}
