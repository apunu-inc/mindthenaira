import { Link } from "react-router-dom";
import {
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  TrendingDown,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import womanOne from "../../assets/articleTwo/womanOne.webp";
import womanTwo from "../../assets/articleTwo/womanTwo.webp";
import manThree from "../../assets/articleTwo/manThree.webp";
import manFour from "../../assets/articleTwo/manFour.webp";
const stories = [
  {
    id: "bunmi",
    name: "Bunmi",
    topic: "Bunmi Tackles Personal Care Spending",
    image: womanOne,
    imageAlt: "Black woman doing her skincare routine with various products",
    intro:
      "I'm concerned about my skin as it is quite sensitive so I find myself always buying body and face care products in a bid to get products that are better than what I am currently using. I have so many products that are only partially used. I added up what I spent on personal care products from January to March and it was 20% of my salary. Yes, it was that high. I bought 5 different types of sunscreen, 2 different sets of face wash, cleanser, toner and face cream, and 3 tubs of cream that I had not used at all. My Q1 expense audit exposed to me how this was taking up a big chunk of my salary.",
    acts: [
      {
        number: "01",
        title: "The WhatsApp Product Sale",
        text: "I checked all the products I have for the use by/expiry date and sorted them into 2 piles. Pile 1 was expired and I threw them away while pile 2 was still good for use by me or other people. I then sent out a broadcast to all my whatsapp contacts that I was doing a personal care product sale indicating the products were mostly new to barely used and anyone interested in the sale should indicate interest to be added to a group. I created the group and informed everyone when the product posting will happen. I chose a weekend day (Saturday) and a time I knew most people will have availability to check their messages (7pm to 9pm). I listed new, unopened products at 75% of going market rate, opened barely used products at 50% of going rate and partially used products 30% of going market rate. I was able to sell off 60% of listed products after which I closed the whatsapp group. I gave out the remaining products to friends and family.",
      },
      {
        number: "02",
        title: "Using the Right Product Quantities",
        text: "Probably because I was checking a lot of personal care pages for product prices or just my social media algorithm clocking my interest, I saw a video that shared what quantity of product I should be using across my product range. I realised I was using 3X to 5X what I should be using just because I thought the more product I use, the more effective the product is. I started by reducing my body wash a little bit and I was as clean as I used to be. After some days, I went down to half of my usual use and my sponge was still soapy enough and I was clean. With this, I reapplied the same to my shampoo, conditioner, facial care and all other products. To be honest, it was difficult to reduce my toothpaste quantity but I did it. I still overuse sunscreen but I’m working up the courage to use the right quantity. Hopefully I will get there soon.",
      },
    ],
    impact:
      "I got N252K from the product sale which I immediately transferred to Cowrywise and invested. I have not bought any unneeded products since my expense audit and I have vowed to stick to the tried and true products that work for me. Whenever I get the itch to buy new products, I open my Cowrywise account to see how well my personal care fund is doing. And finally, my products are all taking a long time to finish.",
    impactHighlight: "N252K invested from product sale alone",
  },
  {
    id: "tunji",
    name: "Tunji",
    topic: "Tunji on Tea and Coffee",
    image: manThree,
    imageAlt: "Black man sitting at a desk with a mug of coffee while working",
    introSegments: [
      {
        text: "There are Tea people and there are Coffee people but I Tunji is a Tea and Coffee person. My work day goes like this, lipton tea to wake me up and get going. Then I have about 2 cups of coffee through my work day and end the day with chamomile tea to calm down for sleep. My expense audit threw up that I spent N100K on Coffee and Tea in Q1. Somehow, I didn't realise I was spending so much for this part of my daily existence. I'm sure you are also wondering and thinking it's impossible you spend so much. I stock up from Jumia where lipton costs ",
      },
      {
        text: "N20K quarterly",
        link: "https://www.jumia.com.ng/catalog/?q=lipton",
      },
      { text: ", coffee is " },
      {
        text: "N20K per month",
        link: "https://www.jumia.com.ng/catalog/?q=gold+kili+instant+coffee",
      },
      { text: " and chamomile tea is another " },
      {
        text: "N6,000 monthly",
        link: "https://www.jumia.com.ng/catalog/?q=super+blend+chamomile+tea",
      },
      {
        text: ". This was a spend bucket I didn't realise I was spending so much on and to be honest I can't afford it. My Q1 expense audit helped me realise this.",
      },
    ],
    acts: [
      {
        number: "01",
        title: "Understanding WHY I Drink Tea and Coffee",
        text: "I evaluated why I drink tea and coffee. Yes, this was very urgent to understand because your boy can’t afford to sustain this habit. My findings are I picked up drinking tea from my Mum. She started sharing her tea with me since I was like 3 or 4 years old. Although she drank differently than me, her lipton tea was doused with lemon ginger and a big helping of honey. To wade sickness away she said. I just drank mine black. I am a remote working backend developer so at some point during the day, I usually need a pick me up to stay awake and this is where my instant coffee comes in. I realised that by the end of my work day, I’m always charged up and a friend recommended chamomile tea as a way to wind down for the day. So now I know why I do what I do. I have a tough decision to make, read my 2nd unhinged act for what I did",
      },
      {
        number: "02",
        title: "Double Brewing and Cold Brew Batching",
        text: "Don’t laugh at me but I started double brewing my lipton tea bags. On day 1 of the teabags life, I steep as I normally do for 3 minutes and I put it in a covered bowl in the fridge for day 2 use. For day 2, I take it out and I steep longer for 5 minutes. That is instant 50% reduction on my morning tea cost. For coffee, I switched from making hot coffee to making cold coffee which gives me a double batch. I split this into 2 and keep 1 batch in the fridge until I need it. I also started stepping out of the house for a mini walk during my lunch break for a pick me up. Lastly, I now take chamomile tea only on the days that I actually need it. I switched up my chamomile drinking habit to drinking warm water which has a similar effect on me.",
      },
    ],
    impact:
      "I am less strung out at the end of the day and it is easier for me to calm down and go to sleep. I also picked up on walking which I now do on my lunch break and after I’m done with work for the day. This is great for my health as I have less aches and cramps. On the financial side, I was able to reduce my spend on Coffee and Tea by 50% and I still have chamomile left over from the last pack. I intend to redirect the savings into investment. I need to make sure I don’t spend it on another money guzzling habit.",
    impactHighlight: "50% cut on coffee & tea spend",
  },
  {
    id: "bola",
    name: "Bola",
    topic: "Bola Continues to Drink Water",
    image: womanTwo,
    imageAlt: "Black woman drinking water from a glass bottle outdoors",
    introSegments: [
      {
        text: "I love drinking water. Some people tell me I drink too much water but I think my body just loves water and I enjoy it too. Oh, I don't just drink water, I also eat. My go to water is Eva water and I spend ",
      },
      {
        text: "N25K on water monthly",
        link: "https://www.supermart.ng/products/eva-table-water-150-cl-x12?pr_prod_strat=e5_desc&pr_rec_id=282498068&pr_rec_pid=8403957776681&pr_ref_pid=8403957940521&pr_seq=uniform",
      },
      {
        text: " as I drink minimum 3 litres of water daily. That is a lot of money just on water.",
      },
    ],
    acts: [
      {
        number: "01",
        title: "Switching to a Water Filter",
        textSegments: [
          {
            text: "I considered multiple options like switching to satchet water, switching to Cway water or just going with the water from my apartment. My landlord swears he has the purest water in the area but I don't courage to start drinking that. I settled on buying ",
          },
          {
            text: "a water filter",
            link: "https://www.jumia.com.ng/catalog/?q=water+filter+purifier",
          },
          {
            text: " from Jumia for N8K which I need to change at most every four months. Okay, Okay, I trusted the water purifier but I was still worried if the water was actually pure enough to drink. I continued to buy water for about three weeks until I started drinking from the tap. I noticed though that my water consumption dropped rapidly which meant I still had some hesitancy with the water filter.",
          },
        ],
      },
      {
        number: "02",
        title: "Mum's Old Fashioned Advice",
        text: "I was visiting my Mum and randomly mentioned to her how my water consumption had dropped since I bought the water filter and I was considering going back to buying Eva water as my body feels funny from not drinking enough water. My Mum smiles and said “Why can’t you just boil your water?” I was like ahn ahn and she responded “Is that not what we used to drink when you were growing up and lived here?” At that point, it clicked for me. I assumed my parents boiled water because they couldn’t afford to buy water as we only offered guests bottled water. In reality, it was a purification action. People of mind the naira, I immediately layered my purified water with boiling for extra assurance. I change my filters every six months as I now like the idea of using purified water for cooking and drinking.",
      },
    ],
    impact:
      "My water drinking went back up and now I enjoy it more knowing that it costs me so much less than below. I also went from spending N25K per month which is N300K a year to spending N16K a year on water filters. My water boiling did not increase my electricity bill as I combine it with other cooking acts. Want to make eba, I boil enough water to fill up my bottles for the next days and the eba I am making. What did I do with the money saved, I increased my baby girl spending money by N10K and added the remaining N15K to my monthly investment value.",
    impactHighlight: "From N300K/year to N16K/year on water",
  },
];

const renderSegments = (segments) =>
  segments.map((seg, i) =>
    seg.link ? (
      <a
        key={i}
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
  );

const UnhingedExpenses = () => {
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
            <BookOpen size={12} /> Expense Reduction
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            Unhinged Ways We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              Cut Expenses
            </span>{" "}
            in Nigeria
          </h1>
          <p className="text-teal-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Yes, we actually did them.
          </p>
          <div className="flex items-center justify-center gap-6 text-teal-300 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> April 2026{""}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> 10 min read
            </span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-10">
        <img
          src={manFour}
          alt="Black woman reviewing her household expenses on a laptop"
          className="w-full rounded-2xl shadow-2xl object-cover h-64 md:h-[420px] ring-1 ring-white/20"
        />
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 md:px-0 py-16">
        {/* Intro */}
        <p className="text-gray-600 leading-relaxed text-lg mb-5">
          There exists the common rules for saving money like focus on the big
          expenses and don’t worry about the small expenses. We decided to turn
          this on it’s head and see how much we can save by reducing the
          overlooked expenses.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mb-5">
          Bunmi was concerned about how much she spends on personal care. Tunji
          wondered which of his double habit of tea and coffee to stick to. And
          Bola, who drinks 3 litres of water a day, did a double take when she
          computed how much she spends on water annually.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mb-10">
          Read on to learn from our experience and how to apply it to yourself.
        </p>

        {/* What is a Q1 Expense Audit Callout */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-14 border-l-4 border-teal-500"
          style={{ background: "linear-gradient(135deg, #e6f7f8, #f0fafb)" }}
        >
          <p className="text-gray-700 font-semibold mb-2">
            What is a Q1 Expense Audit?
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            A quarterly expense audit is when you review every naira you spent
            over the last three months. The goal is not to feel bad, it is to{" "}
            <strong className="text-teal-700">see clearly</strong> where your
            money actually goes, so you can make intentional decisions. Many
            people are shocked by what they find.
          </p>
        </div>

        {/* Stories */}
        <div className="space-y-24">
          {stories.map((story, idx) => (
            <section key={story.id}>
              {/* Section heading */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-white text-sm font-bold w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #006A71, #004652)",
                  }}
                >
                  0{idx + 1}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {story.topic}
                </h2>
              </div>

              {/* Section image */}
              <img
                src={story.image}
                alt={story.imageAlt}
                className="w-full rounded-2xl object-cover h-64 md:h-80 mb-8 shadow-md"
              />

              {/* Intro paragraph */}
              <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                {story.introSegments
                  ? renderSegments(story.introSegments)
                  : story.intro}
              </p>

              {/* Acts */}
              <div className="space-y-6 mb-8">
                {story.acts.map((act) => (
                  <div
                    key={act.number}
                    className="rounded-2xl border border-gray-100 p-6 md:p-8 bg-white shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
                        Unhinged Act #{act.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {act.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {act.textSegments
                        ? renderSegments(act.textSegments)
                        : act.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Impact */}
              <div
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "linear-gradient(135deg, #003d46, #006A71)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown size={16} className="text-emerald-300" />
                  <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest">
                    Impact of {story.name}'s Unhinged Acts
                  </p>
                </div>
                <p className="text-white/90 leading-relaxed mb-4 text-sm md:text-base">
                  {story.impact}
                </p>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2">
                  <span className="text-emerald-300 font-bold text-sm">✓</span>
                  <span className="text-white text-sm font-medium">
                    {story.impactHighlight}
                  </span>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Closing */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What can you take from this?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            The common advice is to cut your big expenses. That is true. But
            Bunmi, Tunji, and Bola show us that the overlooked,
            &ldquo;small&rdquo; spending buckets can quietly consume a
            significant portion of your income month after month.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            The first step is always the same:{" "}
            <strong className="text-gray-800">
              do your own expense audit.
            </strong>{" "}
            Look at the last three months of your spending across every
            category. You may be surprised even shocked at what you find.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Then, like Bunmi, Tunji, and Bola, ask yourself the same questions:
            Why do I spend on this? What happens if I change just one thing
            about how I do it? The answers might lead you to your own unhinged
            act and a healthier bank balance.
          </p>
          <p className="text-gray-700 font-semibold text-lg mb-10">
            Your wallet will thank you. 💚
          </p>

          {/* CTA */}
          <div
            className="rounded-2xl p-8 text-white text-center"
            style={{
              background: "linear-gradient(135deg, #003d46 0%, #006A71 100%)",
            }}
          >
            <p className="text-teal-200 text-sm font-medium uppercase tracking-widest mb-3">
              Free Resource
            </p>
            <h4 className="text-xl md:text-2xl font-bold mb-3">
              Track your own expenses with our Budget Template
            </h4>
            <p className="text-teal-100 mb-6 max-w-md mx-auto">
              Our free budget template is designed for Nigerian earners to help
              you see where every naira goes and take back control.
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

export default UnhingedExpenses;
