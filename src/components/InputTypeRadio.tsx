import { useState } from "react";
import Game from "./game";

export default function InputTypeRadio({ game }: {game: Game}) {
    const [selectedInputType, setSelectedInputType] = useState<number>(1);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    function handleInput(number: number | null, type: string | null) {
        if (number) {
            let type = selectedType;
            const points = type == null? number : type == "DOUBLE"? number * 2 : type == "TRIPLE"? number * 3 : 0;
            const stringPoints = type == null? number : type == "DOUBLE"? `D${number}` : type == "TRIPLE"? `T${number}` : 0;

            game.addToCurrentScored({[stringPoints as string]: points});
            setSelectedType(null);
        } else {
            if (type) {
                const points = type == "DB"? 50 : type == "SB"? 25 : 0;
                game.addToCurrentScored({[type as string]: points});
                console.log(game.currentScored)
                setSelectedType(null);
            };
        };
    };

    function Inputs() {
        if (selectedInputType == 0) {
            return (<DartBoard />);
        } else {
            return (<NumberTypes />);
        };
    };

    function DartBoard() {
        return (
            <p>Dart Board</p>
        );
    };

    function NumButton({ num }: { num: number }) {
        return <button className="number-button" value={num} onClick={() => handleInput(num, null)}>{num}</button>
    };

    function Numbers() {
        return (
            <section className="flex-1 flex flex-wrap flex-col gap-2 max-h-160">
                <NumButton num={20} />
                <NumButton num={19} />
                <NumButton num={18} />
                <NumButton num={17} />
                <NumButton num={16} />
                <NumButton num={15} />
                <NumButton num={14} />
                <NumButton num={13} />
                <NumButton num={12} />
                <NumButton num={11} />
                <NumButton num={10} />
                <NumButton num={9} />
                <NumButton num={8} />
                <NumButton num={7} />
                <NumButton num={6} />
                <NumButton num={5} />
                <NumButton num={4} />
                <NumButton num={3} />
                <NumButton num={2} />
                <NumButton num={1} />
            </section>
        );
    };

    function NumberTypes() {
        return (
            <section className="flex w-full gap-4 mt-8">
                <section className="flex flex-col gap-2 flex-1">
                    <button className="number-button" value={50} onClick={() => {setSelectedType("DB"); handleInput(null, "DB")}} aria-pressed={selectedType == "DB"}>DB</button>
                    <button className="number-button" value={25} onClick={() => {setSelectedType("SB"); handleInput(null, "SB")}} aria-pressed={selectedType == "SB"}>SB</button>
                    <button className="number-button" onClick={() => {selectedType == "TRIPLE"? setSelectedType(null) : setSelectedType("TRIPLE")}} aria-pressed={selectedType == "TRIPLE"}>TREBLE</button>
                    <button className="number-button" onClick={() => {selectedType == "DOUBLE"? setSelectedType(null) : setSelectedType("DOUBLE")}} aria-pressed={selectedType == "DOUBLE"}>DOUBLE</button>
                    <button className="number-button" onClick={() => {setSelectedType("MISS"); handleInput(0, "MISS")}} aria-pressed={selectedType == "MISS"}>MISS</button>
                </section>
                <Numbers />
            </section>
        );
    };

    return (
        <section>
            <section className="flex w-full bg-gray-100 border border-gray-400 rounded">
                <button onClick={() => {setSelectedInputType(0)}} type="button" className="p-2 flex-1 hover:bg-red-100 aria-pressed:bg-red-200 rounded cursor-pointer transition duration-250" aria-pressed={selectedInputType == 0}>Dart Position</button>
                <div className="w-px bg-gray-400 mt-1 mb-1"></div>
                <button onClick={() => {setSelectedInputType(1)}} type="button" className="p-2 flex-1 hover:bg-red-100 aria-pressed:bg-red-200 rounded cursor-pointer transition duration-250" aria-pressed={selectedInputType == 1}>Numbers</button>
            </section>
            <Inputs />
        </section>
    );
};