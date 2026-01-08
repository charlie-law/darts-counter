import { useState } from "react";

export default function InputTypeRadio() {
    const [selectedInputType, setSelectedInputType] = useState<number>(0);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    function Inputs() {
        if (selectedInputType == 0) {
            return (<DartBoard />);
        } else {
            return (<NumberInputs />);
        };
    };

    function DartBoard() {
        return (
            <p>Dart Board</p>
        );
    };

    function Numbers() {
        const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

        if (selectedType != "BULLSEYE" && selectedType != "SB") {
            return (
                <section className="flex-1 flex flex-wrap flex-col gap-2 max-h-160">
                    <button className="number-button" value={20}>20</button>
                    <button className="number-button" value={19}>19</button>
                    <button className="number-button" value={18}>18</button>
                    <button className="number-button" value={17}>17</button>
                    <button className="number-button" value={16}>16</button>
                    <button className="number-button" value={15}>15</button>
                    <button className="number-button" value={14}>14</button>
                    <button className="number-button" value={13}>13</button>
                    <button className="number-button" value={12}>12</button>
                    <button className="number-button" value={11}>11</button>
                    <button className="number-button" value={10}>10</button>
                    <button className="number-button" value={9}>9</button>
                    <button className="number-button" value={8}>8</button>
                    <button className="number-button" value={7}>7</button>
                    <button className="number-button" value={6}>6</button>
                    <button className="number-button" value={5}>5</button>
                    <button className="number-button" value={4}>4</button>
                    <button className="number-button" value={3}>3</button>
                    <button className="number-button" value={2}>2</button>
                    <button className="number-button" value={1}>1</button>
                </section>
            )
        }
    }

    function NumberInputs() {
        return (
            <section className="flex w-full gap-4 mt-8">
                <section className="flex flex-col gap-2 flex-1">
                    <button className="number-button" value={50} onClick={() => {setSelectedType("BULLSEYE")}} aria-pressed={selectedType == "BULLSEYE"}>BULLSEYE</button>
                    <button className="number-button" value={25} onClick={() => {setSelectedType("SB")}} aria-pressed={selectedType == "SB"}>SB</button>
                    <button className="number-button" onClick={() => {setSelectedType("TRIPLE")}} aria-pressed={selectedType == "TRIPLE"}>TRIPLE</button>
                    <button className="number-button" onClick={() => {setSelectedType("DOUBLE")}} aria-pressed={selectedType == "DOUBLE"}>DOUBLE</button>
                    <button className="number-button" onClick={() => {setSelectedType("SINGLE")}} aria-pressed={selectedType == "SINGLE"}>SINGLE</button>
                </section>
                <Numbers />
            </section>
        );
    };

    return (
        <section>
            <section className="flex w-full bg-gray-100 border border-gray-400 rounded">
                <button onClick={() => {setSelectedInputType(0)}} type="button" className="p-2 flex-1 hover:bg-red-100 aria-pressed:bg-red-200 rounded cursor-pointer" aria-pressed={selectedInputType == 0}>Dart Position</button>
                <div className="w-px bg-gray-400 mt-1 mb-1"></div>
                <button onClick={() => {setSelectedInputType(1)}} type="button" className="p-2 flex-1 hover:bg-red-100 aria-pressed:bg-red-200 rounded cursor-pointer" aria-pressed={selectedInputType == 1}>Numbers</button>
            </section>
            <Inputs />
        </section>
    );
};