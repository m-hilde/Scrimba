let resultHome = document.getElementById("score-home")
let resultGuest = document.getElementById("score-guest")
let scoreHome = 0
let scoreGuest = 0

function add1home() {
    scoreHome += 1;
    resultHome.textContent = scoreHome

}

function add2home() {
    scoreHome += 2;
    resultHome.textContent = scoreHome
}

function add3home() {
    scoreHome += 3;
    resultHome.textContent = scoreHome
}



function add1guest() {
    scoreGuest += 1;
    resultGuest.textContent = scoreGuest
}

function add2guest() {
    scoreGuest += 2;
    resultGuest.textContent = scoreGuest
}

function add3guest() {
    scoreGuest += 3;
    resultGuest.textContent = scoreGuest
}

function newGame() {
    resultGuest.textContent = 0
    resultHome.textContent = 0
}