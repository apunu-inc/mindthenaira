import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import naijaBudgetsImage from "../assets/naijabudgets.jpg";

const conversation = [
  [
    "When did you start budgeting?",
    "I won't really say I budget. I just know how much I spend on some things. I don't earn a lot and I need to make sure it lasts me till the end of the month. When I get my salary, there are 3 things I do immediately.",
  ],
  [
    "What are those things?",
    "My salary is paid in cash. I give my Mum N50K and put N50K in my Opay account.I leave N60K in my bag to cover for my transportation for the month and the rest just goes on food and small small shopping.",
  ],
  ["That's like a budget then", "Ehn ehn...maybe"],
  [
    "You said you earn N180K. Is that all the money you get monthly?",
    "Sometimes my Madam gives some extra on Saturdays when the weeks shop sales is very good. My elder brother also sends N20/30K to help me anytime I don't have enough for the month",
  ],
  [
    "You only have 20K left after you transfer to your Opay, give your Mum money and put aside your transportation. How do you survive on that?",
    "Most times I don't eat breakfast and I get lunch at work. I work Monday to Saturday so only eat dinners at home and on Sundays. I don't buy anything unless I really need it.",
  ],
  [
    "Ok, What do you do with the money you transfer to your Opay account?",
    "I want to start my own business but I'm not sure what to do yet. I don't have time at all. Also, this is the only way I don't end up spending the money.",
  ],
  [
    "Do you have a pension account?",
    "Pension! What is that? Maybe when I get an office job. I don't even have time to look for one.",
  ],
  [
    "You can open a pension account on your own. It's a new offering from pension providers.",
    "Hmm...I'm not earning a lot o. Where will I get the money from.",
  ],
  [
    "You can start with just N5K. Can I send you a link for setting it up?",
    "No problem, I will look at it.",
  ],
  [
    "If you don't mind, can you share how much you have in Opay? And is it invested?",
    "I started in February so I now have N350K. Not invested o. I don't want anything to happen to that money.",
  ],
  ["Ok, do you know when you will start your business?", "Not yet"],
  [
    "You know you can put the money in a money market fund which is low risk. It's not invested in the stock market and you will still get some returns.",
    "Can I do it with Opay?",
  ],
  [
    "Yes, you can check their offerings and other providers as well before you decide.",
    "Okay",
  ],
  ["Can we rework your budget now?", "This my small money😚. Yes let's do it."],
];

const actions = [
  "Request a salary increase to N200K. If she gets it, she will add 10K to her emergency fund and start investing N10K.",
  "Buy ilera Eko health insurance for N15K from her September salary. She will reduce her Opay transfer to N35K",
  "Reduce money to her Mum to N40K which frees up N10K for her to start putting towards emergency funds",
  "Take free YouTube courses on becoming a Virtual Assistant",
  "Ask for 2 Saturdays off per month. If she gets it, use that weekend to start her errand/event assistant business",
];

const Naijabudgets = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#f8faf9] text-gray-900">
        <header className="bg-[#003d46] px-6 pb-12 pt-8 text-white md:px-12 md:pb-16 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_390px] lg:gap-20">
              <div className="soft-reveal max-w-3xl">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-teal-300">
                  NaijaBudgets
                </p>
                <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                  NaijaBudgets
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-8 text-teal-100 md:text-lg">
                  Naiabudgets shares everyday Nigerians budgets giving you an
                  insight into how they spend their money. Read about Titi's
                  budget and the changes she plans to make after her budget
                  review.
                </p>
              </div>
              <div className="gentle-drift relative mx-auto w-full max-w-[390px] md:mx-0">
                <div className="absolute -inset-2 rounded-[2rem] border border-teal-200/20" />
                <img
                  src={naijaBudgetsImage}
                  alt="Shop assistant at work with handwritten budget notes"
                  className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-center shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <div className="space-y-12">
            {conversation.map(([question, answer], index) => (
              <section
                key={`${question}-${index}`}
                className="soft-reveal"
                style={{ animationDelay: `${120 + index * 55}ms` }}
              >
                <h2 className="max-w-2xl text-xl font-bold leading-8 text-[#003d46] md:text-2xl">
                  {question}
                </h2>
                {answer && (
                  <p className="mt-4 text-base leading-8 text-gray-600">
                    {answer}
                  </p>
                )}
              </section>
            ))}
          </div>

          <section
            className="soft-reveal mt-20 border-t-2 border-[#006a71] pt-10"
            style={{ animationDelay: "900ms" }}
          >
            <p className="max-w-2xl text-base leading-8 text-gray-600">
              We did a full budget review with Titi to get her onto the 4
              pillars of financial fitness. We also discussed opportunities for
              her to increase her income. Below is the output of her current
              budget Vs her new budget:
            </p>
            <h2 className="mt-10 text-2xl font-bold text-[#003d46]">
              The agreed actions are:
            </h2>
            <ol className="mt-6 list-decimal space-y-5 pl-6 text-base leading-8 text-gray-600 marker:font-bold marker:text-[#006a71]">
              {actions.map((action) => (
                <li key={action} className="pl-2">
                  {action}
                </li>
              ))}
            </ol>
          </section>

          <p
            className="soft-reveal mt-16 border-t border-gray-200 pt-8 text-base leading-8 text-gray-600"
            style={{ animationDelay: "1050ms" }}
          >
            Titi O. is a Chemistry graduate of LASU. She completed her NYSC in
            2025 and started working as a shop assistant in January 2026
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Naijabudgets;
