//FUNCTIONS
//========================================================================================================================================================================
//function that creates, sets, and starts the timer when called==========>mostly works
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



//function that begins the quiz. Called once the "Begin Quiz" button is clicked
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
}


//function that renders the questions and the multiple choice options to the page
var displayQuestion = function() {
    //display the question text
    $("#question").html("<h1>"+questionsArr[questionCounter].questionText+"</h1>")
    //display the multiple choice answers
    btnA.text(questionsArr[questionCounter].choices.a);
    btnA.attr("value", questionsArr[questionCounter].choices.a);
    $("#optionA").append(btnA);

    btnB.text(questionsArr[questionCounter].choices.b);
    btnB.attr("value", questionsArr[questionCounter].choices.b);
    $("#optionB").append(btnB);

    btnC.text(questionsArr[questionCounter].choices.c);
    btnC.attr("value", questionsArr[questionCounter].choices.c);
    $("#optionC").append(btnC);

    btnD.text(questionsArr[questionCounter].choices.d);
    btnD.attr("value", questionsArr[questionCounter].choices.d);
    $("#optionD").append(btnD);
    }

//function that changes the settings for the next question to be presented
var nextQuestion = function(){
    //go to the next question in the array
    questionCounter++;
    displayQuestion()
}

//function to figureout which answer was selected
var answerClicked = function() {
    var userAnswer = (this.id)
    console.log(userAnswer)
}



//function that subtracts time from the timer is a question is answered incorrectly
var subtractTime = function() {

}


//functions that check answers
var checkA = function(){
    if (event.target.value === questionsArr[questionCounter].correctChoice) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
}

var checkB = function(){
    if (event.target.value === questionsArr[questionCounter].correctChoice) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
}

var checkC = function(){
    if (event.target.value === questionsArr[questionCounter].correctChoice) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
}

var checkD = function(){
    if (event.target.value === questionsArr[questionCounter].correctChoice) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
}

//function that ends the game and shows your score. called when all 5 questions are answered or time left = 0.
var endQuiz = function() {
    console.log("you ran out of time")
}

//variables
//========================================================================================================================================================================

//variable for which question is being displayed
var questionCounter = 0;

//variabe for the amount of time the quiz starts out with
var counter = 60;

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

//EVENT LISTENERS
//======================================================================================================================================================================
//call startQuiz when "Begin Quiz" button is clicked
$("#btn").on("click", startQuiz)
//call the nextQuestion function when the "Next Question" button is clicked
$("#nxtBtn").on("click", nextQuestion)

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





//I DONT THINK THIS WORKS THE WAY I NEED IT TO
//a way to access the properties from within an object via a for loop
// for (var i = 0; i < choicesArr.length; i++) {
//     console.log(choicesArr[i].questionText)
//     console.log(choicesArr[i].correctChoice)
//     console.log(choicesArr[i].choice.a)
//     console.log(choicesArr[i].choice.b)
//     console.log(choicesArr[i].choice.c)
//     console.log(choicesArr[i].choice.d)
// }