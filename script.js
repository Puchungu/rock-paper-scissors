let human = 0;
let pc = 0;
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

function getHumanChoice(){
    const human = prompt('Enter your choice: rock, paper, or scissors');
    return human.toLowerCase();
};

for (let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log('HUMAN ELIGIO: ' + humanSelection + ' PC choose: ' + computerSelection);
    function playRound(humanChoice, computerChoice){
        if (humanChoice == 'rock' && computerChoice == 'paper'){
            console.log('You lose, computer wins')
            pc += 1;
        } else if (humanChoice == 'paper' && computerChoice == 'rock'){
            console.log('You win, computer sucks.')
            human += 1;
        } else if (humanChoice == 'scissors' && computerChoice == 'rock'){
            console.log('You lose, computer wins')
            pc += 1;
        } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
            console.log('You win, computer sucks')
            human += 1;
        } else if (humanChoice == 'paper' && computerChoice == 'scissors'){
            console.log('You lose, computer wins')
            pc += 1;
        } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
            console.log('You win, computer sucks')
            human += 1;
        } else {
            console.log('Its a tie')
        } 
    };
    playRound(humanSelection, computerSelection);
}

console.log('HUMAN: ' + human + ' PC: ' + pc)

function winner(){
    if (human > pc ){
        console.log("Human win")
    } else if (pc > human){
        console.log('PC win')
    } else{
        console.log('TIE')
    }
}

winner();
