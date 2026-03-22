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

let currentQuestion = 0;
let answers = [];

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");

document.getElementById("startBtn").addEventListener("click", () => {
  intro.classList.add("hidden");
  quiz.classList.remove("hidden");
  loadQuestion();
});

function loadQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = `${currentQuestion + 1}. ${q.text}`;
  optionsContainer.innerHTML = "";
  nextBtn.disabled = true;

  q.options.forEach((option) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="option" value="${option.value}">
      ${option.text}
    `;
    optionsContainer.appendChild(label);
  });

  updateProgress();
}

optionsContainer.addEventListener("change", (e) => {
  answers[currentQuestion] = e.target.value;
  nextBtn.disabled = false;
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    calculateResult();
  }
});

function updateProgress() {
  const percent = (currentQuestion / questions.length) * 100;
  progressBar.style.width = `${percent}%`;
}

function calculateResult() {
  quiz.classList.add("hidden");

  const score = { A: 0, B: 0, C: 0 };
  answers.forEach((ans) => score[ans]++);

  // Save to localStorage
  localStorage.setItem("moneyMindsetResult", JSON.stringify(score));

  let output = "";

  if (score.A > score.B && score.A > score.C) {
    output = `
      <h2>YOLO</h2>
      <p><strong>Your strength:</strong> Enjoyment and flexibility</p>
      <p><strong>Your growth area:</strong> Structure and planning</p>
      <p><strong>Next step:</strong> Track your expenses</p>
    `;
  } else if (score.B > score.A && score.B > score.C) {
    output = `
      <h2>Frugal All The Way</h2>
      <p><strong>Your strength:</strong> Discipline and consistency</p>
      <p><strong>Your growth area:</strong> Enjoying money</p>
      <p><strong>Next step:</strong> Create spending categories</p>
    `;
  } else {
    output = `
      <h2>Balanced Master</h2>
      <p><strong>Your strength:</strong> Control and clarity</p>
      <p><strong>Your growth area:</strong> Continuous optimization</p>
      <p><strong>Next step:</strong> Automate and align money with values</p>
    `;
  }

  result.innerHTML = `
    ${output}
    <p class="closing">
      Money mastery isn’t about restriction or indulgence.<br>
      It’s about choice.
    </p>
  `;

  result.classList.remove("hidden");
}
