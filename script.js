//Get computer's move for the game
function getComputerChoice(){
    const num = Math.random();

    if( num < 0.33 ) {
        return 'rock';
    } else if( num > 0.33 && num <= 0.66){
        return 'paper';
    }else if( num > 0.66 ){
        return 'scissors';
    }
}

console.log( getComputerChoice() );
