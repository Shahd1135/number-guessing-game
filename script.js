
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


function getPlayerGuess() {
    let guess;

    while (true) {
        let input = prompt("Enter a number between 1 and 100 (Cancel to exit):");

        if (input === null) {
            return null;
        }

        input = input.trim();

        if (!/^\d+$/.test(input)) {
            console.warn("%cInvalid input! Enter ONLY a number.", "color: deepskyblue;");
            continue;
        }

        guess = Number(input);

      
        if (guess >= 1 && guess <= 100) {
            return guess;
        }

        console.warn("%cNumber must be between 1 and 100.", "color: deepskyblue;");
    }
}


function checkGuess(guess, correctNumber) {
    if (guess < correctNumber) return "Too low!";
    if (guess > correctNumber) return "Too high!";
    return "Correct";
}


function game() {
    const correctNumber = generateRandomNumber();
    const maxAttempts = 10;
    let attempts = 0;
    let hasWon = false;

    console.log("%c 👾 EVIL AI CHALLENGE INITIALIZED", "color: violet; font-weight: bold; font-size: 16px;");
    console.log("%c-----------------------------------------", "color: violet;");
    console.log("%cI have chosen a number between 1 and 100.", "color: cyan;");
    console.log("%cYou have 10 attempts to defeat me. Good luck 😈", "color: cyan; font-weight: bold;");

    while (attempts < maxAttempts) {
        const playerGuess = getPlayerGuess();

        if (playerGuess === null) {
            console.log("%c𓆩☠︎︎𓆪 Game forfeited. The Evil AI wins by default!", "color: hotpink;");
            return;
        }

        attempts++;

        const result = checkGuess(playerGuess, correctNumber);

        if (result === "Correct") {
            hasWon = true;
            break;
        } else {
            let remaining = maxAttempts - attempts;
            let potentialScore = remaining * 10;

            console.log(
                `%cAttempt ${attempts}: %c${playerGuess} → ${result}`,
                "color: dodgerblue;",
                "color: deepskyblue; font-weight: bold;"
            );

            console.log("%cAttempts left: " + remaining, "color: mediumspringgreen;");
            console.log("%cPotential score: " + potentialScore, "color: lightgreen;");
        }
    }

    if (hasWon) {
        const score = (maxAttempts - attempts + 1) * 10;

        console.log("%cVICTORY!", "color: gold; font-size: 20px; font-weight: bold;");
        console.log(`%cYou guessed the number in ${attempts} attempts!`, "color: deepskyblue;");
        console.log(`%c🏆 Your Score: ${score}`, "color: gold;");
    } else {
        console.log("%c𓆩☠︎︎𓆪 DEFEAT!", "color: red; font-size: 20px; font-weight: bold;");
        console.log("%cThe Evil AI prevails...", "color: red;");
        console.log(`%cThe correct number was: ${correctNumber}`, "color: orange;");
    }

    console.log(`%cTotal attempts used: ${attempts}`, "color: orange;");

    const playAgain = confirm("The challenge has ended. Do you dare to play again?");
    if (playAgain) {
        console.clear();
        game();
    } else {
        console.log("%cEXITING... ROBO-333 will be waiting for your return.", "color: violet; font-weight: bold;");
    }
}


window.game = game;

console.log("%c ⚔⊹ ࣪ ˖ Evil AI Challenge Loaded!", "color: violet; font-weight: bold; font-size: 16px;");
console.log("%cType game() in the console to start playing.", "color: cyan;");
