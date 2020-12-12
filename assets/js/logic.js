//indexpage callouts:

//call out id#submit as variable for start quiz button
var startButton = document.querySelector("#start")
//call out id#start-screen as variable for start screen div
var startScreen = document.querySelector("#start-screen")
//call out id#questions as variable for question screen div
var questionScreen = document.querySelector("#questions")
//call out id#question-title as variable for question screen title div 
var questionTitle = document.querySelector("#question-title")
//call out id#choices as variable for choices div
var choiceList = document.querySelector("#choices")
//call out id#end-screen as variable for question screen div
var endScreen = document.querySelector("#end-screen")
//call out id#time as variable for time on clock
var timeClock = document.querySelector("#time")
//call out id#final-score as variable for displaying final score div 
var finalScore = document.querySelector("#final-score")
//call out id#initials as variable for input of initials 
var intialsInput = document.querySelector("#initials")

//Highscorespage callouts:

//call out id#highscores for high score list
var highScores = document.querySelector("#highscores")



//logic of pages: 

//I want to use the DOM to fill the questions screen with data: 
        //Question screen title filled with first question 

//create questions array
var quizQuestions = ["Commonly Used data types DO NOT include:","dance?","fart?"]
let questionOne = quizQuestions[0]
questionTitle.textContent = questionOne

//Choices div filled with four buttons 
firstAnswerSet();
//create answers array number one
function firstAnswerSet(){
var answerList1 = ["strings","booleans","alerts","numbers"]
function buildButtons() {
        for (var i = 0; i < answerList1.length; i++) {
           var btn = document.createElement("button");
           var t = document.createTextNode(answerList1[i]);
           btn.appendChild(t);
           btn.className = answerList1[i]
           choiceList.appendChild(btn);
        }
    }
buildButtons();
}

//when I click the start button I want to 
startButton.addEventListener("click", startQuiz);
function startQuiz(){
        setTimer();
        hideStart();
        showQuestions();
}
        //hide hide start screen
function hideStart(){
        startScreen.className = "hide"
}
        //show questions screen 
function showQuestions(){
        questionScreen.className = "start"
}
        //fill timer with 60 seconds and start timer
function setTimer(){
        console.log("Timer Start")
        timeClock.textContent = 60
        let countDown = setInterval(function(){
                timeClock.textContent--;
                console.log(timeClock.textContent)
                if(timeClock.textContent == 0) {
                        clearInterval(countDown);
                        finalScreen();
                }
        },1000)
}

//when I click an answer button it advances to the next question screen
        //use the DOM to replace the contents of the question title and choices divs

    //if the answer is correct 
        //I want to add a point to the user's score 
        //I want to pop up a temporary text under the wrapper of "correct!"

    //if the answer is wrong
        //I want to subtract time from the clock 
        //I want to pop up a temporary text under the wrapper of "wrong!"

//If all the questions are answered OR timer reaches zero I want to 
        //hide questions screen
        //show final score screen 
function finalScreen(){
        questionScreen.className = "hide"
        endScreen.className = "start"
}

//On final score screen
        //I want to fill the final-score div with the user's score 

//When submit is pushed I want to
        //add initials to user's score 
        //add all user data [initials + score] to list on highscores screen
        //hide final score screen
        //go to highscores page 

//On highscorepage when I click go back I go to index page
//On highscore page when I click clear highscores it deletes list items

    