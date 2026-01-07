import './App.css'
import { useState } from "react";
import Game from "./components/game";
import Title from "./components/Title";

export default function App() {
    const [gameActive, setGameActive] = useState(false);
    const [selectedGameType, setSelectedGameType] = useState(301);

    function onSubmit(formData: FormData) {
        console.log(formData)
        const gameType = formData.get("option");
        const player1Name = formData.get("player-1");
        const player2Name = formData.get("player-2");

        const newGame = new Game(Number(gameType), String(player1Name), String(player2Name));
        console.log(newGame)
        setGameActive(true);
    };

    function AppContent() {
        if (gameActive) {
            return (<h1>Game</h1>)
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
                    <section className="flex w-full gap-8">
                        <button onClick={() => {setSelectedGameType(301)}} type="button" value="301" className="bg-gray-100 border border-gray-400 rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl peer-checked:bg-red-200 peer-checked:border-red-600 game-type flex-1">301</button>
                        <button onClick={() => {setSelectedGameType(301)}} type="button" value="501" className="bg-gray-100 border border-gray-400 rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl peer-checked:bg-red-200 peer-checked:border-red-600 game-type flex-1">501</button>
                        <button onClick={() => {setSelectedGameType(301)}} type="button" value="701" className="bg-gray-100 border border-gray-400 rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl peer-checked:bg-red-200 peer-checked:border-red-600 game-type flex-1">701</button>
                    </section>
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