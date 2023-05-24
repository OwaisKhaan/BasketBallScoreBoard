let homeScoreBoard = document.getElementById('home-score')
let guestScoreBoard = document.getElementById('guest-score')

//Winner display
let homeWinners = document.getElementById('home-win')
let guestWinners = document.getElementById('guest-win')

//score buttons
let scoreButtons = document.getElementsByClassName('btn')


let homeScore = 0;
let guestScore = 0;

function homeOne(){
    homeScore += 1
    homeScoreBoard.textContent = homeScore
}
function homeTwo(){
    homeScore += 2
    homeScoreBoard.textContent = homeScore
}
function homeThree(){
    homeScore += 3
    homeScoreBoard.textContent = homeScore
}

function guestOne(){
    guestScore += 1
    guestScoreBoard.textContent = guestScore
}
function guestTwo(){
    guestScore += 2
    guestScoreBoard.textContent = guestScore
}
function guestThree(){
    guestScore += 3
    guestScoreBoard.textContent = guestScore
}

function gameOver(){
    if(homeScore>guestScore){
        homeWinners.style.visibility = "visible"
    }else{
        guestWinners.style.visibility = "visible"
    }

    scoreButtons[0].style.visibility= "hidden"
    scoreButtons[1].style.visibility= "hidden"
}

function newGame(){
    homeWinners.style.visibility = "hidden"
    guestWinners.style.visibility = "hidden"

    homeScore = 0
    guestScore = 0

    homeScoreBoard.textContent = 0
    guestScoreBoard.textContent = 0

    scoreButtons[0].style.visibility= "visible"
    scoreButtons[1].style.visibility= "visible"
}

