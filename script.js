//Get computer's move for the game
function getComputerChoice(){
    const num = Math.random();

    if( num < 0.33 ) {
        return 'ROCK';
    } else if( num > 0.33 && num <= 0.66){
        return 'PAPER';
    }else if( num > 0.66 ){
        return 'SCISSORS';
    }
}

//Get human's move for the game
function getUserChoice(){
    let userChoice = prompt("Enter your choice: Rock/Paper/Scissors");
    userChoice = userChoice.toUpperCase();

    if( userChoice == 'ROCK' || userChoice == 'PAPER' || userChoice == 'SCISSORS'){
        return userChoice;
    } else {
        alert('Enter a valid input!');
    }
}

//Play one round of Rock paper scissors
function playRound( humanChoice, computerChoice ){
    if( humanChoice == computerChoice){
        //no one gets a point
        console.log("It's a tie!");
        return 2;
    }else if ( (humanChoice == 'ROCK' && computerChoice == 'PAPER' ) || 
               (humanChoice == 'PAPER' && computerChoice == 'SCISSORS') ||
               (humanChoice == 'SCISSORS' && computerChoice == 'ROCK') ){
        //1 point to computer
        console.log('You lose! ' + computerChoice + ' beats ' + humanChoice);
        return 0;
        
    }else{
        //1 point to human
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice );
        return 1;
    }
}
    
function playGame(){

    //initialize scores
    let computerScore = 0;
    let humanScore = 0;

    //play 5 round
    for(i = 0; i < 5; i++){
        let humanChoice = getUserChoice();
        let computerChoice = getComputerChoice();

        //result of this round
        let result = playRound( humanChoice , computerChoice );
        console.log(result);
        if ( result == 1 ){
            humanScore = ++humanScore;
        }else if (result == 0){
            computerScore = ++computerScore;
        };
         
        console.log('Computer Score: ' + computerScore);
        console.log('Your Score: ' + humanScore);
    }

    //announce the results
    if (computerScore == humanScore){
        alert("It's a tie!");
    }else if (computerScore > humanScore){
        alert('Computer wins the game');
    }else {
        alert('You win the game');
    }
}

// Let's play
playGame();





