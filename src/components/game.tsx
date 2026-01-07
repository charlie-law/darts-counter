export default class Game {
    playerStartScore: number;
    names = {
        1: "",
        2: ""
    };
    scores = {
        1: 0,
        2: 0
    };
    turn: number;

    constructor(playerStartScore: number, player1Name: string, player2Name: string) {
        this.playerStartScore = playerStartScore;
        this.names[1] = player1Name;
        this.names[2] = player2Name;
        this.scores[1] = playerStartScore;
        this.scores[2] = playerStartScore;
        this.turn = 1;
    };
};