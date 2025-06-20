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
function getUserChoice(e){
    // let userChoice = prompt("Enter your choice: Rock/Paper/Scissors");
    let userChoice = e.target.textContent;
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
    let game_score = 5;
    let curr_round = 1;

    //each button click will trigger the round
    let buttons = document.querySelectorAll('button');
    buttons = Array.from(buttons);
    buttons.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            //choices for this round
            let humanChoice = getUserChoice(e);
            let computerChoice = getComputerChoice();

            let resultsList = document.getElementById('results_list');
            let li = document.createElement('li');

            let result_for_round = 'Round '+ curr_round + ': ';

            //result of this round
            let result = playRound( humanChoice , computerChoice );
            console.log(result);
            if ( result == 1 ){
                humanScore = ++humanScore;
                result_for_round = result_for_round + 'You won the round!';
            }else if (result == 0){
                computerScore = ++computerScore;
                result_for_round = result_for_round + 'Computer won the round!';
            }else{
                result_for_round = result_for_round + 'It was a tie!';
            };

            li.textContent = result_for_round;
            resultsList.appendChild(li);
            
            console.log('Computer Score: ' + computerScore);
            let score_p1 = document.getElementById('p1_score')
            score_p1.textContent = computerScore.toString();

            console.log('Your Score: ' + humanScore);
            let score_p2 = document.getElementById('p2_score');
            score_p2.textContent = humanScore.toString();

            curr_round++;

            //announce the results if last round is play
            //if (curr_round > game_score){
                // if (computerScore >= humanScore){
                //     alert("It's a tie!");
                // }else 
                
                

                if (computerScore >= game_score){
                    // alert('Computer wins the game');
                    li = document.createElement('li');
                    li.textContent = 'COMPUTER WON THE GAME';
                    resultsList.appendChild(li);
                }else if (humanScore >= game_score){ 
                    // alert('You win the game');
                    li = document.createElement('li');
                    li.textContent = 'YOU WON THE GAME';
                    resultsList.appendChild(li);
                }

                
            //}
        }
        )
    });

    // }


}

// Let's play
playGame();





