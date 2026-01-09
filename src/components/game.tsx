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
        if (this.currentScored.length == 3) {
            // Show confirmation button
            console.log(this.currentScored)
        };
    };

    changeScore(pointsArray: number[]) {
        let totalPoints = 0;
        for (let i in pointsArray) {
            totalPoints += pointsArray[i];
        };

        this.scores[this.turn] -= totalPoints;
        this.turn == 1? this.turn = 0 : this.turn = 1;
    };
};