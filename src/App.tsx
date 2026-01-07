import './App.css'
import { useState } from "react";
import Title from "./components/Title";

export default function App() {
    const [selectedGameType, setSelectedGameType] = useState(301);

    function changeGameType(type: number) {
        setSelectedGameType(type);
    };

    function onSubmit(event: any) {
        event.preventDefault();
    };

    return (
        <main className="flex flex-col gap-16">
            <Title />
            <form action={(event) => {onSubmit(event)}} method="post" className="flex flex-col gap-5 items-start">
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
                    <div className="flex-1">
                        <input type="radio" value="301" name="option" className="peer hidden" checked={selectedGameType == 301} />
                        <label onClick={() => {changeGameType(301)}} htmlFor="301" className="block bg-gray-100 border border-gray-400 select-none rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl peer-checked:bg-red-200 peer-checked:border-red-600 game-type">301</label>
                    </div>
                    <div className="flex-1">
                        <input type="radio" value="501" name="option" className="peer hidden" checked={selectedGameType == 501} />
                        <label onClick={() => {changeGameType(501)}} htmlFor="501" className="block bg-gray-100 border border-gray-400 select-none rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl peer-checked:bg-red-200 peer-checked:border-red-600 game-type">501</label>
                    </div>
                    <div className="flex-1">
                        <input type="radio" value="701" name="option" className="peer hidden" checked={selectedGameType == 701} />
                        <label onClick={() => {changeGameType(701)}} htmlFor="701" className="block bg-gray-100 border border-gray-400 select-none rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl peer-checked:bg-red-200 peer-checked:border-red-600 game-type">701</label>
                    </div>
                </section>
                <button type="submit" className="w-full text-white bg-red-800 rounded text-2xl p-2 cursor-pointer hover:bg-red-900 transition delay-75">Start Game</button>
            </form>
        </main>
    )
}