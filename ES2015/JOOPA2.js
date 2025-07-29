
class Boxer {
    constructor(height, weight, wins, losses) {
        this.height = height; 
        this.weight = weight; 
        this.wins = wins;
        this.losses = losses; 
    }
    displayStats() {
        console.log(`Boxer Statistics:`);
        console.log(`Height: ${this.height} inches`);
        console.log(`Weight: ${this.weight} pounds`);
        console.log(`Wins: ${this.wins}`);
        console.log(`Losses: ${this.losses}`);

        const totalFights = this.wins + this.losses;
        console.log(`Total Fights: ${totalFights}`);

        if(totalFights > 0) {
            const winRate = (this.wins / totalFights * 100).toFixed(1);
            console.log(`Win Rate: ${winRate}%`);
        }
        console.log('-------------------------');
       }
}


console.log("Creating the first boxer...");

const boxer1 = new Boxer(72, 180, 20, 5);

console.log("Creating the second boxer...");

const boxer2 = new Boxer(75, 200, 25, 3);

console.log("Displaying stats for Boxer 1:");

boxer1.displayStats();

console.log("Displaying stats for Boxer 2:");

boxer2.displayStats();


function determineBetterBoxer(){

    // Calculate scores for both boxers based on their properties
    const boxer1Score = (boxer1.wins * 2) - (boxer1.losses * 1) + (boxer1.height / 10) + (boxer1.weight / 100);
    // Calculate the score for the second boxer
    const boxer2Score = (boxer2.wins * 2) - (boxer2.losses * 1) + (boxer2.height / 10) + (boxer2.weight / 100);

    console.log(`Boxer 1 Score: ${boxer1Score.toFixed(2)}`);
    console.log(`Boxer 2 Score: ${boxer2Score.toFixed(2)}`);

    // Determine the better boxer based on the scores
    if (boxer1Score > boxer2Score) {
        return 1; // Return the first boxer if they have a higher score
    } else if (boxer2Score > boxer1Score) {
        return 2; // Return the second boxer if they have a higher score
    // If both scores are equal, return 0 to indicate a tie
    } else {
        return 0; 
    }
}

console.log("Beting Game Started!");
console.log("Choose a boxer would you like to bet on?")
console.log("1. Boxer 1");
console.log("2. Boxer 2");



const userChoice = 2; // Simulating user input for Boxer 1
console.log(`User chose: Boxer ${userChoice}`);

// Determine the better boxer based on the scoring system
const betterBoxer = determineBetterBoxer();

console.log("Betting Result...");

// Check if the user won or lost their bet based on the better boxer
if (betterBoxer === 0) {
    console.log("It's a tie! No one wins.");
} else if (userChoice === betterBoxer) {
    console.log(`Congratulations! You won your bet on Boxer ${userChoice}.`);
} else {
    console.log(`Sorry! You lost your bet on Boxer ${userChoice}.`);
}