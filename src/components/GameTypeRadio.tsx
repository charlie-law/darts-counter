import { useState } from "react";

export default function GameTypeRadio() {
    const [selectedGameType, setSelectedGameType] = useState(301);

    return (
        <section className="flex w-full gap-8">
            <button onClick={() => {setSelectedGameType(301)}} type="button" value="301" className="bg-gray-100 border border-gray-400 rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl aria-pressed:bg-red-200 aria-pressed:border-red-600 game-type flex-1" aria-pressed={selectedGameType == 301}>301</button>
            <button onClick={() => {setSelectedGameType(501)}} type="button" value="501" className="bg-gray-100 border border-gray-400 rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl aria-pressed:bg-red-200 aria-pressed:border-red-600 game-type flex-1" aria-pressed={selectedGameType == 501}>501</button>
            <button onClick={() => {setSelectedGameType(701)}} type="button" value="701" className="bg-gray-100 border border-gray-400 rounded hover:bg-red-100 hover:border-red-400 font-semibold text-4xl aria-pressed:bg-red-200 aria-pressed:border-red-600 game-type flex-1" aria-pressed={selectedGameType == 701}>701</button>
        </section>
    );
};