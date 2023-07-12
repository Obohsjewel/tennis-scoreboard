// let scoreForHome=document.getElementById ("the-home")
// let scoreForGuest=document.getElementById ("the-guest")

//  homecount = 0
//  guestcount = 0

// function plusonehome() {
//   homecount = homecount + 1
//   scoreForHome.textContent=homecount
// }

// function plustwohome() {
//   homecount = homecount + 2
//   scoreForHome.textContent=homecount
// }

// function plusthreehome() {
//   homecount = homecount + 3
//   scoreForHome.textContent=homecount
// }   

// function plusoneguest() {
//   guestcount=guestcount+1
//   scoreForGuest.textContent=guestcount
// }

// function plustwoguest() {
//   guestcount=guestcount+2
//   scoreForGuest.textContent=guestcount
// }

// function plusthreeguest() {
//   guestcount=guestcount+3
//   scoreForGuest.textContent=guestcount
// }

let playerOne = document.getElementById ("player-one-score")
let playerTwo = document.getElementById ("player-two-score")
let playerThree = document.getElementById ("player-three-score")
let playerFour = document.getElementById ("player-four-score")
let saveplayer1 = document.getElementById ("saveplayerone")
let saveplayer2 = document.getElementById ("saveplayertwo")
let saveplayer3 = document.getElementById ("saveplayerthree")
let saveplayer4 = document.getElementById ("saveplayerfour")




onePlayer = 0
twoPlayer = 0
threePlayer = 0
fourPlayer = 0

function plustwoplayerone() {
    onePlayer=onePlayer + 2
  playerOne.textContent=onePlayer 
}
function plusfourplayerone() {
    onePlayer=onePlayer + 4
  playerOne.textContent=onePlayer 
}
function pluseightplayerone() {
    onePlayer=onePlayer + 8
  playerOne.textContent=onePlayer 
}
function plustenplayerone() {
    onePlayer=onePlayer + 10
  playerOne.textContent=onePlayer 
}

function plustwoplayertwo() {
    twoPlayer=twoPlayer + 2
  playerTwo.textContent=twoPlayer 
}
function plusfourplayertwo() {
    twoPlayer=twoPlayer + 4
  playerTwo.textContent=twoPlayer 
}
function pluseightplayertwo() {
    twoPlayer=twoPlayer + 8
  playerTwo.textContent=twoPlayer 
}
function plustenplayertwo() {
    twoPlayer=twoPlayer + 10
  playerTwo.textContent=twoPlayer 
}

function plustwoplayerthree() {
    threePlayer=threePlayer + 2
  playerThree.textContent=threePlayer 
}
function plusfourplayerthree() {
    threePlayer=threePlayer + 4
  playerThree.textContent=threePlayer 
}
function pluseightplayerthree() {
    threePlayer=threePlayer + 8
  playerThree.textContent=threePlayer 
}
function plustenplayerthree() {
    threePlayer=threePlayer + 10
  playerThree.textContent=threePlayer 
}

function plustwoplayerfour() {
    fourPlayer=fourPlayer + 2
  playerFour.textContent=fourPlayer 
}
function plusfourplayerfour() {
    fourPlayer=fourPlayer + 4
  playerFour.textContent=fourPlayer 
}
function pluseightplayerfour() {
    fourPlayer=fourPlayer + 8
  playerFour.textContent=fourPlayer 
}
function plustenplayerfour() {
    fourPlayer=fourPlayer + 10
  playerFour.textContent=fourPlayer 
}

function saveone() {
    saveplayer1.textContent +=onePlayer + "-"
    onePlayer=0
    playerOne.textContent=0
}

function savetwo() {
    saveplayer2.textContent +=twoPlayer + "-"
    twoPlayer=0
    playerTwo.textContent=0
}

function savethree() {
    saveplayer3.textContent +=threePlayer + "-"
    threePlayer=0
    playerThree.textContent=0
}

function savefour() {
    saveplayer4.textContent +=fourPlayer + "-"
    fourPlayer=0
    playerFour.textContent=0
}
    





