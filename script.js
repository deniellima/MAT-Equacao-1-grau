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
    question: "2x + 3 = 5",
    options: ["1", "-2", "0", "3"],
    correct: "1",
  },
  {
    id: "11",
    question: "4x - 8 = 12",
    options: ["5", "4", "-6", "2"],
    correct: "5",
  },
  {
    id: "12",
    question: "3x + 7 = 16",
    options: ["2", "3", "-5", "6"],
    correct: "3",
  },
  {
    id: "13",
    question: "6x = 2x + 28",
    options: ["5", "7", "-4", "10"],
    correct: "7",
  },
  {
    id: "14",
    question: "3x + 4 = 5x - 8",
    options: ["2", "-8", "4", "6"],
    correct: "6",
  },
  {
    id: "15",
    question: "2x + 6 = x + 18",
    options: ["12", "17", "-15", "14"],
    correct: "12",
  },
  {
    id: "16",
    question: "6x + 20 = −10",
    options: ["5", "-5", "15", "29"],
    correct: "-5",
  },
  {
    id: "17",
    question: "6x -5 = 7",
    options: ["-5", "7", "4", "2"],
    correct: "2",
  },
  {
    id: "18",
    question: "5x + 12 = 27",
    options: ["4", "3", "-4", "5"],
    correct: "3",
  },
  {
    id: "19",
    question: "8x - 6 = 10",
    options: ["-2", "7", "2", "5"],
    correct: "2",
  },



  {
    id: "20",
    question: "4x + 5 = 9",
    options: ["1", "-2", "5", "3"],
    correct: "1",
  },
  {
    id: "21",
    question: "3x - 10 = 14",
    options: ["9", "-5", "6", "8"],
    correct: "8",
  },
  {
    id: "22",
    question: "6x + 8 = 26",
    options: ["-6", "9", "6", "3"],
    correct: "3",
  },
  {
    id: "23",
    question: "7x - 3 = 4",
    options: ["1", "5", "-1", "4"],
    correct: "1",
  },
  {
    id: "24",
    question: "2x + 6 = 18",
    options: ["5", "-4", "6", "7"],
    correct: "6",
  },
  {
    id: "25",
    question: "5x - 9 = 6",
    options: ["5", "3", "-6", "8"],
    correct: "3",
  },
  {
    id: "26",
    question: "2x + 5 = −3",
    options: ["-4", "6", "9", "15"],
    correct: "-4",
  },
  {
    id: "27",
    question: "4x + 10 = −6",
    options: ["12", "9", "-4", "6"],
    correct: "-4",
  },
  {
    id: "28",
    question: "4x - 7 = 17",
    options: ["-9", "6", "12", "17"],
    correct: "6",
  },
  {
    id: "29",
    question: "6x + 9 = 33",
    options: ["-17", "14", "4", "6"],
    correct: "4",
  },



  {
    id: "30",
    question: "1000x − 1850 = 150",
    options: ["-2", "6", "19", "2"],
    correct: "2",
  },
  {
    id: "31",
    question: "2x + 4 = 10",
    options: ["15", "6", "-9", "3"],
    correct: "3",
  },
  {
    id: "32",
    question: "5x − 15 = −30",
    options: ["31", "12", "-3", "6"],
    correct: "-3",
  },
  {
    id: "33",
    question: "7x + 2 = 16",
    options: ["2", "15", "-9", "3"],
    correct: "2",
  },
  {
    id: "34",
    question: "6x + 20 = −10",
    options: ["50", "-5", "5", "25"],
    correct: "-5",
  },
  {
    id: "35",
    question: "10x + 40 = −20",
    options: ["16", "-6", "9", "14"],
    correct: "-6",
  },
  {
    id: "36",
    question: "6x - 12 = 0",
    options: ["3", "2", "9", "-6"],
    correct: "2",
  },
  {
    id: "37",
    question: "2x + 3 = 11",
    options: ["4", "-9", "5", "7"],
    correct: "4",
  },
  {
    id: "38",
    question: "3x + 15 = 30",
    options: ["6", "-9", "5", "7"],
    correct: "5",
  },
  {
    id: "39",
    question: "7x + 21 = 70",
    options: ["7", "8", "11", "-14"],
    correct: "7",
  },



  {
    id: "40",
    question: "8x − 64 = 0",
    options: ["-6", "8", "12", "16"],
    correct: "8",
  },
  {
    id: "41",
    question: "500x + 750 = 1750",
    options: ["2", "11", "6", "16"],
    correct: "2",
  },
  {
    id: "42",
    question: "20x − 240 = 0",
    options: ["15", "12", "24", "-6"],
    correct: "12",
  },
  {
    id: "43",
    question: "15x + 105 = 240",
    options: ["13", "-8", "9", "20"],
    correct: "9",
  },
  {
    id: "44",
    question: "18x − 162 = 0",
    options: ["9", "11", "-10", "14"],
    correct: "9",
  },
  {
    id: "45",
    question: "5x + 25 = 50",
    options: ["11", "8", "-6", "5"],
    correct: "5",
  },
  {
    id: "46",
    question: "7x + 21 = 70",
    options: ["21", "14", "-7", "7"],
    correct: "7",
  },
  {
    id: "47",
    question: "10x − 90 = 0",
    options: ["9", "18", "-9", "27"],
    correct: "9",
  },
  {
    id: "48",
    question: "13x + 39 = 182",
    options: ["-10", "9", "11", "24"],
    correct: "11",
  },
  {
    id: "49",
    question: "16x − 112 = 0",
    options: ["-9", "8", "15", "7"],
    correct: "7",
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
      if(scoreCount >= 6){
        confetti();}
        
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