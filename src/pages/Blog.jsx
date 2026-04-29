import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight, BookOpen, Tag } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogArticleHero from "../assets/articleOne/BlogArticleHero.webp";
import womanTwo from "../assets/articleTwo/womanTwo.webp";

// Add new articles here — the page renders them automatically.
const articles = [
  {
    slug: "/blog/how-to-save-on-n50000-salary-in-nigeria",
    title: "How to Save on a N50,000 Salary in Nigeria.",
    excerpt:
      "Earning N50,000 feels impossible to save on  but it isn't. This practical guide covers budgeting, expense control, and the mindset shifts that make saving possible at any income level.",
    image: BlogArticleHero,
    imageAlt: "Nigerian naira notes representing savings and budgeting",
    category: "Personal Finance",
    date: "April 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "/blog/unhinged-ways-we-reduced-expenses-in-nigeria",
    title: "Unhinged Ways We Cut Expenses in Nigeria",
    excerpt:
      "Three Nigerians: Bunmi, Tunji, and Bola share the overlooked spending habits they uncovered during a Q1 expense audit, and the unconventional steps they took to slash them.",
    image: womanTwo,
    imageAlt: "Black woman reviewing her personal finances on a laptop",
    category: "Expense Reduction",
    date: "January 2026",
    readTime: "10 min read",
    featured: false,
  },
];

const Blog = () => {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden text-white px-6 md:px-12 lg:px-24 py-20 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, #003d46 0%, #006A71 55%, #00878f 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #48d1cc, transparent)",
            transform: "translate(35%, -35%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #20b2aa, transparent)",
            transform: "translate(-35%, 35%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-teal-200 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <BookOpen size={12} /> Mind the Naira Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            Real talk on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              money in Nigeria
            </span>
          </h1>
          <p className="text-teal-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {/* No jargon, no fluff —*/} Practical money guides, honest stories,
            and actionable steps to help you earn more, spend less, and build
            real wealth.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* Featured Article */}
        {featured && (
          <section className="mb-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-6">
              Featured Article
            </p>
            <Link
              to={featured.slug}
              className="group grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden h-64 md:h-auto">
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-10 md:py-12 md:px-10">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full mb-5 self-start"
                  style={{ background: "#e6f7f8", color: "#006A71" }}
                >
                  <Tag size={11} /> {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4 group-hover:text-teal-700 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm md:text-base">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} /> {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* More Articles grid */}
        {rest.length > 0 && (
          <section>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-8">
              More Articles
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  to={article.slug}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full mb-4 self-start"
                      style={{ background: "#e6f7f8", color: "#006A71" }}
                    >
                      <Tag size={10} /> {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-teal-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-gray-400 text-xs pt-4 border-t border-gray-50">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} /> {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section
          className="mt-24 rounded-3xl p-10 md:p-14 text-white text-center"
          style={{
            background: "linear-gradient(135deg, #003d46 0%, #006A71 100%)",
          }}
        >
          <p className="text-teal-200 text-xs font-semibold uppercase tracking-widest mb-3">
            Stay Updated
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            New articles every month
          </h2>
          <p className="text-teal-100 max-w-lg mx-auto mb-8 leading-relaxed">
            We cover budgeting, saving, investing, and real money stories from
            Nigerians. Get in touch and we will notify you when we publish new
            guides.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-800 font-semibold px-7 py-3.5 rounded-xl hover:bg-teal-50 transition-colors shadow"
          >
            Get Notified <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
