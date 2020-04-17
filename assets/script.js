//FUNCTIONS
//========================================================================================================================================================================
//function that creates, sets, and starts the timer when called==========> WORKING
var setTimer = function() {
    //uses the wondow set interval method to create an interval
    var interval = setInterval(function() {
        //subtract 1 from the counter each time a second passes
        counter--;
        //display the time left on the page
        $('#timer').html("<h4>Seconds Left:  "+counter+"</h4>");
        //when the timer reaches 0, end the quiz and clear the interval
        if (counter <= 0) {
                 clearInterval(interval);
                 endQuiz()
            return;
        }else if (counter <=5 && counter > 0) {
            $('#timer').addClass("underFive");
        }
    }, 1000);
}



//function that begins the quiz. Called once the "Begin Quiz" button is clicked=========> WORKING
var startQuiz = function (){
    //test if the button worked
    console.log("Start quiz button works")
    //hide the intro text
    $("#text").hide();
    //hide the "Begin Quiz" button
    $("#btn").hide();
    //show the "Next Question" button
    $("#nxtBtn").show();
    //start running the timer
    setTimer();
    //display the first question
    displayQuestion();
    //display the user's ongoing score
}


//function that renders the questions and the multiple choice options to the page=============> WORKING
var displayQuestion = function() {
    //display the question text
    $("#question").html("<h1>"+questionsArr[questionCounter].questionText+"</h1>")
    //display the multiple choice answers
    btnA.text(questionsArr[questionCounter].choices.a);
    btnA.attr("value", questionsArr[questionCounter].choices.a);
    btnA.attr("class", "btn btn-primary");
    $("#optionA").append(btnA);

    btnB.text(questionsArr[questionCounter].choices.b);
    btnB.attr("value", questionsArr[questionCounter].choices.b);
    btnB.attr("class", "btn btn-primary");
    $("#optionB").append(btnB);

    btnC.text(questionsArr[questionCounter].choices.c);
    btnC.attr("value", questionsArr[questionCounter].choices.c);
    btnC.attr("class", "btn btn-primary");
    $("#optionC").append(btnC);

    btnD.text(questionsArr[questionCounter].choices.d);
    btnD.attr("value", questionsArr[questionCounter].choices.d);
    btnD.attr("class", "btn btn-primary");
    $("#optionD").append(btnD);
    }

//function that changes the settings for the next question to be presented =====================> WORKING
var nextQuestion = function(){
    //go to the next question in the array
    questionCounter++;
    displayQuestion()
    enableBtns();
}

//function that evaluates if a user's answer is correct or incorrect====================================>WORKING
var corrIncorr = function() {
    //correct answer adds 1 point to the user's score
    if (event.target.value === questionsArr[questionCounter].correctChoice) {
        console.log("Correct");
        score = score +1
    //incorrect answer reduces time left by 10 seconds
    } else {
        console.log("Incorrect");
        counter = counter -10;
    }
    //change button colors to reveal correct/incorrect answers
    btnColor();
}

//function that changes colors of buttons after answer is selected=======================================>WORKING
var btnColor = function(){
     if (btnA.val() === questionsArr[questionCounter].correctChoice) {
        btnA.removeClass("btn btn-primary");
        btnA.addClass("btn btn-success");
     } else {
        btnA.removeClass("btn btn-primary");
        btnA.addClass("btn btn-danger");
     }
     if (btnB.val() === questionsArr[questionCounter].correctChoice) {
        btnB.removeClass("btn btn-primary");
        btnB.addClass("btn btn-success");
     } else {
        btnB.removeClass("btn btn-primary");
        btnB.addClass("btn btn-danger");
     }
     if (btnC.val() === questionsArr[questionCounter].correctChoice) {
        btnC.removeClass("btn btn-primary");
        btnC.addClass("btn btn-success");
     } else {
        btnC.removeClass("btn btn-primary");
        btnC.addClass("btn btn-danger");
     }
     if (btnD.val() === questionsArr[questionCounter].correctChoice) {
        btnD.removeClass("btn btn-primary");
        btnD.addClass("btn btn-success");
     } else {
        btnD.removeClass("btn btn-primary");
        btnD.addClass("btn btn-danger");
     }
}


//functions that take action once an answer button is clicked
var checkA = function(){
    corrIncorr();
    disableBtns();
    ongoingScore();
}

var checkB = function(){
    corrIncorr();
    disableBtns();
    ongoingScore();
}

var checkC = function(){
    corrIncorr();
    disableBtns();
    ongoingScore();
}

var checkD = function(){
    corrIncorr();
    disableBtns();
    ongoingScore();
}

//function that disables answer buttons once an answer has been selected==================================> WORKING
var disableBtns = function() {
    btnA.prop("disabled",true);
    btnB.prop("disabled",true);
    btnC.prop("disabled",true);
    btnD.prop("disabled",true);
}

//function that enables answer buttons once user goes to next question==================================> WORKING
var enableBtns = function() {
    btnA.prop("disabled",false);
    btnB.prop("disabled",false);
    btnC.prop("disabled",false);
    btnD.prop("disabled",false);
}



//function that displays the score as the quiz is ongoing
var ongoingScore = function() {
    $("#score").html("<h4>Current Score "+score+"</h4>")
};

//function that ends the game and shows your score. called when all 5 questions are answered or time left = 0.==================================> TO DO
//allows user to enter 3 initials and save score to local storage...high scores are on another html page
var endQuiz = function() {
    //calculate final score- takes into account time left and correct answers given
    //avoid negative score due to incorrect questions reducing time below zero
    if (counter < 0){
        counter = 0
    } else{
        counter = counter
    }
    score = score + counter;
    //hide all current elements
    $("#nxtBtn").hide();
    $("#text").hide();
    $("#score").hide();
    $("#timer").hide();
    $("#question").hide();
    $("#optionA").hide();
    $("#optionB").hide();
    $("#optionC").hide();
    $("#optionD").hide();
    //show information in end of quiz element
    $("#end").show();
    $("#end").append("<h3> FINAL SCORE: "+score+"</h3>");
    $("#end").append(endLabel);
    $("#end").append(lineBreak);
    $("#end").append(endInput);
    $("#submitBtn").append(submitScore);
    endLabel.text("ENTER YOUR INITIALS HERE:")
    endLabel.attr("for", "initials")
    endInput.attr("id", "initials")
    endInput.attr("type", "text")
    endInput.attr("maxLength", "3")
    submitScore.text("Submit")
    submitScore.attr("class", "btn btn-dark")
}

//function that saves score to local storage
var saveScore = function(){
    //store user's input into the initials variable
    initials = document.getElementById("initials").value
    //add score and initials into an object
    userScore.score = score;
    userScore.initials = initials;
    //get existing data from local storage and add it to the highScoresArr array
    
    //add new score (in userScore) to highScoresArr

    //save each score from highScoresArr to to local storage
    localStorage.setItem("initials", initials)
    localStorage.setItem("score", score)
    //clear elements once score is submitted and ask if user wants to take the quiz again
    $("#end").empty();
    $("#end").html("<h1>Your score has been submitted.<br>Would you Like to take the Quiz Again?</h1>");
    $("#submitBtn").hide();
}
//variables
//========================================================================================================================================================================

//variable for which question is being displayed
var questionCounter = 0;

//variabe for the amount of time the quiz starts out with
var counter = 15;

//variable for the user's score
var score = 0;

//varable for user's initials
var initials = ""

//object that holds highScore
var userScore = {}

//array that holds high score objects
var highScoresArr= []

//an array of objects that store question information
var questionsArr = [
    {
        questionText: "Which band member started off as a session guitarist at the Muscle Shoals Recording Studio, playing with the likes of Wilson Pickett and Aretha Franklin?",
        choices: {
            a: "Duane Allman",
            b: "Dickey Betts",
            c: "Gregg Allman",
            d: "Berry Oakley"
        },
        correctChoice: "Duane Allman"
    },
    {
        questionText: "For what reasons has guitarist Dickey Betts been placed under arrest?",
        choices: {
            a: "Possession of marijuana",
            b: "Possession of PCP",
            c: "Shooting and eating a cow that wasn't his",
            d: "All of the above"
        },
        correctChoice: "All of the above"
    },
    {
        questionText: "At what age was slide guitarist Duane Allman killed in a motorcycle accident?",
        choices: {
            a: "28",
            b: "27",
            c: "24",
            d: "31",
        },
        correctChoice: "24"
    },
    {
        questionText: "How did vocalist and organist Gregg Allman avoid being drafted into the military during the Vietnam War?",
        choices: {
            a: "Bone Spurs",
            b: "Shot himself in the foot",
            c: "He married Cher",
            d: "Temporarily moved to Mexico City"
        },
        correctChoice: "Shot himself in the foot"
    },
    {
        questionText: "At what age was bassist Berry Oakley killed in a motorcycle accident?",
        choices: {
            a: "39",
            b: "24",
            c: "27",
            d: "He is still alive"
        },
        correctChoice: "24"
    }
]


//STARTING PAGE CONTENT
//======================================================================================================================================================================
//hide the end page text
$("#end").hide();
$("#nxtBtn").hide();


var btnA = $("<button>");
var btnB = $("<button>");
var btnC = $("<button>");
var btnD = $("<button>");

var endLabel = $("<label>");
var lineBreak = $("<br>")
var endInput = $("<input>");
var submitScore = $("<button>");

//EVENT LISTENERS
//======================================================================================================================================================================
//call startQuiz when "Begin Quiz" button is clicked
$("#btn").on("click", startQuiz)
//call the nextQuestion function when the "Next Question" button is clicked
$("#nxtBtn").on("click", nextQuestion)
//submit user's final score to local storage
submitScore.on("click", saveScore)

//evaluate user's selected answer when option "a" is clicked
$(btnA).on("click", function(event){
    console.log("option A was clicked")
    console.log(event.target.value)
    console.log(questionsArr[questionCounter].correctChoice)
    checkA();
});

//evaluate user's selected answer when option "a" is clicked
$(btnB).on("click", function(event){
    console.log("option B was clicked")
    console.log(event.target.value)
    console.log(questionsArr[questionCounter].correctChoice)
    checkB();
})

//evaluate user's selected answer when option "a" is clicked
$(btnC).on("click", function(event){
    console.log("option C was clicked")
    console.log(event.target.value)
    console.log(questionsArr[questionCounter].correctChoice)
    checkC();
})

//evaluate user's selected answer when option "a" is clicked
$(btnD).on("click", function(event){
    console.log("option D was clicked")
    console.log(event.target.value)
    console.log(questionsArr[questionCounter].correctChoice)
    checkD();
})





//EXPERIMENTAL LAND
//=======================================================================================================================================================================
