import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        background:
          "linear-gradient(135deg, #003d46 0%, #006A71 50%, #00878f 100%)",
      }}
    >
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10">
          <div className="text-center mb-6">
            {/* <div className="text-4xl mb-3">🔗</div> */}
            <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
              Quick Links
            </h1>
            <p className="text-teal-200 text-sm mt-2">
              Jump to any section below
            </p>
          </div>

          <div className="space-y-3">
            <Link
              to="/blog"
              className="block w-full p-4 rounded-xl bg-white text-teal-900 font-semibold hover:bg-teal-50 transition-all hover:shadow-lg text-center"
            >
              Blog
            </Link>

            <Link
              to="/budget-template"
              className="block w-full p-4 rounded-xl bg-white text-teal-900 font-semibold hover:bg-teal-50 transition-all hover:shadow-lg text-center"
            >
              Budget Template
            </Link>

            <Link
              to="/money-mindset"
              className="block w-full p-4 rounded-xl bg-white text-teal-900 font-semibold hover:bg-teal-50 transition-all hover:shadow-lg text-center"
            >
              Money Mindset
            </Link>
          </div>

          <p className="text-xs text-teal-300/70 mt-5 text-center">
            You will be redirected to the selected page.
          </p>
        </div>
      </div>
    </div>
  );
}
