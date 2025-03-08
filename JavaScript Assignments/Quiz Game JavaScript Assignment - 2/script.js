const startScreen = document.querySelector(".start-screen");
const gameScreen = document.querySelector(".game-screen");
const endScreen = document.querySelector(".end-screen");
const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const questionText = document.querySelector(".question-text");
const answerOptions = document.querySelector(".answer-options");
const timerDisplay = document.querySelector(".time-duration");
const questionStatus = document.querySelector(".question-status b");
const scoreDisplay = document.querySelector(".score-display");
const resultMessage = document.querySelector(".result-message b");
const clickSound = new Audio("click.mp3");

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let answerSelected = false;
const correctIcon = `<span class="material-symbols-rounded">check_circle</span>`;
const incorrectIcon = `<span class="material-symbols-rounded">cancel</span>`;

// API Category Mapping
const categoryMap = {
  "General Knowledge": 9,
  "Environment: Books": 10,
  "Environment: Film": 11,
  "Science: Computers": 18,
  "Science & Nature": 17,
};

// Function to Fetch Questions from API
async function fetchQuestions(category, difficulty) {
  const categoryId = categoryMap[category] || 9;
  const url = `https://opentdb.com/api.php?amount=20&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
}

// Start Quiz
async function startQuiz() {
  const category = categorySelect.value;
  const difficulty = difficultySelect.value;
  startQuizBtn.textContent = "Loading...";
  startQuizBtn.disabled = true;

  questions = await fetchQuestions(category, difficulty);

  if (questions.length > 0) {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    scoreDisplay.style.display = "none";
    nextQuestionBtn.style.display = "none";
    showQuestion();
  } else {
    alert("Failed to load questions. Please try again!");
  }

  startQuizBtn.textContent = "Start Quiz";
  startQuizBtn.disabled = false;
}

// Show Question
function showQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  timerDisplay.textContent = `${timeLeft}s`;
  nextQuestionBtn.style.display = "none";
  answerSelected = false;

  let questionData = questions[currentQuestionIndex];
  questionText.innerHTML = questionData.question;

  let answers = [
    ...questionData.incorrect_answers,
    questionData.correct_answer,
  ];
  console.log(answers);

  answers.sort(() => Math.random() - 0.5);

  answerOptions.innerHTML = "";
  answers.forEach((answer) => {
    let li = document.createElement("li");
    li.classList.add("answer-option");
    li.innerHTML = `<p>${answer}</p>`;
    li.onclick = () => checkAnswer(li, answer, questionData.correct_answer);
    answerOptions.appendChild(li);
  });
  scoreDisplay.style.display = "none";

  startTimer();
  updateStatus();
}

// Start Timer
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${timeLeft}s`;
    if (timeLeft === 0) {
      clearInterval(timer);
      showCorrectAnswer();
      nextQuestionBtn.style.display = "inline-flex";
    }
  }, 1000);
}

// Check Answer
function checkAnswer(selectedOption, selected, correct) {
  if (answerSelected) return;
  answerSelected = true;

  clearInterval(timer);
  if (selected === correct) {
    selectedOption.classList.add("correct");
    selectedOption.insertAdjacentHTML("beforeend", correctIcon);
    score++;
  } else {
    selectedOption.classList.add("incorrect");
    selectedOption.insertAdjacentHTML("beforeend", incorrectIcon);
    showCorrectAnswer();
  }

  scoreDisplay.style.display = "block";
  scoreDisplay.textContent = `Score: ${score}`;
  nextQuestionBtn.style.display = "inline-flex";
}

// Show Correct Answer
function decodeHtmlEntities(text) {
  let doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
}

function showCorrectAnswer() {
  document.querySelectorAll(".answer-option").forEach((option) => {
    if (
      decodeHtmlEntities(
        option.textContent.normalize("NFC").trim().toLowerCase()
      ) ===
      decodeHtmlEntities(
        questions[currentQuestionIndex].correct_answer
          .normalize("NFC")
          .trim()
          .toLowerCase()
      )
    ) {
      option.classList.add("correct");
      option.insertAdjacentHTML("beforeend", correctIcon);
    }
  });
}

// Next Question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 20) {
    showQuestion();
  } else {
    endQuiz();
  }
}

// Update Question Number and Score Display
function updateStatus() {
  questionStatus.textContent = `${currentQuestionIndex + 1} of 20`;
  scoreDisplay.textContent = score;
}

// End Quiz
function endQuiz() {
  gameScreen.style.display = "none";
  endScreen.style.display = "block";
  resultMessage.textContent = `${score} / 20`;
}

// Restart Quiz
function restartQuiz() {
  endScreen.style.display = "none";
  startScreen.style.display = "block";
}

// Event Listeners
startQuizBtn.addEventListener("click", () => {
  clickSound.play();
  startQuiz();
});
nextQuestionBtn.addEventListener("click", () => {
  clickSound.play();
  nextQuestion();
});
playAgainBtn.addEventListener("click", () => {
  clickSound.play();
  restartQuiz();
});
