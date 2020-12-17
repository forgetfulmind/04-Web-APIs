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
var initialsInput = document.querySelector("#initials")
//call out id#submit as variable for submit initials 
var initialsSubmit = document.querySelector("#submit")
//call out id#correctWav as variable for correct answer sfx
var correctWav = document.querySelector("#correctWav")
//call out id#correctWav as variable for correct answer sfx
var incorrectWav = document.querySelector("#incorrectWav")
//Set Interval 
var interval;


//logic of pages: 

//I want to use the DOM to fill the questions screen with data: 

//create questions array
var quizQuestions = ["Commonly Used data types DO NOT include:",
                     "The condition in an if/else statment is enclosed within _____.",
                     "Arrays in JavaScript can be used to store _____.",
                     "String values must be enclosed within ______ when being assigned to variables."]

                     //first question and answer screen
let questionOne = quizQuestions[0]
questionTitle.textContent = questionOne

firstAnswerSet();

//Function for building buttons 
function buildButtons(build) {
        for (var i = 0; i < build.length; i++) {
           var btn = document.createElement("button");
           var t = document.createTextNode(build[i]);
           btn.appendChild(t);
           btn.id = build[i];
           choiceList.appendChild(btn);
        }
    }

//create answers array number one
function firstAnswerSet(){
var answerList1 = ["strings","booleans","alerts","numbers"]
        buildButtons(answerList1);
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
        var answerList2 = ["quotes","curly brackets","parentheses","square brackets"]
        buildButtons(answerList2);
        let q2a1 = document.getElementById(answerList2[0]);
        let q2a2 = document.getElementById(answerList2[1]);
        let q2a3 = document.getElementById(answerList2[2]);
        let q2a4 = document.getElementById(answerList2[3]);
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
        var answerList3 = ["numbers and strings","other arrays","booleans","all of the above"]
        buildButtons(answerList3);
        let q3a1 = document.getElementById(answerList3[0]);
        let q3a2 = document.getElementById(answerList3[1]);
        let q3a3 = document.getElementById(answerList3[2]);
        let q3a4 = document.getElementById(answerList3[3]);
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
        var answerList4 = ["commas","curly brackets","quotes","parentheses"]
        buildButtons(answerList4);
        let q3a1 = document.getElementById(answerList4[0]);
        let q3a2 = document.getElementById(answerList4[1]);
        let q3a3 = document.getElementById(answerList4[2]);
        let q3a4 = document.getElementById(answerList4[3]);
        q3a1.addEventListener("click", wrongAnswer4);
        q3a2.addEventListener("click", wrongAnswer4);
        q3a3.addEventListener("click", rightAnswer4);
        q3a4.addEventListener("click", wrongAnswer4);
        }

//START BUTTON
//when I click the start button I want to 
startButton.addEventListener("click", startQuiz);

function startQuiz(){
        localStorage.setItem("score", 0);
        timeClock.textContent = 60;
        console.log("Timer Start!");
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

//Start Timer
function setTimer(){
        interval = setInterval(function(){
                timeClock.textContent--;
                console.log(timeClock.textContent)
                if(parseInt(timeClock.textContent) === 0) {
                        clearInterval(interval);
                        finalScreen();
                }
        },1000)

}

//Answer Button Functionality
//ADD POINT
function addPoint() {
        let score = parseInt(localStorage.getItem("score"))
        localStorage.setItem("score", ++score);
        rightAlert()
        playSound(correctWav)

}
//TIME PENALTY
function timePenalty(){
        //subtract from running interval
        clearInterval(interval);
        timeClock.textContent = parseInt(timeClock.textContent) - 5;
        setTimer();
        wrongAlert();
        playSound(incorrectWav)
}
//POP UP WRONG 
function wrongAlert(){
        console.log("wrong!")
        let wrongAlert = document.createElement('p')
        wrongAlert.className = "feedback"
        wrongAlert.id = "wrongAlert"
        wrongAlert.textContent = "Wrong!"
        console.log(wrongAlert)
        questionScreen.appendChild(wrongAlert)
        setTimeout(function(){
               document.querySelector("#wrongAlert").setAttribute("class","hide")
        },1000)
}

//POP UP CORRECT
function rightAlert(){
        console.log("right!")
        let rightAlert = document.createElement('p')
        rightAlert.className = "feedback"
        rightAlert.id = "alert"
        rightAlert.textContent = "Right!"
        console.log(rightAlert)
        questionScreen.appendChild(rightAlert)
        setTimeout(function(){
               document.querySelector("#alert").setAttribute("class","hide")
        },1000)
}

//PLAY SOUND
function playSound(squid){
        squid.play();
}

//FIRST SET 
    //if the answer in first set is correct 
function rightAnswer(){
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


//If all the questions are answered OR timer reaches zero I want to 
        //hide questions screen
        //show final score screen 
function finalScreen(){
        clearInterval(interval);
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
initialsSubmit.addEventListener("click", userName)
        //add initials to user's score 
function userName(){
        initialsInputValue = initialsInput.value
        console.log(initialsInputValue)
        console.log(initialsInputValue.length)
        if (parseInt(initialsInputValue.length) <= 3){
        localStorage.setItem("userName", initialsInputValue)
  //go to highscores page 
        window.location.href = "./highscores.html"
        //addScore()
        } else {
                alert("Please use less than three characters")
                initialsInput.value = ""

        }
}


//clear local storage on page load
localStorage.clear();
    