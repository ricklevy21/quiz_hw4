//variables to select elements on page
var questionText = document.querySelector("#text")
var answerA = document.querySelector("#choiceA")
var answerB = document.querySelector("#choiceB")
var answerC = document.querySelector("#choiceC")
var answerD = document.querySelector("#choiceD")
var submitBtn = document.querySelector("#btn")


intro()

//function to present the introduction to the quiz
function intro() {
    questionText.textContent = "Think you know a lot about the Allman Brothers Band? Take this quiz to test your knowledge."
}

//function to begin the quiz. This function calls the startTimer function and the question1 function
function beginQuiz() {
    startTimer();
    question1();
}

function startTimer(){

}


function question1(){
    //pose the question
    questionText.textContent = "Which band member started off as a session guitarist at the Muscle Shoals Recording Studio?";
    //create the buttons for the answer choices
    //option A
    var btnA = document.createElement("button");
    btnA.classList.add("btn","btn-primary");
    btnA.innerHTML = "A";                   // Insert text
    document.querySelector("#choiceA").appendChild(btnA);
    //option B
    var btnB = document.createElement("button");
    btnB.classList.add("btn","btn-primary");
    btnB.innerHTML = "B";                   // Insert text
    document.querySelector("#choiceB").appendChild(btnB);
    //option C
    var btnC = document.createElement("button");
    btnC.classList.add("btn","btn-primary");
    btnC.innerHTML = "C";                   // Insert text
    document.querySelector("#choiceC").appendChild(btnC);
    //option D
    var btnD = document.createElement("button");
    btnD.classList.add("btn","btn-primary");
    btnD.innerHTML = "D";                   // Insert text
    document.querySelector("#choiceD").appendChild(btnD);

    //likely need an if statement here to evaluate what happens once an answer is selected. If correct answr is selected... if wrong answer is selected...
}

//add event listener to the button. clicking the button at this stage begins the quiz by calling the function beginQuiz
submitBtn.addEventListener("click", beginQuiz)
