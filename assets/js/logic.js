//indexpage callouts:

//call out id#submit as variable for start quiz button
var startQuizButton = document.querySelector("#submit")
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
var timeClock = document.querySelector("#time")
//call out id#initials as variable for input of initials 
var timeClock = document.querySelector("#initials")

//Highscorespage callouts:

//call out id#highscores for high score list
var highScores = document.querySelector("#highscores")

//logic of pages: 

//I want to use the DOM to fill the questions screen with data: 
        //Question screen title filled with first question 
        //Choices div filled with four buttons 
        //When I hover over an answer button it changes color 

//when I click the start button I want to 
        //hide hide start screen
        //show questions screen 
        //start timer

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

//On final score screen
        //I want to fill the final-score div with the user's score 

//When submit is pushed I want to
        //add initials to user's score 
        //add all user data [initials + score] to list on highscores screen
        //hide final score screen
        //go to highscores page 

//On highscorepage when I click go back I go to index page
//On highscore page when I click clear highscores it deletes list items

    