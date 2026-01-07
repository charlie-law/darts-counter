import './App.css'
import { useState } from "react";

export default function StartGame() {
    const [selectedGameType, setSelectedGameType] = useState(301);

    function changeGameType(type: number) {
        setSelectedGameType(type);
    };

    return (
        <main className="flex flex-col gap-16">
            <section>
                <h1 className="text-6xl">Darts Counter</h1>
                <p>By <a className="text-red-700 hover:text-red-900" href="https://github.com/charlie-law">charlie-law</a></p>
            </section>
            <form action="/play" method="post" className="flex flex-col gap-5 items-start">
                <h2 className="text-3xl">Start a Game</h2>
                <section className="flex gap-2">
                    <section className="flex flex-col items-start gap-1">
                        <label htmlFor="player-1">Player 1</label>
                        <input type="text" id="player-1" name="player-1" maxLength={40} placeholder="Player 1's Name" className="p-2 border bg-gray-100 border-gray-400 rounded focus:outline-1 focus:outline-red-600" />
                    </section>
                    <section className="flex flex-col items-start gap-1">
                        <label htmlFor="player-2">Player 2</label>
                        <input type="text" id="player-2" name="player-2" maxLength={40} placeholder="Player 2's Name" className="p-2 border bg-gray-100 border-gray-400 rounded focus:outline-1 focus:outline-red-600" />
                    </section>
                </section>
                <section className="flex gap-8 mt-8">
                    <div>
                        <input type="radio" value="301" name="option" className="peer hidden" checked={selectedGameType == 301} />
                        <label onClick={() => {changeGameType(301)}} htmlFor="301" className="bg-gray-100 border border-gray-400 select-none rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl peer-checked:bg-red-200 peer-checked:border-red-600 game-type">301</label>
                    </div>
                    <div>
                        <input type="radio" value="501" name="option" className="peer hidden" checked={selectedGameType == 501} />
                        <label onClick={() => {changeGameType(501)}} htmlFor="501" className="bg-gray-100 border border-gray-400 select-none rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl peer-checked:bg-red-200 peer-checked:border-red-600 game-type">501</label>
                    </div>
                    <div>
                        <input type="radio" value="701" name="option" className="peer hidden" checked={selectedGameType == 701} />
                        <label onClick={() => {changeGameType(701)}} htmlFor="701" className="bg-gray-100 border border-gray-400 select-none rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl peer-checked:bg-red-200 peer-checked:border-red-600 game-type">701</label>
                    </div>
                </section>
            </form>
            <button type="submit" className="text-white bg-red-800 rounded text-2xl p-2 cursor-pointer hover:bg-red-900 transition delay-75">Start Game</button>
        </main>
    )
}