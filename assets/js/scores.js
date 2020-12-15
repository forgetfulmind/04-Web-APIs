//Highscorespage callouts:
//call out id#highscores for high score list
var highScores = document.querySelector("#highscores")
//call out id#clear for clear highscores button
var clearScores = document.querySelector("#clear")

//listen to clear scores button
clearScores.addEventListener("click", clearHighScores)

//clear scores button wipe list 
function clearHighScores(){
    highScores.textContent = ""
}

//add initials and score from local storage
function addScore() {
    let score = document.createElement('li')
    let userName = localStorage.getItem("userName")
    let highScore = localStorage.getItem("score")
    score.textContent = userName + " - " + highScore
    highScores.appendChild(score)
}

//populate page with scores 
addScore();