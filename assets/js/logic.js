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
var quizQuestions = ["Commonly Used data types DO NOT include:",
                     "The condition in an if/else statment is enclosed within _____.",
                     "Arrays in JavaScript can be used to store _____.",
                     "String values must be enclosed within ______ when being assigned to variables."]

                     //first question and answer screen
let questionOne = quizQuestions[0]
questionTitle.textContent = questionOne

firstAnswerSet();
//create answers array number one
function firstAnswerSet(){
var answerList1 = ["strings","booleans","alerts","numbers"]
function buildButtons() {
        for (var i = 0; i < answerList1.length; i++) {
           var btn = document.createElement("button");
           var t = document.createTextNode(answerList1[i]);
           btn.appendChild(t);
           btn.id = answerList1[i]
           choiceList.appendChild(btn);
        }
    }
buildButtons();
let q1a1 = document.getElementById(answerList1[0]);
let q1a2 = document.getElementById(answerList1[1]);
let q1a3 = document.getElementById(answerList1[2]);
let q1a4 = document.getElementById(answerList1[3]);
q1a1.addEventListener("click", wrongAnswer);
q1a2.addEventListener("click", wrongAnswer);
q1a3.addEventListener("click", rightAnswer);
q1a4.addEventListener("click", wrongAnswer);
}

//second question and answer screen
function questionTwo(){
        let questionTwo = quizQuestions[1]
        questionTitle.textContent = questionTwo
        secondAnswerSet();
}

function secondAnswerSet(){
        choiceList.textContent = ""
        var answerList1 = ["quotes","curly brackets","parentheses","square brackets"]
        function buildButtons() {
                for (var i = 0; i < answerList1.length; i++) {
                   var btn = document.createElement("button");
                   var t = document.createTextNode(answerList1[i]);
                   btn.appendChild(t);
                   btn.id = answerList1[i]
                   choiceList.appendChild(btn);
                }
            }
        buildButtons();
        let q2a1 = document.getElementById(answerList1[0]);
        let q2a2 = document.getElementById(answerList1[1]);
        let q2a3 = document.getElementById(answerList1[2]);
        let q2a4 = document.getElementById(answerList1[3]);
        q2a1.addEventListener("click", wrongAnswer2);
        q2a2.addEventListener("click", wrongAnswer2);
        q2a3.addEventListener("click", rightAnswer2);
        q2a4.addEventListener("click", wrongAnswer2);
        }

//third question and answer screen
function questionThree(){
        let questionThree = quizQuestions[2]
        questionTitle.textContent = questionThree
        thirdAnswerSet();
}

function thirdAnswerSet(){
        choiceList.textContent = ""
        var answerList1 = ["numbers and strings","other arrays","booleans","all of the above"]
        function buildButtons() {
                for (var i = 0; i < answerList1.length; i++) {
                   var btn = document.createElement("button");
                   var t = document.createTextNode(answerList1[i]);
                   btn.appendChild(t);
                   btn.id = answerList1[i]
                   choiceList.appendChild(btn);
                }
            }
        buildButtons();
        let q3a1 = document.getElementById(answerList1[0]);
        let q3a2 = document.getElementById(answerList1[1]);
        let q3a3 = document.getElementById(answerList1[2]);
        let q3a4 = document.getElementById(answerList1[3]);
        q3a1.addEventListener("click", wrongAnswer3);
        q3a2.addEventListener("click", wrongAnswer3);
        q3a3.addEventListener("click", wrongAnswer3);
        q3a4.addEventListener("click", rightAnswer3);
        }
//fourth question and answer screen
function questionFour(){
        let questionFour = quizQuestions[3]
        questionTitle.textContent = questionFour
        fourthAnswerSet();
}

function fourthAnswerSet(){
        choiceList.textContent = ""
        var answerList1 = ["commas","curly brackets","quotes","parentheses"]
        function buildButtons() {
                for (var i = 0; i < answerList1.length; i++) {
                   var btn = document.createElement("button");
                   var t = document.createTextNode(answerList1[i]);
                   btn.appendChild(t);
                   btn.id = answerList1[i]
                   choiceList.appendChild(btn);
                }
            }
        buildButtons();
        let q3a1 = document.getElementById(answerList1[0]);
        let q3a2 = document.getElementById(answerList1[1]);
        let q3a3 = document.getElementById(answerList1[2]);
        let q3a4 = document.getElementById(answerList1[3]);
        q3a1.addEventListener("click", wrongAnswer4);
        q3a2.addEventListener("click", wrongAnswer4);
        q3a3.addEventListener("click", rightAnswer4);
        q3a4.addEventListener("click", wrongAnswer4);
        }

//when I click the start button I want to 
startButton.addEventListener("click", startQuiz);

function startQuiz(){
        localStorage.setItem("score", 0);
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

//Answer Button Functionality
//ADD POINT
function addPoint() {
        let score = parseInt(localStorage.getItem("score"))
        localStorage.setItem("score", ++score);
}
//TIME PENALTY
function timePenalty(){
        //subtract from running interval
}
//POP UP WRONG 

//POP UP CORRECT

//FIRST SET 
    //if the answer in first set is correct 
function rightAnswer(){
        console.log("right!")
        addPoint();
        questionTwo();
}
    //I want to pop up a temporary text under the wrapper of "correct!"
               
//if the answer is wrong
function wrongAnswer(){
        console.log("wrong!")
        timePenalty();
        questionTwo();
}
//I want to subtract time from the clock 
        //I want to pop up a temporary text under the wrapper of "wrong!"

//END FIRST SET

//SECOND SET 
    //if the answer in first set is correct 
    function rightAnswer2(){
        console.log("right!")
        addPoint();
        questionThree();
}
        //I want to pop up a temporary text under the wrapper of "correct!"
               
//if the answer is wrong
function wrongAnswer2(){
        console.log("wrong!")
        timePenalty();
        questionThree();

}
//I want to subtract time from the clock 
        //I want to pop up a temporary text under the wrapper of "wrong!"
//END SECOND SET

//THIRD SET 
    //if the answer in first set is correct 
    function rightAnswer3(){
        console.log("right!")
        addPoint();
        questionFour();
}
        //I want to pop up a temporary text under the wrapper of "correct!"
               

//if the answer is wrong
function wrongAnswer3(){
        console.log("wrong!")
        timePenalty();
        questionFour();

}
//I want to subtract time from the clock 
        //I want to pop up a temporary text under the wrapper of "wrong!"
//END THIRD SET

//FOURTH SET 
    //if the answer in first set is correct 
function rightAnswer4(){
        console.log("right!")
        addPoint();
        finalScreen();
}
        //I want to pop up a temporary text under the wrapper of "correct!"
               

//if the answer is wrong
function wrongAnswer4(){
        console.log("wrong!")
        timePenalty();
        finalScreen();

}
//I want to subtract time from the clock 
        //I want to pop up a temporary text under the wrapper of "wrong!"
//END FOURTH SET


//Clear Timer
function clearTimer() {
        timeClock.textContent = 2;
}

//If all the questions are answered OR timer reaches zero I want to 
        //hide questions screen
        //show final score screen 
function finalScreen(){
        clearTimer();
        scoreBoard();
        questionScreen.className = "hide"
        endScreen.className = "start"
}

//On final score screen
        //I want to fill the final-score div with the user's score 
function scoreBoard(){
        finalScore.textContent = localStorage.getItem('score')
}

//When submit is pushed I want to
        //add initials to user's score 
        //add all user data [initials + score] to list on highscores screen
        //hide final score screen
        //go to highscores page 

//On highscorepage when I click go back I go to index page
//On highscore page when I click clear highscores it deletes list items

    