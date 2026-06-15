import { Link } from "react-router-dom";
import { Calendar, Clock, BookOpen, ChevronLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const assetsDebtsRows = [
  {
    asset: "Bank Accounts",
    assetValue: "300,000",
    debt: "Loans",
    debtValue: "50,000",
  },
  {
    asset: "Investment Accounts",
    assetValue: "100,000",
    debt: "Credit Cards",
    debtValue: "0",
  },
  { asset: "House", assetValue: "0", debt: "House Mortgage", debtValue: "0" },
  { asset: "Car", assetValue: "0", debt: "Other Debts", debtValue: "15,000" },
  { asset: "Valuables", assetValue: "0", debt: "", debtValue: "" },
  { asset: "Other Assets", assetValue: "0", debt: "", debtValue: "" },
];

const DoYouKnowYourFinancialStatus = () => {
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
            <BookOpen size={12} /> Net Worth Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            Do You Know Your Financial Status?
          </h1>
          <p className="text-teal-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Let’s calculate your net worth and turn your assets and debts into a
            clear financial snapshot.
          </p>
          <div className="flex items-center justify-center gap-6 text-teal-300 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> June 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> 6 min read
            </span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 md:px-0 py-16">
        <p className="text-gray-600 leading-relaxed text-lg mb-5">
          Have you heard the word net worth? It is a snapshot of your financial
          status at a point in time. You can think of it as your personal
          balance sheet.
        </p>

        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 mb-10 shadow-sm">
          <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold mb-3">
            Key formula
          </p>
          <p className="text-gray-700 text-xl font-semibold">
            Net worth = Assets – Debts
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            The formula is the easy part. The emotional part is getting real
            with your self and putting a pen to paper or using a spreadsheet to
            calculate what your net worth is.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why do you need a networth
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Knowing your networth is the starting point of your financial
            journey. It gives you the snapshot of your financial status and
            helps you develop actionable financial goals to work towards.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When you know your net worth, you can make decisions with confidence
            instead of guessing how much money you really have.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to calculate your net worth
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            You are probably doing this for the first time. So, take a deep
            breath and know that is not a very difficult process. The first time
            will take some time as you are setting it up for the first time.
            After the set up, it will take you just 5 to 10 minutes to update
            the numbers or add new rows.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Some key words definition before we get into the calculation
            steps.{" "}
          </p>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold mb-3">
                Assets
              </p>
              <p className="text-gray-600 leading-relaxed">
                Anything that 100% belongs to you. You own it and there is no
                financial obligation on it to any bank or anyone. e.g. the money
                in your bank account, your paid off house.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold mb-3">
                Debts / Liabilities
              </p>
              <p className="text-gray-600 leading-relaxed">
                What you owe to other people and you have an obligation to pay
                it back based on the agreement in place. e.g. payday loan, bank
                loan, house mortgage
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 font-semibold">
              Now, let’s get into the steps:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-600">
              <li>
                {/* Make a list of accounts and obligations: bank accounts,
                investment accounts, loan providers (personal and
                institutional), credit cards, house mortgage. */}
                Make a list of all your;
                <ul>
                  <li>bank accounts</li>
                  <li>investment accounts</li>
                  <li>loan providers (Personal + Institutional)</li>
                  <li> credit cards if you use credit cards</li>
                  <li>House Mortgage</li>
                </ul>
              </li>
              <li>
                Itemize the tangible things you own:
                {/* paid off house, paid offcar, valuables like gold. */}
                <ul>
                  <li>paid off house</li>
                  <li>paid off car</li>
                  <li>valuables like gold.</li>
                </ul>
              </li>
              <li>Assign the current value to each item in your list.</li>
              <li>
                Create a table with two columns: Assets and Debts, then add the
                values.
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Assets vs Debts
          </h2>
          <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm">
            <table className="min-w-full border-separate border-spacing-y-3 text-left">
              <thead>
                <tr>
                  <th className="bg-gray-100 px-5 py-4 text-sm font-semibold text-gray-900">
                    Assets
                  </th>
                  <th className="bg-gray-100 px-5 py-4 text-sm font-semibold text-gray-900">
                    Amount
                  </th>
                  <th className="bg-gray-100 px-5 py-4 text-sm font-semibold text-gray-900">
                    Debts
                  </th>
                  <th className="bg-gray-100 px-5 py-4 text-sm font-semibold text-gray-900">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {assetsDebtsRows.map((row, index) => (
                  <tr key={index} className="bg-white border-b last:border-b-0">
                    <td className="px-5 py-4 text-gray-700">{row.asset}</td>
                    <td className="px-5 py-4 text-gray-700">
                      {row.assetValue}
                    </td>
                    <td className="px-5 py-4 text-gray-700">{row.debt}</td>
                    <td className="px-5 py-4 text-gray-700">{row.debtValue}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 border-t text-gray-900 font-semibold">
                  <td className="px-5 py-4">Total</td>
                  <td className="px-5 py-4">400,000</td>
                  <td className="px-5 py-4">Total</td>
                  <td className="px-5 py-4">65,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="mt-6 rounded-3xl border border-teal-100 bg-teal-50 p-6"
            style={{
              background:
                "linear-gradient(135deg, #003d46 0%, #006A71 55%, #00878f 100%)",
            }}
          >
            <p className="text-white text-lg font-semibold mb-2">
              Net worth result
            </p>
            <p className="text-white leading-relaxed">
              Net worth is calculated as Assets minus Debts. For the values
              above, your net worth would be:
            </p>
            <p className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-3 text-teal-800 font-semibold shadow-sm">
              400,000 – 65,000 = 335,000
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to do next
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            There you go. You have your very first net worth calculated. How do
            you feel about it? Is it in line with your expectation? Are you
            surprised? Happy about it? Not Happy about it? Take some time out to
            feel out yourself on the output and get comfortable with it.
          </p>

          <p>
            When you are done feeling yourself out, ask yourself below
            questions:
          </p>
          <ol className="list-disc list-inside space-y-3 text-gray-600">
            <li>Am I satisfied with my net worth?</li>
            <li> If not, am I ready to make changes to improve my networth?</li>
            {/* <li>Are you happy with where you are?</li>
            <li>
              If not, are you ready to make changes to improve your net worth?
            </li> */}
          </ol>
        </section>

        <section className="mb-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Keep your numbers updated
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your answers to above 2 questions will determine how you manage your
            financial journey.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Going forward, you should update your net worth every month.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-gray-600 leading-relaxed mb-4">
            For your net worth calculator, you can download and use the word
            document here or make a copy of our free net worth calculator via
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:mindthenaira@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
            >
              Contact us for the download
            </a>
            <a
              href="https://docs.google.com/spreadsheets/d/1PlofW5ZH9RxN5dWeJ32_mHiq4Me1QgdBQAho778FZ9w/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-teal-700 bg-white px-5 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-colors"
            >
              Open free net worth calculator
            </a>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default DoYouKnowYourFinancialStatus;
