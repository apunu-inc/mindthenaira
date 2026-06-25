import { Link } from "react-router-dom";
import {
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  ChevronLeft,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import heroImg from "../../assets/articleOne/BlogArticleHero.webp";
import manSavingsJarImg from "../../assets/articleOne/ManSavingsJar.webp";
import womanCookingImg from "../../assets/articleOne/WomanCooking.webp";
import peersImg from "../../assets/articleOne/Peers.webp";
import workingOnLaptopImg from "../../assets/articleOne/WorkingOnLaptop.webp";

const tips = [
  {
    number: "01",
    title: "Have a Budget",
    image: manSavingsJarImg,
    imageAlt: "Man with a savings jar budgeting money",
    content: [
      {
        type: "p",
        text: "A lot of people don’t want to hear the word budget as they consider it restrictive and an extra burden they do not want when they are already struggling with high cost of living. Changing your mindset on budgeting and seeing it as a tool to achieve your goal will go a long way in helping you set up the right money habits that will enable you start saving. ",
      },
      {
        type: "breakdownLabel",
        text: "As a beginner, try the 70/20/10 budget rule which makes budgeting very simple for you.:",
      },
      {
        type: "breakdown",
        rows: [
          {
            pct: "70%",
            label: "Needs",
            amount: "N35K",
            desc: "Rent, Transportation, Food",
          },
          {
            pct: "20%",
            label: "Savings",
            amount: "N10K",
            desc: "Your future self will thank you",
          },
          {
            pct: "10%",
            label: "Fun & Buffer",
            amount: "N5K",
            desc: "Treats and surprises",
          },
        ],
      },
      {
        type: "p",
        text: "If putting N10K towards savings is too much at this point, you can reduce it to N5K until you build up the capacity to increase it to N10K. The goal is to start and to do it every month.",
      },
    ],
  },
  {
    number: "02",
    title: "Save as Soon as You Get Your Salary",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Person depositing money into savings",
    content: [
      {
        type: "p",
        text: "If you can, set up an automated transfer of your N10K savings out of your account to happen the same day you receive your salary. Doing this will ensure your savings is protected because if you say I will save what remains, there is a high probability that there will be nothing left. ",
      },
      {
        type: "pWithLinks",
        segments: [
          {
            text: "This concept is called pay yourself first and your savings is treated like any regular bill. If you are in formal employment, one way you can easily do this saving is by requesting automatic deduction of your savings into your ",
          },
          {
            text: "Personal Pension Plan",
            link: "https://www.pencom.gov.ng/personal-pension-plan-ppp/",
          },
          { text: ". Informal sector workers can also take advantage of  " },
          {
            text: "Personal Pension Plan",
            link: "https://www.pencom.gov.ng/personal-pension-plan-ppp/",
          },
          {
            text: " as a saving option but you have to do the transfer yourself or set up the automated deduction.",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Control Your Biggest Expenses",
    image: womanCookingImg,
    imageAlt: "Woman cooking at home to save money",
    content: [
      {
        type: "p",
        text: "As a low earner, the small small things you spend on are important but the most important are the big expenses. So, focus on ways in which you can reduce them. In Nigeria, the biggest expenses are rent (if you live alone), food, and transportation.",
      },
      {
        type: "expenseList",
        items: [
          {
            label: "Rent",
            emoji: "🏠",
            text: "Rent payment is usually annual and this should not be a surprise to you. We know landlords are now very aggressive in their tactics so try to put some money aside every month towards your rent. Remember the N35K is for your needs so a portion of this should be saved towards your annual rent.",
          },
          {
            label: "Food",
            emoji: "🍲",
            segments: [
              {
                text: "Food is now very expensive….phewww and we can't exist on air. To keep food cost low, try to cook at home and reduce the cost of cooking by batch cooking. Hopefully, Electricity is good enough in your area so you can refrigerate your batch cooked meals. Try to avoid buying snacks and drinks in traffic, the cost of these add up really fast. If you are a snack person, then make the effort to buy a carton of what you like which will reduce the cost by close to 50%. If you can, shop basic food items like Garri, Rice, Beans in bulk. For example, a 50Kg bag of rice is now",
              },
              {
                text: "N72K",
                link: "https://www.supermart.ng/products/big-bull-nigerian-parboiled-rice-50-kg?pr_prod_strat=jac&pr_rec_id=630c3f324&pr_rec_pid=8402678350121&pr_ref_pid=8402765283625&pr_seq=uniform",
              },
              { text: " and a 4kg paint bucket is " },
              {
                text: "N8.4K",
                link: "https://www.supermart.ng/products/rice-4-l-local?_pos=10&_sid=f5e781edd&_ss=r",
              },
              {
                text: ". Per Kg, the paint bucket is 46% higher than a 50Kg bag. A 50Kg bag can also be daunting but you can do a bag share with 4 other people. ",
              },
            ],
          },
          {
            label: "Transport",
            emoji: "🚌",
            text: "Transport cost in Nigeria particularly in the big cities like Lagos, Abuja, Portharcourt can’t be predicted. The cost is what you get when you step out. To manage this cost, try to combine trips as much as possible and instead of taking a korope/bike for the trip home from your bus stop, try walking instead. Walking not only helps you save money, it also helps you stay healthy. Also be on the look out for cheaper routes you can use for getting to your destination. For those in Lagos, BRT is a cheaper option vs. other alternatives.",
          },
          {
            label: "Data",
            emoji: "📱",
            segments: [
              {
                text: "Data usage in Nigeria always feels like it's sped up. You load your phone and before you blink, you are out of data. To manage this, use free wifi where possible and be on the look out for bundle offers from the providers. The cheapest offer on the market now is from ",
              },
              {
                text: "Glo",
                link: "https://www.gloworld.com/ng/glo-revised-data-bundles",
              },
              { text: " which gives you 5.2gb total data vs. " },
              { text: "MTN", link: "https://www.mtn.ng/data/data-plans/" },
              { text: " and " },
              {
                text: "Airtel's",
                link: "https://www.airtel.com.ng/data/data_offers/data_plans",
              },
              { text: " 4gb total data." },
            ],
          },
          {
            label: "🐱‍💻Tips",
            text: "Another expense you need to work on even though it looks like it’s not big is that urge to just buy something. You will need to try to stick to your N5K fun/buffer money as much as possible. Also accept that you do not have the capacity to send anyone urgent N2K because you just don’t have it. Always pause before buying anything or sending money to people.",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Set a Weekly Spending Limit",
    image: null,
    content: [
      {
        type: "p",
        text: "Let’s assume you already transferred out your savings so now you only have N40K left to spend. We have approximately 4.2 weeks per month so this means you have N10K to spend per week. If you struggle with budgeting and sticking to it, a spending limit helps you know that for everything you spend on in a week, you can’t exceed the limit as that will mean you will be out of money before the end of the month.",
      },
    ],
  },
  {
    number: "05",
    title: "Avoid Peer Pressure",
    image: peersImg,
    imageAlt: "Group of friends socialising",
    content: [
      {
        type: "p",
        text: "Get comfortable with saying No to what you can’t afford and is not part of your budget. Buy my Asoebi, be okay with asking if you can just show up with the colour of the Asoebi. We are contributing money for this person’s birthday/wedding/this/that, be okay with saying you will pass for now or feel no shame with dropping what you can comfortably give even if it’s just N500. Live on what you can afford, don’t get forced into trying to impress people.",
      },
      {
        type: "p",
        text: "We live in a society where everyone is showoffy with their latest buys and are always trying to impress others. Don’t get pulled into this and focus on your own self.",
      },
    ],
  },
  {
    number: "06",
    title: "Try to Increase Your Income",
    image: workingOnLaptopImg,
    imageAlt: "Person working on a laptop to earn extra income",
    content: [
      {
        type: "p",
        text: "Earning N50K does not mean you have to accept it as the status quo. Think of ways you can earn additional income. There are many options to try and a few are:",
      },
      {
        type: "sideHustles",
        items: [
          "Hostessing at events",
          "Tutoring school kids",
          "Social media management",
          "POS services",
        ],
      },
      {
        type: "p",
        text: "An additional N10K per month is a big changer for you.",
      },
    ],
  },
  {
    number: "07",
    title: "Make Your Savings Not Easily Accessible",
    image: null,
    content: [
      {
        type: "pWithLinks",
        segments: [
          {
            text: "You should put a friction between you an accessing your savings. If you can easily withdraw it, you most likely would. Using the ",
          },
          {
            text: "Personal Pension Plan",
            link: "https://www.pencom.gov.ng/personal-pension-plan-ppp/",
          },
          {
            text: " automatically locks your savings for a period. Also using platforms like cowrywise gives you the option to lock your savings for a defined period by you. Leverage these options to protect your savings from you.",
          },
        ],
      },
    ],
  },
];

const TipContent = ({ content }) =>
  content.map((block, i) => {
    if (block.type === "p") {
      return (
        <p key={i} className="text-gray-600 leading-relaxed mb-4">
          {block.text}
        </p>
      );
    }
    if (block.type === "breakdownLabel") {
      return (
        <p key={i} className="text-gray-600 leading-relaxed mb-3">
          {block.text}
        </p>
      );
    }
    if (block.type === "breakdown") {
      return (
        <ul key={i} className="space-y-3 mb-4">
          {block.rows.map((row) => (
            <li
              key={row.pct}
              className="flex items-start gap-3 bg-teal-50 rounded-xl px-4 py-3"
            >
              <span className="text-teal-700 font-bold text-sm min-w-[36px]">
                {row.pct}
              </span>
              <span className="text-gray-700 text-sm">
                <strong>{row.label}</strong> ({row.amount}) — {row.desc}
              </span>
            </li>
          ))}
        </ul>
      );
    }
    if (block.type === "expenseList") {
      return (
        <div key={i} className="space-y-5 mt-2">
          {block.items.map((item) => (
            <div key={item.label} className="border-l-4 border-teal-500 pl-4">
              <p className="font-semibold text-gray-800 mb-1">
                {item.emoji} {item.label}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.segments
                  ? item.segments.map((seg, j) =>
                      seg.link ? (
                        <a
                          key={j}
                          href={seg.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-700 underline hover:text-teal-900"
                        >
                          {seg.text}
                        </a>
                      ) : (
                        seg.text
                      ),
                    )
                  : item.text}
              </p>
            </div>
          ))}
        </div>
      );
    }
    if (block.type === "pWithLinks") {
      return (
        <p key={i} className="text-gray-600 leading-relaxed mb-4">
          {block.segments.map((seg, j) =>
            seg.link ? (
              <a
                key={j}
                href={seg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                {seg.text}
              </a>
            ) : (
              seg.text
            ),
          )}
        </p>
      );
    }
    if (block.type === "sideHustles") {
      return (
        <div key={i} className="grid grid-cols-2 gap-3 mt-2 mb-8">
          {block.items.map((option) => (
            <div
              key={option}
              className="bg-teal-50 border border-teal-100 rounded-xl px-3 py-3 text-center text-sm font-medium text-teal-800"
            >
              {option}
            </div>
          ))}
        </div>
      );
    }
    return null;
  });

const HowToSaveN50K = () => {
  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 md:px-0 pt-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-teal-700 hover:text-teal-900 font-medium transition-colors"
        >
          <ChevronLeft size={15} /> Back to Blog
        </Link>
      </div>

      {/* Hero */}
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
            <BookOpen size={12} /> Saving
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            How to Save on a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              N50,000 Salary
            </span>{" "}
            in Nigeria
          </h1>
          <p className="text-teal-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            A money guide that actually works (tried and tested).
          </p>
          <div className="flex items-center justify-center gap-6 text-teal-300 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> April 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> 8 min read
            </span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-10">
        <img
          src={heroImg}
          alt="Blog article hero image"
          className="w-full rounded-2xl shadow-2xl object-cover h-64 md:h-[420px] ring-1 ring-white/20"
        />
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 md:px-0 py-16">
        {/* Intro */}
        <p className="text-gray-600 leading-relaxed text-lg mb-5">
          Earning a low salary can feel overwhelming and many Nigerians believe
          saving money on a salary as low as N50,000 is impossible. This is a
          fair conclusion as rent, transport, food, airtime, family
          responsibilities and rising prices can make you feel like there is
          nothing left to save. Your focus is on just making the bills and
          stretching the salary to sustain you till the end of the month.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mb-5">
          Now, we have to be honest. Saving on N50,000 will be difficult but it
          is still possible if you make some changes to your choices. There may
          not be a huge amount to immediately save but consistently building up
          your savings will protect you from emergencies and reduce your
          financial stress.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mb-10">
          This money guide shows you how it is possible to save on a N50,000
          monthly salary in Nigeria.{" "}
        </p>

        {/* Callout */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-14 border-l-4 border-teal-500"
          style={{ background: "linear-gradient(135deg, #e6f7f8, #f0fafb)" }}
        >
          <p className="text-gray-700 leading-relaxed text-base md:text-lg italic mb-3">
            "You know how people always saw what’s N2K, what’s N5K, that’s small
            money na, how that one fit help me. Yes, it looks small but N5K
            quickly becomes{" "}
            <strong className="not-italic text-teal-700">
              N30K in six months
            </strong>{" "}
            and{" "}
            <strong className="not-italic text-teal-700">
              N60K in twelve months.
            </strong>
            "
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            If something unexpected comes up, you can pay for it without taking
            an expensive pay day loan. And know that things will happen, sudden
            sickness in the family, no more transport money due to a surge in
            transport costs, new clothes needed for an interview, school/course
            cost or even needing to order food due to being in a hard place.{" "}
            <strong className="text-teal-700">
              Accept that small savings matter
            </strong>{" "}
            and when invested, your small savings starts growing.
          </p>
        </div>

        {/* Steps heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          How do you start saving?
        </h2>

        {/* Tips */}
        <div className="space-y-16">
          {tips.map((tip) => (
            <div key={tip.number}>
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="text-white text-sm font-bold w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #006A71, #004652)",
                  }}
                >
                  {tip.number}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {tip.title}
                </h3>
              </div>

              {tip.image && (
                <img
                  src={tip.image}
                  alt={tip.imageAlt}
                  className="w-full rounded-2xl object-cover h-56 md:h-72 mb-6 shadow-md"
                />
              )}

              <TipContent content={tip.content} />
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="mt-8 border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed mb-5">
            As you apply above steps and work on building your savings, try to
            stick to your budget as this will help you achieve your saving goal.
            Don’t wait until you start earning a bigger salary, start where you
            are so you build the habit of saving and you will carry this with
            you as you start to earn more.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Do not transfer to your savings account and the next day you are
            already withdrawing it. Also don’t think that the N1K you spend on
            lunch at work don’t matter, this adds up quickly to{" "}
            <strong className="text-gray-800">N22K a month</strong> which is
            almost 50% of what you earn. The small expenses are as important as
            the big expenses for you.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            If you are able to save only N5K per month, save it and start
            building the saving habit. When you see your savings increasing as
            you invest it and keep adding to it, you will find yourself
            increasing the amount. It is not easy to save when you earn N50K but
            as we said in the beginning, it is possible by applying the steps we
            have shared. Be consistent with what you can afford to start with
            and start this month.
          </p>
          <p className="text-gray-700 font-semibold text-lg mb-10">
            Let's start saving. 💚
          </p>

          {/* CTA */}
          <div
            className="rounded-2xl p-8 text-white text-center"
            style={{
              background: "linear-gradient(135deg, #003d46 0%, #006A71 100%)",
            }}
          >
            <p className="text-teal-200 text-sm font-medium uppercase tracking-widest mb-3">
              Free Resource.
            </p>
            <h4 className="text-xl md:text-2xl font-bold mb-3">
              Want to build your budget from scratch?
            </h4>
            <p className="text-teal-100 mb-6 max-w-md mx-auto">
              Download our free budget template designed specifically for
              Nigerian earners.
            </p>
            <Link
              to="/budget-template"
              className="inline-flex items-center gap-2 bg-white text-teal-800 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors shadow"
            >
              Get the Free Budget Template <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
};

export default HowToSaveN50K;
