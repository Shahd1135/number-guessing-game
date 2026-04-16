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
            console.warn("Invalid input! Enter ONLY a single number (no spaces or letters).");
            continue;
        }

        guess = Number(input);

        if (guess >= 1 && guess <= 100) {
            return guess;
        }

        console.warn("Number must be between 1 and 100.");
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

    console.log("%c🤖 EVIL AI CHALLENGE INITIALIZED", "color: purple; font-weight: bold; font-size: 16px;");
    console.log("%c-----------------------------------------", "color: purple;");
    console.log("I have chosen a number between 1 and 100.");
    console.log("You have 10 attempts to defeat me. Good luck 😈");

    while (attempts < maxAttempts) {
        const playerGuess = getPlayerGuess();

        if (playerGuess === null) {
            console.log("%c💀 Game forfeited. The Evil AI wins by default!", "color: red;");
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

            console.log(`Attempt ${attempts}: ${playerGuess} → ${result}`);
            console.log(`Attempts left: ${remaining} | Potential score: ${potentialScore}`);
        }
    }

    if (hasWon) {
        const score = (maxAttempts - attempts + 1) * 10;

        console.log("%cVICTORY!", "color: green; font-size: 20px; font-weight: bold;");
        console.log(`You guessed the number in ${attempts} attempts!`);
        console.log(`🏆 Your Score: ${score}`);
    } 

    else {
        console.log("%c💀 DEFEAT!", "color: red; font-size: 20px; font-weight: bold;");
        console.log("The Evil AI prevails...");
        console.log(`🔢 The correct number was: ${correctNumber}`);
    }

    console.log(`📊 Total attempts used: ${attempts}`);
}

game();