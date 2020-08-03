//Create a Timer container --> Done
//A timer will start
//A question populates ---> need to create at least 4 questions --- Below contains an array of questions, options, and answers -- set of ten questions

var questions = [
  {
    question: "Inside which HTML element do we put the JavaScrip?",
    options: ["<js>", "<javascript>", "<scripting>", "<script>"],
    answer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    option: [
      "The <body< section",
      "Both the <head> section and the <body> section are correct",
      "The <head> section",
      "None of the above",
    ],
    answer: "Both the <head> section and the <body> section are correct",
  },
  {
    question: "How do you create a function in JavaScript?",
    option: [
      "function = myFunction()",
      "function(myFunction)",
      "function:myFunction()",
      "function myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "How do you write an IF statement in JavaScrip",
    option: ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if i =5"],
    answer: "if (i == 5)",
  },
  {
    question: "How do you declare a JavaScrip variable",
    option: [
      "variable carName;",
      "v carName;",
      "var carName;",
      "var = carName;",
    ],
    answer: "var carName;",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element",
    option: ["onClick", "onmouseover", "onchange", "onmoouseclick"],
    answer: "onClick",
  },
  {
    question: "How does a WHILE loop start?",
    option: [
      "while (i <= 10)",
      "while (i <= 10; i++)",
      "while i= 1 to 10)",
      "while i <= 10",
    ],
    answer: "while (i <= 10)",
  },
  {
    question: "How does a FOR loop start?",
    option: [
      "for (i = 0; i <= 5)",
      "for (i = 0; i <= 5; i++)",
      "for i = 1 to 5",
      "for (i <= 5; i++)",
    ],
    answer: "for (i = 0; i <= 5; i++)",
  },
  {
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    option: ["if i <> 5", "if (i <> 5)", "if i =! 5 then", "if (i != 5)"],
    answer: "if (i != 5)",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    option: [
      "myFunction()",
      "call function myFunction()",
      "call myFunction()",
      "function myFunction()",
    ],
    answer: "myFunction()",
  },
];

//if answered incorrectly, time is subtracted and new questions displays
// Created variables for my timer and scorecard

//setting the numerical variables for the functions.. scores and timers..

var score = 0;
var counter = 0;

var timeLeft = "";

var timer;
var timerOnScreen = document.getElementById("timerCountdown");

var btn = document.querySelector("#btn");
//starts the countdown timer once user clicks the 'start' button
btn = addEventListener("click", function () {
  function start() {
    timeLeft = questions.length * 15;
    if (timerOnScreen) {
      timerOnScreen.textContent = timeLeft;
    }
    timer = setInterval(function () {
      timeLeft--;

      //proceed to end the game function when timer is below 0 at any time

      if (timeLeft <= 0) {
        clearInterval(timer);

        endGame();
      }
    }, 1000);
    if (timeLeft) {
      next();
    }
  }
  start();
});

//stop the timer to end the game
var quizContent = document.getElementById("quizContainer");
function endGame() {
  clearInterval(timer);

  var h1 = document.createElement("h1");
  h1.textContent = "Game Over!";

  var displayScore = document.createElement("h3");
  displayScore.textContent = "You got a " + score + " /100!";

  var numCorrectQ = document.createElement("h3");
  numCorrectQ.textContent =
    "That means you got " + score / 20 + "questions correct!";

  var submitScore = document.createElement("button");
  submitScore.textContent = "Submit Score!";

  var intialInput = document.createElement("input");
  intialInput.setAttribute("type", "text");
  intialInput.setAttribute("id", "name");
  intialInput.setAttribute("placeholder", "Enter your initials");
}

//store the scores on local storage

function storeScore() {
  localStorage.setItem("highscore", score);

  localStorage.setItem("highscoreName", document.getElementById("name").value);

  getScore();
}

function getScore() {
  var quizContent =
    `<h2>` +
    localStorage.getItem("highscoreName") +
    `'s highscore is:</h2>
   <h1>` +
    localStorage.getItem("highscore") +
    `</h1>
   <br>
   <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>`;

  document.getElementById("quizContainer").innerHTML = quizContent;
}

//clears the score name and value in the local storage if the user selects 'clear score'

function clearScore() {
  localStorage.setItem("highscore", "");

  localStorage.setItem("highscoreName", "");

  resetGame();
}

//reset the game

function resetGame() {
  clearInterval(timer);

  score = 0;

  counter = 0;

  timeLeft = 0;

  timer = 0;

  document.getElementById("timerCountdown").innerHTML = timeLeft;

  var quizContent = `
  

   <h3>


       Click to play again!  


   </h3>


   <button onclick="start()">Start!</button>`;

  document.getElementById("quizContainer").innerHTML = quizContent;
}

//deduct 15seconds from the timer if user chooses an incorrect answer

//loops through the questions

function next() {
  var currentQuestions = questions[counter];
  counter++;

  var quizContent = "<h2>" + currentQuestions.question + "</h2>";

  for (var i = 0; i < currentQuestions.option.length; i++) {
    var buttonCode = '<button onclick="Answer">[options]</button>';

    buttonCode = buttonCode.replace("[options]", currentQuestions.option[i]);

    if (currentQuestions.option[i] == currentQuestions.answer) {
      buttonCode = buttonCode.replace("Answer", "correct()");
      score += 10;

      next();
    } else {
      buttonCode = buttonCode.replace("Answer", "incorrect()");
      timeLeft -= 10;

      next();
    }

    quizContent += buttonCode;
  }
  if (counter >= questions.length - 1) {
    endGame();

    return;
  }
  document.getElementById("quizContainer").innerHTML = quizContent;
}
