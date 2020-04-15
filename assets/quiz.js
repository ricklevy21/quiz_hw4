//FUNCTIONS
//========================================================================================================================================================================

//function that begins the quiz.
var startQuiz = function (){
    //start runnin the timer
    startTimer();
    //test if the button worked
    console.log("Start quiz button works")
    //display the first question
    displayQuestion();
    //change the start quiz button to the next question button
    nextQuestionBtn();

}

//function that renders the questions and the multiple choice options to the page
var displayQuestion = function() {
    //displayes the question
    $("#text").html("<h1>"+questionsArr[i]+"</h1>");
    //displays the choices
    $("#choiceA").html("<p>"+choicesArr[j][0]+"</p>");
    $("#choiceB").html("<p>"+choicesArr[j][1]+"</p>");
    $("#choiceC").html("<p>"+choicesArr[j][2]+"</p>");
    $("#choiceD").html("<p>"+choicesArr[j][3]+"</p>");


}

var nextQuestion = function(){
    i++;
    j++;
    displayQuestion()    
}

var nextQuestionBtn  = function(){
    $("#btn").html("<button>Next Question</button>");
    $("#btn").on("click", nextQuestion)

}


//function that creates and sets the timer
var setTimer = function() {

}

//function that starts the timer
var startTimer = function (){

}

//function that subtracts time from the timer is a question is answered incorrectly
var subtractTime = function() {

}

//function that checks answer

//variables
//========================================================================================================================================================================
//iterator for displaying the next question & choices
var i= 0;
var j = 0;
//array of questions
var questionsArr = [
    "Which band member started off as a session guitarist at the Muscle Shoals Recording Studio, playing with the likes of Wilson Pickett and Aretha Franklin?",
    "For what reasons has guitarist Dickey Betts been placed under arrest?",
    "At what age was slide guitarist Duane Allman killed in a motorcycle accident?",
    "How did vocalist and organist Gregg Allman avoid being drafted into the military during the Vietnam War?",
    "At what age was bassist Berry Oakley killed in a motorcycle accident?"
]

var choicesArr = [
    [   
        "Duane Allman",
        "Dickey Betts",
        "Gregg Allman",
        "Berry Oakley"
    ],
    [
        "Possession of marijuana",
        "Possession of PCP",
        "Shooting and eating a cow that wasn't his",
        "All of the above"
    ],
    [
        "28",
        "27",
        "24",
        "31"       
    ],
    [
        "Bone Spurs",
        "Shot himself in the foot",
        "He married Cher",
        "Temporarily moved to Mexico City"
    ],
    [
        "39",
        "24",
        "27",
        "He is still alive today"
    ]
]

// //Object that stores information about the questions.
// var quizQuestions = {
//     question: {
//         questionNumber: 1,
//         questionText: "Which band member started off as a session guitarist at the Muscle Shoals Recording Studio, playing with the likes of Wilson Pickett and Aretha Franklin?",
//         choice: {
//             a: "Duane Allman",
//             b: "Dickey Betts",
//             c: "Gregg Allman",
//             d: "Berry Oakley"
//         },
//     correctChoice: "a"
//     },
//     question: {
//         questionNumber: 2,
//         questionText: "For what reasons has guitarist Dickey Betts been placed under arrest?",
//         choice: {
//             a: "Possession of marijuana",
//             b: "Possession of PCP",
//             c: "Shooting and eating a cow that wasn't his",
//             d: "All of the above"
//         },
//     correctChoice: "d"
//     },    
//     question: {
//         questionNumber: 3,
//         questionText: "At what age was slide guitarist Duane Allman killed in a motorcycle accident?",
//         choice: {
//             a: "28",
//             b: "27",
//             c: "24",
//             d: "31"
//         },
//     correctChoice: "c"
//     },
//     question: {
//         questionNumber: 4,
//         questionText: "How did vocalist and organist Gregg Allman avoid being drafted into the military during the Vietnam War?",
//         choice: {
//             a: "Bone Spurs",
//             b: "Shot himself in the foot",
//             c: "He married Cher",
//             d: "Temporarily moved to Mexico City"
//         },
//     correctChoice: "b"
//     },
//     question: {
//         questionNumber: 5,
//         questionText: "At what age was bassist Berry Oakley killed in a motorcycle accident?",
//         choice: {
//             a: "39",
//             b: "24",
//             c: "27",
//             d: "He is still alive"
//         },
//     correctChoice: "b"
//     }            
// };



//PAGE CONTENT
//======================================================================================================================================================================
//landing page
$("#text").html("<h1>Think you know a lot about the Allman Brothers Band?<br>Take this quiz for the ultimate challenge!</h1>");
$("#btn").html("<button>Begin Quiz</button>");


//EVENT LISTENERS
//======================================================================================================================================================================
$("#btn").on("click", startQuiz)