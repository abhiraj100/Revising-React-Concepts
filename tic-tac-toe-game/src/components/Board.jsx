import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  // useState => useState is a React Hook that lets you add a state variable to your component. const [state, setState] = useState(initialState)
  const [state, setState] = useState(Array(9).fill(null));
  console.log("State", state);

  // check the turn
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        // return true;
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    // console.log('Clicked on index', index);

    // tackle with bug that is X and O replace one another
    if (state[index] !== null) {
      return false;
    }

    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  // play button
  const playAgain = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>
      <div className="board-container">
        {isWinner ? (
          <>
            <h1 style={{ fontSize: "40px", color: "red" }}>
              {isWinner} won the Game 🎇🧨✨🎉🎊
            </h1>
            <button onClick={playAgain}>Play Again</button>
          </>
        ) : (
          <>
            <h2
              style={{
                fontSize: "30px",
                color: "red",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                textDecoration: "underline",
              }}
            >
              Player {isXTurn ? "X" : "O"} please move
            </h2>
            <div className="board-row">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Board;
