let human = 0;
let pc = 0;
let decision = ''
const comments = document.createElement("div");
document.body.appendChild(comments);
const win = document.querySelector("#winner")
const elections = document.createElement("div");
document.body.appendChild(elections);


let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
rock.addEventListener("click", () => {
    decision = "rock"
    game(decision);
 })

 paper.addEventListener("click", () => {
     decision = "paper"
     game(decision);
  })

 scissors.addEventListener("click", () => {
     decision = "scissors"
     game(decision);
 })

function getComputerChoice(){
    const random = Math.floor(Math.random() * 3);
    if(random == 1){
        return 'rock';
    } else if(random == 2){
        return 'paper';
    } else {
        return 'scissors';
    }
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        comments.textContent = 'You lose, computer wins';
        pc += 1;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        comments.textContent = 'You win, computer sucks.';
        human += 1;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        comments.textContent = 'You lose, computer wins';
        pc += 1;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        comments.textContent = 'You win, computer sucks';
        human += 1;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        comments.textContent = 'You lose, computer wins';
        pc += 1;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        comments.textContent = 'You win, computer sucks';
        human += 1;
    } else {
        comments.textContent = 'It\'s a tie';
    }
    updateScore();
};

function game(a) {
    let computerSelection = getComputerChoice();
    playRound(a, computerSelection);
    elections.textContent = 'Human choose :' + a + ' PC choose: ' + computerSelection
    if (human === 5){
        winner();
    } else if (pc === 5){
        winner();
    }
}


function updateScore() {
    win.textContent = `Human: ${human} - PC: ${pc}`;
}

function winner(){
    if (human > pc ){
        win.textContent= "Human win"
        human = 0
        pc = 0
        comments.textContent = ''
        elections.textContent = ''
    } else if (pc > human){
        win.textContent= 'PC win'
        human = 0
        pc = 0
        comments.textContent = ''
        elections.textContent = ''
    } else{
        win.textContent= 'TIE'
        human = 0
        pc = 0
        comments.textContent = ''
        elections.textContent = ''
    }
}