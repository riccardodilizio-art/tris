import React, { useState } from "react";

export default function App() {
    const [playerX, setPlayerX] = useState("Giocatore X");
    const [playerO, setPlayerO] = useState("Giocatore O");
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (board[index] || winner) return;
        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);

        const win = calculateWinner(newBoard);
        if (win) {
            setWinner(win === "X" ? playerX : playerO);
        } else {
            setIsXNext(!isXNext);
        }
    };

    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    const handleStartGame = () => {
        handleReset();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 p-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-5xl flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700 drop-shadow">
                    🎮 Gioco del Tris
                </h1>

                {/* Impostazione nomi */}
                <div className="flex flex-col sm:flex-row gap-6 mb-8 w-full justify-center">
                    <div className="flex-1">
                        <label className="block text-sm font-semibold mb-1 text-gray-700">
                            Nome per X:
                        </label>
                        <input
                            type="text"
                            value={playerX}
                            onChange={(e) => setPlayerX(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-semibold mb-1 text-gray-700">
                            Nome per O:
                        </label>
                        <input
                            type="text"
                            value={playerO}
                            onChange={(e) => setPlayerO(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
                        />
                    </div>
                </div>

                <button
                    onClick={handleStartGame}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-xl mb-8 font-semibold transition w-full sm:w-auto"
                >
                    Inizia partita
                </button>

                {/* Campo di gioco */}
                <div className="flex justify-center items-center w-full">
                    <div className="grid grid-cols-3 gap-3 bg-gradient-to-br from-gray-100 to-gray-200 p-4 rounded-2xl shadow-inner w-full max-w-[600px] aspect-square">
                        {board.map((cell, i) => (
                            <button
                                key={i}
                                onClick={() => handleClick(i)}
                                className="flex items-center justify-center text-5xl font-bold rounded-xl border-2 border-gray-400 bg-white hover:bg-gray-100 transition w-full h-full"
                            >
                                {cell === "X" ? (
                                    <span className="text-indigo-700">{cell}</span>
                                ) : (
                                    <span className="text-pink-600">{cell}</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stato partita */}
                <div className="text-center text-xl font-medium my-8">
                    {winner ? (
                        <span className="text-green-600 font-bold">
              🏆 Vincitore: {winner}!
            </span>
                    ) : board.every(Boolean) ? (
                        <span className="text-yellow-600 font-bold">😅 Pareggio!</span>
                    ) : (
                        <span>
              Tocca a{" "}
                            <span className="font-semibold text-indigo-600">
                {isXNext ? `${playerX} (X)` : `${playerO} (O)`}
              </span>
            </span>
                    )}
                </div>

                <button
                    onClick={handleReset}
                    className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-xl font-semibold transition w-full sm:w-auto"
                >
                    🔄 Riavvia partita
                </button>
            </div>
        </div>
    );
}

function calculateWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}
