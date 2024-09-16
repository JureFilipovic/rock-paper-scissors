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

let menu = document.querySelector ("#menu");
let results = document.querySelector ("#results")

humanScore = 0;
computerScore = 0;



/**
 * plays one round of rps
 */
function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.charAt(0).toUpperCase () + humanChoice.slice(1).toLowerCase ();

    if (humanChoice === computerChoice) {
        results.textContent = `It is a tie. Human score: ${humanScore}, Computer score: ${computerScore}`;
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
        results.textContent = `You win. Human score: ${humanScore}, Computer score: ${computerScore}`;

    } else {
        computerScore += 1;
        results.textContent = `You lose. Human score: ${humanScore}, Computer score: ${computerScore}`;
    }

    checkGameOver ();
}

function checkGameOver () {
    if (humanScore === 5) {
        results.textContent = "You won the game";
        disableMenu ();

    } else if (computerScore === 5) {
        results.textContent = "Computer won the game";
        disableMenu ();
    }
}

function disableMenu () {
    menu.removeEventListener ("click", handleMouseClick);
}

function handleMouseClick (event) {
    let target = event.target;
    
    switch (target.id) {
        case "rock":
            playRound ("Rock", getComputerChoice());
            break;
            
        case "paper":
            playRound ("Paper", getComputerChoice());
            break;
            
        case "scissors":
            playRound ("Scissors", getComputerChoice());
            break;            
    }
}

menu.addEventListener ("click", handleMouseClick);