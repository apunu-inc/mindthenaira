import { Link } from "react-router-dom";
import { Calendar, Clock, BookOpen, ChevronLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import heroImg from "../../assets/articleOne/BlogArticleHero.webp";

const BudgetingIsFreedom = () => {
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
            <BookOpen size={12} /> Budgeting
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            Budgeting is Freedom
          </h1>
          <p className="text-teal-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            A practical guide to making budgeting work for you, whether your
            income is large or tight.
          </p>
          <div className="flex items-center justify-center gap-6 text-teal-300 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> June 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> 8 min read
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-10">
        <img
          src={heroImg}
          alt="Person planning budget on a laptop"
          className="w-full rounded-2xl shadow-2xl object-cover h-64 md:h-[420px] ring-1 ring-white/20"
        />
      </div>

      <article className="max-w-3xl mx-auto px-6 md:px-0 py-16 space-y-10">
        <section className="space-y-6">
          <p className="text-gray-600 leading-relaxed text-lg">
            Pause for 30 seconds and think about how you feel about budgeting.
            Be clear on your personal feelings towards it and try not to be
            biased by what you have read or what other people say about the
            concept. Are you for or against budgeting?
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            Now, think about big companies and small businesses. What do you
            think they all have in common? Got any idea? Irrespective of the
            company size and the foundational goal of making a profit, one
            common factor is there is no company without a budget (financial
            plan). Companies are held accountable for how they perform versus
            their budget and the financial market and shareholders support or
            penalise them depending on the situation.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            Why is budgeting important to companies and everybody working in the
            company is working towards achieving this as a target and for you,
            you think it's not necessary. Budgeting is as important to you as it
            is to a company. If you don't have a budget and you are not in
            control of your money, you will suddenly wake up some day and start
            wondering where your money disappeared to.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What does budgeting do for you?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            In your life, the company is you and your financial plan is your
            budget. Your tracking after the end of a period (monthly, quarterly,
            annually) is your performance evaluation. Your budget is a tool that
            enables you achieve your goals and frees you up to spend without
            restriction.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Most people think, I earn too low to need a budget. While this can
            feel valid, you will be surprised at what you find out when you
            start budgeting
          </p>

          <div className="rounded-3xl border border-teal-100 bg-teal-50 p-6">
            <p className="text-teal-700 font-semibold mb-3">
              So, what is a budget?
            </p>
            <p className="text-gray-700 leading-relaxed">
              A budget is any document (written out, spreadsheet) that shows
              clearly all the money you earn from work plus gifts and what you
              will be spending it on.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why you should budget
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>
              <strong>You get to know all your sources of income -</strong> Yes;
              most people do not know how much they actually earn. If you only
              have money flowing in from a job, you will probably know to the
              kobo what you earn. The reality is most Nigerians don't rely only
              on money inflow from a job because there are the multiple side
              hustles plus the dash money that people get from parents, friends
              and family members. It is important that you know all of this in
              order to properly plan for it.
            </li>
            <li>
              <strong>
                {" "}
                You have clarity on what you ask your money to do -{" "}
              </strong>
              Budgeting will force you to answer the question on if you really
              need something or it's a want. You will also get to make choices
              based on what you can afford and what can wait until you can
              afford it. It will help you curb your impulse spending and stay
              focused on what really matters to you.
            </li>
            <li>
              <strong>
                You can put money aside towards your life/financial goals -
              </strong>{" "}
              Budgeting will help you catch all the small small spending you
              tend not to think about. A lot of people think I don't earn enough
              to start saving in this economy. When you budget, you will
              identify the things you don't need that will enable you start
              putting some money aside for saving. No matter how small you think
              it is, just keep saving and your small drops will eventually add
              up to an ocean.
            </li>
            <li>
              <strong>
                You are not clueless about what happened to your money -
              </strong>
              You know that financial stress and money anxiety that you get
              every now and then, budgeting will enable you let go of it. How?
              When you have clarity on your money and what it should do, there
              will be predictability which will give you a sense of control.
              Money may still be tight but just knowing what you do with it will
              calm down your nerves.
            </li>
            <li>
              <strong>You avoid getting into debt -</strong> Budgeting is super
              important when you are a low income earner. Apart from putting you
              in control of what you earn, it helps you avoid borrowing for your
              basic needs and not get trapped into high interest debt. With your
              budget, you will proactively see potential gaps early, have a plan
              for it instead of relying on expensive payday loans.
            </li>
          </ol>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to build your first budget
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>
              <strong>Check your money inflow -</strong> Look into your bank
              accounts for the past 3 to 6 months and check for all the inflows
              you get regularly. This will let you know your true income i.e.
              your salary plus all the extras you get
            </li>
            <li>
              <strong>Review your expenses - </strong>If you have never
              budgeted, you need a baseline to know what you spend on. Start by
              reviewing your expenses for the past 3 months. Why 3 months and
              not just last month? This will enable you see one off payments
              that you may not remember. Also, you probably think you spend N70K
              monthly which is likely N100K as research shows people generally
              underestimate their spending by 30%. Reviewing your expenses
              enables you have a close to accurate numbers to use for making
              your budget. Your bank accounts is a good place to check out your
              outflows. You probably won't remember what you used the cash
              withdrawals for dnd it's okay to label this as others for now. You
              will improve on this going forward.
            </li>
            <li>
              <strong>Check your findings from 1 and 2 above -</strong> Ask
              yourself questions that will give clarity to your inflow and
              outflow patterns e.g. What is my real income per month? Did I
              spend all my income or was able to save some money? How do I
              spend..is it consistent or there are big swings month to month?
              What do I spend on? What are the surprises I didn't expect? Review
              everything again and be aware of your spending pattern. In
              particular, check if how you have spent in the past 3 to 6 months
              is in line with your money goals.
            </li>
            <li>
              <strong>Review your spending pattern.</strong> Compare your
              reviewed expenses to your goals. Are you spending in line with
              what matters most to you?
            </li>
            <li>
              <strong>Categorise your spending.</strong> Categorise your
              spending. To make this easy, you can use our free budget template
              available via here. You can add additional budget category as
              needed.
            </li>
            <li>
              <strong>Make your budget-</strong> Now that you know your money
              inflow and what you spend on, make your budget with what your
              spending targets/goals are for each category. If you want to
              reduce your spending on a particular category, this is the time to
              set it to what you want.
            </li>
          </ol>

          <div className="rounded-3xl p-6 bg-gray-50 border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              And that's it, you have your budget. You can replicate the budget
              you made for the remaining months in the year and just update it
              with latest information available if necessary.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Keep budgeting as a routine
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            A budget is a live document, not something you create once and
            forget. Set a reminder to review it every month for 30 minutes. That
            check-in will help you stay on track and respond to changes.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Your goal is not just to have a budget; it is to spend in line with
            it so you can reach your money goals.
          </p>

          <div className="rounded-3xl border border-teal-100 bg-teal-50 p-6">
            <p className="text-teal-700 font-semibold mb-3">
              Coming up next is spend tracking. Why? When you have your budget
              in place, you need to track how you perform vs. the budget.
            </p>
            {/* <p className="text-gray-700 leading-relaxed mb-5">
              Use our budget template built for Nigerian earners and make your
              first budget faster.
            </p>
            <Link
              to="/budget-template"
              className="inline-flex items-center gap-2 bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-800 transition-colors"
            >
              Get the Budget Template
            </Link> */}
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default BudgetingIsFreedom;
