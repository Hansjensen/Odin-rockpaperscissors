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



start.addEventListener('click', () => {
    choice.appendChild(rock);
    choice.appendChild(paper);
    choice.appendChild(scissors);
    comp= 0;
    you = 0;
    message.textContent = "Rock paper or scissors?"
    playscore.textContent = you;
    compscore.textContent = comp;
    playsel.classList = "";
    compsel.classList = "";
    start.remove();
    
    

});



function gamePlay() {
    const rps = document.querySelectorAll('.rps')
    rps.forEach((div) => {
        div.addEventListener('click', () => {
            playsel.classList = "";
            compsel.classList = "";
            let playerSelection = div.id;
            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection);
            playsel.classList.add(playerSelection);
            compsel.classList.add(computerSelection);
            message.textContent = result;
       
        if (result[4] === 'w') {
             you++;
        } else if (result[4] === 'l'){
            comp++;
        } 

        playscore.textContent = you;
        compscore.textContent = comp;

    if (you === 5) {
            rock.remove();
            paper.remove();
            scissors.remove();
            message.textContent = "YOU WIN!";
            startdiv.appendChild(start);
            return;
     } else if (comp === 5) {
        rock.remove();
        paper.remove();
        scissors.remove();
        message.textContent = "YOU LOSE!";
        startdiv.appendChild(start);
        return;
       }
       
      
    
        
        });
    });
    
    
};







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