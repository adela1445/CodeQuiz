// Create a button ---> Done
//button will be called "Begin" --> Done
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
var score = 0;
var timer;

// Function that will start the timer once the Begin button is pressed
function startQuiz() {
  timeAvail = 120;
  document.getElementById("timerCountdown").textContent = timeAvail;

  timer = setInterval(function () {
    timeAvail--;
    document.getElementById("timerCountdown").textContent = timeAvail;

    if (timeAvail <= 0) {
      clearInterval(timer);
      gameover();
    }
  }, 1000);
}
startQuiz();

//if all questions are answered or time reaches zero the game is over
//create a text box to type initials
