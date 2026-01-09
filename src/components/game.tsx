export default class Game {
    playerStartScore: number; // The score that players start with
    names: {[index: number]: string} = {
        1: "",
        2: ""
    };
    scores: {[index: number]: number} = { // Current scores of the players
        1: 0,
        2: 0
    };
    legs: {[index: number]: number} = { // Total games won
        1: 0,
        2: 0
    }
    turn: number; // Current player's turn
    currentScored: {[index: string]: number}[] = [];

    constructor(playerStartScore: number, player1Name: string, player2Name: string) {
        this.playerStartScore = playerStartScore;
        this.names[1] = player1Name;
        this.names[2] = player2Name;
        this.scores[1] = playerStartScore;
        this.scores[2] = playerStartScore;
        this.turn = 1;
    };

    addToCurrentScored(point: {[index: string]: number}) {
        this.currentScored.push(point);
        const potentialScore = this.calculatePotentialScore();

        if (this.currentScored.length == 3 || potentialScore <= 1) { // Show confirmation button
            document.querySelector(".confirmation-button")?.classList.remove("hidden");
        };
        if (this.currentScored.length > 0) { // Show back button
            document.querySelector(".back-button")?.classList.remove("hidden");
        };
        const currentPoint = (this.currentScored.length);
        // Change the values on the page to show the current scored
        document.querySelector(`#current-points-${currentPoint} h4`)!.textContent = Object.keys(point)[0];
        document.querySelector(`#current-points-${currentPoint} p`)!.textContent = String(Object.values(point)[0]);
        document.querySelector(`#potential-${this.turn}`)!.textContent = String(potentialScore);
    };

    removeFromCurrentScored() {
        const confirmationButton = document.querySelector(".confirmation-button");

        if (!confirmationButton?.classList.contains("hidden")) { // Remove confirmation button if it is showing
            confirmationButton?.classList.add("hidden");
        };
        if (this.currentScored.length == 0) return; // Make sure that there is not already no scores recorded

        // Edit values on the page
        const currentPoint = (this.currentScored.length);
        document.querySelector(`#current-points-${currentPoint} h4`)!.textContent = "-";
        document.querySelector(`#current-points-${currentPoint} p`)!.textContent = "0";

        this.currentScored.pop();
        
        // Check if there is no currently recorded values to remove the back button from view
        if (this.currentScored.length == 0) {
            const backButton = document.querySelector(".back-button");
            backButton?.classList.add("hidden");
        };
    };

    calculateTotalCurrentScored() {
        let totalPoints = 0;
        for (let i in this.currentScored) {
            totalPoints += Object.values(this.currentScored[i])[0];
        };
        return totalPoints;
    };

    calculatePotentialScore() {
        return this.scores[this.turn] - this.calculateTotalCurrentScored();
    }

    changeScore() {
        let totalPoints = this.calculateTotalCurrentScored();
        let potentialScore = this.calculatePotentialScore();

        console.log(Object.keys(this.currentScored[this.currentScored.length-1])[0][0])

        if (potentialScore > 1) { // Check that the potential score is greater than one to avoid points dropping below allowed scores. 
            this.scores[this.turn] -= totalPoints; // Remove points from player's score
        } else if (potentialScore == 0 && Object.keys(this.currentScored[this.currentScored.length-1])[0][0] == "D") { // Check that the potential score is equal to zero for a potential win.
            alert(`${this.names[this.turn]} has won the game!`);
        };

        this.currentScored = []; // Clear current scores array
        this.turn == 1? this.turn = 2 : this.turn = 1; // Change the turn

    };
};