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
        question: "What channel does ",
        answers: [
           "answer1",
           "answer2",
           "answer3"
        ],

        correctAnswer: "1"
      },
      {
        question: "What Color is Earth?",
        answers: [
           "answer4",
           "answer5",
           "answer6"
        ],
        correctAnswer: "3"
      },
      {
        question: "Where is Waldo really?",
        answers: [
           "answer7",
           "answer8",
           "answer9",
           "answer10"
        ],
        correctAnswer: "2"
      }
];

console.log(myQuestions[2].correctAnswer); 



// FUNCTIONS

// When the page loads...

    // We run a function that 
function buildQuiz(){

    //Calls the countdown functions...
    countdown();
    startCountdown();

    for (i=0; i<myQuestions.length; i++){

      $("#quiz-container").append('<div id="q' + i +'"></div>');
      $("#q" + i).append(myQuestions[i].question);
     
      for (j = 0; j < 4; j++) {
        $('<input type="radio" name="dynradio" />').appendTo("#q" + i);
      }

      // ???? for (var j=0; j<myQuestions.length; j++){ 
      //  var radioInput = $('<input>').attr({
      //   type: 'radio',
      //   name 'rbtnCount',
      //   });
      //  $("#q" + i).append(radioInput);????

      //  }

      }

    }

   

//     for (i = 0; i < 20; i++) {
//     $('<input type="radio" name="dynradio" />').appendTo('.your_container');
// }
//     // ..and dynamically builds out the quiz and renders it to "#quiz-container"
//     $('#q1').html(myQuestions[0].question);
//     $('#q2').html(myQuestions[1].question);
//     $('#q3').html(myQuestions[2].question);

//     for (i=0; i<4;i++) {}
//       var radioInput = $('<input>').attr({
//       type: 'radio',
//       name: 'rbtnCount'
//       })
//       

      



buildQuiz();
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
