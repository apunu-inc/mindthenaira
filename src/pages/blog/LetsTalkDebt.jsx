import { Link } from "react-router-dom";
import { Calendar, Clock, BookOpen, ChevronLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import heroImg from "../../assets/articleOne/BlogArticleHero.webp";

const LetsTalkDebt = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 md:px-0 pt-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-teal-700 hover:text-teal-900 font-medium transition-colors"
        >
          <ChevronLeft size={15} /> Back to Blog
        </Link>
      </div>

      <section
        className="relative overflow-hidden text-white px-6 md:px-12 lg:px-24 py-20 md:py-28 mt-4"
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
            <BookOpen size={12} /> Debt
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            Let&apos;s talk debt
          </h1>
          <p className="text-teal-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Get out of it.
          </p>
          <div className="flex items-center justify-center gap-6 text-teal-300 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> April 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> 7 min read
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-10">
        <img
          src={heroImg}
          alt="Person reviewing debt advice on a laptop"
          className="w-full rounded-2xl shadow-2xl object-cover h-64 md:h-[420px] ring-1 ring-white/20"
        />
      </div>

      <article className="max-w-3xl mx-auto px-6 md:px-0 py-16 space-y-10">
        <section className="space-y-6">
          <p className="text-gray-600 leading-relaxed text-lg">
            We all know at least one person who was embarrassed by a loan
            company. Yes, these companies will out you to your contacts and
            announce to them that you are a debtor. Some even take out paid
            newspaper ads to embarrass you into paying. Debt is now a part of
            Nigerian society and not in a good way. People are not taking
            mortgage debt to buy a house or business loans to start businesses.
            They are taking high interest debt to pay living cost, buy asoebi,
            pay up on family obligations etc.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            If you are in a debt owing situation already, read on for how you
            get out of it as soon as possible.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Is Debt Bad?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Debt is not bad. The type of debt you have and what you use the debt
            for determines if it's impact on you is good or bad. If you take a
            business loan from a bank with an annual interest rate of 20% and
            your business is able to generate enough income to pay it's bills,
            pay the loan interest and still turn a profit - this is putting debt
            to good work. On the other hand, if you take a high interest loan
            that is charging you 10% per month which rolls uff to 120% per
            annum. The key question is how will you be able to pay this back?
            What business or income bearing investment will get you over 120%
            per annum to be able to pay back the capital and the interest?
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to avoid the debt trap
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>
              Live within vour means -Alwavs remember that we live in a show
              offy society so there will always be the new cool thing to do. If
              you can afford it based on your income, go ahead. If not, be kind
              to yourself and stay away from it. Plan to live your life within
              what you earn and what you can afford.
            </li>
            <li>
              Have a budget - Setting up a budget helps you see clearly where
              your money is coming from, the expenses that you need to cover,
              your savings/investment plan and what is left over for you to flex
              with.
            </li>
            <li>
              Be comfortable saying NO -There are many people checking for your
              money so you will get a lot of requests. If it's not in your
              budget, be okay with saying No.
              <br />
              Don't go into debt trying to satisfy people.
            </li>
            <li>
              Save up for an emergency fund - An emergency fund is money saved
              up for unexpected expenses. Why? Because life will happen. Your
              emergency fund will help you stay out of debt when you experience
              life events like unexpected job loss, home damage, a sick
              relative, car repairs and many other unplanned life costs.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed text-lg">
            If you arealready in debt (excluding mortgage) that is high interest
            and dragging you down financially, you need to pay it off fast.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to pay your debt fast:
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>
              Make a list of all your debts with the interest rates -Do you know
              all the debts you owe? Put pen to paper and write them all out
              with the applicable interest rate. Do include any loan you have
              taken from family and friends. They deserve to be paid back so you
              show yourself as credit worthy. Oof, how does that feel?
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed text-lg">
            Like a lot right and you are probably feeling overwhelmed just
            looking at what your debt has ballooned to since you got it. Take a
            deep breath, the next steps will help you feel in control.
          </p>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>
              Cut out all expenses that is not a need - Now you know what you
              need to pay back but the question you can't answer is "how do I
              pay this back?". Take a look at your expenses and get brutal with
              yourself. This is the time to do away with all the extra spending.
              Things like multiple subscriptions bye, buying lunch everyday at
              work...bye, buying every asoebi for the weekend weddings...bye,
              random money gifts to people...bye. The fact is you can't afford
              all this while drowning in debt. Focus your spending only on your
              basic needs ie. rent, food, transportation. Add up all the
              unnecessary spend you are getting rid of and that gives you the
              monthly amount you can put towards paying down your debt.
            </li>
            <li>
              Include your debt payment in your budget - If you don't have a
              budget, this is the time to make one. Your budget will keep you
              accountable. Add your debt pay down amount to your budget so you
              know where the money is supposed to go to.
            </li>
            <li>
              Pay the debt amount monthly - Do not get distracted by anyone or
              anything. Pay the budgeted debt payment amount towards your debt
              monthly. Use a debt pay down tracker to celebrate your monthly
              wins.
            </li>
            <li>
              Put all extra income towards debt - This is the time to get an
              additional source of income. Have gadgets, clothes around that you
              don't use...sell them. Get an online side gig. Get a weekend only
              gig. Stay focused on getting the money and paying down the debt
            </li>
            <li>
              Delete, Delete, Delete the loan apps- When you aredone paying down
              your debt, delete all the loan apps. Having them available to you
              makes it easy for you to think, let me just get a quick loan, I
              will pay it back.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed text-lg">
            Now that you have paid down your debt, before you loosen the purse
            strings, redirect the debt payment amount to saving up for an
            emergency fund. Why? The reason you got into debt will come up
            again. When next it happens, you will have an emergency fund to use.
          </p>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default LetsTalkDebt;
