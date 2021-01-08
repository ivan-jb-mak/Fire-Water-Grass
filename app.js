// function to randomly return fire, water or grass
function computerPlay() {
    const FIRE_WATER_GRASS = ["FIRE", "WATER", "GRASS"]; // initianting array with 3 possible results
    return FIRE_WATER_GRASS[Math.floor(Math.random() * FIRE_WATER_GRASS.length)]; // return a random index of the array
}

// function to play 1 round of fire, water or grass
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase(); // making user input case insensitive

    // constant variables to store output string for lose or win
    const WIN = "You WIN! " + playerSelection + " beats " + computerSelection;
    const LOSE = "You LOSE! " + computerSelection + " beats " + playerSelection;
    const TIE = "It's a tie! You both chose " + playerSelection; 

    // if-else statements to determine winner based off of player and computer selection
    if (playerSelection === computerSelection) {
        return TIE  
    }
    else if (playerSelection === "FIRE") {
        if (computerSelection === "WATER") {
            return LOSE; // retuns losing statement with details on choices
        }
        else {
            return WIN; // retuns winning statement with details on choices
        }
    }
    else if (playerSelection === "WATER") {
        if (computerSelection === "GRASS") {
            return LOSE;
        }
        else {
            return WIN;
        }
    }
    else if (playerSelection === "GRASS") {
        if (computerSelection === "FIRE") {
            return LOSE;
        }
        else {
            return WIN;
        }
    }
}

// function to play the game of rock, paper, scissors with user input x amount of times
function game(numOfGames) {

    // loop to iterate through the game, asking for player input, and 
    for (let gameIndex = 0; gameIndex < numOfGames; gameIndex++) {

        let playerSelection = prompt("Rock, Paper, or Scissors?: "); // asking for player input for game
        const computerSelection = computerPlay(); // generating a random answer from computer

        console.log("You selected: " + playerSelection.toUpperCase());
        console.log("The computer selected: " + computerSelection); 

        // calling function to play 1 round, and output results
        console.log(playRound(playerSelection,computerSelection)); 
    }
}


