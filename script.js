//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "x + 4 = 10",
    options: ["13", "-25", "6", "9"],
    correct: "6",
  },
  {
    id: "1",
    question: "x + 101 = 300",
    options: ["199", "-251", "639", "139"],
    correct: "199",
  },
  {
    id: "2",
    question: "x - 279 = 237",
    options: ["56", "499", "-518", "516"],
    correct: "516",
  },
  {
    id: "3",
    question: "x - 8 = -10",
    options: ["24", "5", "-2", "9"],
    correct: "-2",
  },
  {
    id: "4",
    question: "x + 9 = -1",
    options: ["-10", "10", "29", "32"],
    correct: "-10",
  },
  {
    id: "5",
    question: "3x = 12",
    options: ["15", "9", "-5", "4"],
    correct: "4",
  },
  {
    id: "6",
    question: "9x = 18",
    options: ["26", "2", "-4", "21"],
    correct: "2",
  },
  {
    id: "7",
    question: "35x = -105",
    options: ["-3", "12", "29", "16"],
    correct: "-3",
  },
  {
    id: "8",
    question: "7x - 1 = 13",
    options: ["2", "50", "-4", "64"],
    correct: "2",
  },
  {
    id: "9",
    question: "6x - 10 = 2x + 14",
    options: ["-24", "12", "6", "24"],
    correct: "6",
  },

  {
    id: "10",
    question: "x + 4 = 10",
    options: ["13", "-25", "6", "9"],
    correct: "6",
  },
  {
    id: "11",
    question: "x + 101 = 300",
    options: ["199", "-251", "639", "139"],
    correct: "199",
  },
  {
    id: "12",
    question: "x - 279 = 237",
    options: ["56", "499", "-518", "516"],
    correct: "516",
  },
  {
    id: "13",
    question: "x - 8 = -10",
    options: ["24", "5", "-2", "9"],
    correct: "-2",
  },
  {
    id: "14",
    question: "x + 9 = -1",
    options: ["-10", "10", "29", "32"],
    correct: "-10",
  },
  {
    id: "15",
    question: "3x = 12",
    options: ["15", "9", "-5", "4"],
    correct: "4",
  },
  {
    id: "16",
    question: "9x = 18",
    options: ["26", "2", "-4", "21"],
    correct: "2",
  },
  {
    id: "17",
    question: "35x = -105",
    options: ["-3", "12", "29", "16"],
    correct: "-3",
  },
  {
    id: "18",
    question: "7x - 1 = 13",
    options: ["2", "50", "-4", "64"],
    correct: "2",
  },
  {
    id: "19",
    question: "6x - 10 = 2x + 14",
    options: ["-24", "12", "6", "24"],
    correct: "6",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == 10) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Sua pontuação é " + scoreCount + " de " + questionCount;
        confetti();
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " de 10 questões";
      //display quiz
      quizDisplay(questionCount);
      count = 31;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = count + "s";
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);

  // Generate 10 random questions instead of all
  const numberOfQuestions = 10;
  for (let i = 0; i < numberOfQuestions; i++) {
    let currentQuestion = quizArray[i];

    //randomly sort options
    currentQuestion.options.sort(() => Math.random() - 0.5);

    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    //question number
    countOfQuestion.innerHTML = "1 de 10 questões";

    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = currentQuestion.question;
    div.appendChild(question_DIV);

    //options
    div.innerHTML += `
      <button class="option-div" onclick="checker(this)">${currentQuestion.options[0]}</button>
      <button class="option-div" onclick="checker(this)">${currentQuestion.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${currentQuestion.options[2]}</button>
      <button class="option-div" onclick="checker(this)">${currentQuestion.options[3]}</button>
    `;

    quizContainer.appendChild(div);
  }
}


//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 30;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};