




function ok() {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

function game() {
    let comp = 0;
    let you = 0;
   for (let i = 0; i < 5; i++){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock paper scissors?")
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    
    if (result[4] === 'w') {
        you++;
    } else {
        comp++
    }
   }
   if (you > comp) {
    console.log('You Win!')
   } else {
    console.log('You lose!')
   }

}


function playRound(playerSelection, computerSelection) {
    let pSelect = playerSelection.toLowerCase ()
    if (pSelect === computerSelection)
        return 'Tie! ' + playerSelection.toUpperCase() + ' ties ' + computerSelection.toUpperCase() + " !";
    if (pSelect === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You win! ROCK beats SCISSORS!';
        } else {
            return 'You lose! PAPER beats ROCK! '
        }
    } else if (pSelect === 'paper') {
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
}