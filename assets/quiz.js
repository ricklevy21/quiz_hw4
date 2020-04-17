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

}

//function that changes the settings for the next question to be presented=====================needs work
var nextQuestion = function(){
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


//function that checks answer
var checkAnswer = function(event) {
    
}

//function that ends the game and shows your score. called when all 5 questions are answered or time left = 0.
var endQuiz = function() {
    console.log("you ran out of time")
}

//variables
//========================================================================================================================================================================

//variabe for the amount of time the quiz starts out with
var counter = 60;

//an array of objects thats store question information
var choicesArr = [
    {
        questionText: "Which band member started off as a session guitarist at the Muscle Shoals Recording Studio, playing with the likes of Wilson Pickett and Aretha Franklin?",
        choices: {
            a: "Duane Allman",
            b: "Dickey Betts",
            c: "Gregg Allman",
            d: "Berry Oakley"
        },
        correctChoice: "a"
    },
    {
        questionText: "For what reasons has guitarist Dickey Betts been placed under arrest?",
        choices: {
            a: "Possession of marijuana",
            b: "Possession of PCP",
            c: "Shooting and eating a cow that wasn't his",
            d: "All of the above"
        },
        correctChoice: "d"
    },
    {
        questionText: "At what age was slide guitarist Duane Allman killed in a motorcycle accident?",
        choices: {
            a: "28",
            b: "27",
            c: "24",
            d: "31",
        },
        correctChoice: "c"
    },
    {
        questionText: "How did vocalist and organist Gregg Allman avoid being drafted into the military during the Vietnam War?",
        choices: {
            a: "Bone Spurs",
            b: "Shot himself in the foot",
            c: "He married Cher",
            d: "Temporarily moved to Mexico City"
        },
        correctChoice: "b"
    },
    {
        questionText: "At what age was bassist Berry Oakley killed in a motorcycle accident?",
        choices: {
            a: "39",
            b: "24",
            c: "27",
            d: "He is still alive"
        },
        correctChoice: "b"
    }
]


//STARTING PAGE CONTENT
//======================================================================================================================================================================
//hide the end page text
$("#end").hide();
$("#nxtBtn").hide();


//EVENT LISTENERS
//======================================================================================================================================================================
$("#btn").on("click", startQuiz)
$("#nxtBtn").on("click", nextQuestion)






//EXPERIMENTAL LAND
//=======================================================================================================================================================================





//I DONT THINK THIS WORKS THE WAY I NEED IT TO
//a way to access the properties from within an object via a for loop
// for (var i = 0; i < choicesArr.length; i++) {
//     console.log(choicesArr[i].questionNumber)
//     console.log(choicesArr[i].questionText)
//     console.log(choicesArr[i].correctChoice)
//     console.log(choicesArr[i].choice.a)
//     console.log(choicesArr[i].choice.b)
//     console.log(choicesArr[i].choice.c)
//     console.log(choicesArr[i].choice.d)
// }