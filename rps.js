//press start

let comp = 0;
let you = 0;
let message = document.querySelector('#message');
const start = document.querySelector('#start');
let compsel = document.querySelector('#compsel');
let playsel = document.querySelector('#playsel');
let compscore = document.querySelector('#compscore');
let playscore = document.querySelector('#playscore');
let startdiv = document.querySelector('.start');
let rock = document.createElement('div');
    rock.setAttribute('id', 'rock');
    rock.classList.add('rps', 'click', 'rock1');
let paper = document.createElement('div');
    paper.setAttribute('id', 'paper');
    paper.classList.add('rps', 'click', 'paper1');
let scissors = document.createElement('div');
    scissors.setAttribute('id', 'scissors');
    scissors.classList.add('rps', 'click', 'scissors1');
let choice = document.querySelector('#choice');
let result = '';
let rps = document.querySelectorAll('.rps');
let gamecheck = 2;
let playerSelection = '';

message.textContent = 'Press Start!';
rps.forEach((div) => {div.addEventListener('click', () => {
    
    let pclass = playsel.classList
    while (pclass.length > 0) {
        pclass.remove(pclass.item(0));
     }
     let cclass = compsel.classList
    while (cclass.length > 0) {
        cclass.remove(cclass.item(0));
     }
    playerSelection = div.id
    playGame(playerSelection);

    });
});



start.addEventListener('click', () => {
    start.remove();
    gamecheck = 3;
    you= 0;
    comp= 0;
    compscore.textContent = comp;
    playscore.textContent = you;
    message.textContent = 'Rock Paper or Scissors?'
    
    
});

function playGame(playerSelection) {
    if (gamecheck === 3) {
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        message.textContent = result;
        playsel.classList.add(playerSelection);
        compsel.classList.add(computerSelection)

        if (result[4] === 'w') {
            you++;
        }   else if (result[4] === 'l') {
            comp++;
        } 
        compscore.textContent = comp;
        playscore.textContent = you;
        

        if (you === 5) {
            message.textContent = "YOU WIN! "
            startdiv.appendChild(start);
            gamecheck = 1;
        } else if (comp === 5) {
            message.textContent = "YOU LOSE! "
            startdiv.appendChild(start);
            gamecheck = 1;
        } else {
            return;
        }


    } else {
        return;
    }

}





    
  






function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection)
        return 'Tie! ' + playerSelection.toUpperCase() + ' ties ' + computerSelection.toUpperCase() + " !";
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You win! ROCK beats SCISSORS!';
        } else {
            return 'You lose! PAPER beats ROCK! '
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! PAPER beats ROCK!';
        } else {
            return 'You lose! SCISSORS beats PAPER!'
        }
    } else {
        if (computerSelection === 'rock') {
            return 'You lose! ROCK beats SCISSORS!';
        } else {
            return 'You win! SCISSORS beats PAPER!'
        }
    }


}


function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice < 1) {
        return 'rock';
    } else if (choice < 2) {
        return 'scissors';
    } else {
        return 'paper';
    }
};