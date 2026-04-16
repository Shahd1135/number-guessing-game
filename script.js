// ===============================
// 🎯 Number Guessing Game
// Evil AI Challenge
// ===============================

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to safely get player input
function getPlayerGuess() {
    let guess;

    while (true) {
        let input = prompt("🎯 Enter a number between 1 and 100 (or type 'exit' to quit):");

        // If user presses Cancel
        if (input === null) {
            console.log("⚠️ Input canceled. Please enter a number to continue.");
            continue;
        }

        // Remove extra spaces
        input = input.trim();

        // Optional exit feature
        if (input.toLowerCase() === "exit") {
            console.log("👋 You exited the game.");
            return null;
        }

        // Convert to number
        guess = Number(input);

        // Validate input
        if (!isNaN(guess) && guess >= 1 && guess <= 100) {
            return guess;
        }

        console.log("❌ Invalid input! Please enter a valid number between 1 and 100.");
    }
}

// Function to check the guess
function checkGuess(guess, correctNumber) {
    if (guess < correctNumber) {
        return "too low";
    } else if (guess > correctNumber) {
        return "too high";
    } else {
        return "correct";
    }
}

// Main game function
function game() {
    const correctNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 10;
    let guessedCorrectly = false;

    console.log("=================================");
    console.log("🤖 Evil AI Challenge Initialized...");
    console.log("=================================");
    console.log("I have selected a number between 1 and 100.");
    console.log("You have 10 attempts to defeat me. Good luck 😈");

    while (attempts < maxAttempts) {
        let playerGuess = getPlayerGuess();

        // Handle exit
        if (playerGuess === null) {
            console.log("💀 Game terminated early.");
            return;
        }

        attempts++;

        let result = checkGuess(playerGuess, correctNumber);

        if (result === "correct") {
            let score = (maxAttempts - attempts + 1) * 10;

            console.log("🎉 YOU DEFEATED THE EVIL AI!");
            console.log(`🏆 Your Score: ${score}`);
            guessedCorrectly = true;
            break;
        } else {
            let potentialScore = (maxAttempts - attempts) * 10;
            console.log(`📉 Your guess is ${result}. Attempts left: ${maxAttempts - attempts}`);
            console.log(`💡 Current possible score if you win next: ${potentialScore}`);
        }
    }

    if (!guessedCorrectly) {
        console.log("💀 You lost! The Evil AI wins...");
        console.log(`🔢 The correct number was: ${correctNumber}`);
    }

    console.log(`📊 Total attempts used: ${attempts}`);
}

// Start the game automatically
game();