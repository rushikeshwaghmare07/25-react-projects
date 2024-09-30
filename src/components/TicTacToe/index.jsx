import { useEffect, useState } from "react";

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-16 h-16 text-xl font-bold border border-gray-400 flex items-center justify-center"
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handleClick(squareIndex) {
    let updatedSquares = [...squares];
    if (getWinner(updatedSquares) || updatedSquares[squareIndex]) return;
    updatedSquares[squareIndex] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(updatedSquares);
  }

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
    setStatus("");
  }

  useEffect(() => {
    const winner = getWinner(squares);
    if (!winner && squares.every((item) => item !== "")) {
      setStatus(`It's a draw! Please restart the game.`);
    } else if (winner) {
      setStatus(`Winner is ${winner}. Please restart the game.`);
    } else {
      setStatus(`Next player: ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="grid grid-cols-3 gap-2 mb-6">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <h1 className="text-lg font-semibold mb-4">{status}</h1>
      <button
        onClick={handleRestart}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Restart Game
      </button>
    </div>
  );
}
