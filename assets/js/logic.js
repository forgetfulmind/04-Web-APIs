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
//Set Long Clock
var longClock = 0;


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
        createQuestions();
}
        //hide hide start screen
function hideStart(){
        startScreen.className = "hide"
}
        //show questions screen 
function showQuestions(){
        questionScreen.className = "start"
}

        //function for creating question card
function createQuestions(){
        buildButtons(quizCards[longClock].answerChoices);
        questionTitle.textContent = quizCards[longClock].question;

}

        //Function for building buttons 
function buildButtons(build) {
        choiceList.innerHTML = "";
        for (var i = 0; i < build.length; i++) {
           var btn = document.createElement("button");
           var t = document.createTextNode(build[i]);
           btn.appendChild(t);
           btn.value = build[i];
           btn.id = build[i];
           btn.onclick = gradeAnswer;
           choiceList.appendChild(btn);
        }
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

        //Function for grading answers
function gradeAnswer(){
        if(quizCards[longClock].key == this.value){
                addPoint()
        }else{
                timePenalty();
        }
        longClock++;
        if(longClock === quizCards.length){
                finalScreen();
        }else{
                createQuestions();
        }

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
               let squid = document.querySelectorAll("#wrongAlert");
               for(i=0; i < squid.length; i++){
                       squid[i].setAttribute("class","hide")
               }
        },500)
}

//POP UP CORRECT
function rightAlert(){
        console.log("right!")
        let rightAlert = document.createElement('p')
        rightAlert.className = "feedback"
        rightAlert.id = "rightAlert"
        rightAlert.textContent = "Right!"
        console.log(rightAlert)
        questionScreen.appendChild(rightAlert)
        setTimeout(function(){
                let squid = document.querySelectorAll("#rightAlert");
                for(i=0; i < squid.length; i++){
                        squid[i].setAttribute("class","hide")
                }
        },500)
}

//PLAY SOUND
function playSound(squid){
        squid.play();
}


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
        if (parseInt(initialsInputValue.length) <= 3 && parseInt(initialsInputValue.length) != 0){
        localStorage.setItem("userName", initialsInputValue)
  //go to highscores page 
        window.location.href = "./highscores.html"
        //addScore()
        } else {
                alert("Please input between one and three characters")
                initialsInput.value = ""

        }
}


//clear local storage on page load
localStorage.clear();
    