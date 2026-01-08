export default class Game {
    playerStartScore: number; // The score that players start with
    names = {
        1: "",
        2: ""
    };
    scores = { // Current scores of the players
        1: 0,
        2: 0
    };
    legs = { // Total games won
        1: 0,
        2: 0
    }
    turn: number; // Current player's turn

    constructor(playerStartScore: number, player1Name: string, player2Name: string) {
        this.playerStartScore = playerStartScore;
        this.names[1] = player1Name;
        this.names[2] = player2Name;
        this.scores[1] = playerStartScore;
        this.scores[2] = playerStartScore;
        this.turn = 1;
    };
};