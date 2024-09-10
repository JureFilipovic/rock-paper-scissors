let log = console.log;

/**
 * gets random computer choice
 */
function getComputerChoice () {

    let choice = Math.floor (Math.random () * 3) + 1;

    const choices = {
        1: "Rock",
        2: "Paper",
        3: "Scissors"
    };

    return choices[choice];
}
/**
 * gets and returns human choice from the prompt
 */
function getHumanChoice () {  

    return prompt (`Type your choice;`);

}

/**
 * plays 5 rounds of the game, keeps both scores and declares a winner
 */
function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    /**
     * function playRound takes to string parameters ("Rock", "Paper" or "Scissors")
     * makes humanChoice case-insensive and plays a round of the game
     */
    function playRound (humanChoice, computerChoice) {

        humanChoice = humanChoice.charAt(0).toUpperCase () + humanChoice.slice(1).toLowerCase ();

        if (humanChoice === computerChoice) {
            log ("Its a tie!")
            return;
        }

        const choices = {
            "RockScissors": "Win",
            "RockPaper": "Lose",
            "PaperRock": "Win",
            "PaperScissors": "Lose",
            "ScissorsRock": "Lose",
            "ScissorsPaper": "Win"
        }

        let outcome = choices[humanChoice + computerChoice];

        if (outcome === "Win") {
            humanScore += 1;
            log (`You win! ${humanChoice} beats ${computerChoice}.`);

        } else {
            computerScore += 1;
            log (`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
    }

    for (let i = 0; i < 5; i++) {

        playRound (getHumanChoice(), getComputerChoice());
        log ();
    }

    if (humanScore > computerScore) {
        log (`Your score: ${humanScore}`);
        log (`Computer score: ${computerScore}`);
        log ("You have won the game!");

    } else if (computerScore > humanScore) {
        log (`Your score: ${humanScore}`);
        log (`Computer score: ${computerScore}`);
        log ("You have lost the game!")

    } else {
        log (`Your score: ${humanScore}`);
        log (`Computer score: ${computerScore}`);
        log ("It is a tie!");
    }
}

playGame ();