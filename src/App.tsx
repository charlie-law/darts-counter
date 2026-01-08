import './App.css'
import { useState } from "react";
import Game from "./components/game";
import Title from "./components/Title";
import GameTypeRadio from "./components/GameTypeRadio";
import InputTypeRadio from "./components/InputTypeRadio";

export default function App() {
    const [gameActive, setGameActive] = useState(false);
    const [gameInfo, setGameInfo] = useState<{[index: string]: string}>({});

    function onSubmit(formData: FormData) {
        const gameType = String(document.querySelector('.game-type[aria-pressed="true"]')?.getAttribute("value")); // Get value of selected game type
        const player1Name = formData.get("player-1");
        const player2Name = formData.get("player-2");

        const newGame = new Game(Number(gameType), String(player1Name), String(player2Name));
        console.log(newGame)

        const gameInfoObject: {[index: string]: string} = {
            "player1": String(player1Name),
            "player2": String(player2Name),
            "gameType": gameType,
            "player1Score": gameType,
            "player2Score": gameType
        };
        setGameInfo(gameInfoObject);

        setGameActive(true); // Set game active to show game info page
    };

    function AppContent() {
        if (gameActive) {
            return (
                <section className="flex flex-col gap-16">
                    <section className="flex gap-8">
                        <section className="flex flex-col gap-2 items-center flex-1">
                            <h2 className="text-7xl font-bold">{gameInfo["player1Score"]}</h2>
                            <p className="text-lg">{gameInfo["player1"]}</p>
                        </section>
                        <div className="bg-gray-400 w-px"></div>
                        <section className="flex flex-col gap-2 items-center flex-1">
                            <h2 className="text-7xl font-bold">{gameInfo["player2Score"]}</h2>
                            <p className="text-lg">{gameInfo["player2"]}</p>
                        </section>
                    </section>
                    <InputTypeRadio />
                </section>
            );
        } else {
            return (
                <form onSubmit={(e) => {const formData = new FormData(e.currentTarget); onSubmit(formData)}} className="flex flex-col gap-5 items-start">
                    <h2 className="text-3xl">Start a Game</h2>
                    <section className="flex gap-2 w-full">
                        <section className="flex flex-1 flex-col items-start gap-1">
                            <label htmlFor="player-1">Player 1</label>
                            <input type="text" id="player-1" name="player-1" maxLength={40} placeholder="Player 1's Name" className="w-full p-2 border bg-gray-100 border-gray-400 rounded focus:outline-1 focus:outline-red-600" required />
                        </section>
                        <section className="flex flex-1 flex-col items-start gap-1">
                            <label htmlFor="player-2">Player 2</label>
                            <input type="text" id="player-2" name="player-2" maxLength={40} placeholder="Player 2's Name" className="w-full p-2 border bg-gray-100 border-gray-400 rounded focus:outline-1 focus:outline-red-600" required />
                        </section>
                    </section>
                    <GameTypeRadio />
                    <button type="submit" className="w-full text-white bg-red-800 rounded text-2xl p-2 cursor-pointer hover:bg-red-900 transition delay-75">Start Game</button>
                </form>
            );
        };
    };

    return (
        <main className="flex flex-col gap-16">
            <Title />
            <AppContent />
        </main>
    )
}