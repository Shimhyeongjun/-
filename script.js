const questions = [
  {
    id: 1,
    title: "새로운 일을 함께 시작하게 되었을 때, 나는?",
    answers: [
      { label: "A", text: "먼저 사람들의 생각을 들어보고 함께할 방법을 찾는다.", type: 1 },
      { label: "B", text: "일단 재미있게 시작할 수 있도록 분위기를 띄워본다.", type: 3 },
      { label: "C", text: "필요한 것부터 하나씩 정리하고 준비한다.", type: 2 },
    ],
  },
  {
    id: 2,
    title: "하던 일이 생각처럼 잘 풀리지 않을 때, 나는?",
    answers: [
      { label: "A", text: "지금까지와 다른 방법은 없는지 찾아본다.", type: 4 },
      { label: "B", text: "지금 가진 것들을 활용해 새로운 해결 방법을 만들어본다.", type: 5 },
      { label: "C", text: "잠시 숨을 고르고 다시 시작할 힘을 채운다.", type: 6 },
    ],
  },
  {
    id: 3,
    title: "동료가 “요즘 너무 힘들어요”라고 말한다면, 나는?",
    answers: [
      { label: "A", text: "이야기를 천천히 들어주며 마음을 헤아린다.", type: 6 },
      { label: "B", text: "내가 도울 수 있는 일을 찾아 함께 해결해본다.", type: 2 },
      { label: "C", text: "함께 이야기하거나 위로받을 수 있는 사람과 연결해준다.", type: 1 },
    ],
  },
  {
    id: 4,
    title: "재미있는 아이디어를 하나 발견했다! 나는?",
    answers: [
      { label: "A", text: "비슷한 아이디어나 새로운 자료를 더 찾아본다.", type: 4 },
      { label: "B", text: "내 방식대로 바꾸어 직접 한번 만들어본다.", type: 5 },
      { label: "C", text: "“이거 재미있겠다!” 하고 주변 사람들에게 이야기하며 같이 해본다.", type: 3 },
    ],
  },
  {
    id: 5,
    title: "여러 사람이 함께하는 모임에서 나는?",
    answers: [
      { label: "A", text: "혼자 있는 사람이 있으면 자연스럽게 대화에 함께할 수 있도록 한다.", type: 1 },
      { label: "B", text: "사람들이 편안하게 있을 수 있도록 필요한 것들을 챙긴다.", type: 2 },
      { label: "C", text: "사람들이 웃고 즐길 수 있도록 분위기에 활기를 더한다.", type: 3 },
    ],
  },
  {
    id: 6,
    title: "지금보다 더 좋은 방법을 찾고 싶을 때, 나는?",
    answers: [
      { label: "A", text: "새로운 사례나 정보를 찾아보며 가능성을 넓혀본다.", type: 4 },
      { label: "B", text: "떠오른 아이디어를 직접 만들어보며 실험해본다.", type: 5 },
      { label: "C", text: "너무 서두르지 않고, 지금 하고 있는 것도 돌아보며 방향을 찾는다.", type: 6 },
    ],
  },
];

const resultTypes = {
  1: {
    icon: "🔗",
    name: "이음둥이",
    quote: "사람과 사람 사이에 다리를 놓는 사람",
    paragraphs: [
      "선생님은 혼자보다 함께할 때 더 큰 힘이 난다고 믿는 사람이에요. 어색한 분위기에서는 먼저 말을 걸고, 혼자 있는 사람에게 자연스럽게 다가가며, 서로 다른 사람들이 함께할 수 있는 방법을 찾아냅니다.",
      "누군가의 고민을 들어주고, 사람과 사람을 연결하고, 흩어져 있던 마음을 하나로 모으는 일에 선생님만의 특별한 재능이 있어요. 그래서 주변 사람들은 당신과 함께 있으면 “나도 여기서 함께하고 있구나” 하는 느낌을 받습니다.",
    ],
    shining: "사람들을 모아야 할 때, 새로운 관계를 만들어야 할 때, 혼자 힘들어하는 사람에게 먼저 손을 내밀 때",
    union: "혼자 고민하는 동료샘에게 먼저 다가가 함께할 사람을 이어주세요. 작은 고민 하나를 나누는 것에서부터 든든한 동료와의 연결이 시작될 수 있어요.",
    message: "함께 연대하면 누구보다 강해지죠!",
  },
  2: {
    icon: "🛡️",
    name: "든든둥이",
    quote: "말하지 않아도 필요한 것을 먼저 알아채는 사람",
    paragraphs: [
      "선생님은 주변을 꼼꼼하게 살피고 “내가 할 수 있는 일이 뭘까?”를 먼저 생각하는 사람이에요. 누군가 어려움에 처했을 때 가장 먼저 움직이고, 맡은 일은 끝까지 책임지려는 든든한 힘을 가지고 있습니다.",
      "크게 드러내기보다 조용히 자신의 자리를 지키지만, 막상 당신이 없으면 주변에서 “뭔가 허전한데?” 하고 느끼게 되는 사람이기도 해요.",
      "선생님의 세심함과 책임감은 함께하는 사람들에게 큰 안정감을 줍니다. 누군가에게는 당신의 존재 자체가 “괜찮아, 여기엔 네 편이 있어.”라는 메시지일지도 몰라요.",
    ],
    shining: "누군가 도움이 필요할 때, 중요한 일을 맡았을 때, 모두가 안심하고 움직일 수 있는 환경을 만들 때",
    union: "어려움을 겪는 동료 곁에서 든든한 편이 되어주세요. 혼자 해결하기 어려운 문제라면 함께 알아보고, 필요한 도움과 지원을 연결해줄 수 있어요.",
    message: "걱정 마세요, 제가 든든하게 곁을 지킬게요!",
  },
  3: {
    icon: "✨",
    name: "반짝둥이",
    quote: "주변까지 환하게 만드는 에너지의 소유자",
    paragraphs: [
      "선생님은 새로운 일을 시작할 때 “일단 해보자!”라고 말할 수 있는 용기와 긍정적인 에너지를 가진 사람이에요. 힘든 순간에도 작은 가능성을 발견하고, 지친 사람에게 다시 움직일 힘을 건넵니다.",
      "당신의 가장 큰 장점은 단순히 밝다는 것이 아니에요. 사람들이 포기하고 싶을 때 “그래도 한번 해볼까?” 하는 마음을 다시 만들어준다는 것!",
      "선생님이 건네는 한마디의 응원과 작은 용기가 누군가에게는 생각보다 훨씬 큰 힘이 될 수 있습니다.",
    ],
    shining: "분위기가 가라앉았을 때, 새로운 시작이 필요할 때, 누군가에게 용기와 응원이 필요할 때",
    union: "동료의 작은 실천에도 응원과 용기를 더해주세요. “좋다!”, “같이 해보자!”라는 말 한마디가 누군가의 실천을 계속 이어가게 하는 힘이 될 수 있어요.",
    message: "우리 같이하면 뭐든 신나게 해낼 수 있어요!",
  },
  4: {
    icon: "🧭",
    name: "모험둥이",
    quote: "익숙함보다 가능성을 선택하는 사람",
    paragraphs: [
      "선생님은 “원래 그렇게 해왔으니까”라는 말에 쉽게 만족하지 않는 사람이에요. 새로운 방법이 있는지, 더 나은 길은 없는지 끊임없이 궁금해하고 직접 찾아봅니다.",
      "실패하더라도 새로운 것을 시도해보는 과정 자체를 중요하게 생각하고, 남들이 지나친 가능성을 발견하는 힘이 있어요. 때로는 주변에서 “굳이?”라는 말을 들을 수도 있지만, 바로 그런 질문이 변화를 시작하게 만들기도 합니다.",
      "선생님에게 변화는 두려운 일이기보다 아직 발견하지 못한 가능성에 가까워요.",
    ],
    shining: "새로운 아이디어가 필요할 때, 익숙한 방식에 한계가 느껴질 때, 아무도 가보지 않은 길을 찾아야 할 때",
    union: "교육 현장의 문제를 그냥 지나치지 말고 바꿀 새로운 방법과 가능성을 찾아보세요. 작은 질문 하나가 새로운 실천과 변화를 시작하는 출발점이 될 수 있어요.",
    message: "익숙한 길 말고, 새로운 길도 한번 가볼까요?",
  },
  5: {
    icon: "🛠️",
    name: "뚝딱둥이",
    quote: "생각을 현실로 만들어내는 사람",
    paragraphs: [
      "선생님은 아이디어가 떠오르면 머릿속에만 담아두기보다 직접 움직여 결과를 만들어내는 사람이에요. “이렇게 하면 재밌겠다!”라는 생각이 들면 어느새 자료를 찾고, 만들고, 사람을 모으고, 실제로 무언가를 완성하고 있습니다.",
      "선생님의 강점은 창의력만이 아니에요. 엉뚱해 보이는 아이디어도 자기만의 방식으로 조합하고, 지금 가진 조건 안에서 “그럼 이렇게 해보자!”라고 해결책을 찾아내는 실행력이 있습니다.",
      "덕분에 주변에서는 선생님을 보고 “어? 이게 되네?” 하고 놀랄 때가 많을지도 몰라요.",
    ],
    shining: "아이디어를 실제 결과물로 만들어야 할 때, 새로운 해결책이 필요할 때, 무언가를 처음부터 만들어야 할 때",
    union: "좋은 아이디어가 떠올랐다면 함께할 수 있는 활동으로 직접 만들어보세요. 작은 모임, 캠페인, 자료 하나라도 누군가와 함께 현실로 만들어가는 순간 변화가 시작됩니다.",
    message: "좋은 생각이 떠올랐다면, 일단 해봐요!",
  },
  6: {
    icon: "🌿",
    name: "토닥둥이",
    quote: "사람의 마음에 가장 먼저 닿는 사람",
    paragraphs: [
      "선생님은 사람의 표정과 말투, 분위기의 작은 변화도 잘 알아차리는 사람이에요. 누군가 힘들어 보이면 쉽게 지나치지 못하고, 필요한 순간에는 조용히 곁을 지켜줍니다.",
      "무조건 “힘내!”라고 말하기보다 “많이 힘들었겠다”라고 먼저 마음을 알아주는 선생님. 그래서 사람들은 선생님의 곁에서 굳이 괜찮은 척하지 않아도 된다고 느낍니다.",
      "당신은 빠르게 앞으로 나아가는 것만큼 잠시 쉬어가는 것도 중요하다는 사실을 알고 있어요. 때로는 누군가를 변화시키는 가장 좋은 방법이, 아무것도 재촉하지 않고 곁에 있어주는 것일지도 모릅니다.",
    ],
    shining: "누군가 지쳐 있을 때, 갈등으로 마음이 다쳤을 때, 다시 일어날 시간이 필요할 때",
    union: "지친 동료의 이야기를 듣고 잠시 기대어 갈 자리가 되어주세요. 해결책을 바로 찾지 않아도 괜찮아요. 함께 들어주고 곁을 지켜주는 것만으로도 큰 힘이 될 수 있어요.",
    message: "힘들 땐 잠깐 쉬어도 괜찮아요. 제가 곁에 있을게요!",
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
const resultIcon = document.querySelector("#result-icon");
const mainResult = document.querySelector("#main-result");
const resultQuote = document.querySelector("#result-quote");
const mainDescription = document.querySelector("#main-description");
const resultDetails = document.querySelector("#result-details");
const backButton = document.querySelector("#back-button");
const restartButton = document.querySelector("#restart-button");

function renderQuestion() {
  const question = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  progressText.textContent = `Q${currentIndex + 1} / Q${questions.length}`;
  progressBar.style.width = `${progress}%`;
  questionLabel.textContent = `Q${question.id}`;
  questionTitle.textContent = question.title;
  answerList.innerHTML = "";
  backButton.disabled = currentIndex === 0;
  backButton.classList.toggle("hidden", currentIndex === 0);

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";

    const selectedMark = selectedAnswers[currentIndex]?.label === answer.label ? "✓" : "";
    button.innerHTML = `
      <span class="check-box">${selectedMark}</span>
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

function createResultPanel(icon, title, text, extraClass = "") {
  const panel = document.createElement("section");
  panel.className = `result-panel ${extraClass}`.trim();

  const heading = document.createElement("h3");
  heading.textContent = `${icon} ${title}`;

  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  panel.append(heading, paragraph);
  return panel;
}

function renderResult() {
  const scores = getScores();
  const rankedTypes = getRankedTypes(scores);
  const mainTypeNumber = rankedTypes[0];
  const mainType = resultTypes[mainTypeNumber];

  questionView.classList.add("hidden");
  resultView.classList.remove("hidden");

  resultIcon.textContent = mainType.icon;
  mainResult.textContent = `유형 ${mainTypeNumber}. ${mainType.name}`;
  resultQuote.textContent = `“${mainType.quote}”`;

  mainDescription.innerHTML = "";
  mainType.paragraphs.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    mainDescription.appendChild(paragraph);
  });

  resultDetails.innerHTML = "";
  resultDetails.append(
    createResultPanel("✨", "당신이 빛나는 순간", mainType.shining, "shine-panel"),
    createResultPanel("💙", "전교조에서는 이렇게!", mainType.union, "union-panel"),
    createResultPanel("💬", "참둥이 한마디", `“${mainType.message}”`, "message-panel"),
  );
}

function goBackQuestion() {
  if (currentIndex === 0) {
    return;
  }

  selectedAnswers[currentIndex] = undefined;
  currentIndex -= 1;
  renderQuestion();
}

function restartSurvey() {
  currentIndex = 0;
  selectedAnswers = [];
  resultView.classList.add("hidden");
  questionView.classList.remove("hidden");
  renderQuestion();
}

backButton.addEventListener("click", goBackQuestion);
restartButton.addEventListener("click", restartSurvey);

renderQuestion();
