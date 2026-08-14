const questions = [
  {
    id: 1,
    title: "새로운 일을 함께 시작하게 됐어요. 나는?",
    answers: [
      { label: "A", text: "먼저 사람들의 생각을 들어보고 함께할 방법을 찾는다.", type: 1 },
      { label: "B", text: "일단 재미있게 시작할 수 있도록 분위기를 띄워본다.", type: 3 },
      { label: "C", text: "필요한 것부터 하나씩 정리하고 준비한다.", type: 2 },
    ],
  },
  {
    id: 2,
    title: "하던 일이 생각처럼 잘 풀리지 않아요!",
    answers: [
      { label: "A", text: "지금까지와 다른 방법은 없는지 찾아본다.", type: 4 },
      { label: "B", text: "지금 가진 것들을 활용해 새로운 해결 방법을 만들어본다.", type: 5 },
      { label: "C", text: "잠시 숨을 고르고 다시 시작할 힘을 챙긴다.", type: 6 },
    ],
  },
  {
    id: 3,
    title: "동료가 “요즘 너무 힘들어요…”라고 말한다. 나는?",
    answers: [
      { label: "A", text: "이야기를 천천히 들어주며 마음을 살핀다.", type: 6 },
      { label: "B", text: "내가 도울 수 있는 일을 찾아 함께 해결해본다.", type: 2 },
      { label: "C", text: "함께 이야기하거나 도움받을 수 있는 사람을 연결해준다.", type: 1 },
    ],
  },
  {
    id: 4,
    title: "재미있는 아이디어를 하나 발견했다! 나는?",
    answers: [
      { label: "A", text: "비슷한 아이디어나 새로운 사례를 더 찾아본다.", type: 4 },
      { label: "B", text: "내 방식대로 바꿔서 직접 한번 만들어본다.", type: 5 },
      { label: "C", text: "“이거 재밌겠다!” 주변 사람들에게 이야기하며 같이 해본다.", type: 3 },
    ],
  },
  {
    id: 5,
    title: "여러 사람이 함께하는 모임에서 나는?",
    answers: [
      { label: "A", text: "혼자 있는 사람이 있으면 자연스럽게 대화에 함께할 수 있도록 한다.", type: 1 },
      { label: "B", text: "사람들이 편안하게 있을 수 있도록 필요한 것을 챙긴다.", type: 2 },
      { label: "C", text: "사람들이 웃고 즐길 수 있도록 분위기에 활기를 더한다.", type: 3 },
    ],
  },
  {
    id: 6,
    title: "지금보다 더 좋은 방법을 찾고 싶을 때 나는?",
    answers: [
      { label: "A", text: "새로운 사례나 정보를 찾아보며 가능성을 넓혀본다.", type: 4 },
      { label: "B", text: "떠오른 아이디어를 직접 만들어보며 시험해본다.", type: 5 },
      { label: "C", text: "너무 서두르지 않고, 지금 잘하고 있는 것도 돌아보며 방향을 찾는다.", type: 6 },
    ],
  },
];

const resultTypes = {
  1: {
    name: "이음둥이",
    description: "사람과 사람을 자연스럽게 이어주는 주민",
  },
  2: {
    name: "든든둥이",
    description: "곁을 든든하게 지키고 필요한 것을 챙기는 주민",
  },
  3: {
    name: "반짝둥이",
    description: "사람들에게 용기와 에너지를 불어넣는 주민",
  },
  4: {
    name: "모험둥이",
    description: "익숙한 길 밖에서 새로운 가능성을 찾아가는 주민",
  },
  5: {
    name: "뚝딱둥이",
    description: "아이디어를 직접 현실로 만들어내는 주민",
  },
  6: {
    name: "토닥둥이",
    description: "마음을 살피고 다시 힘낼 수 있도록 돕는 주민",
  },
};

let currentIndex = 0;
let selectedAnswers = [];

const questionView = document.querySelector("#question-view");
const resultView = document.querySelector("#result-view");
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");
const questionLabel = document.querySelector("#question-label");
const questionTitle = document.querySelector("#question-title");
const answerList = document.querySelector("#answer-list");
const mainResult = document.querySelector("#main-result");
const mainDescription = document.querySelector("#main-description");
const subResult = document.querySelector("#sub-result");
const scoreList = document.querySelector("#score-list");
const restartButton = document.querySelector("#restart-button");

function renderQuestion() {
  const question = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  progressText.textContent = `Q${currentIndex + 1} / Q${questions.length}`;
  progressBar.style.width = `${progress}%`;
  questionLabel.textContent = `Q${question.id}`;
  questionTitle.textContent = question.title;
  answerList.innerHTML = "";

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.innerHTML = `
      <span class="check-box">✓</span>
      <span class="answer-text"><span class="answer-label">${answer.label}.</span> ${answer.text}</span>
    `;

    button.addEventListener("click", () => {
      selectAnswer(answer);
    });

    answerList.appendChild(button);
  });
}

function selectAnswer(answer) {
  selectedAnswers[currentIndex] = answer;

  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }

  renderResult();
}

function getScores() {
  const scores = {};

  Object.keys(resultTypes).forEach((type) => {
    scores[type] = 0;
  });

  selectedAnswers.forEach((answer) => {
    scores[answer.type] += 1;
  });

  return scores;
}

function getRankedTypes(scores) {
  const firstSelectedIndex = {};

  selectedAnswers.forEach((answer, index) => {
    if (firstSelectedIndex[answer.type] === undefined) {
      firstSelectedIndex[answer.type] = index;
    }
  });

  return Object.keys(resultTypes)
    .map(Number)
    .filter((type) => scores[type] > 0)
    .sort((a, b) => {
      const scoreDifference = scores[b] - scores[a];
      if (scoreDifference !== 0) {
        return scoreDifference;
      }

      return firstSelectedIndex[a] - firstSelectedIndex[b];
    });
}

function renderResult() {
  const scores = getScores();
  const rankedTypes = getRankedTypes(scores);
  const mainTypeNumber = rankedTypes[0];
  const subTypeNumber = rankedTypes[1] || rankedTypes[0];
  const mainType = resultTypes[mainTypeNumber];
  const subType = resultTypes[subTypeNumber];

  questionView.classList.add("hidden");
  resultView.classList.remove("hidden");

  mainResult.textContent = `유형 ${mainTypeNumber}. ${mainType.name}`;
  mainDescription.textContent = mainType.description;
  subResult.textContent = `유형 ${subTypeNumber}. ${subType.name} - ${subType.description}`;

  scoreList.innerHTML = "";

  Object.entries(resultTypes).forEach(([type, result]) => {
    const item = document.createElement("li");
    item.textContent = `유형 ${type} ${result.name}: ${scores[type]}점`;
    scoreList.appendChild(item);
  });
}

function restartSurvey() {
  currentIndex = 0;
  selectedAnswers = [];
  resultView.classList.add("hidden");
  questionView.classList.remove("hidden");
  renderQuestion();
}

restartButton.addEventListener("click", restartSurvey);

renderQuestion();
