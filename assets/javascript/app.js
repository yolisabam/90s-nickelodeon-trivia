// VARIABLES //

// We declare variable showQuiz to assign our setInterval to control timer and timeout
var showQuiz;

// We declare all variables pertaining to quiz results in an object 
var quiz = {
  correctAnswers: 0,
  wrongAnswers: 0,
  noAnswers: 0,
  time: 10        
  };

//We declare all quiz questions in an array to be able to compare data easily

 var myQuestions = [
      {
        question: "Question",
        answers: {
          a: "answer1",
          b: "answer2",
          c: "answer3"
        },

        correctAnswer: "c"
      },
      {
        question: "Question2",
        answers: {
          a: "answer4",
          b: "answer5",
          c: "answer6"
        },
        correctAnswer: "b"
      },
      {
        question: "Where is Waldo really?",
        answers: {
          a: "answer7",
          b: "answer8",
          c: "answer9",
          d: "answer10"
        },
        correctAnswer: "d"
      }
];

console.log(myQuestions[2].correctAnswer); 



// FUNCTIONS

// When the page loads...

    // We run a function that 

    //Calls the countdown functions...
    countdown();
    startCountdown();
    // ..and dynamically builds out the quiz and renders it to "#quiz-container"


//We declare a function to start the countdown
function startCountdown() {
  showQuiz = setInterval(countdown, 1000);
}

//We declare a function to stop the countdown
function stopCountdown () {
  clearInterval(showQuiz)
}

//We declare a function that controls countdown
function countdown() {

//While countdown is running time decreases by 1 every second.
    quiz.time--;

//Time is displayed in "#display-timer" ID.
    $("#display-timer").html("<h2>" + quiz.time + "</h2>");


//  Once number hits zero...
    if (quiz.time === 0) {
      // Countdown stops.
      stopCountdown();
      // Timer is replaces with text
      $("#display-timer").html("<h4>ALL DONE</h4>");
      // Quiz is replaced with scores/quiz data
      $("#quiz-container").html("<h4>QUIZ RESULTS WILL REPLACE QUIZ HERE</h4>");


} 
}


    //PIECES TO WORK ON
      //setting 1st on click function
      // 

      // We load a form with questions and answers with "radio button functionality"

      // We load a button at the bottom of the page called "DONE"

    // If the timer hits 0, or if the user answers all questions and pressed done, we start evaluation process

      // Evaluation process calculates increments the following values by 1 : correct answers, wrong answers and unanswered questions

    // New elements load to the DOM
      // We display the text All done!
      // We display final game results
