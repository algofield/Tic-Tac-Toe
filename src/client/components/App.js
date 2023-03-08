import React, { useState } from 'react';
import '../styles/style.css';
import Board from './Board';
const App = (props) => {

  const X_VALUE = 'X';
  const O_VALUE = 'O';
  let [grid, setGrid] = useState(Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, k) => '')))
  let [xIsUp, setXIsUp] = useState(true);
  let [history, setHistory] = useState([Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, k) => ''))])
  let [gameOver, setGameOver] = useState(false);
  let [whoWon, setWhoWon] = useState('');


  const calculateGameOver = (grid, rowIndex, colIndex) => {
    // horizontal
    const targetSymbol = grid[rowIndex][colIndex];
    if (grid[rowIndex].every(character => character === targetSymbol)) {
      return targetSymbol;
    }
    // vertical
    if (grid.every(row => row[colIndex] === targetSymbol)) {
      return targetSymbol;
    }
    // diagonals
    // left diagonal [[0,0], [1,1], [2,2]]
    // right diagonal [[0,2], [1,1], [2,0]]
    let leftWin = true;
    let rightWin = true;
    for (let i = 0, len = 3; i < len; i++) {
      if (targetSymbol !== grid[i][i]) {
        leftWin = false;
      }
      if (targetSymbol !== grid[i][len - 1 - i]) {
        rightWin = false;
      }
    }
    return leftWin || rightWin ? targetSymbol : '';
  };

  const clickHandler = ([rowIndex, colIndex] = coordinate) => {
    let gridSlice = [grid[0].slice(), grid[1].slice(), grid[2].slice()];
    if (!gridSlice[rowIndex][colIndex]) {
      gridSlice[rowIndex][colIndex] = xIsUp ? X_VALUE : O_VALUE;
      let hist = history.slice();
      hist.push(gridSlice);
      setGrid(gridSlice);
      setXIsUp(!xIsUp);
      setHistory(hist);
      const winner = calculateGameOver(gridSlice, rowIndex, colIndex);
      if (winner) {
        setWhoWon(winner);
        setGameOver(true);
      }
    }
  };
  const clickHistory = (e) => {
    if (history.length > 1) {
      let hist = history.slice();
      hist.pop();
      const lastMove = hist[hist.length - 1];
      setGrid(lastMove);
      setHistory(hist);
      setXIsUp(!xIsUp);
    }
  };
  const clickNew = (e) => {
    setXIsUp(true);
    setGrid(Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, k) => '')));
    setHistory([Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, k) => ''))]);
    setWhoWon('');
    setGameOver(false);
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="sub-container">
          <h1 className='page-title'><span className="page-title blue-text">Tic</span> Tac <span className="page-title brown-text">Toe</span></h1>
          <div className="btn-container">
            <button className="btn" onClick={(e) => clickNew(e)}>New</button>
            <button className="btn" onClick={(e) => clickHistory(e)}>Undo</button>
          </div>
        </div>
        <Board onClick={clickHandler} grid={grid} />
      </div>
      {
        gameOver ? (
          <div className="modal">
            <h2 className="page-title"><span className="page-title blue-text">{whoWon}</span> won!</h2>
            <button className="btn" onClick={(e) => clickNew(e)}>New game</button>
          </div>
        ) : (<React.Fragment></React.Fragment>)
      }
    </div>
  )
}

export default App;