const game = ()=> {
    // creating variables for the player and computer scores
    let pScore = 0; // computer
    let cScore = 0; // player

    // startGame function to change the screen content to start playing game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        // when user clicks the play button, fades into the next "screen"
        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        // array for computer options
        const computerOptions = ["fire", "water", "grass"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                // computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerSelection = computerOptions[computerNumber];
                
                compareHands(this.textContent, computerSelection);

                // updating the images depending on the player and computer choices 
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerSelection}.png`;
            });
        });
    };

    // to update the score
    function updateScore() {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        return;
    }

    function compareHands(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase(); // making user input case insensitive
    
        // constant variables to store output string for lose or win
        const WIN = "You WIN! " + playerSelection + " beats " + computerSelection;
        const LOSE = "You LOSE! " + computerSelection + " beats " + playerSelection;
        const TIE = "It's a tie! You both chose " + playerSelection; 
    
        const winner = document.querySelector('.winner');
        // if-else statements to determine winner based off of player and computer selection
        // checking for a tie
        if (playerSelection === computerSelection) {
            winner.textContent = TIE;
            return;
        }
        else if (playerSelection === "fire") {
            if (computerSelection === "water") {
                winner.textContent = LOSE;
                cScore++; // increasing the computer score by 1
                updateScore(); // calling the updateScore function to change on html
                return;
            }else {
                winner.textContent = WIN;
                pScore++;
                updateScore();
                return;
            }
        }
        else if (playerSelection === "water") {
            if (computerSelection === "grass") {
                winner.textContent = LOSE;
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = WIN;
                pScore++;
                updateScore();
                return;
            }
        }
        else if (playerSelection === "grass") {
            if (computerSelection === "fire") {
                winner.textContent = LOSE;
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = WIN;
                pScore++;
                updateScore();
                return;
            }
        }
    }

    //all all the inner funcitons
    startGame();
    playMatch();
};

game();

