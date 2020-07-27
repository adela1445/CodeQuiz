// Create a button
//button will be called "START"
//A timer will start
//A question populates ---> need to create at least 4 questions --- Below contains an array of questions, options, and answers

var questions = [
  {
    question: "Inside which HTML element do we pul the JavaScrip?",
    options: ["<js>", "<javascript>", "<scripting>", "<script>"],
    answer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    option: [
      "The <body. section",
      "Bothe the <head> section and the <body> section are correct",
      "The <head> section",
      "None of the above",
    ],
    answer: "",
  },
  {
    question: "How do you create a function in JavaScript?",
    option: [
      "function:myFunction()",
      "function = myFunction()",
      "function myFunction()",
      "function(myFunction)",
    ],
    answer: "function myFunction()",
  },
  {
    question: "",
    option: [""],
    answer: "",
  },
  {
    question: "",
    option: [""],
    answer: "",
  },
  {
    question: "",
    option: [""],
    answer: "",
  },
  {
    question: "",
    option: [""],
    answer: "",
  },
  {
    question: "",
    option: [""],
    answer: "",
  },
  {
    question: "",
    option: [""],
    answer: "",
  },
  {
    question: "",
    option: [""],
    answer: "",
  },
];

//Four options of correct answers display ---> four choices for each question
//if answered incorrectly, time is subtracted and new questions displays
//if all questions are answered or time reaches zero the game is over
//create a text box to type initials
