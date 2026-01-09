import './App.css'
import { useState } from "react";
import Game from "./components/game";
import Title from "./components/Title";
import GameTypeRadio from "./components/GameTypeRadio";
import InputTypeRadio from "./components/InputTypeRadio";

export default function App() {
    const [gameActive, setGameActive] = useState(false);
    const [game, setGame] = useState<Game>(new Game(301, "Player 1", "Player 2"));
    const [round, setRound] = useState(0);

    function onSubmit(formData: FormData) {
        const gameType = String(document.querySelector('.game-type[aria-pressed="true"]')?.getAttribute("value")); // Get value of selected game type
        const player1Name = formData.get("player-1");
        const player2Name = formData.get("player-2");

        setGame(new Game(Number(gameType), String(player1Name), String(player2Name)));
        setGameActive(true); // Set game active to show game info page
    };

    function AppContent() {
        if (gameActive) {
            return (
                <section className="flex flex-col gap-16">
                    <section className="flex gap-8">
                        <section className="flex flex-col gap-1 items-center flex-1">
                            <h2 className="text-7xl font-bold">{game.scores[1]}</h2>
                            <p className="text-gray-500" id="potential-1"></p>
                            <p className="text-lg">{game.names[1]}</p>
                        </section>
                        <div className="bg-gray-400 w-px"></div>
                        <section className="flex flex-col gap-1 items-center flex-1">
                            <h2 className="text-7xl font-bold">{game.scores[2]}</h2>
                            <p className="text-gray-500" id="potential-2"></p>
                            <p className="text-lg">{game.names[2]}</p>
                        </section>
                    </section>
                    <section className="flex flex-col gap-4 items-center">
                        <h3>CURRENT SCORE</h3>
                        <section className="flex gap-8 w-full">
                            <section className="bg-gray-50 rounded border border-gray-200 p-4 flex-1" id="current-points-1">
                                <h4 className="font-semibold text-3xl">-</h4>
                                <p className="text-xl">0</p>
                            </section>
                            <section className="bg-gray-50 rounded border border-gray-200 p-4 flex-1" id="current-points-2">
                                <h4 className="font-semibold text-3xl">-</h4>
                                <p className="text-xl">0</p>
                            </section>
                            <section className="bg-gray-50 rounded border border-gray-200 p-4 flex-1" id="current-points-3">
                                <h4 className="font-semibold text-3xl">-</h4>
                                <p className="text-xl">0</p>
                            </section>
                        </section>
                        <section className="flex gap-2">
                            <button type="button" className="p-2 px-4 rounded bg-red-200 hover:bg-red-300 transition duration-250 w-fit cursor-pointer hidden confirmation-button" onClick={() => {game.changeScore(); setRound(round + 1);}}>Confirm Score</button>
                            <button type="button" className="p-2 px-4 rounded bg-gray-100 hover:bg-gray-200 transition duration-250 w-fit cursor-pointer hidden back-button" onClick={() => {game.removeFromCurrentScored()}}>Back</button>
                        </section>                    
                    </section>
                    <InputTypeRadio game={game} />
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