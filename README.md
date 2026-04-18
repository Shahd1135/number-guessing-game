## Guessing Game

This is a browser-based number guessing game. The player competes against an "Evil AI" to guess a hidden number within a limited number of attempts. The project focuses on input validation, loop control, and dynamic console styling.

## How to Play
1. Open the Live Demo in your browser.
2. Open the Browser Console.
3. Type `game()` and press Enter to initialize the challenge.
4. Follow the prompts to enter a number between 1 and 100.
5. You have 10 attempts to guess the correct number before the AI wins.

## Technical Features
- Random Number Generation: Uses a mathematical formula to ensure a fair but unpredictable target number each game.
- Advanced Input Validation
- Dynamic Scoring System: Calculates a final score based on the speed of the victory and remaining attempts.
- Console UI Styling: Utilizes CSS-in-console formatting for a high-contrast, cyberpunk-themed interface.
- State Management: Tracks attempts, remaining turns, and victory conditions in real-time.

## Technologies Used
- HTML5
- JavaScript

## Project Structure
- `generateRandomNumber`: Logic for generating the target integer.
- `getPlayerGuess`: A robust input handler that manages prompts and data cleaning.
- `checkGuess`: A helper function that evaluates the player's move against the target.
- `game`: The main engine that coordinates the game loop, scoring, and UI feedback.
