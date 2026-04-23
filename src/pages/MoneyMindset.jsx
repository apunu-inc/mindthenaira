import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const questions = [
  {
    text: "When I receive unexpected money, I usually…",
    options: [
      { text: "Spend it quickly", value: "A" },
      { text: "Save all of it", value: "B" },
      { text: "Decide intentionally where it fits best", value: "C" },
    ],
  },
  {
    text: "Budgeting feels like…",
    options: [
      { text: "Restrictive and boring", value: "A" },
      { text: "Necessary but stressful", value: "B" },
      { text: "A helpful guide", value: "C" },
    ],
  },
  {
    text: "I check my spending…",
    options: [
      { text: "Rarely", value: "A" },
      { text: "Very often", value: "B" },
      { text: "Regularly, without stress", value: "C" },
    ],
  },
  {
    text: "Buying something expensive makes me feel…",
    options: [
      { text: "Excited", value: "A" },
      { text: "Guilty", value: "B" },
      { text: "Confident if planned", value: "C" },
    ],
  },
  {
    text: "My savings account is…",
    options: [
      { text: "Inconsistent", value: "A" },
      { text: "Growing, but I hesitate to use it", value: "B" },
      { text: "Clearly structured with a purpose", value: "C" },
    ],
  },
  {
    text: "When money stress appears, I…",
    options: [
      { text: "Avoid thinking about it", value: "A" },
      { text: "Cut spending everywhere", value: "B" },
      { text: "Adjust my plan calmly", value: "C" },
    ],
  },
  {
    text: "My financial goal setting is…",
    options: [
      { text: "Vague or absent", value: "A" },
      { text: "Conservative and rigid", value: "B" },
      { text: "Clear and flexible", value: "C" },
    ],
  },
  {
    text: "I see money as…",
    options: [
      { text: "A source of fun", value: "A" },
      { text: "A source of safety", value: "B" },
      { text: "A tool for my life", value: "C" },
    ],
  },
  {
    text: "Spending on myself feels…",
    options: [
      { text: "Natural", value: "A" },
      { text: "Uncomfortable", value: "B" },
      { text: "Intentional and aligned", value: "C" },
    ],
  },
  {
    text: "My ideal financial life looks like…",
    options: [
      { text: "Maximum freedom now", value: "A" },
      { text: "Maximum security later", value: "B" },
      { text: "Balance between today and tomorrow", value: "C" },
    ],
  },
];

const results = {
  A: {
    title: "YOLO",
    strength: "Enjoyment and flexibility",
    growth: "Structure and planning",
    next: "Track your expenses",
  },
  B: {
    title: "Frugal All The Way",
    strength: "Discipline and consistency",
    growth: "Enjoying money",
    next: "Create spending categories",
  },
  C: {
    title: "Balanced Master",
    strength: "Control and clarity",
    growth: "Continuous optimization",
    next: "Automate and align money with values",
  },
};

function getTopAnswer(answers) {
  const score = { A: 0, B: 0, C: 0 };
  answers.forEach((a) => {
    if (a) score[a]++;
  });
  return Object.entries(score).sort((x, y) => y[1] - x[1])[0][0];
}

const STAGE = { INTRO: "intro", QUIZ: "quiz", RESULT: "result" };

const MoneyMindset = () => {
  const [stage, setStage] = useState(STAGE.INTRO);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const progress = Math.round((current / questions.length) * 100);

  const handleStart = () => {
    setStage(STAGE.QUIZ);
  };

  const handleSelect = (value) => {
    setSelected(value);
    const updated = [...answers];
    updated[current] = value;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(answers[current + 1]);
    } else {
      const top = getTopAnswer(answers);
      setResult(results[top]);
      setStage(STAGE.RESULT);
    }
  };

  const handleRetake = () => {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setSelected(null);
    setResult(null);
    setStage(STAGE.INTRO);
  };

  return (
    <>
      <Navbar />

      {/* Page header */}
      <section
        className="px-6 md:px-12 lg:px-24 py-12 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #003d46, #006A71)" }}
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #48d1cc, transparent)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative text-center">
          <span className="inline-block text-teal-300 font-semibold text-xs uppercase tracking-widest bg-teal-900/40 border border-teal-700/40 px-3 py-1 rounded-full mb-4">
            Self-Assessment
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Money Mindset Quiz
          </h1>
          <p className="text-teal-200 text-sm">
            10 questions &middot; 2 minutes
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* ── Intro ── */}
        {stage === STAGE.INTRO && (
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl"
              style={{
                background: "linear-gradient(135deg, #e6f7f8, #cceff2)",
              }}
            >
              💰
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              What&apos;s Your Money Mindset?
            </h2>
            <p className="text-gray-500 text-sm mb-7">
              Discover your relationship with money in under 2 minutes
            </p>
            <ul className="text-left space-y-3 mb-8 inline-block">
              {[
                "Answer honestly — there are no wrong answers",
                "Choose the option that feels most like you",
                "Get personalised insights at the end",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <br />
            <button
              onClick={handleStart}
              className="mt-2 px-10 py-3.5 rounded-xl text-white font-semibold transition-all hover:shadow-lg hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #006A71, #004652)",
              }}
            >
              Start Quiz
            </button>
          </div>
        )}

        {/* ── Quiz ── */}
        {stage === STAGE.QUIZ && (
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
            {/* Progress bar */}
            <div className="h-2 bg-gray-100 rounded-full mb-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(135deg, #006A71, #004652)",
                }}
              />
            </div>
            <p className="text-xs text-gray-400 mb-5 font-medium">
              {current + 1} of {questions.length}
            </p>

            <p className="text-lg font-bold text-gray-900 mb-6">
              {questions[current].text}
            </p>

            <div className="space-y-3">
              {questions[current].options.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 border-2 rounded-xl px-4 py-3.5 cursor-pointer transition-all ${
                    selected === opt.value
                      ? "border-teal-600 bg-teal-50 text-teal-800"
                      : "border-gray-100 hover:border-teal-200 text-gray-700 bg-gray-50 hover:bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="option"
                    value={opt.value}
                    checked={selected === opt.value}
                    onChange={() => handleSelect(opt.value)}
                    className="accent-teal-700"
                  />
                  {opt.text}
                </label>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!selected}
              className="mt-8 w-full py-3.5 rounded-xl text-white font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #006A71, #004652)",
              }}
            >
              {current + 1 === questions.length
                ? "See My Result"
                : "Next Question"}
            </button>
          </div>
        )}

        {/* ── Result ── */}
        {stage === STAGE.RESULT && result && (
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 text-center">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold bg-teal-50 border border-teal-100 px-3 py-1 rounded-full inline-block mb-4">
              Your Money Mindset
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              {result.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-8">
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
                <p className="text-xs font-bold text-teal-700 uppercase mb-2">
                  Your Strength
                </p>
                <p className="text-gray-700 text-sm font-medium">
                  {result.strength}
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <p className="text-xs font-bold text-amber-700 uppercase mb-2">
                  Growth Area
                </p>
                <p className="text-gray-700 text-sm font-medium">
                  {result.growth}
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">
                  Next Step
                </p>
                <p className="text-gray-700 text-sm font-medium">
                  {result.next}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 italic mb-8">
              Money mastery isn&apos;t about restriction or indulgence.
              <br />
              It&apos;s about choice.
            </p>

            <button
              onClick={handleRetake}
              className="px-10 py-3.5 rounded-xl text-white font-semibold transition-all hover:shadow-lg hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #006A71, #004652)",
              }}
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default MoneyMindset;
