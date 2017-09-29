// VARIABLES //

// We declare variable showQuiz to assign our setInterval to control timer and timeout
var showQuiz;

// We declare all variables pertaining to quiz results in an object 
var quiz = {
  correctAnswers: 0,
  wrongAnswers: 0,
  noAnswers: 0,
  time: 20        
  };

//We declare all quiz questions in an array to be able to compare data easily

var myQuestions = [
      {
        question: "Who Lives In A Pineapple Under The Sea?",
        answers: [
           "Plankton",
           "Ren & Stimpy",
           "Spongebob Squarepants",
           "Avatar"
        ],

        correctAnswer: "2"
      },  
      {
        question: "Who Loves Orange Soda?",
        answers: [
           "Kel Loves Orange Soda", 
           "Arnold Loves Orange Soda",
           "Kora Loves Orange Soda",
           "Patrick Loves Orange Soda"
        ],

        correctAnswer: "0"
      },
      {
        question: "Who Are Timmy's Fairy God Parents?",
        answers: [
           "Sparkle & Avalon",
           "Cosmo & Wanda",
           "Poof & Sparky",
           "Blonda & Fairwinkle"
        ],
        correctAnswer: "1"
      },
      {
        question: "Who is Rocko's Best Friend?",
        answers: [
           "Heffer Wolfe",
           "Mr. BigHead",
           "Filburt Turtles",
           "Bev BigHead",
           
        ],
        correctAnswer: "0"
      },

     {
        question: "Who is Secretly in Love with Arnold?",
        answers: [
           "Phoebe",
           "Rhonda",
           "Nadine",
           "Helga"
        ],
        correctAnswer: "3"
      },

      {
        question: "Which Cast Member Was in All Seasons of All That",
        answers: [
           "Amanda Bynes",
           "Kel Mitchell",
           "Keenan Thompson",
           "Josh Server"
        ],
        correctAnswer: "3"
      }
];

// console.log(myQuestions[2].correctAnswer); 



// FUNCTIONS

// When the page loads....
$(document).ready(function(){
    // We click the start button..
    $("#start-button").click(function(){
        // And launches the quiz
        buildQuiz();
    });

});


// We run a function that checks users choice against correct answer

$(document).on("click","#answers", questionCheck);


function questionCheck () {
 
 // We set variables so we can determine which button in which row the user clicked
  var radioSet = $(this).attr("name"); //retrieves name of row
  var buttonRow = radioSet.charAt(8).trim();
  var userAnswer = $('input:checked').val()

  
  console.log({userAnswer});
  // console.log(myQuestions[buttonRow].correctAnswer);


  // We compare the value of the button clicked to the correct answer
  if(userAnswer === myQuestions[buttonRow].correctAnswer){
    quiz.correctAnswers++;
    
    
  }
  else {
    quiz.wrongAnswers++
    // console.log("incorrect");
  }

  // console.log(userAnswer);
  // console.log(quiz.correctAnswers)
  // console.log(quiz.wrongAnswers)

  // console.log(radioSet);
  // console.log(buttonRow);

}



function buildQuiz(){
    //Starts the countdown
    countdown();
    startCountdown();
    // Dynamically replaces the Start Now button
    $("#quiz-container").html('<center><h3>HOW WELL DO YOU KNOW THESE NICKELODEON SHOWS?</h3></center>')
   
    // And populates the quiz
    for (i=0; i<myQuestions.length; i++){
      $("#quiz-container").append('<center><div class="questions" id="q' + i +'"></div><center>');
      $("#q" + i).append(myQuestions[i].question);
     
      for (j = 0; j < 4; j++) {
        $('<input id="answers" class="radio" type="radio" name="dynradio' + (i) + '" value="' + (j) + '">' + myQuestions[i].answers[j] + '</input> _______________________').appendTo("#q" + i);
      }

    }
    // Dynamically creates new "DONE"
    var newButton = $("<button id='stop-button' type='button' class='btn btn-default'>DONE</button>");
    $("#quiz-container").append(newButton);

    
}
          

//We declare a function to start the countdown
function startCountdown() {
  showQuiz = setInterval(countdown, 10000);
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
      $("#quiz-container").html("<h4>Correct Answers: " + quiz.correctAnswers + "</h4>");
      $("#quiz-container").append("<h4>Wrong Answers: " + quiz.wrongAnswers + "</h4>");


    } 
}

// We declare a function to stop the quiz if the user is done
$(document).on("click","#stop-button", forceStop);

function forceStop() {
  
      stopCountdown();
      // Timer is replaces with text
      $("#display-timer").html("<h4>ALL DONE</h4>");
      // Quiz is replaced with scores/quiz data
      $("#quiz-container").html("<h4>Correct Answers: " + quiz.correctAnswers + "</h4>");
      $("#quiz-container").append("<h4>Wrong Answers: " + quiz.wrongAnswers + "</h4>");
}      


// PSEUDOCODE

// Have event listener listen for only 1 clicked button
// Calculate and display unanswered questions
// Display radio buttons in line



